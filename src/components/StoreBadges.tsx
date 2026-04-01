export default function StoreBadges() {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs text-[#52525B] uppercase tracking-widest font-medium">
        Coming soon to
      </p>
      <div className="flex items-center gap-4">
        {/* Apple App Store Badge */}
        <div className="relative group">
          <div className="opacity-40 grayscale transition-all group-hover:opacity-60 group-hover:grayscale-0">
            <svg
              width="120"
              height="40"
              viewBox="0 0 120 40"
              className="fill-current text-white"
              aria-label="Download on the App Store — Coming soon"
              role="img"
            >
              <rect width="120" height="40" rx="6" fill="#18181B" stroke="#3f3f46" strokeWidth="0.5" />
              <g transform="translate(10, 7)">
                <path
                  d="M15.77 20.77a3.68 3.68 0 01-1.77-3.08 3.56 3.56 0 011.72-3.04 3.92 3.92 0 00-3.04-1.64c-1.28-.13-2.52.76-3.18.76s-1.68-.74-2.76-.72a4.07 4.07 0 00-3.42 2.09c-1.48 2.54-.38 6.28 1.04 8.34.72 1.01 1.56 2.14 2.66 2.1 1.08-.04 1.48-.68 2.78-.68s1.66.68 2.78.66 1.86-1.02 2.54-2.04a8.38 8.38 0 001.16-2.36 3.44 3.44 0 01-2.1-3.18zM13.46 11.64a3.5 3.5 0 00.82-2.54 3.62 3.62 0 00-2.34 1.2 3.34 3.34 0 00-.84 2.44 2.96 2.96 0 002.36-1.1z"
                  fill="white"
                />
              </g>
              <g fill="white">
                <text x="34" y="15" fontSize="7" fontWeight="400" fontFamily="system-ui">Download on the</text>
                <text x="34" y="28" fontSize="13" fontWeight="600" fontFamily="system-ui">App Store</text>
              </g>
            </svg>
          </div>
          <span className="absolute -top-2 -right-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#FF6600] text-white rounded-full">
            Soon
          </span>
        </div>

        {/* Google Play Badge */}
        <div className="relative group">
          <div className="opacity-40 grayscale transition-all group-hover:opacity-60 group-hover:grayscale-0">
            <svg
              width="135"
              height="40"
              viewBox="0 0 135 40"
              className="fill-current text-white"
              aria-label="Get it on Google Play — Coming soon"
              role="img"
            >
              <rect width="135" height="40" rx="6" fill="#18181B" stroke="#3f3f46" strokeWidth="0.5" />
              <g transform="translate(10, 5)">
                <path d="M7.54 7.34L2.26 2.34C2.1 2.68 2 3.06 2 3.48v23.04c0 .42.1.8.26 1.14l5.28-5z" fill="#4285F4" />
                <path d="M14.98 13.7L7.54 7.34l-5.28 5 5.28 5 7.44-6.34z" fill="#EA4335" />
                <path d="M7.54 22.34l7.44-6.34 2.82 2.4c-.82.82-7.44 6.34-7.44 6.34L7.54 22.34z" fill="#34A853" />
                <path d="M7.54 7.34l7.44 6.36 2.82-2.4S10.36 4.96 9.54 4.14L7.54 7.34z" fill="#FBBC04" />
              </g>
              <g fill="white">
                <text x="38" y="14" fontSize="6.5" fontWeight="400" fontFamily="system-ui" style={{ textTransform: "uppercase" }}>GET IT ON</text>
                <text x="38" y="28" fontSize="13" fontWeight="600" fontFamily="system-ui">Google Play</text>
              </g>
            </svg>
          </div>
          <span className="absolute -top-2 -right-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#FF6600] text-white rounded-full">
            Soon
          </span>
        </div>
      </div>
    </div>
  );
}
