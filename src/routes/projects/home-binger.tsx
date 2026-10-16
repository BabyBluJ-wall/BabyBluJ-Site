import { createFileRoute } from '@tanstack/react-router'
import { Download } from 'lucide-react'

import { DiscordIcon, GithubIcon } from '@/components/site/brand-icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageHero, SectionHeading } from '@/components/site/page-hero'
import { cdn, homeBinger, links } from '@/data/site'

export const Route = createFileRoute('/projects/home-binger')({
  head: () => ({
    meta: [
      { title: 'Home Binger™ · A walkable 3D video store for your home lab' },
      { name: 'description', content: homeBinger.description },
      { property: 'og:image', content: '/img/home-binger/og-home-binger.png' },
    ],
  }),
  component: HomeBingerPage,
})

function HomeBingerPage() {
  return (
    <>
      <PageHero
        eyebrow={homeBinger.tagline}
        title={
          <>
            📼 Home <span className="text-neon">Binger™</span>
          </>
        }
        actions={
          <>
            <Button asChild size="lg" className="rounded-full glow-cyan">
              <a href={links.homeBingerReleases} target="_blank" rel="noopener noreferrer">
                <Download /> Download v{homeBinger.version}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={links.homeBingerRepo} target="_blank" rel="noopener noreferrer">
                <GithubIcon /> View on GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full">
              <a href={links.homeBingerDiscord} target="_blank" rel="noopener noreferrer">
                <DiscordIcon /> Join the store Discord
              </a>
            </Button>
          </>
        }
        aside={
          <img
            src="/img/home-binger/preview.gif"
            alt="Animated walkthrough of the Home Binger store"
            width={960}
            height={540}
            className="w-full rounded-2xl border border-border glow-pink"
          />
        }
      >
        <p>{homeBinger.description}</p>
        <p className="text-sm">
          Free to use and modify, not for sale. Licensed {homeBinger.license}. Windows app, Docker, or Node.js.
        </p>
      </PageHero>

      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="What's inside" title="Four connected spaces under one roof" />
        <div className="flex flex-col gap-16">
          {homeBinger.rooms.map((room, i) => (
            <article
              key={room.title}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <img
                src={cdn(room.image, 1100)}
                alt={`Home Binger ${room.title.toLowerCase()}`}
                loading="lazy"
                className={`w-full rounded-2xl border border-border ${i % 2 ? 'md:order-2' : ''}`}
              />
              <div className="flex flex-col gap-3">
                <p className="text-4xl" aria-hidden>{room.emoji}</p>
                <h3 className="font-display text-2xl font-bold">{room.title}</h3>
                <p className="text-muted-foreground">{room.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="👀 Watch together" title="Three ways to throw a watch party" className="mb-8" />
            <ul className="flex flex-col gap-4">
              {homeBinger.watchTogether.map((w) => (
                <li key={w.title} className="rounded-2xl border border-border bg-background/60 p-5">
                  <p className="font-semibold text-primary">{w.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{w.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={cdn('/img/home-binger/watch-party.png', 1100)}
            alt="The Watch-with-me panel showing a live room code and viewer list"
            loading="lazy"
            className="w-full self-center rounded-2xl border border-border"
          />
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="🚀 Quick start" title="Up and running in minutes">
          Stock the shelves from Plex, Jellyfin, or a plain folder. Anyone on your Wi-Fi can open it
          in a browser, with nothing to install.
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          {homeBinger.install.map((step) => (
            <div key={step.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="font-display text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.body}</p>
              <code className="mt-auto block overflow-x-auto rounded-lg bg-background px-3 py-2 text-xs text-primary">
                {step.code}
              </code>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card/60 p-6">
            <h3 className="mb-4 font-display text-lg font-semibold">Controls</h3>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
              {homeBinger.controls.map(([key, what]) => (
                <div key={key} className="contents">
                  <dt>
                    <kbd className="rounded-md border border-border bg-background px-2 py-1 font-mono text-xs">{key}</kbd>
                  </dt>
                  <dd className="text-muted-foreground">{what}</dd>
                </div>
              ))}
            </dl>
          </div>
          <img
            src={cdn('/img/home-binger/settings.png', 900)}
            alt="Home Binger theme settings with graphics dial and photosensitive comfort switch"
            loading="lazy"
            className="w-full rounded-2xl border border-border"
          />
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 sm:px-6">
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-border bg-gradient-to-br from-neon-cyan/15 via-card/60 to-neon-pink/20 p-10 text-center md:p-14">
          <Badge variant="outline" className="border-accent/50 text-accent">Free · Open source · {homeBinger.license}</Badge>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Cut the cord. Open the store.</h2>
          <p className="max-w-reading text-muted-foreground">
            Made with 💙 by BluJ Productions. Grab the latest release, star the repo, and come hang out
            in the store Discord.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full glow-cyan">
              <a href={links.homeBingerReleases} target="_blank" rel="noopener noreferrer">
                <Download /> Download
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={links.homeBingerRepo} target="_blank" rel="noopener noreferrer">
                <GithubIcon /> Star on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
