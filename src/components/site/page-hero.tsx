import type { ReactNode } from 'react'

import { cdn } from '@/data/site'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  children?: ReactNode
  image?: string
  actions?: ReactNode
  aside?: ReactNode
  className?: string
}

/** Page header with an optional dimmed background image and a side slot. */
export function PageHero({ eyebrow, title, children, image, actions, aside, className }: PageHeroProps) {
  return (
    <section className={cn('relative isolate overflow-hidden border-b border-border/60', className)}>
      {image ? (
        <img
          src={cdn(image, 1800)}
          alt=""
          className="absolute inset-0 -z-20 size-full object-cover opacity-35"
        />
      ) : null}
      <div className="starfield absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div
        className={cn(
          'mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 md:py-24',
          aside && 'items-center md:grid-cols-[1.2fr_1fr]',
        )}
      >
        <div className="flex flex-col gap-5">
          {eyebrow && (
            <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">{eyebrow}</p>
          )}
          <h1 className="font-display text-4xl leading-tight font-bold tracking-tight text-balance md:text-6xl">
            {title}
          </h1>
          {children && (
            <div className="max-w-reading text-lg text-muted-foreground [&_p+p]:mt-3">{children}</div>
          )}
          {actions && <div className="mt-2 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {aside}
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mb-10 flex max-w-reading flex-col gap-3', className)}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {children && <div className="text-muted-foreground">{children}</div>}
    </div>
  )
}
