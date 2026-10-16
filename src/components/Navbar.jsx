import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { NAV_LINKS, SITE } from '../data/site.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { useScrolled } from '../hooks/useScrolled.js'
import { scrollToSection } from '../hooks/useSmoothScroll.js'
import { MenuIcon, CloseIcon, ArrowUpRight } from './ui/Icons.jsx'
import MagneticButton from './ui/MagneticButton.jsx'

const sectionIds = NAV_LINKS.map((link) => link.id)

function LogoMark({ className = 'h-10 w-10' }) {
  return (
    <img
      src="/images/logo-nawn.jpg"
      alt="Logo Nawn Coffee"
      className={`${className} rounded-xl object-cover ring-1 ring-ink/10`}
    />
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(30)
  const active = useActiveSection(sectionIds)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })

  const handleNav = (id) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ scaleX: progress }}
        className="h-[3px] origin-left bg-gradient-to-r from-sage-500 via-caramel to-gold"
      />

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'border-b border-ink/8 bg-cream/85 backdrop-blur-xl supports-[backdrop-filter]:bg-cream/70'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
          <button
            type="button"
            onClick={() => handleNav('beranda')}
            className="group flex items-center gap-3"
            aria-label="Kembali ke beranda"
          >
            <LogoMark className="h-9 w-9 transition-transform duration-500 group-hover:-rotate-6 md:h-10 md:w-10" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-semibold tracking-tight text-ink">
                Nawn
              </span>
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.34em] text-ink-soft">
                Coffee
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 rounded-full border border-ink/10 bg-white/60 p-1 backdrop-blur-md lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNav(link.id)}
                  className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-espresso-900"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-cream' : 'text-ink-soft hover:text-ink'}`}>
                    {link.label}
                  </span>
                </button>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <MagneticButton
              variant="primary"
              className="!px-6 !py-2.5 text-sm"
              onClick={() => handleNav('kontak')}
            >
              Hubungi Kami
            </MagneticButton>
          </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 bg-white/70 text-ink backdrop-blur-md transition hover:bg-espresso-900 hover:text-cream lg:hidden"
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={open}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
                  transition={{ duration: 0.22 }}
                >
                  {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -16, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-ink/10 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-5">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  type="button"
                  onClick={() => handleNav(link.id)}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.055, duration: 0.4 }}
                  className="flex items-center justify-between border-b border-ink/5 py-3.5 text-left font-display text-2xl font-light text-ink last:border-0"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 text-caramel" />
                </motion.button>
              ))}
              <div className="pt-4 text-sm text-ink-soft">
                {SITE.addressLine1} · {SITE.addressLine2}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
