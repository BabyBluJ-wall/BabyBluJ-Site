// All site content lives here so pages stay presentational.
// Links and copy were carried over from the original Softr site.

export const brand = {
  name: 'BabyBluJ Productions',
  shortName: 'BabyBluJ',
  tagline:
    'Crafting unforgettable moments, designing timeless websites, and partnering for profits. Your forever, our commitment.',
  disclaimer: '*This site features AI generated art*',
}

/** Netlify Image CDN URL for a file in /public. */
export function cdn(
  path: string,
  w: number,
  opts: { h?: number; fit?: 'cover' | 'contain'; position?: string } = {},
) {
  const params = new URLSearchParams({ url: path, w: String(w), fm: 'webp' })
  if (opts.h) params.set('h', String(opts.h))
  if (opts.fit) params.set('fit', opts.fit)
  if (opts.position) params.set('position', opts.position)
  return `/.netlify/images?${params.toString()}`
}

export interface NavLink {
  label: string
  href: string
  description?: string
}

export interface NavGroup {
  label: string
  links: NavLink[]
}

export const links = {
  discord: 'https://discord.gg/5NgWy8k4TA',
  whatsapp: 'https://chat.whatsapp.com/DWHlo4qyOG54D3xjdSGk1m',
  youtubeChannel: 'https://www.youtube.com/channel/UCy2OtT7wUYH0n2IePX9V-rQ',
  youtubePlaylist:
    'https://www.youtube.com/playlist?list=PLkrar3ZS9l9CqkFlRhJuDUZPSnmOH_CFT',
  twitch: 'https://www.twitch.tv/babyblujofficial',
  trovo: 'https://trovo.live/s/BabyBluJ',
  kick: 'https://kick.com/babybluj',
  medal: 'https://medal.tv/u/Josie710?invite=ur-MSxNWGcsMzQ4MTY5MDgyLA',
  suno: 'https://suno.com/@babybluj',
  patreon: 'https://patreon.com/BabyBluJ',
  downloads: 'https://flow.page/babybluj',
  bluBrowser: 'https://cse.google.com/cse?cx=077d2e35214c14d2c',
  callMe: 'https://www.rentacyberfriend.com/i10vQ4L8zrycecu/',
  merch: 'https://babybluj-merch.myspreadshop.com/',
  clothesWishlist:
    'https://www.amazon.com/hz/wishlist/ls/UEQSW289DXGC?ref_=wl_share',
  studioWishlist:
    'https://www.amazon.com/hz/wishlist/ls/22LYKZID1N88H?ref_=wl_share',
  onlyFans: 'https://onlyfans.com/jocelynblu420',
  saveContact: 'https://dot.cards/babyblujay',
  homeBingerRepo: 'https://github.com/BabyBluJ-wall/Home-Binger',
  homeBingerReleases: 'https://github.com/BabyBluJ-wall/Home-Binger/releases',
  homeBingerDiscord: 'https://discord.gg/pB4HKjQGaX',
  github: 'https://github.com/BabyBluJ-wall',
}

