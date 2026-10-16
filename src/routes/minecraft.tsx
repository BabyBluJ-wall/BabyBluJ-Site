import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Check, Copy, Gamepad2, UserPlus } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { DiscordIcon } from '@/components/site/brand-icons'
import { PageHero, SectionHeading } from '@/components/site/page-hero'
import { cdn, links, minecraft } from '@/data/site'

export const Route = createFileRoute('/minecraft')({
  head: () => ({ meta: [{ title: 'Minecraft Realm · BabyBluJ Productions' }] }),
  component: MinecraftPage,
})

function MinecraftPage() {
  const [copied, setCopied] = useState(false)

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(minecraft.realmCode)
      setCopied(true)
      toast.success('Realm code copied')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Could not copy. The code is ' + minecraft.realmCode)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="The BabyBluJ Realm"
        title={
          <>
            Want to play <span className="text-neon">Minecraft?</span>
          </>
        }
        image="/img/site/mc-hero.png"
        actions={
          <>
            <Button asChild size="lg" className="rounded-full glow-cyan">
              <a href={minecraft.realmUrl} target="_blank" rel="noopener noreferrer">
                <Gamepad2 /> Click to play
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full font-mono" onClick={copyCode}>
              {copied ? <Check /> : <Copy />} Code: {minecraft.realmCode}
            </Button>
          </>
        }
      >
        <p>Add me as a friend, then join the Realm!</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {minecraft.friends.map((f) => (
            <Button key={f.label} asChild variant="secondary" size="sm" className="rounded-full">
              <a href={f.href} target="_blank" rel="noopener noreferrer">
                <UserPlus /> {f.label}
              </a>
            </Button>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <div className="relative isolate grid items-center gap-8 overflow-hidden rounded-3xl border border-border p-8 md:grid-cols-[auto_1fr] md:p-12">
          <img src={cdn('/img/site/mc-skin-bg.png', 1400)} alt="" className="absolute inset-0 -z-10 size-full object-cover opacity-40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <img src={cdn('/img/site/mc-skin.png', 300)} alt="Example custom Minecraft skin" width={150} height={315} className="mx-auto h-64 w-auto" />
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-3xl font-bold">Want a custom Minecraft skin?</h2>
            <p className="text-muted-foreground">Describe it, and I make it for you. $5 includes the skin and one edit.</p>
            <Button asChild className="w-fit rounded-full">
              <Link to="/custom-skin">Get yours today</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading eyebrow="Gallery" title="Preview of the Realm">
          Want to see your picture of the Realm here? Send it in the Discord server with the coordinates
          it was taken at.
        </SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {minecraft.gallery.map((src, i) => (
            <li key={src}>
              <img
                src={cdn(src, 900, { h: 506, fit: 'cover' })}
                alt={`Screenshot ${i + 1} of the BabyBluJ Realm`}
                loading="lazy"
                className="aspect-video w-full rounded-2xl border border-border object-cover"
              />
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-border bg-card/60 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold">Mods, add-ons &amp; Realm backups</h2>
            <p className="text-sm text-muted-foreground">
              All mods on the Realm come from the Minecraft Marketplace. Ask in the Discord for the
              current pack list and the Realm backup file.
            </p>
          </div>
          <Button asChild variant="secondary" className="shrink-0 rounded-full">
            <a href={links.discord} target="_blank" rel="noopener noreferrer">
              <DiscordIcon className="size-4" /> Join the Discord
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
