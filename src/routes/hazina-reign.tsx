import { createFileRoute } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import { InquiryForm } from '@/components/site/inquiry-form'
import { PageHero, SectionHeading } from '@/components/site/page-hero'
import { hazinaFields } from '@/data/forms'
import { cdn, hazinaGallery } from '@/data/site'

export const Route = createFileRoute('/hazina-reign')({
  head: () => ({ meta: [{ title: 'Hazina Reign Crafts · BabyBluJ Productions' }] }),
  component: HazinaPage,
})

function HazinaPage() {
  return (
    <>
      <PageHero
        eyebrow="Hazina Reign"
        title={
          <>
            Hand crafting <span className="text-neon">for fun!</span>
          </>
        }
        image="/img/site/cosmic-bg.jpeg"
        aside={
          <img
            src={cdn('/img/site/hazina.png', 600)}
            alt="Hazina Reign logo"
            width={500}
            height={500}
            className="mx-auto w-full max-w-xs rounded-3xl glow-pink"
          />
        }
        actions={
          <Button asChild className="rounded-full glow-cyan">
            <a href="#inquire">Ask about an item</a>
          </Button>
        }
      >
        <p>
          From hand made derpy stuffed animals, free form bags, &amp; kids blankets! Contact me using the
          form below if you see something you like or want to discuss an idea you have.
        </p>
      </PageHero>

      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Gallery" title="Things I've made" />
        <ul className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {hazinaGallery.map((src, i) => (
            <li key={src} className="mb-4 break-inside-avoid">
              <img
                src={cdn(src, 600)}
                alt={`Hand made item ${i + 1}`}
                loading="lazy"
                className="w-full rounded-2xl border border-border"
              />
            </li>
          ))}
        </ul>
      </section>

      <section id="inquire" className="mx-auto max-w-content scroll-mt-24 px-4 sm:px-6">
        <SectionHeading eyebrow="Order" title="Talk to Hazina">
          Have questions about pricing or products? If inquiring about an item, please let me know which
          one in the box below.
        </SectionHeading>
        <InquiryForm formName="hazina-inquiry" fields={hazinaFields} />
      </section>
    </>
  )
}