export const navGroups: NavGroup[] = [
  {
    label: 'Projects',
    links: [
      {
        label: 'Home Binger™',
        href: '/projects/home-binger',
        description: 'A walkable 3D video store for your home lab',
      },
      {
        label: 'All projects',
        href: '/projects',
        description: 'Everything BluJ Productions has built',
      },
      {
        label: 'BluConnect Cards',
        href: '/bluconnect-cards',
        description: 'Tap-to-share NFC business cards',
      },
      {
        label: 'Custom Discord Work',
        href: '/discord-work',
        description: 'Servers, bots, and branding',
      },
    ],
  },
  {
    label: 'Services',
    links: [
      {
        label: 'Weddings',
        href: '/weddings',
        description: 'Ordained officiant, DJ, and live singer',
      },
      {
        label: 'Hazina Reign Crafts',
        href: '/hazina-reign',
        description: 'Hand-made derpy plushies, bags, and blankets',
      },
      {
        label: 'Custom Minecraft Skins',
        href: '/custom-skin',
        description: 'Your idea, made into a skin for $5',
      },
      {
        label: 'Call Me!',
        href: links.callMe,
        description: 'Rent my time on video chat',
      },
    ],
  },
  {
    label: 'Music',
    links: [
      { label: 'My Music', href: '/music', description: 'Songs written with my lyrics' },
      { label: 'Suno', href: links.suno, description: 'Like and share my songs' },
      {
        label: 'YouTube',
        href: links.youtubePlaylist,
        description: 'My lyrics playlist',
      },
    ],
  },
  {
    label: 'Lives & Socials',
    links: [
      { label: 'Discord', href: links.discord, description: 'The nest!' },
      { label: 'Twitch', href: links.twitch, description: 'babyblujofficial' },
      { label: 'Trovo', href: links.trovo, description: 'BabyBluJ' },
      { label: 'Kick', href: links.kick, description: 'babybluj' },
      {
        label: 'Watch Clips',
        href: links.medal,
        description: 'See clips from recent game play',
      },
      {
        label: 'Minecraft Realm',
        href: '/minecraft',
        description: 'Play Minecraft on the Realm',
      },
    ],
  },
  {
    label: 'Shop & More',
    links: [
      { label: 'Affiliates', href: '/affiliates', description: 'Save with my partner codes' },
      { label: 'Shop Merch', href: links.merch, description: 'BabyBluJ merch store' },
      {
        label: 'Amazon Help',
        href: '/amazon-help',
        description: 'Tell me what you need, I find the deal',
      },
      {
        label: 'Clothes Wishlist',
        href: links.clothesWishlist,
        description: 'Want to get me a cute outfit? I got some favorites here.',
      },
      {
        label: 'Studio Wishlist',
        href: links.studioWishlist,
        description:
          'Things break. Anything here replaces or upgrades my setup.',
      },
      { label: 'Patreon', href: links.patreon, description: 'Subscribe to my Patreon!' },
      { label: 'Downloads', href: links.downloads, description: 'All downloads available' },
      {
        label: 'Blu Browser',
        href: links.bluBrowser,
        description: 'Unrestricted search hosted by Google, without all the ads',
      },
      {
        label: 'Save Me',
        href: links.saveContact,
        description: 'Save my site and me to your phone as a contact',
      },
      { label: 'Only Fans', href: links.onlyFans, description: 'Hmmmm?! 🤫🤭🤐😈 (18+)' },
    ],
  },
]

export const isExternal = (href: string) => /^https?:\/\//.test(href)

export const streams = [
  { label: 'Twitch', handle: 'babyblujofficial', href: links.twitch, color: '#a970ff' },
  { label: 'Kick', handle: 'babybluj', href: links.kick, color: '#53fc18' },
  { label: 'Trovo', handle: 'BabyBluJ', href: links.trovo, color: '#19d66b' },
  { label: 'YouTube', handle: 'BabyBluJ', href: links.youtubeChannel, color: '#ff3d3d' },
  { label: 'Discord', handle: 'The nest', href: links.discord, color: '#5865f2' },
  { label: 'Medal clips', handle: 'Josie710', href: links.medal, color: '#ffb800' },
]

// ---------- Projects ----------

export interface Project {
  slug: string
  name: string
  kicker: string
  summary: string
  image: string
  href: string
  cta: string
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'home-binger',
    name: 'Home Binger™',
    kicker: 'Flagship · Open source',
    summary:
      'A self-hosted, walkable 3D video store for your home lab. Turn Plex, Jellyfin, or any folder into VHS/DVD shelves with real cover art, plus a movie theater, dance hall, and game room.',
    image: '/img/home-binger/og-home-binger.png',
    href: '/projects/home-binger',
    cta: 'Explore Home Binger',
    tags: ['Three.js', 'WebRTC', 'Plex', 'Jellyfin', 'Docker'],
  },
  {
    slug: 'bluconnect',
    name: 'BluConnect Cards',
    kicker: 'Product',
    summary:
      'A better business card. One NFC card, one tap, and your whole link page is on their phone. Packs of 1, 5, or 10.',
    image: '/img/site/bluconnect.png',
    href: '/bluconnect-cards',
    cta: 'Get your cards',
    tags: ['NFC', 'Link pages', 'From $10'],
  },
  {
    slug: 'music',
    name: 'BabyBluJ Music',
    kicker: 'Music',
    summary:
      'Songs built from my own lyrics. Sugar Rush Chaos, Bubblegum and Bite, The Nice Girl, and more.',
    image: '/img/site/song-2.png',
    href: '/music',
    cta: 'Listen now',
    tags: ['Suno', 'YouTube', 'Lyrics'],
  },
  {
    slug: 'minecraft',
    name: 'The BabyBluJ Realm',
    kicker: 'Community',
    summary:
      'A modded Minecraft Realm you can jump into today, plus custom skins made to order.',
    image: '/img/site/realm-1.png',
    href: '/minecraft',
    cta: 'Join the Realm',
    tags: ['Minecraft', 'Realms', 'Custom skins'],
  },
  {
    slug: 'discord',
    name: 'Custom Discord Work',
    kicker: 'Service',
    summary:
      'Server setup, roles, bots, and branding for your community. Ask in the nest to get on the list.',
    image: '/img/site/discord.png',
    href: '/discord-work',
    cta: 'Learn more',
    tags: ['Discord', 'Community'],
  },
  {
    slug: 'hazina',
    name: 'Hazina Reign Crafts',
    kicker: 'Hand made',
    summary:
      'Hand-made derpy stuffed animals, freeform bags, and kids blankets from Hazina.',
    image: '/img/site/hazina.png',
    href: '/hazina-reign',
    cta: 'See the crafts',
    tags: ['Crochet', 'Plushies', 'Commissions'],
  },
  {
    slug: 'blu-browser',
    name: 'Blu Browser',
    kicker: 'Free tool',
    summary:
      'An unrestricted search page, free to use. Hosted by Google, without all the ads.',
    image: '/img/site/logo.png',
    href: links.bluBrowser,
    cta: 'Open Blu Browser',
    tags: ['Search', 'Free'],
  },
]

