import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AccelRyde — One place for groups, routes, and the ride",
    template: "%s | AccelRyde",
  },
  description:
    "AccelRyde helps riders and groups coordinate routes, discover places, and message — all in one app. Join the beta waitlist.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://accelryde.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AccelRyde",
    title: "AccelRyde — One place for groups, routes, and the ride",
    description:
      "AccelRyde helps riders and groups coordinate routes, discover places, and message — all in one app.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AccelRyde — One place for groups, routes, and the ride",
    description:
      "AccelRyde helps riders and groups coordinate routes, discover places, and message — all in one app.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AccelRyde",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://accelryde.com",
  description:
    "AccelRyde helps riders and groups coordinate routes, discover places, and message — all in one app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
