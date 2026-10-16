import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Download, Heart, Shirt, ShoppingBag, Sparkles } from 'lucide-react'

import { GithubIcon } from '@/components/site/brand-icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/site/page-hero'
import { SmartLink } from '@/components/site/smart-link'
import { brand, cdn, homeBinger, links, projects, streams } from '@/data/site'

export const Route = createFileRoute('/')({
  component: Home,
})

const quickLinks = [
  { label: 'Custom Discord Work', href: '/discord-work' },
  { label: 'Shop my Affiliates', href: '/affiliates' },
  { label: 'BluConnect Cards', href: '/bluconnect-cards' },
  { label: 'Weddings', href: '/weddings' },
  { label: 'Shop Merch', href: links.merch },
]

function Home() {
  return (
    <>
      <Hero />
      <HomeBingerFeature />
      <ProjectsGrid />
      <HazinaFeature />
      <Streams />
      <Support />
    </>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/60">
      <video
        className="absolute inset-0 -z-20 size-full object-cover opacity-30 motion-reduce:hidden"
        src="/img/site/hero.mp4"
        poster={cdn('/img/site/cosmic-bg.jpeg', 1600)}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div className="starfield absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      <div className="mx-auto grid max-w-content items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.3fr_1fr] md:py-28">
        <div className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit gap-1.5 border-primary/50 px-3 py-1 text-primary">
            <Sparkles className="size-3.5" /> New: Home Binger {homeBinger.version}
          </Badge>
          <h1 className="font-display text-5xl leading-[1.05] font-extrabold tracking-tight text-balance md:text-7xl">
            <span className="text-neon">BabyBluJ</span> Productions
          </h1>
          <p className="max-w-reading text-lg text-muted-foreground md:text-xl">{brand.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full glow-cyan">
              <Link to="/projects/home-binger">
                Meet Home Binger™ <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/projects">See all projects</Link>
            </Button>
          </div>
          <ul className="mt-2 flex flex-wrap gap-2" aria-label="Quick links">
            {quickLinks.map((q) => (
              <li key={q.label}>
                <SmartLink
                  href={q.href}
                  className="inline-block rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent motion-reduce:transition-none"
                >
                  {q.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-neon-cyan/30 via-transparent to-neon-pink/40 blur-3xl" />
          <img
            src={cdn('/img/site/logo.png', 640)}
            alt="BabyBluJ logo: a figure with flowing blue hair over a trans pride flag"
            width={512}
            height={512}
            className="w-full rounded-full glow-pink"
          />
        </div>
      </div>
    </section>
  )
}

function HomeBingerFeature() {
  return (
    <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
      <div className="overflow-hidden rounded-3xl border border-border bg-card/60 glow-pink">
        <div className="grid lg:grid-cols-[1.25fr_1fr]">
          <div className="relative">
            <img
              src="/img/home-binger/preview.gif"
              alt="Walking through the Home Binger 3D video store"
              width={960}
              height={540}
              className="aspect-video size-full object-cover"
            />
            <span className="absolute top-4 left-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold tracking-widest text-accent uppercase backdrop-blur">
              Flagship project
            </span>
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 lg:p-10">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Part of The Cord Cut Co-Op™
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Home Binger™
            </h2>
            <p className="text-muted-foreground">{homeBinger.description}</p>
            <ul className="flex flex-wrap gap-2">
              {['Plex', 'Jellyfin', 'Watch parties', 'Windows · Docker · Node.js'].map((t) => (
                <li key={t}>
                  <Badge variant="secondary">{t}</Badge>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full glow-cyan">
                <a href={links.homeBingerReleases} target="_blank" rel="noopener noreferrer">
                  <Download /> Download free
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/projects/home-binger">Take the tour</Link>
              </Button>
              <Button asChild variant="ghost" className="rounded-full">
                <a href={links.homeBingerRepo} target="_blank" rel="noopener noreferrer">
                  <GithubIcon /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsGrid() {
  const others = projects.filter((p) => p.slug !== 'home-binger')
  return (
    <section className="mx-auto max-w-content px-4 py-12 sm:px-6">
      <SectionHeading eyebrow="Projects & services" title="Everything I make, in one place">
        Products, services, music, and community spaces from BluJ Productions.
      </SectionHeading>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((p) => (
          <li key={p.slug}>
            <SmartLink
              href={p.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 transition-colors hover:border-primary/60 motion-reduce:transition-none"
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={cdn(p.image, 720, { h: 450, fit: 'cover' })}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="text-xs font-semibold tracking-widest text-accent uppercase">{p.kicker}</p>
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="flex-1 text-sm text-muted-foreground">{p.summary}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {p.cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                </span>
              </div>
            </SmartLink>
          </li>
        ))}
      </ul>
    </section>
  )
}

function HazinaFeature() {
  return (
    <section className="mx-auto max-w-content px-4 py-16 sm:px-6">
      <div className="relative isolate grid items-center gap-8 overflow-hidden rounded-3xl border border-border p-8 md:grid-cols-[auto_1fr] md:p-12">
        <img
          src={cdn('/img/site/cosmic-bg.jpeg', 1400)}
          alt=""
          className="absolute inset-0 -z-10 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <img
          src={cdn('/img/site/hazina.png', 400)}
          alt="Hazina Reign crafts logo"
          width={200}
          height={200}
          className="size-40 rounded-2xl md:size-48"
        />
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-3xl font-bold">Check Hazina&apos;s page for hand crafted items</h2>
          <p className="max-w-reading text-muted-foreground">
            From hand made derpy stuffed animals, freeform bags &amp; kids blankets!
          </p>
          <Button asChild className="w-fit rounded-full" variant="secondary">
            <Link to="/hazina-reign">
              Check her out <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function Streams() {
  return (
    <section className="mx-auto max-w-content px-4 py-16 sm:px-6">
      <SectionHeading eyebrow="Lives & socials" title="Catch me live">
        I stream games, music, and hangouts. Patreon subscribers get shout outs at the end of my lives.
      </SectionHeading>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {streams.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/60 motion-reduce:transition-none"
            >
              <span className="flex items-center gap-3">
                <span className="size-3 rounded-full" style={{ background: s.color }} aria-hidden />
                <span>
                  <span className="block font-semibold">{s.label}</span>
                  <span className="text-sm text-muted-foreground">{s.handle}</span>
                </span>
              </span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Support() {
  const items = [
    { icon: Heart, title: 'Patreon', body: 'Subscribe for shout outs and early news.', href: links.patreon },
    { icon: ShoppingBag, title: 'Merch', body: 'Wear the brand. Spreadshop store.', href: links.merch },
    { icon: Shirt, title: 'Clothes wishlist', body: 'Want to get me a cute outfit?', href: links.clothesWishlist },
    { icon: Sparkles, title: 'Studio wishlist', body: 'Help replace or upgrade my setup.', href: links.studioWishlist },
  ]
  return (
    <section className="mx-auto max-w-content px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-border bg-gradient-to-br from-neon-cyan/10 via-card/60 to-neon-pink/15 p-8 md:p-12">
        <SectionHeading eyebrow="Support the work" title="Keep the lights neon" className="mb-8">
          Home Binger is free and not for sale. If you like what I make, here is how to help.
        </SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body, href }) => (
            <li key={title}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-background/60 p-5 transition-colors hover:border-accent motion-reduce:transition-none"
              >
                <Icon className="size-5 text-accent" />
                <span className="font-semibold">{title}</span>
                <span className="text-sm text-muted-foreground">{body}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
