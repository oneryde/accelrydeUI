import { readFileSync } from "fs";
import path from "path";
import { JWT } from "google-auth-library";

/** Default spreadsheet from AccelRyde waitlist (overridable via GOOGLE_SHEETS_SPREADSHEET_ID). */
export const DEFAULT_WAITLIST_SPREADSHEET_ID =
  "1kdPDLvupnU6L8ZNEMI9zf0kyoWhPYLbBaHwD8vgRRJU";

type ServiceAccountCredentials = {
  client_email: string;
  private_key: string;
};

function parseServiceAccount(): ServiceAccountCredentials | null {
  const credsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (credsPath) {
    try {
      const absolute = path.isAbsolute(credsPath)
        ? credsPath
        : path.join(/* turbopackIgnore: true */ process.cwd(), credsPath);
      const raw = readFileSync(absolute, "utf8");
      const parsed = JSON.parse(raw) as ServiceAccountCredentials;
      if (parsed.client_email && parsed.private_key) {
        return {
          ...parsed,
          private_key: parsed.private_key.replace(/\\n/g, "\n"),
        };
      }
    } catch (e) {
      console.error("GOOGLE_APPLICATION_CREDENTIALS: could not read or parse file:", e);
    }
  }

  const json = process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_JSON;
  const b64 = process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_BASE64;
  let raw: string | undefined;
  if (json) raw = json;
  else if (b64) raw = Buffer.from(b64, "base64").toString("utf8");

  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ServiceAccountCredentials;
    if (!parsed.client_email || !parsed.private_key) return null;
    return {
      ...parsed,
      private_key: parsed.private_key.replace(/\\n/g, "\n"),
    };
  } catch {
    return null;
  }
}

/**
 * True when we can attempt a Sheets write: service account (required for reliable writes)
 * or API key (Google usually rejects append with API keys — prefer service account).
 */
export function isSheetsWaitlistConfigured(): boolean {
  return (
    parseServiceAccount() !== null ||
    Boolean(process.env.GOOGLE_SHEETS_API_KEY?.trim())
  );
}

/**
 * Appends one row: [timestamp ISO, email, source].
 * Sheet must be shared with the service account email (Editor).
 * Set GOOGLE_SHEETS_APPEND_RANGE if the tab is not Sheet1 (e.g. `Waiting list!A:C`).
 */
export async function appendWaitlistRow(row: {
  email: string;
  timestamp: string;
  source: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const sa = parseServiceAccount();
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY?.trim();

  const spreadsheetId =
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID ?? DEFAULT_WAITLIST_SPREADSHEET_ID;
  const range =
    process.env.GOOGLE_SHEETS_APPEND_RANGE ?? "Sheet1!A:C";

  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}:append`
  );
  url.searchParams.set("valueInputOption", "USER_ENTERED");
  url.searchParams.set("insertDataOption", "INSERT_ROWS");

  const body = JSON.stringify({
    values: [[row.timestamp, row.email, row.source]],
  });

  if (sa) {
    const jwt = new JWT({
      email: sa.client_email,
      key: sa.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const access = await jwt.getAccessToken();
    const token = typeof access === "string" ? access : access?.token;
    if (!token) {
      return { ok: false, error: "Could not obtain access token for Google Sheets." };
    }

    const res = await fetch(url.toString(), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body,
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Google Sheets API error:", res.status, text);
      return { ok: false, error: "Google Sheets rejected the write." };
    }
    return { ok: true };
  }

  // API keys are not supported by Google for append on private sheets; this usually returns 401/403.
  if (apiKey) {
    url.searchParams.set("key", apiKey);
    const res = await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    if (!res.ok) {
      const text = await res.text();
      console.error(
        "Google Sheets API (API key) error:",
        res.status,
        text,
        "\n→ Writes require a service account JSON (GOOGLE_APPLICATION_CREDENTIALS or GOOGLE_SHEETS_SERVICE_ACCOUNT_JSON), not an API key. Rotate this key in Google Cloud — it was exposed in chat."
      );
      return {
        ok: false,
        error:
          "Sheets write failed: use a service account JSON (GOOGLE_APPLICATION_CREDENTIALS or GOOGLE_SHEETS_SERVICE_ACCOUNT_JSON), not an API key.",
      };
    }
    return { ok: true };
  }

  return { ok: false, error: "Missing Google Sheets credentials." };
}
