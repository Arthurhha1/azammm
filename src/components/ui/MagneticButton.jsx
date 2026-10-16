import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { ArrowRight } from './Icons.jsx'

const VARIANTS = {
  primary:
    'bg-espresso-900 text-cream hover:bg-espresso-800 shadow-[0_18px_40px_-18px_rgba(26,21,18,0.75)]',
  accent: 'bg-caramel text-white hover:bg-caramel-light shadow-[0_18px_40px_-18px_rgba(201,123,74,0.85)]',
  light: 'bg-cream text-espresso-900 hover:bg-white shadow-[0_18px_40px_-18px_rgba(0,0,0,0.5)]',
  outline:
    'border border-ink/20 text-ink hover:bg-ink hover:text-cream hover:border-ink bg-transparent',
  outlineLight:
    'border border-cream/25 text-cream hover:bg-cream hover:text-espresso-900 bg-transparent',
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  showArrow = false,
  className = '',
  type = 'button',
  strength = 0.28,
  ...rest
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 240, damping: 18, mass: 0.35 })
  const sy = useSpring(y, { stiffness: 240, damping: 18, mass: 0.35 })

  const handleMove = (event) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = event.clientX - (rect.left + rect.width / 2)
    const offsetY = event.clientY - (rect.top + rect.height / 2)
    x.set(offsetX * strength)
    y.set(offsetY * strength)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const classes = [
    'group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-[0.95rem] font-medium tracking-tight transition-colors duration-300',
    VARIANTS[variant],
    className,
  ].join(' ')

  const inner = (
    <>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {showArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        )}
      </span>
    </>
  )

  const motionProps = {
    ref,
    style: { x: sx, y: sy },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    whileTap: reduce ? undefined : { scale: 0.96 },
    className: classes,
    ...rest,
  }

  if (href) {
    return (
      <motion.a href={href} onClick={onClick} {...motionProps}>
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {inner}
    </motion.button>
  )
}
