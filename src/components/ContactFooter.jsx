import { motion } from 'framer-motion'
import { SITE, NAV_LINKS } from '../data/site.js'
import Reveal from './ui/Reveal.jsx'
import MagneticButton from './ui/MagneticButton.jsx'
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  TikTok,
  WhatsApp,
  ArrowUpRight,
} from './ui/Icons.jsx'
import { scrollToSection } from '../hooks/useSmoothScroll.js'

const SOCIAL_ICONS = {
  instagram: Instagram,
  tiktok: TikTok,
  whatsapp: WhatsApp,
}

function HoursCard() {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours() + now.getMinutes() / 60
  const isOpen =
    (day >= 1 && day <= 4 && hour >= 11 && hour < 21) ||
    (day === 5 && hour >= 13 && hour < 22) ||
    ((day === 6 || day === 0) && hour >= 10 && hour < 22)

  return (
    <div className="rounded-[2rem] border border-cream/10 bg-espresso-800/60 p-6 backdrop-blur-sm sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-xl font-normal text-cream">Jam Operasional</h3>
        <span className="flex items-center gap-2 rounded-full border border-cream/12 px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.16em] uppercase">
          <span className="relative flex h-2 w-2">
            <span
              className={`absolute inline-flex h-full w-full rounded-full ${
                isOpen ? 'animate-ping bg-sage-400' : 'bg-caramel'
              }`}
            />
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ${
                isOpen ? 'bg-sage-400' : 'bg-caramel'
              }`}
            />
          </span>
          <span className={isOpen ? 'text-sage-300' : 'text-caramel'}>
            {isOpen ? 'Lagi buka' : 'Sudah tutup'}
          </span>
        </span>
      </div>

      <dl className="mt-5 space-y-2.5">
        {SITE.hours.map((row) => (
          <div
            key={row.day}
            className="flex items-baseline gap-3 border-b border-cream/5 pb-2.5 last:border-0 last:pb-0"
          >
            <dt className="text-sm text-cream/60">{row.day}</dt>
            <span className="dotted-leader h-3 flex-1 text-cream" />
            <dd className="font-display text-sm whitespace-nowrap text-gold">{row.time}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="rounded-[2rem] border border-cream/10 bg-espresso-800/60 p-6 backdrop-blur-sm sm:p-7">
      <h3 className="font-display text-xl font-normal text-cream">Mampir ke Kami</h3>

      <div className="mt-5 flex gap-4">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream/8 text-sage-300 ring-1 ring-cream/10">
          <MapPin className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-cream/45 uppercase">
            Alamat
          </p>
          <p className="mt-1.5 text-[0.95rem] leading-relaxed text-cream/85">
            {SITE.addressLine1}
            <br />
            {SITE.addressLine2}
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-4">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream/8 text-sage-300 ring-1 ring-cream/10">
          <Phone className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-cream/45 uppercase">
            Telepon & WhatsApp
          </p>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-1.5 inline-block text-[0.95rem] text-cream/85 transition-colors hover:text-gold"
          >
            {SITE.phoneLabel}
          </a>
        </div>
      </div>

      <div className="mt-6 border-t border-cream/8 pt-5">
        <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-cream/45 uppercase">
          Ikuti cerita kami
        </p>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {SITE.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.id]
            return (
              <motion.a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-cream/12 text-cream/70 transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-espresso-900"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function MapCard() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-cream/10">
      <svg viewBox="0 0 800 340" className="h-full w-full" role="img" aria-label="Peta lokasi Hellow Coffee di Kota Serang">
        <rect width="800" height="340" fill="#FAEAE0" />
        <g fill="#F3D5C2">
          <rect x="40" y="34" width="180" height="110" rx="14" />
          <rect x="250" y="34" width="150" height="70" rx="14" />
          <rect x="470" y="24" width="200" height="96" rx="14" />
          <rect x="60" y="210" width="200" height="110" rx="14" />
          <rect x="320" y="230" width="160" height="96" rx="14" />
          <rect x="560" y="200" width="210" height="130" rx="14" />
        </g>
        <path
          d="M0 176h800"
          stroke="#FBF6EF"
          strokeWidth="34"
        />
        <path d="M0 176h800" stroke="#E6A75C" strokeWidth="3" strokeDasharray="22 20" opacity="0.75" />
        <path d="M296 0v340" stroke="#FBF6EF" strokeWidth="26" />
        <path d="M540 0v340" stroke="#FBF6EF" strokeWidth="20" />
        <path
          d="M0 300c120-30 210 10 320-16s210-46 320-14c60 18 110 16 160 4v66H0Z"
          fill="#D9A083"
          opacity="0.55"
        />
        <g fill="#C4835E" opacity="0.85">
          <circle cx="120" cy="150" r="12" />
          <circle cx="170" cy="146" r="9" />
          <circle cx="640" cy="152" r="11" />
          <circle cx="700" cy="146" r="8" />
          <circle cx="380" cy="318" r="10" />
          <circle cx="470" cy="316" r="8" />
        </g>

        <g transform="translate(400 156)">
          <circle r="46" fill="#C96A4C" opacity="0.18">
            <animate attributeName="r" values="34;56;34" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.28;0;0.28" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <path
            d="M0-36c13.8 0 25 11.2 25 25C25-6 0 22 0 22s-25-28-25-33c0-13.8 11.2-25 25-25Z"
            fill="#1A1512"
          />
          <circle cy="-11" r="9" fill="#E6A75C" />
        </g>
        <text
          x="400"
          y="220"
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, serif"
          fontSize="24"
          fill="#1F1A16"
        >
          Hellow Coffee
        </text>
        <text
          x="400"
          y="244"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fill="#5C534A"
        >
          Kota Serang
        </text>
      </svg>

      <div className="flex flex-col gap-4 border-t border-cream/10 bg-espresso-800/70 p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cream/8 text-gold ring-1 ring-cream/10">
            <MapPin className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-cream/45 uppercase">
              Lokasi
            </p>
            <p className="mt-1 text-sm text-cream/85">{SITE.addressFull}</p>
          </div>
        </div>

        <MagneticButton
          variant="light"
          href={SITE.mapsUrl}
          className="!px-5 !py-3 text-sm"
          showArrow
        >
          Buka di Google Maps
        </MagneticButton>
      </div>
    </div>
  )
}

export default function ContactFooter() {
  return (
    <footer id="kontak" className="grain relative overflow-hidden bg-espresso-900 pt-24 pb-10 text-cream md:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-sage-600/25 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-caramel/15 blur-[130px]"
      />

      <div className="container-x relative">
        <Reveal className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.22em] text-sage-300 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
            Kontak & Lokasi
          </span>
          <h2 className="max-w-3xl text-balance font-display text-[2.4rem] leading-[1.04] font-light sm:text-5xl lg:text-[3.8rem]">
            Duduk dulu, kita seduhkan yang <span className="italic text-gold">terbaik</span>.
          </h2>
          <p className="max-w-xl text-[1.02rem] leading-relaxed text-cream/60">
            Untuk rombongan, tanya menu, atau pesan tempat — langsung hubungi kami lewat
            WhatsApp di bawah.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-2">
          <Reveal>
            <HoursCard />
          </Reveal>

          <Reveal delay={0.1}>
            <ContactInfo />
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <MapCard />
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-cream/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <button
            type="button"
            onClick={() => scrollToSection('beranda')}
            className="group flex items-center gap-3 text-left"
          >
            <img
              src="/images/logo-hellow.jpg"
              alt="Logo Hellow Coffee"
              className="h-10 w-10 rounded-xl object-cover ring-1 ring-cream/15"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-semibold text-cream">Hellow</span>
              <span className="mt-1 text-[0.6rem] font-medium tracking-[0.34em] text-cream/45 uppercase">
                Coffee
              </span>
            </span>
          </button>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="group inline-flex items-center gap-1 text-sm text-cream/55 transition-colors hover:text-cream"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-[0.7rem] tracking-[0.16em] text-cream/40 uppercase">
            <Clock className="h-4 w-4" />
            10.00 – 22.00 WIB
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-cream/8 pt-6 text-[0.78rem] text-cream/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name} · {SITE.addressLine1}. Seluruh hak cipta
            dilindungi.
          </p>
          <p className="flex items-center gap-2">
            Dibuat dengan
            <span className="text-caramel" aria-hidden="true">
              ☕
            </span>
            di Kota Serang
          </p>
        </div>
      </div>
    </footer>
  )
}