// ---------- Home Binger ----------

export const homeBinger = {
  version: '2.1.0',
  license: 'CC BY-NC-SA 4.0',
  tagline: 'The 3D storefront for The CordCut Co-op™',
  description:
    'A self-hosted, walkable 3D video store stocked from your own Plex, Jellyfin, or any folder on your server, with a private movie theater, a neon dance hall, a game room, and watch parties anyone can join from a plain browser link.',
  rooms: [
    {
      title: 'The store',
      emoji: '🏬',
      image: '/img/home-binger/store-entrance.png',
      body: 'A classic video-rental floor: gondola islands, hanging category signs, and cases shoulder-to-shoulder in real VHS, DVD, and CD sizes, wrapped in your actual cover art. The jukebox opens a DJ deck, and the store TV plays anything you pick off a shelf.',
    },
    {
      title: 'The theater',
      emoji: '🎬',
      image: '/img/home-binger/theater.png',
      body: 'A sloped-floor screening room with its own big screen and an 8.2 array (discrete 7.1 on multichannel hardware, HRTF binaural in a headset). Go full screen at native resolution and press G for a TV Guide of thousands of free live channels.',
    },
    {
      title: 'The dance hall',
      emoji: '🪩',
      image: '/img/home-binger/dance-hall.png',
      body: 'A glossy checkerboard floor that pulses with the music, a mirror ball, light rigs that land on the beat, and a full DJ booth with two decks, crossfader, hot cues, loops, and BPM and key detection.',
    },
    {
      title: 'The game room',
      emoji: '🎮',
      image: '/img/home-binger/game-room.png',
      body: 'A battle station behind a rising neon pocket door, with three monitors that actually work: the Discord portal, the music station, and your Steam library.',
    },
  ],
  watchTogether: [
    {
      title: 'In the theater',
      body: 'The host clicks Watch together and the room follows, with gentle drift correction and auto-pause while someone buffers.',
    },
    {
      title: 'Anywhere, any browser',
      body: 'Share a link and a six-character room code. Friends watch live on a phone or laptop, no install and no VPN. Up to six viewers, up to 1440p60.',
    },
    {
      title: 'App to app',
      body: 'Friends running their own Home Binger sync theater screens directly, peer to peer.',
    },
  ],
  install: [
    {
      title: 'Windows app',
      body: 'Grab the newest HomeBinger zip from Releases, unzip, and double-click HomeBinger.exe. Node.js not required.',
      code: 'HomeBinger.exe',
    },
    {
      title: 'Node.js',
      body: 'Unzip the source and start the server.',
      code: 'node server/server.js   # → http://localhost:8181',
    },
    {
      title: 'Docker',
      body: 'Run it on your home server or NAS.',
      code: 'docker compose up -d   # → http://<machine>:8181',
    },
  ],
  controls: [
    ['W A S D', 'Walk (arrow keys work too)'],
    ['Mouse', 'Look around · Q frees / re-grabs it'],
    ['Scroll', 'Zoom: lean into a shelf of covers'],
    ['☰', 'Menu: sorting, themes, sign-in, admin'],
    ['G · F · /', 'TV Guide · full screen · instant search'],
  ],
}

// ---------- Music ----------

export const songs = [
  { title: 'Elevated', youtubeId: 'GA-27deKuRs', image: '/img/site/song-1.png' },
  { title: 'Sugar Rush Chaos', youtubeId: 'YdWV5qG9Teg', image: '/img/site/song-2.png' },
  { title: 'Bubblegum and Bite', youtubeId: 'yt5ki_rHZIg', image: '/img/site/song-3.png' },
  { title: 'The Nice Girl', youtubeId: '5SnMUGuhJ00', image: '/img/site/song-4.png' },
  { title: 'As Much As You Let Me', youtubeId: 'QupbhmMcXYA', image: '/img/site/song-5.png' },
]

