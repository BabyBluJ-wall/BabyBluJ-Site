import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { GithubIcon } from '@/components/site/brand-icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageHero } from '@/components/site/page-hero'
import { SmartLink } from '@/components/site/smart-link'
import { cdn, links, projects } from '@/data/site'

export const Route = createFileRoute('/projects/')({
  head: () => ({ meta: [{ title: 'Projects · BabyBluJ Productions' }] }),
  component: ProjectsPage,
})

function ProjectsPage() {
  const [flagship, ...rest] = projects
  return (
    <>
      <PageHero
        eyebrow="BluJ Productions"
        title={
          <>
            Things I&apos;ve <span className="text-neon">built</span>
          </>
        }
        actions={
          <Button asChild variant="outline" className="rounded-full">
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon /> Follow on GitHub
            </a>
          </Button>
        }
      >
        <p>
          Open-source software, products, music, and community spaces. Every project here is
          owner-directed and owner-designed.
        </p>
      </PageHero>

      <section className="mx-auto max-w-content px-4 py-16 sm:px-6">
        <Link
          to="/projects/home-binger"
          className="group grid overflow-hidden rounded-3xl border border-border bg-card/60 transition-colors hover:border-primary/60 md:grid-cols-[1.4fr_1fr] glow-cyan motion-reduce:transition-none"
        >
          <img
            src={cdn(flagship.image, 1200)}
            alt="Inside the Home Binger store: neon-lit aisles of VHS and DVD covers"
            className="aspect-video size-full object-cover"
          />
          <div className="flex flex-col justify-center gap-4 p-8">
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">{flagship.kicker}</p>
            <h2 className="font-display text-3xl font-bold">{flagship.name}</h2>
            <p className="text-muted-foreground">{flagship.summary}</p>
            <ul className="flex flex-wrap gap-2">
              {flagship.tags.map((t) => (
                <li key={t}>
                  <Badge variant="secondary">{t}</Badge>
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-1 font-medium text-primary">
              {flagship.cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
            </span>
          </div>
        </Link>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <li key={p.slug}>
              <SmartLink
                href={p.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 transition-colors hover:border-primary/60 motion-reduce:transition-none"
              >
                <img
                  src={cdn(p.image, 720, { h: 450, fit: 'cover' })}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <p className="text-xs font-semibold tracking-widest text-accent uppercase">{p.kicker}</p>
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <p className="flex-1 text-sm text-muted-foreground">{p.summary}</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <li key={t}>
                        <Badge variant="outline" className="text-xs">{t}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </SmartLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
