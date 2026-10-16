import { createFileRoute } from '@tanstack/react-router'
import { Check, Gem, Gift } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InquiryForm } from '@/components/site/inquiry-form'
import { PageHero, SectionHeading } from '@/components/site/page-hero'
import { weddingFields } from '@/data/forms'
import { cdn, virtualWeddingStates, weddingLinks, weddingTiers } from '@/data/site'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/weddings')({
  head: () => ({ meta: [{ title: 'Weddings · BabyBluJ Productions' }] }),
  component: WeddingsPage,
})

function WeddingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ordained officiant · DJ · Live singer"
        title={
          <>
            Wedding <span className="text-neon">deals!</span>
          </>
        }
        image="/img/site/wedding-bg.jpeg"
        actions={
          <Button asChild size="lg" className="rounded-full glow-cyan">
            <a href="#inquire">Book your day</a>
          </Button>
        }
      >
        <p>
          Pricing that fits every lifestyle. I am ordained, so if you want me to be a part of your big
          day you can order my services! Whether you just want a small wedding or something big, I
          have the option for you.
        </p>
      </PageHero>

      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {weddingTiers.map((tier) => (
            <li
              key={tier.name}
              className={cn(
                'relative flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-6',
                tier.featured && 'border-accent/70 glow-pink',
              )}
            >
              {tier.featured && (
                <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground">Most booked</Badge>
              )}
              <h2 className="font-display text-lg font-semibold">{tier.name}</h2>
              <p>
                {tier.prefix && <span className="block text-xs text-muted-foreground">{tier.prefix}</span>}
                <span className="font-display text-4xl font-bold">{tier.price}</span>{' '}
                <span className="text-sm text-muted-foreground">{tier.note}</span>
              </p>
              <ul className="flex flex-1 flex-col gap-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={tier.featured ? 'default' : 'outline'} className="rounded-full">
                <a href="#inquire">Get started</a>
              </Button>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-primary/40 bg-card/60 p-6">
          <h2 className="font-display text-xl font-semibold">Ask me about virtual weddings!</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Due to individual state solemnization (marriage) laws, I am only available to provide these
            services to couples residing in these states:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {virtualWeddingStates.map((s) => (
              <li key={s}>
                <Badge variant="secondary">{s}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-content gap-6 px-4 sm:px-6 md:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-8">
          <img src={cdn('/img/site/wedding-registry.png', 700)} alt="" loading="lazy" className="w-full rounded-xl" />
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
            <Gift className="size-5 text-accent" /> Wedding registry with Amazon
          </h2>
          <p className="text-sm text-muted-foreground">
            Set up your registry to easily share a gift wishlist for your wedding.
          </p>
          <Button asChild variant="secondary" className="w-fit rounded-full">
            <a href={weddingLinks.registry} target="_blank" rel="noopener noreferrer">Set up wedding registry</a>
          </Button>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-8">
          <div className="grid h-40 place-items-center rounded-xl bg-white/95 p-6">
            <img src={cdn('/img/site/jewlr.png', 400)} alt="Jewlr" loading="lazy" className="max-h-16" />
          </div>
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
            <Gem className="size-5 text-primary" /> Still need rings?
          </h2>
          <p className="text-sm text-muted-foreground">
            Check out JEWLR: custom-made, personalized jewelry online at below retail prices. Fast,
            easy, affordable, and fun.
          </p>
          <Button asChild variant="secondary" className="w-fit rounded-full">
            <a href={weddingLinks.jewlr} target="_blank" rel="noopener noreferrer">Shop now</a>
          </Button>
        </div>
      </section>

      <section id="inquire" className="mx-auto max-w-content scroll-mt-24 px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Inquire" title="Let's talk about it.">
          Have questions about pricing, packages, or availability? Fill out the form and I will be in
          touch shortly.
        </SectionHeading>
        <InquiryForm formName="wedding-inquiry" fields={weddingFields} />
      </section>
    </>
  )
}
