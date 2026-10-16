import { createFileRoute } from '@tanstack/react-router'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { PageHero } from '@/components/site/page-hero'
import { faqItems } from '@/data/faq'

export const Route = createFileRoute('/faq')({
  head: () => ({ meta: [{ title: 'FAQs · BabyBluJ Productions' }] }),
  component: FaqPage,
})

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Got a question?"
        title={
          <>
            Frequently asked <span className="text-neon">questions</span>
          </>
        }
        image="/img/site/faq-banner.png"
      >
        <p>
          Got a question? I&apos;ve got answers. If you have other questions, contact me on Discord or
          through the About me page.
        </p>
      </PageHero>
      <section className="mx-auto max-w-reading px-4 py-16 sm:px-6">
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={item.question}
              value={`q-${i}`}
              className="rounded-2xl border border-border bg-card/60 px-5 last:border-b"
            >
              <AccordionTrigger className="text-left font-display text-base">{item.question}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3 text-muted-foreground">
                {item.answer.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  )
}
