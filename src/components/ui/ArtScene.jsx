const SCENES = {
  outdoor: (
    <>
      <defs>
        <linearGradient id="out-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAEAE0" />
          <stop offset="55%" stopColor="#F3D5C2" />
          <stop offset="100%" stopColor="#E6A75C" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="out-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4835E" />
          <stop offset="100%" stopColor="#875434" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#out-sky)" />
      <circle cx="320" cy="88" r="34" fill="#E6A75C" opacity="0.85" />
      <path d="M0 176c48-26 92-26 140 0s96 24 140-4c34-22 78-24 120-6v134H0Z" fill="#D9A083" opacity="0.6" />
      <path d="M0 214c60-24 108-20 158 4 44 22 92 18 132-6 40-24 78-26 110-10v98H0Z" fill="url(#out-ground)" />
      <g fill="#664026">
        <rect x="58" y="140" width="9" height="86" rx="4" />
        <circle cx="62" cy="132" r="34" />
        <circle cx="40" cy="150" r="22" />
        <circle cx="86" cy="150" r="24" />
      </g>
      <g transform="translate(0 -40)">
        <rect x="196" y="176" width="8" height="72" fill="#2F2620" />
        <path d="M150 178h100l-22-38a34 34 0 0 0-56 0Z" fill="#C96A4C" />
        <path d="M150 178h100" stroke="#1F1A16" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="200" cy="232" rx="62" ry="12" fill="#2F2620" />
        <rect x="196" y="232" width="8" height="46" fill="#2F2620" />
        <path d="M144 286h112" stroke="#2F2620" strokeWidth="7" strokeLinecap="round" />
      </g>
      <g fill="#2F2620" transform="translate(0 -40)">
        <path d="M118 244h34l-4 40h-26Z" />
        <path d="M250 244h34l-4 40h-26Z" />
      </g>
      <g transform="translate(176 166)">
        <path d="M0 0h26v16a13 13 0 0 1-26 0Z" fill="#FBF6EF" />
        <path d="M26 4h4a6 6 0 0 1 0 12h-3" fill="none" stroke="#FBF6EF" strokeWidth="3.4" />
      </g>
      <g stroke="#664026" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7">
        <path d="M338 214c14-8 22-22 22-40" />
        <path d="M338 214c-12-8-20-22-20-38" />
        <path d="M338 214v40" />
      </g>
    </>
  ),

  indoor: (
    <>
      <defs>
        <linearGradient id="in-wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F1E9DE" />
          <stop offset="100%" stopColor="#F3D5C2" />
        </linearGradient>
        <linearGradient id="in-view" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E9BDA5" />
          <stop offset="100%" stopColor="#C4835E" />
        </linearGradient>
        <radialGradient id="in-lamp" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="#E6A75C" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#E6A75C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#in-wall)" />
      <path d="M64 46h112v134H64Z" fill="url(#in-view)" />
      <path d="M120 46v134M64 113h112" stroke="#F1E9DE" strokeWidth="7" />
      <rect x="56" y="38" width="128" height="150" rx="8" fill="none" stroke="#2F2620" strokeWidth="6" />
      <rect x="238" y="62" width="52" height="66" rx="6" fill="none" stroke="#875434" strokeWidth="5" />
      <path d="M248 108l14-22 10 14 8-10 10 18Z" fill="#D9A083" />
      <path d="M264 0v54" stroke="#2F2620" strokeWidth="5" />
      <path d="M236 54h56l-16 30h-24Z" fill="#2F2620" />
      <ellipse cx="264" cy="88" rx="46" ry="34" fill="url(#in-lamp)" />
      <rect x="40" y="238" width="320" height="14" rx="7" fill="#2F2620" />
      <path d="M78 252v46M322 252v46" stroke="#2F2620" strokeWidth="12" strokeLinecap="round" />
      <g fill="#3D3229">
        <rect x="108" y="204" width="66" height="12" rx="6" />
        <path d="M118 216l6 26M164 216l-6 26" stroke="#3D3229" strokeWidth="7" strokeLinecap="round" />
        <rect x="216" y="204" width="66" height="12" rx="6" />
        <path d="M226 216l6 26M272 216l-6 26" stroke="#3D3229" strokeWidth="7" strokeLinecap="round" />
      </g>
      <g transform="translate(128 176)">
        <path d="M0 0h32v20a16 16 0 0 1-32 0Z" fill="#FBF6EF" stroke="#2F2620" strokeWidth="4" />
        <path d="M32 5h5a7 7 0 0 1 0 14h-4" fill="none" stroke="#2F2620" strokeWidth="4" />
        <path d="M9-14c0 6 5 6 5 12M21-14c0 6 5 6 5 12" fill="none" stroke="#D9A083" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g transform="translate(336 214)">
        <path d="M-16 24h32l-5 38h-22Z" fill="#C96A4C" />
        <path d="M0 24c-14-6-20-20-18-34 14 2 24 14 24 30" fill="#875434" />
        <path d="M0 24c14-8 18-24 14-38-13 4-21 18-20 34" fill="#A86A47" />
      </g>
    </>
  ),

  wifi: (
    <>
      <defs>
        <radialGradient id="wf-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#E6A75C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#E6A75C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wf-scr" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#875434" />
          <stop offset="100%" stopColor="#664026" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#1A1512" />
      <ellipse cx="200" cy="140" rx="190" ry="130" fill="url(#wf-glow)" />
      <g stroke="#E6A75C" strokeLinecap="round" fill="none">
        <path d="M158 116a58 58 0 0 1 84 0" strokeWidth="9" />
        <path d="M174 140a38 38 0 0 1 52 0" strokeWidth="9" />
        <path d="M190 164a18 18 0 0 1 20 0" strokeWidth="9" />
        <circle cx="200" cy="186" r="7" fill="#E6A75C" stroke="none" />
      </g>
      <path d="M96 214h208l18 44H78Z" fill="#F1E9DE" />
      <path d="M118 224h164l10 24H108Z" fill="#F3D5C2" />
      <path d="M78 258h244v10a8 8 0 0 1-8 8H86a8 8 0 0 1-8-8Z" fill="#E9BDA5" />
      <rect x="146" y="200" width="108" height="14" rx="7" fill="url(#wf-scr)" opacity="0" />
      <g transform="translate(308 178)">
        <path d="M0 0h34v22a17 17 0 0 1-34 0Z" fill="#FBF6EF" />
        <path d="M34 6h6a8 8 0 0 1 0 16h-5" fill="none" stroke="#FBF6EF" strokeWidth="4" />
        <path d="M10-14c0 6 5 6 5 12M24-14c0 6 5 6 5 12" fill="none" stroke="#E6A75C" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g fill="#D9A083" opacity="0.55">
        <circle cx="62" cy="66" r="4" />
        <circle cx="342" cy="92" r="5" />
        <circle cx="86" cy="146" r="3" />
        <circle cx="322" cy="46" r="3" />
      </g>
    </>
  ),

  power: (
    <>
      <defs>
        <linearGradient id="pw-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FAEAE0" />
          <stop offset="100%" stopColor="#E9BDA5" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#pw-bg)" />
      <rect x="0" y="236" width="400" height="64" fill="#C4835E" />
      <rect x="70" y="52" width="126" height="126" rx="26" fill="#FBF6EF" stroke="#2F2620" strokeWidth="6" />
      <g fill="#2F2620">
        <rect x="104" y="86" width="14" height="34" rx="7" />
        <rect x="148" y="86" width="14" height="34" rx="7" />
        <circle cx="133" cy="140" r="9" />
      </g>
      <path
        d="M133 178v26c0 22 24 30 46 30s44-10 54-30"
        fill="none"
        stroke="#2F2620"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <g transform="translate(232 176)">
        <rect x="0" y="0" width="52" height="34" rx="12" fill="#C96A4C" />
        <path d="M14 0v-16M38 0v-16" stroke="#2F2620" strokeWidth="7" strokeLinecap="round" />
      </g>
      <g transform="translate(258 60)">
        <path d="M20 0 4 26h14L10 50 34 20H18Z" fill="#E6A75C" stroke="#2F2620" strokeWidth="4" strokeLinejoin="round" />
      </g>
      <g transform="translate(318 178)">
        <path d="M0 26h44v26a22 22 0 0 1-44 0Z" fill="#1F1A16" />
        <path d="M44 32h7a10 10 0 0 1 0 20h-6" fill="none" stroke="#1F1A16" strokeWidth="6" />
        <path d="M10 10c0 8 6 8 6 16M28 10c0 8 6 8 6 16" fill="none" stroke="#D9A083" strokeWidth="5" strokeLinecap="round" />
      </g>
      <path d="M0 236h400" stroke="#875434" strokeWidth="5" />
    </>
  ),

  music: (
    <>
      <defs>
        <linearGradient id="mu-bg" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#241D18" />
          <stop offset="100%" stopColor="#13100D" />
        </linearGradient>
        <radialGradient id="mu-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5D9A8" />
          <stop offset="100%" stopColor="#E6A75C" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#mu-bg)" />
      <circle cx="316" cy="70" r="38" fill="url(#mu-moon)" />
      <circle cx="300" cy="60" r="38" fill="#241D18" opacity="0.55" />
      <g fill="#F1E9DE">
        <circle cx="60" cy="54" r="2.6" />
        <circle cx="120" cy="88" r="2" />
        <circle cx="190" cy="46" r="2.4" />
        <circle cx="244" cy="110" r="2" />
        <circle cx="94" cy="130" r="2" />
        <circle cx="360" cy="150" r="2.4" />
      </g>
      <path d="M0 246c60-18 118-18 176 0s124 18 176-4v58H0Z" fill="#13100D" />
      <g transform="translate(196 96)">
        <path
          d="M0 96c-34 0-58-22-58-50s24-46 52-46c16 0 27 7 34 16 8-9 20-16 36-16 28 0 52 18 52 46s-24 50-58 50Z"
          fill="#C96A4C"
        />
        <path d="M12 6c-14 8-20 24-20 40s8 30 24 38" fill="none" stroke="#E6A75C" strokeWidth="5" opacity="0.7" />
        <circle cx="12" cy="52" r="20" fill="#1A1512" />
        <path d="M84 22h72" stroke="#F1E9DE" strokeWidth="7" strokeLinecap="round" />
        <path d="M150 14v16" stroke="#F1E9DE" strokeWidth="7" strokeLinecap="round" />
        <path d="M84 52h64M84 40h64M84 64h64" stroke="#F1E9DE" strokeWidth="2.4" opacity="0.85" />
      </g>
      <g fill="#E6A75C" opacity="0.9">
        <path d="M74 172v34l22-6V166Z" />
        <circle cx="66" cy="210" r="9" />
        <circle cx="88" cy="202" r="9" />
        <path d="M322 186v30l18-5v-27Z" />
        <circle cx="315" cy="219" r="8" />
        <circle cx="333" cy="212" r="8" />
      </g>
    </>
  ),

  parking: (
    <>
      <defs>
        <linearGradient id="pk-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAEAE0" />
          <stop offset="100%" stopColor="#F3D5C2" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#pk-bg)" />
      <circle cx="332" cy="58" r="26" fill="#E6A75C" opacity="0.8" />
      <path d="M0 186c56-26 112-26 168 0s112 24 160-6v126H0Z" fill="#D9A083" />
      <g fill="#664026">
        <rect x="44" y="118" width="8" height="72" rx="4" />
        <circle cx="48" cy="112" r="28" />
        <circle cx="26" cy="128" r="18" />
      </g>
      <g transform="translate(318 112)">
        <rect x="-3" y="0" width="6" height="86" fill="#2F2620" />
        <rect x="-30" y="-6" width="60" height="60" rx="12" fill="#C96A4C" />
        <text
          x="0"
          y="36"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="38"
          fontWeight="700"
          fill="#FBF6EF"
        >
          P
        </text>
      </g>
      <rect x="0" y="232" width="400" height="68" fill="#3D3229" />
      <g stroke="#F1E9DE" strokeWidth="6" strokeLinecap="round" strokeDasharray="26 22">
        <path d="M0 266h400" />
      </g>
      <g transform="translate(112 158)">
        <path d="M6 46c0-6 4-16 8-24l10-24c3-8 10-13 19-13h62c9 0 16 5 20 13l14 26c8 4 14 12 14 22v14H6Z" fill="#1F1A16" />
        <path d="M44 12h56l10 22H34Z" fill="#E9BDA5" />
        <path d="M70 12v22" stroke="#1F1A16" strokeWidth="5" />
        <rect x="6" y="52" width="136" height="10" rx="5" fill="#2F2620" />
        <circle cx="44" cy="74" r="18" fill="#13100D" />
        <circle cx="44" cy="74" r="7" fill="#E9BDA5" />
        <circle cx="122" cy="74" r="18" fill="#13100D" />
        <circle cx="122" cy="74" r="7" fill="#E9BDA5" />
        <path d="M132 44h14" stroke="#E6A75C" strokeWidth="6" strokeLinecap="round" />
      </g>
      <g fill="#875434" opacity="0.7">
        <path d="M218 232c0-24 12-40 30-46-4 18-2 34 8 46Z" />
        <path d="M256 232c0-20 10-34 26-40-4 16-2 28 6 40Z" />
      </g>
    </>
  ),
}

export default function ArtScene({ scene, className = '' }) {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-hidden="true"
    >
      {SCENES[scene]}
    </svg>
  )
}
