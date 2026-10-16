import { createFileRoute } from '@tanstack/react-router'
import { Check, Nfc } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { InquiryForm } from '@/components/site/inquiry-form'
import { PageHero, SectionHeading } from '@/components/site/page-hero'
import { bluconnectFields } from '@/data/forms'
import { cdn } from '@/data/site'

export const Route = createFileRoute('/bluconnect-cards')({
  head: () => ({ meta: [{ title: 'BluConnect Cards · BabyBluJ Productions' }] }),
  component: BluConnectPage,
})

function BluConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Tap to share"
        title={
          <>
            BluConnect <span className="text-neon">Cards!</span>
          </>
        }
        aside={
          <img
            src={cdn('/img/site/bluconnect.png', 800)}
            alt="BluConnect NFC business card"
            width={800}
            height={800}
            className="mx-auto w-full max-w-md rounded-3xl border border-border glow-cyan"
          />
        }
      >
        <p>
          Want a better solution to sharing your website? How about a better business card? With this
          one, you only need one. Every time you want to share it, just tap!
        </p>
      </PageHero>

      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <div className="mx-auto flex max-w-md flex-col gap-5 rounded-3xl border border-primary/50 bg-card/60 p-8 glow-cyan">
          <Nfc className="size-8 text-primary" />
          <h2 className="font-display text-xl font-semibold">Perfect for beginners</h2>
          <p>
            <span className="font-display text-5xl font-bold">$10</span>
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            {[
              '1 website for all your links through unit.link, or link your own site!',
              'Option of 1, 5, or 10 NFC cards',
            ].map((f) => (
              <li key={f} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {f}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="rounded-full">
            <a href="#order">Buy now</a>
          </Button>
        </div>
      </section>

      <section id="order" className="mx-auto max-w-content scroll-mt-24 px-4 sm:px-6">
        <SectionHeading eyebrow="Order or ask" title="Let's talk about it.">
          Have questions about pricing, plans, or the service? Fill out the form and I will be in touch
          shortly.
        </SectionHeading>
        <InquiryForm formName="bluconnect-inquiry" fields={bluconnectFields} />
      </section>
    </>
  )
}
