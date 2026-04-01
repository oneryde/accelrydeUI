# AccelRyde — Marketing Website

Dark-themed marketing site for AccelRyde built with Next.js 14+, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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
