import { motion } from 'framer-motion'
import { FACILITIES } from '../data/facilities.js'
import SectionHeading from './ui/SectionHeading.jsx'
import Reveal from './ui/Reveal.jsx'
import ArtScene from './ui/ArtScene.jsx'
import { ArrowUpRight } from './ui/Icons.jsx'

const SPANS = {
  wide: 'sm:col-span-2 lg:col-span-2',
  full: 'sm:col-span-2 lg:col-span-3',
  normal: '',
}

const ASPECT = {
  wide: 'aspect-[2/1]',
  full: 'aspect-[16/10]',
  normal: 'aspect-square',
}

export default function Facilities() {
  return (
    <section id="fasilitas" className="grain relative overflow-hidden bg-cream py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-sage-200/70 blur-3xl"
      />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Fasilitas & Suasana"
          title={
            <>
              Enam sudut yang bikin kamu <span className="italic text-caramel">betah</span>{' '}
              berjam-jam
            </>
          }
          description="Bukan cuma soal kopi. Ini soal tempat yang membuatmu ingin tinggal lebih lama — dan kembali besok."
          action={
            <div className="flex items-center gap-4 rounded-full border border-ink/10 bg-white/70 px-5 py-3 backdrop-blur">
              <span className="font-display text-3xl font-light text-ink">6</span>
              <span className="text-[0.72rem] leading-tight tracking-[0.14em] text-ink-soft uppercase">
                Sudut
                <br />
                favorit
              </span>
            </div>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {FACILITIES.map((item, index) => (
            <Reveal
              key={item.id}
              delay={(index % 3) * 0.08}
              amount={0.2}
              className={SPANS[item.span]}
            >
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-soft transition-colors duration-500 hover:border-caramel/40"
              >
                <div className={`relative overflow-hidden ${ASPECT[item.span]}`}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                    />
                  ) : (
                    <ArtScene
                      scene={item.scene}
                      className="absolute inset-0 h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

                  <span className="absolute top-4 left-4 rounded-full bg-cream/90 px-3 py-1.5 text-[0.62rem] font-bold tracking-[0.16em] text-espresso-900 uppercase backdrop-blur">
                    {item.tag}
                  </span>

                  <span className="absolute right-4 bottom-4 font-display text-sm text-cream/70">
                    {String(index + 1).padStart(2, '0')} / 06
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl leading-snug font-normal text-ink md:text-2xl">
                      {item.title}
                    </h3>
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/12 text-ink transition-all duration-400 group-hover:border-caramel group-hover:bg-caramel group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
