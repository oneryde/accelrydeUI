/* ------------------------------------------------------------------ */
/*  Pixel-faithful CSS recreations of the real AccelRyde app screens  */
/* ------------------------------------------------------------------ */

/* Screen 1 — Group Chat (Feature 04: messaging) */
export function ChatScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0E0E10] text-[10px] leading-tight">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-[#1E1E22]">
        <svg className="w-3 h-3 text-[#A1A1AA] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        <div className="w-6 h-6 rounded-full bg-[#27272A] flex items-center justify-center text-[7px]">🚴</div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[#FAFAFA] text-[9px] truncate">Daily Commuters</p>
          <p className="text-[7px] text-green-500">● 3 online</p>
        </div>
        <div className="flex gap-0.5">
          {["M","J","S"].map(l => (
            <div key={l} className="w-4 h-4 rounded-full bg-[#27272A] flex items-center justify-center text-[6px] text-[#A1A1AA] font-medium">{l}</div>
          ))}
        </div>
        <svg className="w-3 h-3 text-[#A1A1AA] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden px-3 py-2 space-y-2.5">
        {/* Incoming: blue-ish bubble (other user) */}
        <div className="flex justify-end">
          <div className="bg-[#FF6600] text-white rounded-xl rounded-tr-sm px-2.5 py-1.5 max-w-[70%]">
            <p>I&apos;m in! What time are you thinking?</p>
          </div>
        </div>
        <p className="text-[6px] text-[#52525B] text-right">10:25 AM</p>

        {/* John Smith */}
        <div>
          <p className="text-[6px] text-[#52525B] mb-0.5 ml-5">John Smith</p>
          <div className="flex items-end gap-1.5">
            <div className="w-4 h-4 rounded-full bg-[#27272A] flex items-center justify-center text-[6px] text-[#A1A1AA] font-medium shrink-0">J</div>
            <div className="bg-[#1E1E22] text-[#FAFAFA] rounded-xl rounded-tl-sm px-2.5 py-1.5 max-w-[70%]">
              <p>Saturday morning works for me 👍</p>
            </div>
          </div>
          <p className="text-[6px] text-[#52525B] ml-5 mt-0.5">10:27 AM</p>
        </div>

        {/* Maria Garcia */}
        <div>
          <p className="text-[6px] text-[#52525B] mb-0.5 ml-5">Maria Garcia</p>
          <div className="flex items-end gap-1.5">
            <div className="w-4 h-4 rounded-full bg-[#27272A] flex items-center justify-center text-[6px] text-[#A1A1AA] font-medium shrink-0">M</div>
            <div className="bg-[#1E1E22] text-[#FAFAFA] rounded-xl rounded-tl-sm px-2.5 py-1.5 max-w-[70%]">
              <p>Perfect! Let&apos;s meet at 8am at the usual spot. I&apos;ll share the route.</p>
            </div>
          </div>
          <p className="text-[6px] text-[#52525B] ml-5 mt-0.5">10:28 AM</p>
        </div>

        {/* Route shared card */}
        <div className="ml-5">
          <div className="bg-[#18181B] border border-[#27272A] rounded-xl px-2.5 py-2 max-w-[75%]">
            <div className="flex items-center gap-1 mb-1">
              <svg className="w-2.5 h-2.5 text-[#FF6600]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              <span className="text-[#FF6600] text-[7px] font-semibold">Route Shared</span>
            </div>
            <p className="text-[#FAFAFA] font-semibold text-[9px]">Saturday Route</p>
            <p className="text-[7px] text-[#52525B]">18.4 mi · ~1h 15m</p>
            <p className="text-[7px] text-[#FF6600] font-medium mt-1">View Route →</p>
          </div>
        </div>

        {/* Own message */}
        <div className="flex justify-end">
          <div className="bg-[#FF6600] text-white rounded-xl rounded-tr-sm px-2.5 py-1.5 max-w-[70%]">
            <p>Looks awesome, see you there 🤙</p>
          </div>
        </div>
        <p className="text-[6px] text-[#52525B] text-right">10:31 AM</p>

        {/* John */}
        <div className="flex items-end gap-1.5">
          <div className="w-4 h-4 rounded-full bg-[#27272A] flex items-center justify-center text-[6px] text-[#A1A1AA] font-medium shrink-0">J</div>
          <div className="bg-[#1E1E22] text-[#FAFAFA] rounded-xl rounded-tl-sm px-2.5 py-1.5 max-w-[70%]">
            <p>I&apos;ll bring the snacks 😁</p>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-t border-[#1E1E22]">
        <div className="w-5 h-5 rounded-full bg-[#27272A] flex items-center justify-center text-[#A1A1AA]">
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
        </div>
        <div className="flex-1 bg-[#18181B] rounded-full px-3 py-1.5 text-[8px] text-[#52525B]">Message...</div>
        <svg className="w-3.5 h-3.5 text-[#52525B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
        <div className="w-5 h-5 rounded-full bg-[#FF6600] flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  );
}

/* Screen 2 — Group Overview (Feature 01: coordination) */
export function GroupOverviewScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0E0E10] text-[10px] leading-tight">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#1E1E22]">
        <svg className="w-3.5 h-3.5 text-[#A1A1AA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        <span className="text-[10px] font-semibold text-[#FAFAFA]">Group</span>
        <svg className="w-3.5 h-3.5 text-[#A1A1AA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="6" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="18" r="1"/></svg>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-3 space-y-3">
        {/* Group identity */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#27272A] flex items-center justify-center text-[14px] border border-[#3f3f46]">🚴</div>
          <div>
            <p className="font-bold text-[#FAFAFA] text-[12px]">Daily Commuters</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[7px] text-[#52525B] flex items-center gap-0.5">🌐 Public</span>
              <span className="text-[7px] text-[#52525B]">📍 San Francisco, CA</span>
            </div>
            <div className="flex gap-2 mt-1">
              <span className="text-[7px] text-[#A1A1AA]">👥 156</span>
              <span className="text-[7px] text-[#A1A1AA]">↗ 248 rides</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-1.5">
          <button className="flex-1 bg-[#FF6600] text-white rounded-lg py-1.5 text-[8px] font-semibold flex items-center justify-center gap-1">
            💬 Chat
          </button>
          <button className="flex-1 bg-[#18181B] text-[#FAFAFA] border border-[#27272A] rounded-lg py-1.5 text-[8px] font-semibold flex items-center justify-center gap-1">
            👥 Invite
          </button>
          <button className="w-8 bg-[#18181B] border border-[#27272A] rounded-lg flex items-center justify-center">
            <svg className="w-3 h-3 text-[#FAFAFA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-[#18181B] rounded-lg p-0.5">
          <div className="flex-1 text-center py-1 text-[8px] font-medium text-[#FAFAFA] bg-[#27272A] rounded-md">Overview</div>
          <div className="flex-1 text-center py-1 text-[8px] font-medium text-[#52525B]">Members</div>
          <div className="flex-1 text-center py-1 text-[8px] font-medium text-[#52525B]">Rides</div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { val: "156", label: "MEMBERS" },
            { val: "248", label: "TOTAL RIDES" },
            { val: "Jan '25", label: "FOUNDED" },
          ].map((s) => (
            <div key={s.label} className="bg-[#18181B] border border-[#27272A] rounded-lg py-2 text-center">
              <p className="text-[11px] font-bold text-[#FAFAFA]">{s.val}</p>
              <p className="text-[5px] text-[#52525B] tracking-wider mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="bg-[#18181B] border border-[#27272A] rounded-lg px-2.5 py-2">
          <p className="text-[8px] text-[#A1A1AA] leading-relaxed">
            A group for daily commuters who want to make their rides more social and efficient. We ride every weekday morning.
          </p>
        </div>

        {/* Upcoming Rides */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[10px] font-semibold text-[#FAFAFA]">Upcoming Rides</p>
            <span className="text-[7px] text-[#FF6600] font-medium">See all</span>
          </div>
          {[
            { name: "Morning Sprint", date: "Apr 2, 2026 · 7:00 AM", riders: "8" },
            { name: "Weekend Long Ride", date: "Apr 5, 2026 · 9:00 AM", riders: "12" },
          ].map((ride) => (
            <div key={ride.name} className="flex items-center gap-2 bg-[#18181B] border border-[#27272A] rounded-lg px-2.5 py-2 mb-1.5">
              <div className="w-6 h-6 rounded-lg bg-[#FF6600]/10 flex items-center justify-center">
                <svg className="w-3 h-3 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[8px] font-semibold text-[#FAFAFA] truncate">{ride.name}</p>
                <p className="text-[6px] text-[#52525B]">{ride.date}</p>
              </div>
              <div className="text-right">
                <p className="text-[6px] text-[#A1A1AA]">👥 {ride.riders}</p>
                <p className="text-[7px] text-[#FF6600] font-semibold">Join</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leave group */}
      <div className="px-3 py-2 border-t border-[#1E1E22]">
        <p className="text-center text-[8px] text-red-500 font-medium">↪ Leave Group</p>
      </div>
    </div>
  );
}

/* Screen 3 — Members List (Feature 05: community) */
export function MembersScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0E0E10] text-[10px] leading-tight">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#1E1E22]">
        <svg className="w-3.5 h-3.5 text-[#A1A1AA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        <span className="text-[10px] font-semibold text-[#FAFAFA]">Group</span>
        <svg className="w-3.5 h-3.5 text-[#A1A1AA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="6" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="18" r="1"/></svg>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-3 space-y-3">
        {/* Group identity (compact) */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#27272A] flex items-center justify-center text-[14px] border border-[#3f3f46]">🚴</div>
          <div>
            <p className="font-bold text-[#FAFAFA] text-[12px]">Daily Commuters</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[7px] text-[#52525B]">🌐 Public</span>
              <span className="text-[7px] text-[#52525B]">📍 San Francisco, CA</span>
            </div>
            <div className="flex gap-2 mt-1">
              <span className="text-[7px] text-[#A1A1AA]">👥 156</span>
              <span className="text-[7px] text-[#A1A1AA]">↗ 248 rides</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-1.5">
          <button className="flex-1 bg-[#FF6600] text-white rounded-lg py-1.5 text-[8px] font-semibold">💬 Chat</button>
          <button className="flex-1 bg-[#18181B] text-[#FAFAFA] border border-[#27272A] rounded-lg py-1.5 text-[8px] font-semibold">👥 Invite</button>
          <button className="w-8 bg-[#18181B] border border-[#27272A] rounded-lg flex items-center justify-center">
            <svg className="w-3 h-3 text-[#FAFAFA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

        {/* Tabs — Members active */}
        <div className="flex gap-1 bg-[#18181B] rounded-lg p-0.5">
          <div className="flex-1 text-center py-1 text-[8px] font-medium text-[#52525B]">Overview</div>
          <div className="flex-1 text-center py-1 text-[8px] font-medium text-[#FAFAFA] bg-[#27272A] rounded-md">Members</div>
          <div className="flex-1 text-center py-1 text-[8px] font-medium text-[#52525B]">Rides</div>
        </div>

        {/* Member list */}
        <div className="space-y-1">
          {[
            { initial: "A", name: "Alex Thompson", info: "34 rides · joined Jan 2025", color: "#FF6600", admin: true },
            { initial: "M", name: "Maria Garcia", info: "28 rides · joined Feb 2025", color: "#27272A", admin: false },
            { initial: "J", name: "John Smith", info: "19 rides · joined Mar 2025", color: "#27272A", admin: false },
            { initial: "S", name: "Sarah Johnson", info: "41 rides · joined Jan 2025", color: "#27272A", admin: false },
            { initial: "W", name: "Mike Wilson", info: "12 rides · joined Apr 2025", color: "#27272A", admin: false },
          ].map((m) => (
            <div key={m.name} className="flex items-center gap-2 bg-[#18181B] border border-[#27272A] rounded-lg px-2.5 py-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-semibold text-white shrink-0"
                style={{ backgroundColor: m.color }}
              >
                {m.initial}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[8px] font-semibold text-[#FAFAFA] truncate">{m.name}</p>
                <p className="text-[6px] text-[#52525B]">{m.info}</p>
              </div>
              {m.admin && (
                <span className="text-[6px] text-[#FF6600] font-semibold border border-[#FF6600]/30 rounded-full px-1.5 py-0.5">Admin</span>
              )}
              {!m.admin && (
                <svg className="w-2.5 h-2.5 text-[#3f3f46]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Leave */}
      <div className="px-3 py-2 border-t border-[#1E1E22]">
        <p className="text-center text-[8px] text-red-500 font-medium">↪ Leave Group</p>
      </div>
    </div>
  );
}

/* Screen 4 — Rides Tab (Feature 03: places/stops) */
export function RidesScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0E0E10] text-[10px] leading-tight">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#1E1E22]">
        <svg className="w-3.5 h-3.5 text-[#A1A1AA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        <span className="text-[10px] font-semibold text-[#FAFAFA]">Group</span>
        <svg className="w-3.5 h-3.5 text-[#A1A1AA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="6" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="18" r="1"/></svg>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-3 space-y-3">
        {/* Group identity (compact) */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#27272A] flex items-center justify-center text-[14px] border border-[#3f3f46]">🚴</div>
          <div>
            <p className="font-bold text-[#FAFAFA] text-[12px]">Daily Commuters</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[7px] text-[#52525B]">🌐 Public</span>
              <span className="text-[7px] text-[#52525B]">📍 San Francisco, CA</span>
            </div>
            <div className="flex gap-2 mt-1">
              <span className="text-[7px] text-[#A1A1AA]">👥 156</span>
              <span className="text-[7px] text-[#A1A1AA]">↗ 248 rides</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-1.5">
          <button className="flex-1 bg-[#FF6600] text-white rounded-lg py-1.5 text-[8px] font-semibold">💬 Chat</button>
          <button className="flex-1 bg-[#18181B] text-[#FAFAFA] border border-[#27272A] rounded-lg py-1.5 text-[8px] font-semibold">👥 Invite</button>
          <button className="w-8 bg-[#18181B] border border-[#27272A] rounded-lg flex items-center justify-center">
            <svg className="w-3 h-3 text-[#FAFAFA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

        {/* Tabs — Rides active */}
        <div className="flex gap-1 bg-[#18181B] rounded-lg p-0.5">
          <div className="flex-1 text-center py-1 text-[8px] font-medium text-[#52525B]">Overview</div>
          <div className="flex-1 text-center py-1 text-[8px] font-medium text-[#52525B]">Members</div>
          <div className="flex-1 text-center py-1 text-[8px] font-medium text-[#FAFAFA] bg-[#27272A] rounded-md">Rides</div>
        </div>

        {/* Ride cards */}
        <div className="space-y-1.5">
          {[
            { name: "Morning Sprint", date: "Apr 2, 2026 · 7:00 AM", riders: "8" },
            { name: "Weekend Long Ride", date: "Apr 5, 2026 · 9:00 AM", riders: "12" },
          ].map((ride) => (
            <div key={ride.name} className="flex items-center gap-2 bg-[#18181B] border border-[#27272A] rounded-lg px-2.5 py-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#FF6600]/10 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-semibold text-[#FAFAFA] truncate">{ride.name}</p>
                <p className="text-[6px] text-[#52525B]">{ride.date}</p>
              </div>
              <div className="text-right">
                <p className="text-[6px] text-[#A1A1AA] mb-0.5">👥 {ride.riders}</p>
                <span className="text-[7px] text-[#FF6600] font-bold bg-[#FF6600]/10 border border-[#FF6600]/30 rounded-md px-2 py-0.5">Join</span>
              </div>
            </div>
          ))}

          {/* Schedule new ride */}
          <div className="flex items-center gap-2 bg-[#18181B] border border-[#27272A] border-dashed rounded-lg px-2.5 py-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#27272A] flex items-center justify-center">
              <svg className="w-3 h-3 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
            </div>
            <p className="text-[8px] text-[#52525B]">Schedule a new ride</p>
          </div>
        </div>
      </div>

      {/* Leave */}
      <div className="px-3 py-2 border-t border-[#1E1E22]">
        <p className="text-center text-[8px] text-red-500 font-medium">↪ Leave Group</p>
      </div>
    </div>
  );
}

/* Screen 6 — Discover Groups (Feature 03) */
export function DiscoverGroupsScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0E0E10] text-[10px] leading-tight">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#1E1E22]">
        <svg className="w-3.5 h-3.5 text-[#A1A1AA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        <span className="text-[10px] font-semibold text-[#FAFAFA]">Discover</span>
        <svg className="w-3.5 h-3.5 text-[#A1A1AA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-3 space-y-3">
        {/* Search bar */}
        <div className="flex items-center bg-[#18181B] border border-[#27272A] rounded-lg px-2.5 py-2">
          <svg className="w-3 h-3 text-[#52525B] mr-1.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <span className="text-[8px] text-[#52525B]">Search groups near you...</span>
        </div>

        {/* Category pills */}
        <div className="flex gap-1.5 overflow-hidden">
          {["All", "Nearby", "Popular", "New"].map((cat, i) => (
            <span key={cat} className={`px-2.5 py-1 rounded-full text-[7px] font-semibold whitespace-nowrap ${i === 0 ? "bg-[#FF6600] text-white" : "bg-[#18181B] text-[#52525B] border border-[#27272A]"}`}>{cat}</span>
          ))}
        </div>

        {/* Suggested groups */}
        <div>
          <p className="text-[9px] font-semibold text-[#FAFAFA] mb-2">Groups near you</p>
          <div className="space-y-1.5">
            {[
              { name: "Bay Area Riders", members: "342", rides: "1.2k", loc: "San Francisco", color: "#FF6600" },
              { name: "Weekend Warriors", members: "189", rides: "567", loc: "Oakland, CA", color: "#3B82F6" },
              { name: "Night Owls Crew", members: "98", rides: "234", loc: "San Jose, CA", color: "#8B5CF6" },
              { name: "Campus Commuters", members: "256", rides: "890", loc: "Berkeley, CA", color: "#10B981" },
            ].map((g) => (
              <div key={g.name} className="flex items-center gap-2 bg-[#18181B] border border-[#27272A] rounded-lg px-2.5 py-2">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[12px] shrink-0" style={{ backgroundColor: `${g.color}20` }}>
                  <svg className="w-4 h-4" style={{ color: g.color }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[8px] font-semibold text-[#FAFAFA] truncate">{g.name}</p>
                  <p className="text-[6px] text-[#52525B]">📍 {g.loc} · 👥 {g.members} · ↗ {g.rides} rides</p>
                </div>
                <span className="text-[7px] text-[#FF6600] font-bold bg-[#FF6600]/10 border border-[#FF6600]/30 rounded-md px-2 py-0.5 shrink-0">Join</span>
              </div>
            ))}
          </div>
        </div>

        {/* Invite friends */}
        <div className="bg-[#18181B] border border-dashed border-[#27272A] rounded-lg px-2.5 py-2.5 flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#FF6600]/10 flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>
          </div>
          <div>
            <p className="text-[8px] font-semibold text-[#FAFAFA]">Invite friends</p>
            <p className="text-[6px] text-[#52525B]">Add people to your group via link or contacts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Screen 7 — Ride Details (Feature 05) */
export function RideDetailsScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0E0E10] text-[10px] leading-tight">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-[#1E1E22]">
        <svg className="w-3.5 h-3.5 text-[#A1A1AA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        <span className="text-[10px] font-semibold text-[#FAFAFA]">Ride Details</span>
        <svg className="w-3.5 h-3.5 text-[#A1A1AA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="6" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="18" r="1"/></svg>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-3 space-y-2.5">
        {/* Ride title + badges */}
        <div>
          <div className="flex items-start justify-between">
            <p className="text-[13px] font-bold text-[#FAFAFA] leading-tight max-w-[60%]">Weekend Group Ride</p>
            <div className="flex gap-1">
              <span className="text-[6px] font-bold px-1.5 py-0.5 rounded-full bg-[#FF6600]/15 text-[#FF6600] border border-[#FF6600]/30">Group</span>
              <span className="text-[6px] font-bold px-1.5 py-0.5 rounded-full bg-[#3B82F6]/15 text-[#3B82F6] border border-[#3B82F6]/30">Lead</span>
            </div>
          </div>
          <p className="text-[7px] text-[#52525B] mt-0.5">Mar 30, 2026 · 8:34 AM · Downtown → Riverside Park</p>
        </div>

        {/* Route visualization */}
        <div className="bg-[#18181B] border border-[#27272A] rounded-xl p-2 relative overflow-hidden">
          <svg className="w-full h-16" viewBox="0 0 220 60" fill="none">
            {/* Background road lines */}
            <path d="M 10 45 Q 55 42, 80 35 Q 110 25, 140 28 Q 170 32, 200 15" stroke="#27272A" strokeWidth="2" fill="none"/>
            <path d="M 10 50 Q 60 48, 90 42 Q 120 35, 155 38 Q 185 42, 210 28" stroke="#27272A" strokeWidth="1.5" fill="none" opacity="0.5"/>
            {/* Route line */}
            <path d="M 15 42 Q 50 38, 80 30 Q 115 18, 145 22 Q 175 26, 205 10" stroke="#FF6600" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            {/* Start dot */}
            <circle cx="15" cy="42" r="4" fill="#FF6600"/>
            <circle cx="15" cy="42" r="7" fill="#FF6600" opacity="0.2"/>
            {/* Mid dots */}
            <circle cx="80" cy="30" r="3" fill="#FF6600"/>
            <circle cx="145" cy="22" r="3" fill="#FF6600"/>
            {/* End dot */}
            <circle cx="205" cy="10" r="4" fill="#FFD700"/>
            <circle cx="205" cy="10" r="7" fill="#FFD700" opacity="0.25"/>
          </svg>
          <div className="flex justify-between mt-1">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"/>
              <span className="text-[6px] text-[#A1A1AA]">Start: Downtown</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"/>
              <span className="text-[6px] text-[#A1A1AA]">End: Riverside Park</span>
            </div>
          </div>
        </div>

        {/* Performance heading */}
        <p className="text-[10px] font-semibold text-[#FAFAFA]">Performance</p>

        {/* Stats grid — row 1 */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { icon: "↗", val: "12.4 mi", label: "DISTANCE", highlight: true },
            { icon: "⏱", val: "42 min", label: "DURATION", highlight: false },
            { icon: "⚡", val: "17.7 mph", label: "AVG SPEED", highlight: false },
          ].map((s) => (
            <div key={s.label} className={`rounded-lg py-2 px-1.5 text-center ${s.highlight ? "bg-[#FF6600]/10 border border-[#FF6600]/20" : "bg-[#18181B] border border-[#27272A]"}`}>
              <div className="text-[8px] text-[#52525B] mb-0.5">{s.icon}</div>
              <p className={`text-[10px] font-bold ${s.highlight ? "text-[#FF6600]" : "text-[#FAFAFA]"}`}>{s.val}</p>
              <p className="text-[5px] text-[#52525B] tracking-wider mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Stats grid — row 2 */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { icon: "⇅", val: "24.3 mph", label: "MAX SPEED" },
            { icon: "🔥", val: "387 cal", label: "CALORIES" },
            { icon: "↗", val: "+234 ft", label: "ELEVATION" },
          ].map((s) => (
            <div key={s.label} className="bg-[#18181B] border border-[#27272A] rounded-lg py-2 px-1.5 text-center">
              <div className="text-[8px] text-[#52525B] mb-0.5">{s.icon}</div>
              <p className="text-[10px] font-bold text-[#FAFAFA]">{s.val}</p>
              <p className="text-[5px] text-[#52525B] tracking-wider mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Elevation Profile */}
        <p className="text-[10px] font-semibold text-[#FAFAFA]">Elevation Profile</p>
        <div className="bg-[#18181B] border border-[#27272A] rounded-xl p-2">
          <svg className="w-full h-10" viewBox="0 0 220 40" fill="none">
            {/* Elevation fill */}
            <path d="M 0 35 Q 20 33, 40 30 Q 60 28, 80 25 Q 100 22, 120 24 Q 140 20, 160 15 Q 180 10, 200 8 L 220 6 L 220 40 L 0 40 Z" fill="url(#elevGrad)" opacity="0.3"/>
            {/* Elevation line */}
            <path d="M 0 35 Q 20 33, 40 30 Q 60 28, 80 25 Q 100 22, 120 24 Q 140 20, 160 15 Q 180 10, 200 8 L 220 6" stroke="#FF6600" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <defs>
              <linearGradient id="elevGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF6600" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#FF6600" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="flex justify-between mt-1">
            {["0 mi", "3 mi", "6 mi", "9 mi", "12.4 mi"].map((l) => (
              <span key={l} className="text-[5px] text-[#52525B]">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Screen 5 — Map / Route (Feature 02: routing) */
export function MapScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0E0E10] text-[10px] leading-tight relative overflow-hidden">
      {/* Map background — dark stylized */}
      <div className="absolute inset-0 bg-[#111113]">
        {/* Grid lines to simulate dark map */}
        <svg className="w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mapgrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#A1A1AA" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mapgrid)" />
          {/* Organic road-like curves */}
          <path d="M 20 200 Q 60 180, 80 150 Q 100 120, 90 80 Q 80 40, 120 20" fill="none" stroke="#3f3f46" strokeWidth="3" opacity="0.4"/>
          <path d="M 60 220 Q 100 200, 140 180 Q 170 160, 160 120" fill="none" stroke="#3f3f46" strokeWidth="2" opacity="0.3"/>
          <path d="M 0 160 Q 40 155, 80 150 Q 120 145, 160 160 Q 200 175, 240 160" fill="none" stroke="#3f3f46" strokeWidth="2" opacity="0.3"/>
        </svg>

        {/* Route line */}
        <svg className="absolute inset-0 w-full h-full">
          <path
            d="M 120 320 Q 130 280, 140 240 Q 155 190, 145 150 Q 135 120, 150 80 Q 160 55, 155 30"
            fill="none"
            stroke="#FF6600"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.9"
          />
          {/* Route dots */}
          <circle cx="120" cy="320" r="4" fill="#FF6600"/>
          <circle cx="120" cy="320" r="7" fill="#FF6600" opacity="0.2"/>
          <circle cx="145" cy="150" r="3" fill="#FFA333"/>
          <circle cx="155" cy="30" r="4" fill="#FFD700"/>
          <circle cx="155" cy="30" r="7" fill="#FFD700" opacity="0.3"/>
        </svg>
      </div>

      {/* Top controls */}
      <div className="relative z-10 flex items-center justify-between px-3 pt-3">
        <div className="w-6 h-6 rounded-full bg-[#27272A]/80 backdrop-blur flex items-center justify-center">
          <svg className="w-3 h-3 text-[#FAFAFA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
        </div>
        {/* Solo / Group toggle */}
        <div className="flex bg-[#27272A]/80 backdrop-blur rounded-full p-0.5">
          <div className="px-3 py-1 text-[8px] text-[#52525B] font-medium">Solo</div>
          <div className="px-3 py-1 text-[8px] text-white font-semibold bg-[#FF6600] rounded-full">Group</div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="w-6 h-6 rounded-full bg-[#27272A]/80 backdrop-blur flex items-center justify-center">
            <svg className="w-3 h-3 text-[#FAFAFA]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.209-.467-.462-.634-.746L12.9 8.87a1.125 1.125 0 01.12-1.286l.773-.966a.535.535 0 00-.108-.713 5.985 5.985 0 00-3.713-1.272A5.985 5.985 0 006.115 5.19z"/></svg>
          </div>
          <div className="w-6 h-6 rounded-full bg-[#27272A]/80 backdrop-blur flex items-center justify-center">
            <svg className="w-3 h-3 text-[#FAFAFA]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582"/></svg>
          </div>
        </div>
      </div>

      {/* Spacer to push bottom panel down */}
      <div className="flex-1" />

      {/* Bottom panel */}
      <div className="relative z-10 bg-[#18181B] rounded-t-2xl border-t border-[#27272A] px-3 pt-3 pb-2 space-y-2.5">
        {/* Location inputs */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FF6600]" />
            <p className="text-[9px] font-semibold text-[#FAFAFA]">Current Location</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#52525B]" />
            <div className="flex-1 flex items-center justify-between bg-[#0E0E10] border border-[#27272A] rounded-lg px-2 py-1.5">
              <p className="text-[8px] text-[#52525B]">Choose destination...</p>
              <svg className="w-3 h-3 text-[#52525B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
          </div>
        </div>

        {/* Nearby riders */}
        <div className="bg-[#0E0E10] border border-[#27272A] rounded-lg px-2.5 py-2">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[8px] font-semibold text-green-400">3 riders nearby</span>
            </div>
            <svg className="w-3 h-3 text-[#FF6600]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
          <div className="flex gap-2">
            {[
              { initial: "M", name: "Marcus" },
              { initial: "J", name: "Jordan" },
              { initial: "S", name: "Sofia" },
            ].map((r) => (
              <div key={r.name} className="flex flex-col items-center gap-0.5">
                <div className="w-6 h-6 rounded-full bg-[#27272A] border border-[#3f3f46] flex items-center justify-center text-[7px] text-[#FAFAFA] font-medium">
                  {r.initial}
                </div>
                <span className="text-[5px] text-[#52525B]">{r.name}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-6 h-6 rounded-full bg-[#27272A] border border-dashed border-[#3f3f46] flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-[#52525B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Start Ride button */}
        <button className="w-full bg-[#FF6600] text-white rounded-xl py-2.5 text-[10px] font-bold flex items-center justify-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Start Ride
        </button>
      </div>
    </div>
  );
}
