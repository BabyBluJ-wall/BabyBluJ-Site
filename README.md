# BabyBluJ Productions

The official site for BabyBluJ Productions, rebuilt from the original Softr site. It is the home of
**Home Binger™**, a self-hosted, walkable 3D video store for your home lab
([GitHub](https://github.com/BabyBluJ-wall/Home-Binger)), and every other BabyBluJ project and service:
BluConnect Cards, weddings, music, the Minecraft Realm, custom skins, Discord work, Hazina Reign crafts,
affiliates, and socials.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home: hero, Home Binger feature, all projects, Hazina, streams, support links |
| `/projects` | Every project, Home Binger first |
| `/projects/home-binger` | Full Home Binger showcase with rooms, watch parties, install steps, downloads |
| `/about` | About me, contact form, email updates signup |
| `/weddings` | Officiant / DJ / singer packages, virtual weddings, registry, rings, inquiry form |
| `/bluconnect-cards` | NFC business cards and order form |
| `/hazina-reign` | Hand-made crafts gallery and inquiry form |
| `/music` | Songs (click-to-play YouTube), Suno, playlist, downloads |
| `/minecraft` | Realm join link + copyable code, friend links, gallery |
| `/custom-skin` | $5 custom Minecraft skin request form |
| `/discord-work` | Custom Discord server work and request form |
| `/affiliates` | Partner links, copyable discount code, Maniology |
| `/amazon-help` | Amazon deal-finding request form and terms |
| `/faq` | FAQ articles |

Old Softr URLs (`/about-me`, `/f-a-q-s-`, `/affiliate`, `/amazon-affiliate`, `/minecraft-realm`,
`/coming-soon`) redirect to their new pages via `netlify.toml`.

## Tech

- TanStack Start (React 19, file-based routing), Vite, TypeScript
- Tailwind CSS 4 with shadcn/ui components
- Netlify Forms for every inquiry, contact, and signup form
- Netlify Image CDN for resized WebP images

## Run locally

```bash
pnpm install
netlify dev        # full Netlify emulation (Image CDN), or:
pnpm dev           # plain Vite on http://localhost:3000
```

Form submissions only work on a deployed Netlify site; view them in the Netlify dashboard under **Forms**.

## Editing content

Nearly all copy, links, prices, songs, and project cards live in `src/data/site.ts`. FAQ articles are in
`src/data/faq.ts`, and form fields are in `src/data/forms.ts` (mirror any field change in
`public/__forms.html`). Images are in `public/img/`.

## Next ideas

- Set up email notifications per form in Netlify (Forms → Notifications). For example, send
  `hazina-inquiry` to Hazina and the rest to BabyBluJ.
- Add the Minecraft mod/pack list and Realm backup download once the list is finalized.
- Add more GitHub projects to `projects` in `src/data/site.ts` as they are published.
