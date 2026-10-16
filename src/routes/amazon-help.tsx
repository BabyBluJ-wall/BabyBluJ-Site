import { createFileRoute } from '@tanstack/react-router'

import { InquiryForm } from '@/components/site/inquiry-form'
import { PageHero } from '@/components/site/page-hero'
import { amazonFields } from '@/data/forms'
import { amazonTerms, cdn } from '@/data/site'

export const Route = createFileRoute('/amazon-help')({
  head: () => ({ meta: [{ title: 'Amazon Help · BabyBluJ Productions' }] }),
  component: AmazonHelpPage,
})

function AmazonHelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Find the deal"
        title={
          <>
            Amazon <span className="text-neon">help!</span>
          </>
        }
        aside={
          <img
            src={cdn('/img/site/aff-amazon.jpeg', 800)}
            alt="Amazon"
            width={750}
            height={500}
            className="w-full rounded-3xl border border-border"
          />
        }
      >
        <p>
          Have questions about Amazon items? Looking for a better price? Let me know what you&apos;re
          looking for below and I can help simplify the search!
        </p>
        <p>What do I get out of it, you ask? As an Amazon Associate I earn from qualifying purchases.</p>
      </PageHero>
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6">
        <InquiryForm formName="amazon-help" fields={amazonFields} submitLabel="Find my deal" />
        <div className="mt-10 rounded-2xl border border-border bg-card/60 p-6 text-sm">
          <h2 className="mb-2 font-display text-lg font-semibold">Terms of service</h2>
          <p className="text-muted-foreground">There are a few things I&apos;d like to share for transparency:</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {amazonTerms.map((t) => (
              <li key={t.label}>
                <a href={t.href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
