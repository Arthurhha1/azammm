import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Reveal from './ui/Reveal.jsx'
import { Quote, MapPin, Leaf, Users, Coffee, Sparkles } from './ui/Icons.jsx'
import { SITE } from '../data/site.js'

const VALUES = [
  { icon: Leaf, title: 'Asri', desc: 'Taman gantung & tanaman di tiap sudut' },
  { icon: Users, title: 'Santai', desc: 'Tempat berkumpul anak muda & warga' },
  { icon: Coffee, title: 'Lokal', desc: 'Kopi dan snack Nusantara, harga terjangkau' },
  { icon: Sparkles, title: 'Ramah', desc: 'Barista yang hafal pesananmu' },
]

const FACTS = [
  { value: '500+', label: 'Pengunjung tiap minggu' },
  { value: '30+', label: 'Menu kopi, makanan & dessert' },
  { value: '100%', label: 'Racikan fresh tiap hari' },
]

const PHOTOS = [
  '/images/cerita/cerita-1.jpg',
  '/images/cerita/cerita-3.jpg',
  '/images/cerita/cerita-4.jpg',
  '/images/cerita/cerita-5.jpg',
  '/images/cerita/cerita-6.jpg',
  '/images/cerita/cerita-7.jpg',
]

function StorySlider() {
  const [[index, direction], setIndex] = useState([0, 0])
  const [paused, setPaused] = useState(false)

  const go = useCallback((dir) => {
    setIndex(([prev]) => [(prev + dir + PHOTOS.length) % PHOTOS.length, dir])
  }, [])

  const jump = useCallback(
    (i) => {
      setIndex(([prev]) => (i === prev ? [prev, 0] : [i, i > prev ? 1 : -1]))
    },
    [],
  )

  useEffect(() => {
    if (paused) return
    const t = window.setInterval(() => go(1), 4500)
    return () => window.clearInterval(t)
  }, [go, paused])

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="grain grain-light relative overflow-hidden rounded-[2.5rem] border border-ink/10 shadow-lift"
    >
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-espresso-900 sm:aspect-[11/9]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={index}
            src={PHOTOS[index]}
            alt={`Suasana Nawn Coffee ${index + 1}`}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 120 : -120, scale: 1.06 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction >= 0 ? -120 : 120, scale: 1.03 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) go(1)
              else if (info.offset.x > 80) go(-1)
            }}
            className="absolute inset-0 h-full w-full cursor-grab object-cover active:cursor-grabbing"
            draggable={false}
          />
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso-950/45 via-transparent to-transparent" />

        <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            {PHOTOS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => jump(i)}
                aria-label={`Foto ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? 'w-7 bg-cream' : 'w-1.5 bg-cream/50 hover:bg-cream/80'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto sebelumnya"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-espresso-900 backdrop-blur transition hover:bg-cream"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Foto berikutnya"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-espresso-900 backdrop-blur transition hover:bg-cream"
            >
              ›
            </button>
          </div>
        </div>

        <span className="absolute top-4 right-4 rounded-full bg-espresso-950/60 px-3 py-1.5 font-display text-xs text-cream backdrop-blur">
          {String(index + 1).padStart(2, '0')} / {String(PHOTOS.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

export default function Story() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '5%'])
  const textY = useTransform(scrollYProgress, [0, 1], [24, -24])

  return (
    <section
      id="cerita"
      ref={ref}
      className="grain relative overflow-hidden bg-sage-100 py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-24 h-[30rem] w-[30rem] rounded-full bg-cream/80 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="relative">
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <StorySlider />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute -right-2 -bottom-6 max-w-[16rem] rounded-2xl border border-ink/10 bg-espresso-900 p-5 text-cream shadow-lift sm:-right-6"
            >
              <div className="flex items-center gap-2 text-gold">
                <MapPin className="h-4 w-4" />
                <span className="text-[0.66rem] font-semibold tracking-[0.2em] uppercase">
                  Sejak {SITE.since}
                </span>
              </div>
              <p className="mt-2 font-display text-[1.35rem] leading-snug font-light">
                Bojong Neros, Pamarayan
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-cream/55">
                Jauh dari hiruk-pikuk, dekat dari rumah.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -top-6 -left-2 hidden rounded-full border border-ink/10 bg-cream px-5 py-3 text-[0.7rem] font-semibold tracking-[0.16em] text-ink uppercase shadow-soft sm:block"
            >
              Geser untuk lihat suasana
            </motion.div>
          </div>

          <Reveal delay={0.35} className="mt-16">
            <dl className="grid grid-cols-3 gap-5 border-t border-ink/15 pt-6">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-display text-3xl font-light text-ink">{fact.value}</dt>
                  <dd className="mt-1.5 text-[0.74rem] leading-snug text-ink-soft">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <motion.div style={{ y: textY }} className="flex flex-col gap-7">
          <Reveal className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.22em] text-sage-700 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
              Cerita Kami
            </span>
            <h2 className="font-display text-[2.3rem] leading-[1.06] font-light text-ink sm:text-5xl lg:text-[3.4rem]">
              Kedai kecil di Bojong Neros yang jadi{' '}
              <span className="italic text-caramel">rumah kedua</span> banyak orang
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 text-[1.02rem] leading-relaxed text-ink-soft">
              <p>
                Nawn Coffee lahir dari keinginan sederhana: punya tempat nongkrong yang enak di
                Pamarayan, tanpa harus jauh-jauh ke kota. Bangunan dua lantai kami kini jadi tempat
                favorit anak muda — ada area indoor industrial, teras outdoor hijau, dan sudut atas
                yang adem.
              </p>
              <p>
                Geser foto di samping untuk lihat suasana aslinya: pengunjung yang balik tiap minggu,
                meja kayu yang selalu penuh obrolan, dan kopi yang diracik fresh setiap hari.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <figure className="relative overflow-hidden rounded-3xl border border-ink/10 bg-cream p-6 pl-14 shadow-soft">
              <Quote className="absolute top-6 left-6 h-7 w-7 text-caramel/70" />
              <blockquote className="font-display text-xl leading-snug font-light text-ink italic sm:text-[1.4rem]">
                “Kami tidak ingin kafe yang jauh dan ribet. Kami ingin kafe yang terasa seperti
                rumah — hanya saja kopinya jauh lebih enak.”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso-900 font-display text-sm text-cream">
                  NW
                </span>
                <span className="text-sm text-ink-soft">
                  <span className="font-semibold text-ink">Tim Nawn Coffee</span> · Barista &
                  Pendiri
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid grid-cols-2 gap-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={0.25 + i * 0.07}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group h-full rounded-2xl border border-ink/10 bg-cream/80 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-caramel/40 hover:bg-cream"
                >
                  <value.icon className="h-5 w-5 text-sage-600 transition-colors duration-300 group-hover:text-caramel" />
                  <h3 className="mt-3 font-display text-lg font-normal text-ink">{value.title}</h3>
                  <p className="mt-1 text-[0.8rem] leading-snug text-ink-soft">{value.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
