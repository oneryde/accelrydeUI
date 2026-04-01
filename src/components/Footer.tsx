import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#18181B] bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="AccelRyde" width={32} height={32} />
              <span className="text-lg font-semibold tracking-tight text-[#FAFAFA]">
                AccelRyde
              </span>
            </div>
            <p className="text-sm text-[#A1A1AA] max-w-md leading-relaxed">
              We&apos;re three friends from college who never stopped riding
              together. We live together, roam together, and somewhere along the
              way we realized the tools we were using to coordinate rides were
              broken — scattered across five different apps, half the group
              always lost. So we started building AccelRyde: one place for your
              group, your routes, and the ride itself. We&apos;re not a big
              company with a boardroom roadmap. We&apos;re riders building for
              riders, and we are building to the end — until the product feels
              as effortless as heading out with your crew.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52525B]">
              Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#product"
                  className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#waitlist"
                  className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                >
                  Join the Beta
                </a>
              </li>
              <li>
                <a
                  href="https://qafuavp1bg.zite.so"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                >
                  Join our founding team
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#18181B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#52525B]">
            &copy; {currentYear} AccelRyde. All rights reserved.
          </p>
          <a
            href="mailto:contact@accelryde.com"
            className="text-xs text-[#52525B] hover:text-[#A1A1AA] transition-colors"
          >
            contact@accelryde.com
          </a>
        </div>
      </div>
    </footer>
  );
}
