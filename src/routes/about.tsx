import { createFileRoute } from '@tanstack/react-router'
import { Heart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { InquiryForm } from '@/components/site/inquiry-form'
import { PageHero, SectionHeading } from '@/components/site/page-hero'
import { contactFields, newsletterFields } from '@/data/forms'
import { cdn, links } from '@/data/site'

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [{ title: 'About me · BabyBluJ Productions' }] }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who, why, what?"
        title={
          <>
            About <span className="text-neon">me.</span>
          </>
        }
        image="/img/site/about-bg.png"
        aside={
          <img
            src={cdn('/img/site/about-portrait.png', 640, { h: 700, fit: 'cover', position: 'top' })}
            alt="Portrait of BabyBluJ"
            width={640}
            height={700}
            className="mx-auto w-full max-w-sm rounded-3xl border border-border glow-pink"
          />
        }
        actions={
          <Button asChild className="rounded-full glow-cyan">
            <a href={links.patreon} target="_blank" rel="noopener noreferrer">
              <Heart /> Subscribe on Patreon
            </a>
          </Button>
        }
      >
        <p>
          I&apos;m a family girl who loves to sing, and a signed singer with WallRecordings! I&apos;m a
          transgender female who also streams. Most of my graphics are done using AI. You can try AI
          for yourself at{' '}
          <a className="text-primary underline" href="https://huggingface.co/spaces" target="_blank" rel="noopener noreferrer">
            huggingface.co/spaces
          </a>
          !
        </p>
        <p>
          We all have hard times, and I aim to help others in their hardships. That&apos;s how this all
          got started! So please take a look around and see what I have found to help you shop smarter.
        </p>
        <p>Subscribe to my Patreon to get shout outs at the end of my lives!</p>
      </PageHero>

      <section className="mx-auto grid max-w-content gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6">
        {['/img/site/about-gallery-1.png', '/img/site/about-gallery-2.png'].map((src) => (
          <img
            key={src}
            src={cdn(src, 900, { h: 600, fit: 'cover' })}
            alt=""
            loading="lazy"
            className="aspect-[3/2] w-full rounded-2xl border border-border object-cover"
          />
        ))}
      </section>

      <section className="mx-auto max-w-content px-4 py-8 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-8">
            <SectionHeading eyebrow="Contact" title="Talk to me." className="mb-0">
              Have questions about pricing or a product? Fill out the form and I will get back to you
              promptly. You can also ask me to help find you the best deal!
            </SectionHeading>
            <div className="rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="mb-1 font-display font-semibold">Email updates</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Subscribe here for email updates of new services.
              </p>
              <InquiryForm
                formName="newsletter"
                fields={newsletterFields}
                submitLabel="Subscribe"
                successMessage="Thank you for subscribing!"
                className="border-0 bg-transparent p-0 sm:p-0"
              />
            </div>
          </div>
          <InquiryForm
            formName="contact"
            fields={contactFields}
            submitLabel="Submit & call me!"
            successMessage="Thank you for getting in touch! Call cost varies."
          />
        </div>
      </section>
    </>
  )
}
