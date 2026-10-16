import { createFileRoute } from '@tanstack/react-router'
import { Bot, Palette, ShieldCheck, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DiscordIcon } from '@/components/site/brand-icons'
import { InquiryForm } from '@/components/site/inquiry-form'
import { PageHero, SectionHeading } from '@/components/site/page-hero'
import { discordFields } from '@/data/forms'
import { cdn, links } from '@/data/site'

export const Route = createFileRoute('/discord-work')({
  head: () => ({ meta: [{ title: 'Custom Discord Work · BabyBluJ Productions' }] }),
  component: DiscordWorkPage,
})

const offers = [
  { icon: Users, title: 'Server setup', body: 'Channels, categories, and onboarding that make sense.' },
  { icon: ShieldCheck, title: 'Roles & moderation', body: 'Permissions and safety settings for your community.' },
  { icon: Bot, title: 'Bots', body: 'Welcome messages, reaction roles, stream alerts, and more.' },
  { icon: Palette, title: 'Branding', body: 'Icons, banners, and emotes to match your vibe.' },
]

function DiscordWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Taking requests"
        title={
          <>
            Custom <span className="text-neon">Discord</span> work
          </>
        }
        aside={
          <img
            src={cdn('/img/site/discord.png', 600)}
            alt=""
            width={600}
            height={600}
            className="mx-auto w-full max-w-xs rounded-3xl"
          />
        }
        actions={
          <Button asChild size="lg" className="rounded-full glow-cyan">
            <a href={links.discord} target="_blank" rel="noopener noreferrer">
              <DiscordIcon className="size-4" /> Visit the nest
            </a>
          </Button>
        }
      >
        <p>
          Need a server built or leveled up? I set up Discord communities for streamers, gamers, and
          small businesses. Tell me what you need and I will get back to you with options.
        </p>
      </PageHero>

      <section className="mx-auto max-w-content px-4 py-16 sm:px-6">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rounded-2xl border border-border bg-card/60 p-6">
              <Icon className="mb-3 size-6 text-primary" />
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading eyebrow="Request" title="Tell me about your server" />
        <InquiryForm formName="discord-work" fields={discordFields} submitLabel="Send request" />
      </section>
    </>
  )
}
