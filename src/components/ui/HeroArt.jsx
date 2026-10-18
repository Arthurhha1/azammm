export default function HeroArt({ className = '' }) {
  const arch = 'M0 240A240 240 0 0 1 480 240V620H0Z'

  return (
    <svg viewBox="0 0 480 620" className={className} role="img"       aria-label="Ilustrasi secangkir kopi Hellow Coffee">
      <defs>
        <clipPath id="hero-arch-clip">
          <path d={arch} />
        </clipPath>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#FAEAE0" />
          <stop offset="55%" stopColor="#F3D5C2" />
          <stop offset="100%" stopColor="#E9BDA5" />
        </linearGradient>
        <radialGradient id="hero-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E6A75C" stopOpacity="0.75" />
          <stop offset="70%" stopColor="#E6A75C" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#E6A75C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-table" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D3229" />
          <stop offset="100%" stopColor="#1A1512" />
        </linearGradient>
        <linearGradient id="hero-cup" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBF6EF" />
          <stop offset="100%" stopColor="#E6DCD0" />
        </linearGradient>
        <linearGradient id="hero-bean" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#57493D" />
          <stop offset="100%" stopColor="#2F2620" />
        </linearGradient>
      </defs>

      <g clipPath="url(#hero-arch-clip)">
        <rect width="480" height="620" fill="url(#hero-sky)" />
        <circle cx="240" cy="250" r="176" fill="url(#hero-halo)" />
        <circle cx="240" cy="252" r="148" fill="none" stroke="#FBF6EF" strokeWidth="2" strokeDasharray="4 12" opacity="0.7" />

        <path d="M0 372c74-22 148-22 226 2 68 20 152 18 254-8v70H0Z" fill="#D9A083" opacity="0.55" />

        <rect x="-20" y="470" width="520" height="170" fill="url(#hero-table)" />
        <rect x="-20" y="470" width="520" height="8" fill="#57493D" />

        <ellipse cx="240" cy="492" rx="132" ry="22" fill="#13100D" opacity="0.35" />
        <ellipse cx="240" cy="482" rx="116" ry="20" fill="#F1E9DE" />
        <ellipse cx="240" cy="477" rx="116" ry="19" fill="#FBF6EF" />

        <path
          d="M172 352H308L296 446Q240 478 184 446Z"
          fill="url(#hero-cup)"
          stroke="#2F2620"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M308 374h20a46 46 0 0 1 0 92h-30"
          fill="none"
          stroke="#FBF6EF"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          d="M308 374h20a46 46 0 0 1 0 92h-30"
          fill="none"
          stroke="#2F2620"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <ellipse cx="240" cy="352" rx="68" ry="14" fill="#3D3229" stroke="#2F2620" strokeWidth="5" />
        <ellipse cx="240" cy="352" rx="54" ry="10" fill="#6B4F3A" />
        <path
          d="M214 352c8-7 18-7 26 0s18 7 26 0"
          fill="none"
          stroke="#FBF6EF"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path d="M186 400h108" stroke="#E9BDA5" strokeWidth="6" strokeLinecap="round" opacity="0.75" />

        <g stroke="#FBF6EF" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.75">
          <path className="steam" d="M212 330c-16-22 16-32 0-56" />
          <path className="steam steam-2" d="M240 322c-16-24 16-34 0-60" />
          <path className="steam steam-3" d="M268 330c-16-22 16-32 0-56" />
        </g>

        <g transform="translate(52 470)">
          <path d="M0 0h74l-9 74H9Z" fill="#C96A4C" />
          <path d="M6 18h62" stroke="#1A1512" strokeWidth="4" opacity="0.35" />
          <path d="M36 0C14-14 8-40 16-64c20 6 32 30 30 56" fill="#875434" />
          <path d="M40 2c22-10 30-36 24-62-20 8-32 32-32 58" fill="#A86A47" />
          <path d="M34 4C26-16 30-38 44-52c10 16 8 38-6 52" fill="#C4835E" />
        </g>

        <g transform="translate(404 494)">
          <path d="M0 0h52v40H0Z" fill="#F1E9DE" />
          <path d="M0 0h52l-6 8H6Z" fill="#FBF6EF" />
          <path d="M26 0c-14-12-16-32-8-48 14 8 20 28 14 46" fill="#875434" />
          <path d="M28 0c16-8 22-28 16-46-14 8-22 26-20 44" fill="#A86A47" />
        </g>

        <g fill="url(#hero-bean)">
          <g transform="translate(120 540) rotate(-18)">
            <ellipse rx="15" ry="10" />
            <path d="M-14 0c6-5 22-5 28 0" fill="none" stroke="#8A7466" strokeWidth="2.4" />
          </g>
          <g transform="translate(348 556) rotate(24)">
            <ellipse rx="15" ry="10" />
            <path d="M-14 0c6-5 22-5 28 0" fill="none" stroke="#8A7466" strokeWidth="2.4" />
          </g>
          <g transform="translate(300 588) rotate(-8)">
            <ellipse rx="13" ry="9" />
            <path d="M-12 0c5-4 19-4 24 0" fill="none" stroke="#8A7466" strokeWidth="2.2" />
          </g>
        </g>

        <rect x="0" y="596" width="480" height="24" fill="#13100D" opacity="0.45" />
      </g>

      <path d={arch} fill="none" stroke="#2F2620" strokeWidth="6" />
    </svg>
  )
}
