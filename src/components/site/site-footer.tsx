import { Link } from '@tanstack/react-router'
import { Link2, MessageCircle } from 'lucide-react'

import { DiscordIcon, GithubIcon, YoutubeIcon } from '@/components/site/brand-icons'
import { brand, cdn, links } from '@/data/site'

const socials = [
  { label: 'Discord', href: links.discord, icon: DiscordIcon },
  { label: 'WhatsApp group', href: links.whatsapp, icon: MessageCircle },
  { label: 'YouTube', href: links.youtubeChannel, icon: YoutubeIcon },
  { label: 'GitHub', href: links.github, icon: GithubIcon },
  { label: 'Blu Browser', href: links.bluBrowser, icon: Link2 },
]

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={cdn('/img/site/logo.png', 112)}
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-full"
            />
            <p className="font-display font-semibold">{brand.name}</p>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">{brand.tagline}</p>
          <ul className="flex gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary motion-reduce:transition-none"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <FooterCol
          title="Explore"
          items={[
            ['Home Binger™', '/projects/home-binger'],
            ['All projects', '/projects'],
            ['Music', '/music'],
            ['Minecraft Realm', '/minecraft'],
            ['Affiliates', '/affiliates'],
          ]}
        />
        <FooterCol
          title="Info"
          items={[
            ['About me', '/about'],
            ['FAQs', '/faq'],
            ['Weddings', '/weddings'],
            ['BluConnect Cards', '/bluconnect-cards'],
            ['Back to top', '#top'],
          ]}
        />
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} BluJ Productions. Made with 💙</p>
          <p>{brand.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold tracking-widest text-accent uppercase">{title}</p>
      <ul className="flex flex-col gap-2 text-sm">
        {items.map(([label, href]) => (
          <li key={label}>
            {href.startsWith('#') ? (
              <a href={href} className="text-foreground/80 hover:text-primary">
                {label}
              </a>
            ) : (
              <Link to={href as never} className="text-foreground/80 hover:text-primary">
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
