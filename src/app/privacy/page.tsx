import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "AccelRyde privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted mb-12">
            Last updated: April 1, 2026
          </p>

          <div className="space-y-10 text-muted-foreground leading-relaxed text-sm">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Overview
              </h2>
              <p>
                AccelRyde (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;)
                respects your privacy. This policy explains what data we
                collect, why we collect it, and how we handle it. This document
                is written in plain language and is not intended as legal advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                What we collect
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-foreground">Email address</strong> —
                  when you sign up for our beta waitlist.
                </li>
                <li>
                  <strong className="text-foreground">Usage analytics</strong> —
                  we may use privacy-respecting analytics (e.g., page views,
                  referrer) to improve the site. No personal identifiers are
                  tracked.
                </li>
                <li>
                  <strong className="text-foreground">Device information</strong>{" "}
                  — standard server logs may include browser type, operating
                  system, and IP address. These are used for security and
                  debugging only.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Why we collect it
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To notify you when our beta is available.</li>
                <li>To improve our website and product experience.</li>
                <li>To maintain the security and performance of our services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Data retention
              </h2>
              <p>
                We retain your email address for as long as you remain on our
                waitlist. You can request removal at any time by emailing{" "}
                <a
                  href="mailto:contact@accelryde.com"
                  className="text-accent hover:underline"
                >
                  contact@accelryde.com
                </a>
                . Server logs are retained for up to 90 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Third parties
              </h2>
              <p>
                We do not sell your data. Your email is stored in Google Sheets
                for waitlist management. We may use
                third-party hosting and analytics services that process data on
                our behalf under their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Cookies
              </h2>
              <p>
                This website does not use tracking cookies. Essential cookies
                (e.g., for security or functionality) may be used by our hosting
                provider.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Contact
              </h2>
              <p>
                If you have questions about this policy, email us at{" "}
                <a
                  href="mailto:contact@accelryde.com"
                  className="text-accent hover:underline"
                >
                  contact@accelryde.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Changes to this policy
              </h2>
              <p>
                We may update this policy from time to time. Changes will be
                posted on this page with an updated &quot;Last updated&quot;
                date. We encourage you to review this page periodically.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
