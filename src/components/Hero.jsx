import { motion } from 'framer-motion'
import Reveal, { RevealWords, EASE } from './ui/Reveal.jsx'
import MagneticButton from './ui/MagneticButton.jsx'
import { ArrowRight, Star, Wifi, Plug, Leaf, MapPin } from './ui/Icons.jsx'
import { scrollToSection } from '../hooks/useSmoothScroll.js'
import { SITE, STATS } from '../data/site.js'

const floatingBadges = [
  { id: 'wifi', icon: Wifi, pos: '-left-3 top-[15%] sm:-left-7', delay: 0.9, anim: 'float-slow' },
  { id: 'star', icon: Star, pos: 'right-1 top-[6%] sm:-right-6', delay: 1.05, anim: 'float-fast' },
  { id: 'plug', icon: Plug, pos: '-right-3 top-[44%] sm:-right-8', delay: 1.2, anim: 'float-medium' },
  { id: 'leaf', icon: Leaf, pos: 'right-3 bottom-[8%]', delay: 1.35, anim: 'float-slow' },
]

export default function Hero() {
  return (
    <section id="beranda" className="grain relative overflow-hidden bg-cream pt-28 pb-20 md:pt-36 lg:pt-40 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-sage-200/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-gold/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-sage-100/70"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 xl:gap-24">
        <div className="flex flex-col items-start gap-7">
          <Reveal delay={0.05} y={18}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/70 py-1.5 pr-4 pl-1.5 text-[0.72rem] font-semibold tracking-[0.16em] uppercase backdrop-blur">
              <span className="inline-flex h-6 items-center rounded-full bg-espresso-900 px-2.5 text-[0.6rem] text-cream">
                Lokal
              </span>
              {SITE.addressLine1}
            </span>
          </Reveal>

          <h1 className="font-display text-[2.7rem] leading-[1.04] font-light tracking-tight text-ink sm:text-6xl lg:text-[4.2rem] xl:text-[4.8rem]">
            <RevealWords text="Nongkrong Nyaman" delay={0.15} className="block" />
            <RevealWords text="& Kopi Terbaik" delay={0.28} className="block" />
            <RevealWords
              text="di Kota Serang"
              delay={0.41}
              className="block italic text-caramel"
            />
          </h1>

          <Reveal delay={0.5} y={22}>
            <p className="max-w-lg text-[1.05rem] leading-relaxed text-ink-soft">
              Dari Kota Serang, kami menyeduh biji pilihan Nusantara menjadi gelas-gelas hangat
              untuk anak muda, pekerja, dan warga Kota Serang. Duduklah sebentar — kopi dan obrolan
              kami siapkan.
            </p>
          </Reveal>

          <Reveal delay={0.6} y={22} className="flex w-full flex-wrap items-center gap-3.5">
            <MagneticButton variant="primary" showArrow onClick={() => scrollToSection('menu')}>
              Jelajahi Menu
            </MagneticButton>
            <MagneticButton variant="outline" onClick={() => scrollToSection('kontak')}>
              <MapPin className="h-4 w-4" />
              Lokasi & Jam Buka
            </MagneticButton>
          </Reveal>

          <Reveal delay={0.72} y={22} className="mt-2 w-full">
            <dl className="grid w-full max-w-lg grid-cols-3 divide-x divide-ink/10 border-t border-ink/10 pt-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="px-3 first:pl-0 last:pr-0">
                  <dt className="font-display text-2xl font-normal text-ink sm:text-3xl">
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-base text-sage-600">{stat.suffix}</span>
                    )}
                  </dt>
                  <dd className="mt-1 text-[0.72rem] leading-snug text-ink-soft">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
          className="relative mx-auto w-full max-w-[26rem] sm:max-w-[30rem] lg:max-w-none"
        >
          <div className="grain grain-light relative overflow-hidden rounded-[2.5rem] border border-ink/10 bg-sage-100 p-3 shadow-lift sm:p-5">
            <img
              src="/images/parkir.jpg"
              alt="Gedung Hellow Coffee di Kota Serang"
              className="h-[420px] w-full rounded-[2rem] object-cover sm:h-[520px]"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-3 rounded-[2rem] bg-gradient-to-t from-espresso-950/35 via-transparent to-transparent sm:inset-5" />
          </div>

          {floatingBadges.map(({ id, icon: Icon, pos, delay, anim }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay }}
              className={`absolute z-20 ${pos}`}
            >
              <div
                className={`${anim} flex h-14 w-14 items-center justify-center rounded-2xl border border-ink/10 bg-cream/90 text-espresso-900 shadow-soft backdrop-blur-md sm:h-16 sm:w-16`}
              >
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
            </motion.div>
          ))}

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 1.15 }}
            className="absolute -bottom-6 -left-1 z-20 max-w-[15rem] rounded-2xl border border-ink/10 bg-cream/95 p-4 shadow-soft backdrop-blur-md sm:-left-6"
          >
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-2 font-display text-[0.95rem] leading-snug text-ink">
              “Kopinya konsisten, tempatnya adem — kami balik tiap minggu.”
            </blockquote>
            <figcaption className="mt-2 text-[0.7rem] font-medium tracking-wide text-ink-soft uppercase">
              Warga Kota Serang
            </figcaption>
          </motion.figure>
        </motion.div>
      </div>

      <div className="container-x relative mt-16 flex items-center justify-between gap-6 lg:mt-24">
        <button
          type="button"
          onClick={() => scrollToSection('menu')}
          className="group flex items-center gap-3 text-left text-[0.7rem] font-semibold tracking-[0.2em] text-ink-soft uppercase transition-colors hover:text-ink"
        >
          <span className="relative flex h-11 w-7 items-start justify-center rounded-full border border-ink/20 p-1.5">
            <motion.span
              animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="h-2 w-1 rounded-full bg-caramel"
            />
          </span>
          Gulir ke bawah
        </button>

        <div className="hidden items-center gap-3 text-[0.72rem] font-medium tracking-[0.18em] text-ink-soft uppercase sm:flex">
          <span>Senin – Minggu</span>
          <span className="h-px w-10 bg-ink/20" />
          <span className="text-ink">10.00 – 22.00</span>
          <span className="inline-flex h-2 w-2 rounded-full bg-sage-500" />
          <ArrowRight className="h-4 w-4 -rotate-45 text-caramel" />
        </div>
      </div>
    </section>
  )
}
