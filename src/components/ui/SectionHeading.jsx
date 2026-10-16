import Reveal from './Reveal.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  action = null,
  className = '',
}) {
  const isDark = theme === 'dark'
  const center = align === 'center'

  return (
    <div className={className}>
      <div
        className={`flex flex-col gap-8 ${center ? 'items-center text-center' : ''} lg:flex-row lg:items-end lg:justify-between`}
      >
        <Reveal className={`flex flex-col gap-5 ${center ? 'items-center' : ''} lg:max-w-3xl`}>
          {eyebrow && (
            <span
              className={`inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.22em] uppercase ${
                isDark
                  ? 'border-cream/15 bg-cream/5 text-sage-300'
                  : 'border-ink/10 bg-white/70 text-sage-700'
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
              {eyebrow}
            </span>
          )}

          <h2
            className={`text-balance font-display text-[2.3rem] leading-[1.05] font-light sm:text-5xl lg:text-[3.4rem] ${
              isDark ? 'text-cream' : 'text-ink'
            }`}
          >
            {title}
          </h2>

          {description && (
            <p
              className={`max-w-xl text-[1.02rem] leading-relaxed ${
                isDark ? 'text-cream/60' : 'text-ink-soft'
              } ${center ? 'mx-auto' : ''}`}
            >
              {description}
            </p>
          )}
        </Reveal>

        {action && <Reveal delay={0.12} className="shrink-0">{action}</Reveal>}
      </div>
    </div>
  )
}
