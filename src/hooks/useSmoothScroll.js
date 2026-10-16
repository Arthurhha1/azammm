import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/** @type {import('lenis').default | null} */
let lenisRef = null

export function useSmoothScroll() {
  const rafRef = useRef(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return undefined

    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false,
    })
    lenisRef = lenis

    const raf = (time) => {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }
    rafRef.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafRef.current)
      lenis.destroy()
      lenisRef = null
    }
  }, [])
}

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenisRef) {
    lenisRef.scrollTo(el, { offset: -72, duration: 1.15 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
