import { NextRequest, NextResponse } from "next/server";
import {
  appendWaitlistRow,
  isSheetsWaitlistConfigured,
} from "@/lib/google-sheets-waitlist";

// Simple in-memory rate limiting (per-instance, resets on deploy)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Sanitize
    const sanitizedEmail = email.trim().toLowerCase().slice(0, 254);
    const payload = {
      email: sanitizedEmail,
      timestamp: new Date().toISOString(),
      source: "marketing",
    };

    if (isSheetsWaitlistConfigured()) {
      const sheets = await appendWaitlistRow(payload);
      if (sheets.ok) {
        return NextResponse.json({ success: true });
      }
      console.error("Google Sheets waitlist error:", sheets.error);
      return NextResponse.json(
        { error: "Failed to add to waitlist. Please try again." },
        { status: 502 }
      );
    }

    const webappUrl = process.env.WAITLIST_WEBAPP_URL;
    if (!webappUrl) {
      console.error(
        "Waitlist: set GOOGLE_APPLICATION_CREDENTIALS / GOOGLE_SHEETS_SERVICE_ACCOUNT_JSON, or WAITLIST_WEBAPP_URL"
      );
      return NextResponse.json(
        { error: "Waitlist is not configured yet. Please try again later." },
        { status: 503 }
      );
    }

    const response = await fetch(webappUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Apps Script error:", response.status, await response.text());
      return NextResponse.json(
        { error: "Failed to add to waitlist. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
