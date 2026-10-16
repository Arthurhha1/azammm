import { MARQUEE_WORDS } from '../../data/facilities.js'

export default function Marquee() {
  const run = [...MARQUEE_WORDS, ...MARQUEE_WORDS]

  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-cream/10 bg-espresso-950 py-5"
    >
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center gap-10">
            {run.map((word, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-10 font-display text-lg font-light tracking-tight text-cream/70 sm:text-2xl"
              >
                {word}
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
