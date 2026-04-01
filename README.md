# AccelRyde — Marketing Website

Dark-themed marketing site for AccelRyde built with Next.js 14+, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Themes:** Use the **Light** / **Dark** control in the nav to preview the white / grey (“blackish” text on light background) look. Choice is saved in `localStorage`. You can also open `?theme=light` or `?theme=dark` once to set the theme.

## Waitlist Endpoint Setup (Google Apps Script)

The beta waitlist form submits to a Google Apps Script Web App that appends rows to a Google Sheet.

### 1. Create the Apps Script

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1kdPDLvupnU6L8ZNEMI9zf0kyoWhPYLbBaHwD8vgRRJU/edit
2. Go to **Extensions > Apps Script**
3. Replace the code with:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.email,
    data.timestamp,
    data.source || "marketing"
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Deploy > New deployment**
5. Select **Web app**
6. Set "Execute as" to **Me** and "Who has access" to **Anyone**
7. Click **Deploy** and copy the Web App URL

### 2. Configure the environment

Add the Web App URL to `.env.local`:

```
WAITLIST_WEBAPP_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Store Badge Compliance

The store badges in `StoreBadges.tsx` use inline SVG representations. Before going live:

- Replace with official Apple App Store and Google Play badge assets from:
  - https://developer.apple.com/app-store/marketing/guidelines/
  - https://play.google.com/intl/en_us/badges/
- Ensure "Coming Soon" treatment is preserved (dimmed badges + "Soon" ribbon)

## Project Structure

```
src/
  app/
    page.tsx           — Home page (hero, features, waitlist)
    privacy/page.tsx   — Privacy policy
    api/waitlist/      — Waitlist API proxy route
    sitemap.ts         — Dynamic sitemap
    robots.ts          — Robots.txt
    layout.tsx         — Root layout with SEO metadata
    globals.css        — Theme, animations, global styles
  components/
    Navbar.tsx         — Sticky nav with mobile menu
    Hero.tsx           — Hero section with CTAs
    GradientMesh.tsx   — Animated gradient background
    StoreBadges.tsx    — App Store / Play Store badges (coming soon)
    Features.tsx       — Numbered feature sections (01-05)
    Waitlist.tsx       — Beta waitlist email form
    Footer.tsx         — Footer with about copy and links
```

## Deployment

Deploy to Vercel:

```bash
npm run build
```

Or push to GitHub and connect to Vercel for automatic deployments.

### Vercel `NOT_FOUND` ([docs](https://vercel.com/docs/errors/NOT_FOUND))

That error is an **HTTP 404**: the requested **deployment URL** or **path** does not exist or is wrong. It is **not** caused by using the `main` branch by itself.

**Checklist**

1. **Deployment exists** — In Vercel → **Deployments**, open the latest build and confirm it **succeeded** (green). A failed build does not replace the previous live deployment; bookmarked URLs can point at removed previews.
2. **Correct URL** — Use the **Visit** / production URL from the dashboard. Preview URLs (`*.vercel.app` with a git hash) belong to one deployment only.
3. **Root Directory** — **Project → Settings → General → Root Directory** must be the folder that contains `package.json` (usually `.` for this repo). Wrong root builds the wrong app or nothing useful.
4. **Path** — Only routes that exist in the app respond (see `next build` output). `/`, `/privacy`, `/api/waitlist`, `/robots.txt`, `/sitemap.xml` are defined; anything else returns the app’s **404** page unless you add a route.

**This repo**

- `outputFileTracingRoot` is applied **only when not on Vercel** so local multi-lockfile setups still work; production tracing uses the deployment root.
- `vercel.json` pins `framework: nextjs` and explicit install/build commands for predictable CI.
- `engines.node` aligns with the Node version Vercel should use for Next.js 16.

**Mental model:** **404** means “no resource at this URL” — either the **platform** (bad deployment link) or your **app router** (unknown path). Fix the URL or add a route; don’t confuse with **500** (server error).
