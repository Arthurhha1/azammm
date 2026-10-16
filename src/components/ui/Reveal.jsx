import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 30,
  duration = 0.75,
  once = true,
  amount = 0.25,
  ...rest
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function RevealWords({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.07,
  as: Tag = 'span',
}) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  const MotionTag = motion[Tag] || motion.span

  return (
    <MotionTag className={className} aria-label={text}>
      {words.flatMap((word, i) => [
        <span key={`${word}-${i}`} className={`inline-block overflow-hidden ${wordClassName}`}>
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: '110%', opacity: 0 }}
            animate={reduce ? {} : { y: '0%', opacity: 1 }}
            transition={{ duration: 0.85, delay: delay + i * stagger, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>,
        ...(i < words.length - 1 ? [' '] : []),
      ])}
    </MotionTag>
  )
}

export { EASE }
