export default function StoryArt({ className = '' }) {
  return (
    <svg
      viewBox="0 0 520 440"
      className={className}
      role="img"
      aria-label="Ilustrasi suasana anak muda dan warga lokal nongkrong di Nawn Coffee"
    >
      <defs>
        <linearGradient id="st-bg" x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#EBEFE3" />
          <stop offset="60%" stopColor="#D9E0CD" />
          <stop offset="100%" stopColor="#E0A458" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="st-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#869671" />
          <stop offset="100%" stopColor="#556445" />
        </linearGradient>
        <radialGradient id="st-bulb" cx="50%" cy="20%" r="70%">
          <stop offset="0%" stopColor="#E0A458" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#E0A458" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="520" height="440" fill="url(#st-bg)" />
      <circle cx="430" cy="80" r="46" fill="#E0A458" opacity="0.75" />

      <path d="M0 300c86-34 172-34 260 0 80 30 174 26 260-10v150H0Z" fill="url(#st-floor)" opacity="0.55" />

      <g>
        <path d="M132 0v70" stroke="#2F2620" strokeWidth="5" />
        <path d="M96 70h72l-22 34h-28Z" fill="#2F2620" />
        <ellipse cx="132" cy="112" rx="96" ry="70" fill="url(#st-bulb)" />
      </g>
      <g>
        <path d="M392 0v54" stroke="#2F2620" strokeWidth="5" />
        <path d="M364 54h56l-17 27h-22Z" fill="#2F2620" />
        <ellipse cx="392" cy="88" rx="70" ry="52" fill="url(#st-bulb)" opacity="0.75" />
      </g>

      <g transform="translate(34 236)">
        <path d="M0 0h54l-8 86H8Z" fill="#C97B4A" />
        <path d="M26 0C6-14-2-42 8-70c18 8 26 34 22 62" fill="#556445" />
        <path d="M30 2c20-12 26-40 18-66-18 10-26 36-24 62" fill="#6B7C57" />
      </g>
      <g transform="translate(444 250)">
        <path d="M0 0h44l-6 72H6Z" fill="#F0EADD" />
        <path d="M20 0C4-12-2-34 6-56c14 6 20 28 16 50" fill="#556445" />
        <path d="M24 0c16-10 20-32 14-52-14 8-20 28-18 48" fill="#869671" />
      </g>

      <g fill="#2F2620">
        <path d="M146 400v-92c0-26 20-46 46-46h10c26 0 44 20 44 46v92Z" opacity="0.92" />
        <circle cx="204" cy="228" r="38" />
        <path d="M176 214c8-22 48-26 58-4-14-8-44-8-58 4Z" fill="#1A1512" />
      </g>
      <g fill="#2F2620">
        <path d="M286 400v-84c0-26 20-46 46-46h8c26 0 46 20 46 46v84Z" opacity="0.92" />
        <circle cx="334" cy="238" r="36" />
        <path d="M300 236c2-26 22-42 46-40 18 2 30 16 30 36-10-16-48-20-76 4Z" fill="#1A1512" />
      </g>

      <g>
        <rect x="176" y="308" width="176" height="14" rx="7" fill="#3D3229" />
        <path d="M196 322l-8 78M332 322l8 78" stroke="#3D3229" strokeWidth="12" strokeLinecap="round" />
        <g transform="translate(212 276)">
          <path d="M0 0h34v22a17 17 0 0 1-34 0Z" fill="#FAF7F0" stroke="#2F2620" strokeWidth="4" />
          <path d="M34 5h6a8 8 0 0 1 0 16h-5" fill="none" stroke="#2F2620" strokeWidth="4" />
          <path d="M9-14c0 6 5 6 5 12M23-14c0 6 5 6 5 12" fill="none" stroke="#A3B18A" strokeWidth="4" strokeLinecap="round" />
        </g>
        <g transform="translate(280 278)">
          <path d="M0 0h32v21a16 16 0 0 1-32 0Z" fill="#FAF7F0" stroke="#2F2620" strokeWidth="4" />
          <path d="M32 5h6a8 8 0 0 1 0 16h-5" fill="none" stroke="#2F2620" strokeWidth="4" />
        </g>
        <rect x="238" y="292" width="46" height="10" rx="5" fill="#E0A458" />
      </g>

      <g fill="#F0EADD" opacity="0.6">
        <circle cx="86" cy="120" r="4" />
        <circle cx="464" cy="176" r="3" />
        <circle cx="60" cy="196" r="3" />
        <circle cx="484" cy="42" r="4" />
      </g>
    </svg>
  )
}
