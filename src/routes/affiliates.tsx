import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Check, Copy } from 'lucide-react'
import { toast } from 'sonner'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageHero, SectionHeading } from '@/components/site/page-hero'
import { SmartLink } from '@/components/site/smart-link'
import { affiliates, cdn, maniology } from '@/data/site'

export const Route = createFileRoute('/affiliates')({
  head: () => ({ meta: [{ title: 'Affiliates · BabyBluJ Productions' }] }),
  component: AffiliatesPage,
})

const CODE = 'BabyBluJ'

function AffiliatesPage() {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(CODE)
      setCopied(true)
      toast.success('Code copied')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error(`Could not copy. The code is ${CODE}`)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Shop smarter"
        title={
          <>
            <span className="text-neon">Affiliates!</span>
          </>
        }
        actions={
          <Button size="lg" variant="outline" className="rounded-full font-mono" onClick={copy}>
            {copied ? <Check /> : <Copy />} Use code “{CODE}”
          </Button>
        }
      >
        <p>
          Using these links to make your purchase is the best way to help me while getting your normal
          needs! Use “BabyBluJ” to get 5%+ off. The code works at Road Trip, Dubby, and Baked Bags.
        </p>
      </PageHero>

      <section className="mx-auto max-w-content px-4 py-16 sm:px-6">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {affiliates.map((a) => (
            <li key={a.name}>
              <SmartLink
                href={a.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 transition-colors hover:border-primary/60 motion-reduce:transition-none"
              >
                <div className="grid h-32 place-items-center bg-white/95 p-5">
                  <img src={cdn(a.logo, 400)} alt={`${a.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="flex items-center justify-between gap-2 p-4">
                  <span className="font-medium">{a.name}</span>
                  {a.code && <Badge className="bg-accent text-accent-foreground">Code</Badge>}
                </div>
              </SmartLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading eyebrow="Save on these as well" title="Make your nails stand out with Lexa" />
        <div className="grid items-center gap-8 rounded-3xl border border-border bg-card/60 p-8 md:grid-cols-[auto_1fr]">
          <img src={cdn(maniology.image, 500)} alt="Maniology nail designs" width={260} height={260} className="size-56 rounded-2xl object-cover" />
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground">
              Looking to spice up how your nails look? Want to get more creative in your designs? Looking
              for a simple fix? Here is your new favorite nail design shop! Use{' '}
              <strong className="text-foreground">{maniology.code}</strong> for 10% off.
            </p>
            <Button asChild className="w-fit rounded-full">
              <a href={maniology.href} target="_blank" rel="noopener noreferrer">Check out the designs</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
