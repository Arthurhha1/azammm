import { motion } from 'framer-motion'
import { MENU_CATEGORIES } from '../data/menu.js'
import SectionHeading from './ui/SectionHeading.jsx'
import MagneticButton from './ui/MagneticButton.jsx'
import { ArrowUpRight, Coffee, Sparkles, Leaf, Utensils } from './ui/Icons.jsx'
import { SITE } from '../data/site.js'

const ICONS = {
  coffee: Coffee,
  noncoffee: Leaf,
  food: Utensils,
  snack: Sparkles,
}

const SPANS = {
  coffee: 'sm:col-span-2 lg:col-span-3 lg:row-span-2',
  noncoffee: 'lg:col-span-3',
  food: 'lg:col-span-3',
  snack: 'sm:col-span-2 lg:col-span-6',
}

const GLOWS = {
  gold: 'from-gold/35',
  sage: 'from-sage-400/35',
  caramel: 'from-caramel/35',
  cream: 'from-cream/25',
}

function MenuCard({ category, index }) {
  const Icon = ICONS[category.id] || Coffee
  const featured = category.id === 'coffee'

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] border border-cream/10 bg-espresso-800/70 p-6 transition-colors duration-500 hover:border-gold/40 md:p-8 ${SPANS[category.id]}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${GLOWS[category.accent]} to-transparent blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -bottom-10 h-40 w-40 rounded-full border border-cream/5"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${GLOWS[category.accent]} to-espresso-700 text-cream ring-1 ring-cream/15`}
          >
            <Icon className="h-5.5 w-5.5" />
          </span>
          <div>
            <p className="text-[0.66rem] font-semibold tracking-[0.2em] text-sage-400 uppercase">
              {category.kicker}
            </p>
            <h3 className="mt-1 font-display text-2xl leading-tight font-normal text-cream md:text-[1.7rem]">
              {category.name}
            </h3>
          </div>
        </div>

        {category.badge && (
          <span className="hidden shrink-0 rounded-full bg-gold px-3 py-1 text-[0.62rem] font-bold tracking-[0.14em] text-espresso-900 uppercase sm:inline-block">
            {category.badge}
          </span>
        )}
      </div>

      <p className="relative mt-4 max-w-md text-sm leading-relaxed text-cream/55">
        {category.description}
      </p>

      <ul
        className={`relative mt-6 flex-1 ${
          featured
            ? 'flex flex-col justify-center gap-4'
            : category.id === 'food'
              ? 'grid content-start gap-x-12 gap-y-4 sm:grid-cols-2'
              : 'space-y-3.5'
        }`}
      >
        {category.items.map((item, i) => (
          <li
            key={item.name}
            className="transition-transform duration-500 ease-out group-hover:translate-x-1.5"
            style={{ transitionDelay: `${i * 45}ms` }}
          >
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[1.05rem] font-normal text-cream/95">
                {item.name}
              </span>
              <span className="dotted-leader h-3 flex-1 text-cream" />
              <span className="font-display text-[1.05rem] font-normal whitespace-nowrap text-gold">
                {item.price}
              </span>
            </div>
            <p className="mt-0.5 text-[0.78rem] text-cream/45">{item.desc}</p>
          </li>
        ))}
      </ul>

      {category.promo && (
        <div className="relative mt-7 overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-r from-gold/25 via-caramel/15 to-transparent p-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -right-8 h-32 w-32 rounded-full border border-gold/30"
          />
          <div className="relative flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-gold uppercase">
                {category.promo.kicker}
              </p>
              <p className="mt-1.5 font-display text-xl font-normal text-cream">
                {category.promo.title}
              </p>
              <p className="mt-1 text-xs text-cream/55">{category.promo.desc}</p>
            </div>
            <div className="text-right">
              <span className="block text-xs text-cream/40 line-through">{category.promo.was}</span>
              <span className="font-display text-3xl font-normal text-gold">
                {category.promo.price}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="relative mt-7 flex items-center justify-between gap-4 border-t border-cream/10 pt-5">
        <span className="text-[0.7rem] tracking-[0.16em] text-cream/45 uppercase">
          {category.items.length} pilihan
        </span>
        <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-sage-300 transition-colors duration-300 group-hover:text-gold">
          Pesan di meja
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.article>
  )
}

export default function MenuSection() {
  return (
    <section id="menu" className="grain relative overflow-hidden bg-espresso-900 py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-sage-600/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-caramel/15 blur-[120px]"
      />

      <div className="container-x relative">
        <SectionHeading
          theme="dark"
          eyebrow="Menu Andalan"
          title={
            <>
              Empat seri yang <span className="italic text-gold">selalu</span> jadi alasan orang
              balik lagi
            </>
          }
          description="Harga bersahabat, porsi jujur. Diracik setiap pagi dengan biji yang baru di-roasting — tidak pernah disimpan lama."
          action={
            <MagneticButton
              variant="outlineLight"
              showArrow
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Pesan via WhatsApp
            </MagneticButton>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-5">
          {MENU_CATEGORIES.map((category, index) => (
            <MenuCard key={category.id} category={category} index={index} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-cream/10 bg-espresso-800/50 px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-sm text-cream/55">
            Semua menu tersedia panas maupun dingin sesuai varian. Harga sesuai menu asli
            Hellow Coffee.
          </p>
          <span className="shrink-0 rounded-full border border-cream/15 px-4 py-2 text-[0.7rem] tracking-[0.18em] text-sage-300 uppercase">
            Menu asli · Hellow
          </span>
        </div>
      </div>
    </section>
  )
}
