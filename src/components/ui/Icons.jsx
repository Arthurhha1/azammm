const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const Svg = ({ children, className = 'h-5 w-5', ...props }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke} {...props}>
    {children}
  </svg>
)

export const ArrowRight = (p) => (
  <Svg {...p}>
    <path d="M4 12h15" />
    <path d="M13 6l6 6-6 6" />
  </Svg>
)

export const ArrowUpRight = (p) => (
  <Svg {...p}>
    <path d="M7.5 16.5 16.5 7.5" />
    <path d="M9 7.5h7.5V15" />
  </Svg>
)

export const Star = (p) => (
  <Svg {...p}>
    <path d="M12 3.6l2.6 5.3 5.8.9-4.2 4 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4 5.8-.9L12 3.6Z" />
  </Svg>
)

export const Clock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.2v5l3.2 2" />
  </Svg>
)

export const MapPin = (p) => (
  <Svg {...p}>
    <path d="M12 21c4.5-4.5 7-7.8 7-11a7 7 0 1 0-14 0c0 3.2 2.5 6.5 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </Svg>
)

export const Phone = (p) => (
  <Svg {...p}>
    <path d="M7 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 5.5 5.7 2 2 0 0 1 7 3.5Z" />
  </Svg>
)

export const Wifi = (p) => (
  <Svg {...p}>
    <path d="M2.6 9.2a14.5 14.5 0 0 1 18.8 0" />
    <path d="M5.7 12.6a10 10 0 0 1 12.6 0" />
    <path d="M8.8 16a5.6 5.6 0 0 1 6.4 0" />
    <path d="M12 19.4h.01" />
  </Svg>
)

export const Plug = (p) => (
  <Svg {...p}>
    <path d="M9 3v5" />
    <path d="M15 3v5" />
    <path d="M6.2 8h11.6v2.8A5.8 5.8 0 0 1 12 16.6a5.8 5.8 0 0 1-5.8-5.8V8Z" />
    <path d="M12 16.6V21" />
  </Svg>
)

export const Leaf = (p) => (
  <Svg {...p}>
    <path d="M4.5 19.5C4.5 11.5 10.5 5.5 19.5 5.5c0 9-6 14-12.5 14H4.5Z" />
    <path d="M4.5 19.5c3.6-3.8 6.7-6 11-8.2" />
  </Svg>
)

export const Coffee = (p) => (
  <Svg {...p}>
    <path d="M4 8.5h13V14a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8.5Z" />
    <path d="M17 10h1.4a2.4 2.4 0 0 1 0 4.8H17" />
    <path d="M8 3c0 1.4 1 1.6 1 3" />
    <path d="M12 3c0 1.4 1 1.6 1 3" />
  </Svg>
)

export const Users = (p) => (
  <Svg {...p}>
    <path d="M16 19.5v-1.6a3.4 3.4 0 0 0-3.4-3.4H7.4A3.4 3.4 0 0 0 4 17.9v1.6" />
    <circle cx="10" cy="8" r="3.4" />
    <path d="M16.8 4.9a3.4 3.4 0 0 1 0 6.4" />
    <path d="M20 19.5v-1.6a3.4 3.4 0 0 0-2.6-3.3" />
  </Svg>
)

export const MenuIcon = (p) => (
  <Svg {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Svg>
)

export const CloseIcon = (p) => (
  <Svg {...p}>
    <path d="M6.5 6.5 17.5 17.5" />
    <path d="M17.5 6.5 6.5 17.5" />
  </Svg>
)

export const Check = (p) => (
  <Svg {...p}>
    <path d="M4.8 12.6 9.7 17.5 19.4 6.8" />
  </Svg>
)

export const Sparkles = (p) => (
  <Svg {...p}>
    <path d="M11 3.5l1.7 4.4 4.4 1.7-4.4 1.7L11 15.7 9.3 11.3 4.9 9.6l4.4-1.7L11 3.5Z" />
    <path d="M18.3 15.2l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9Z" />
  </Svg>
)

export const Music = (p) => (
  <Svg {...p}>
    <path d="M9 17.5V5.8l10-2v11.4" />
    <circle cx="6.6" cy="17.6" r="2.4" />
    <circle cx="16.6" cy="15.4" r="2.4" />
  </Svg>
)

export const Car = (p) => (
  <Svg {...p}>
    <path d="M4 16.5v-3.4L6.2 8h11.6l2.2 5.1v3.4" />
    <path d="M4 16.5h16" />
    <path d="M6.5 12.6h11" />
    <circle cx="7.6" cy="17.4" r="1.7" />
    <circle cx="16.4" cy="17.4" r="1.7" />
  </Svg>
)

export const Instagram = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <path d="M17.2 6.9h.01" />
  </Svg>
)

export const TikTok = (p) => (
  <Svg {...p}>
    <path d="M14 4v10.4a3.6 3.6 0 1 1-3.6-3.6" />
    <path d="M14 4.4c.5 2.7 2.4 4.3 5.2 4.5" />
  </Svg>
)

export const Facebook = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M14.9 8.2h-1.5a2.2 2.2 0 0 0-2.2 2.2V21" />
    <path d="M9.6 12.7h4.6" />
  </Svg>
)

export const WhatsApp = (p) => (
  <Svg {...p}>
    <path d="M20.4 11.7a8.3 8.3 0 0 1-12.2 7.3L4 20.3l1.3-4.1A8.3 8.3 0 1 1 20.4 11.7Z" />
    <path d="M9.3 9.4c.4 2.6 2.4 4.7 5 5.3l1.2-1.4 1.9.9-.4 1.5c-3.8.5-7.5-3.1-7-7l1.5-.4.9 1.9-1.5-.6c-.5-.3-.9-.7-1.6-.2Z" />
  </Svg>
)

export const Utensils = (p) => (
  <Svg {...p}>
    <path d="M6.5 3v6.4a2.6 2.6 0 0 0 5.2 0V3" />
    <path d="M9.1 9.4V21" />
    <path d="M17.6 3c-1.7 1.5-2.6 3.5-2.6 5.7 0 1.7.8 2.9 2.2 3.4V21" />
  </Svg>
)

export const Send = (p) => (
  <Svg {...p}>
    <path d="M20.5 3.5 3.8 10.4l6.4 2.6 2.6 6.4 7.7-15.9Z" />
    <path d="M20.5 3.5 10.2 13" />
  </Svg>
)

export const Quote = ({ className = 'h-9 w-9' }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
    <path d="M13.4 6.5v6.2c-2.7.5-4.4 2.4-4.4 5.3H13v7.5H5.2v-6.9c0-5.3 3.3-9.4 8.2-11.4v-.7Zm13.4 0v6.2c-2.7.5-4.4 2.4-4.4 5.3h4v7.5h-7.8v-6.9c0-5.3 3.3-9.4 8.2-11.4v-.7Z" />
  </svg>
)