// ---------- Weddings ----------

export const weddingTiers = [
  {
    name: 'Basic',
    price: '$150',
    note: '+ gas',
    features: ['BabyBluJ will officiate your wedding'],
  },
  {
    name: 'Minister & DJ',
    price: '$250',
    note: '+ gas',
    features: ['BabyBluJ will officiate', 'BabyBluJ will also DJ the after party'],
    featured: true,
  },
  {
    name: 'Minister & Singer',
    price: '$500',
    note: '+ gas',
    features: [
      'BabyBluJ will officiate',
      'BabyBluJ will also sing live at the after party',
    ],
  },
  {
    name: 'Vow Renewal',
    price: '$120',
    prefix: 'Starting at',
    note: '+ gas',
    features: ['Same offers are available', 'Ask below to find out more'],
  },
]

export const virtualWeddingStates = [
  'Colorado',
  'Pennsylvania',
  'Wisconsin',
  'District of Columbia',
  'Illinois',
  'Nevada',
  'Kansas',
  'Maine',
]

export const weddingLinks = {
  registry: 'https://amzn.to/4h0NTi3',
  jewlr: 'https://jwl.io/r/238b81',
}

// ---------- Affiliates ----------

export const affiliates = [
  { name: 'Road Trip', href: 'https://roadtripco.com/babybluj', logo: '/img/site/aff-roadtrip.png', code: true },
  { name: 'Dubby', href: 'https://www.dubby.gg/discount/BabyBluJ?ref=9x4cd9qu', logo: '/img/site/aff-dubby.avif', code: true },
  { name: 'Baked Bags', href: 'https://www.bakedbags.com/BabyBluJ', logo: '/img/site/aff-bakedbags.png', code: true },
  { name: 'Delta 8 Pro', href: 'https://delta8pro.com/ref/jeremiah.detiege/', logo: '/img/site/aff-delta8pro.png' },
  { name: 'Better Brand', href: 'https://www.trybetterbrand.com/BabyBluJ', logo: '/img/site/aff-betterbrand.png' },
  { name: 'Amazon', href: '/amazon-help', logo: '/img/site/aff-amazon.jpeg' },
  { name: 'Geekvape', href: 'https://store.geekvape.com/?ref=BabyBluJay', logo: '/img/site/aff-geekvape.png' },
  { name: 'Pride Palace', href: 'https://pridepalace.lgbt/BabyBluJ', logo: '/img/site/aff-pridepalace.avif' },
  { name: 'Xidax', href: 'https://www.xidax.com/?xdx=2192&id_campaign=1402', logo: '/img/site/aff-xidax.jpeg' },
  { name: 'Partner deal', href: 'https://www.tkqlhce.com/click-101142290-14039794', logo: '/img/site/aff-partner.png' },
  { name: 'Kryptex', href: 'https://cryptotabbrowser.com/en/23271591/https://www.kryptex.com/?ref=fa3571bc', logo: '/img/site/aff-kryptex.jpeg' },
  { name: 'CryptoTab', href: 'https://cryptotabbrowser.com/landing/63/23271591', logo: '/img/site/aff-cryptotab.jpeg' },
]

export const maniology = {
  href: 'https://maniology.com',
  code: 'LEXTASTIC',
  image: '/img/site/aff-maniology.png',
}

export const amazonTerms = [
  {
    label: 'Amazon conditions',
    href: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GLSBYFE9MGKKQXXM&ie=UTF8',
  },
  {
    label: 'Commission rates',
    href: 'https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ',
  },
  {
    label: 'Associates operating agreement',
    href: 'https://affiliate-program.amazon.com/help/operating/agreement/',
  },
]

// ---------- Minecraft ----------

export const minecraft = {
  realmUrl: 'https://realms.gg/QgKKpSCvbKA',
  realmCode: 'QgKKpSCvbKA',
  friends: [
    { label: 'Add BabyBluJ', href: 'https://launch.minecraft.net/profile/BabyBluJ7480' },
    { label: 'Add TillableChunk', href: 'https://launch.minecraft.net/profile/TillableChunk69' },
  ],
  gallery: [1, 2, 3, 4, 5, 6].map((n) => `/img/site/realm-${n}.png`),
}

// ---------- Hazina ----------

export const hazinaGallery = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
  (n) => `/img/site/hazina-${n}.png`,
)
