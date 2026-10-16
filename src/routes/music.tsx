import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Download, Play } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { YoutubeIcon } from '@/components/site/brand-icons'
import { PageHero } from '@/components/site/page-hero'
import { cdn, links, songs } from '@/data/site'

export const Route = createFileRoute('/music')({
  head: () => ({ meta: [{ title: 'Music · BabyBluJ Productions' }] }),
  component: MusicPage,
})

function MusicPage() {
  return (
    <>
      <PageHero
        eyebrow="BabyBluJ Music"
        title={
          <>
            Music made with <span className="text-neon">my lyrics!</span>
          </>
        }
        image="/img/site/music-bg.jpeg"
        actions={
          <>
            <Button asChild size="lg" className="rounded-full glow-cyan">
              <a href={links.suno} target="_blank" rel="noopener noreferrer">
                Like &amp; share on Suno
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={links.youtubePlaylist} target="_blank" rel="noopener noreferrer">
                <YoutubeIcon className="size-4" /> YouTube playlist
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full">
              <a href={links.downloads} target="_blank" rel="noopener noreferrer">
                <Download /> Song &amp; other downloads
              </a>
            </Button>
          </>
        }
      >
        <p>
          Any and all music here uses my lyrics. If you like the songs, please show support on
          suno.com/@babybluj.
        </p>
      </PageHero>

      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <ul className="grid gap-8 md:grid-cols-2">
          {songs.map((song, i) => (
            <li key={song.youtubeId} className={i === 0 ? 'md:col-span-2' : undefined}>
              <SongPlayer {...song} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

/** Shows cover art until clicked, then swaps in the YouTube embed. */
function SongPlayer({ title, youtubeId, image }: { title: string; youtubeId: string; image: string }) {
  const [playing, setPlaying] = useState(false)
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card/60">
      <div className="relative aspect-video bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 size-full"
            aria-label={`Play ${title}`}
          >
            <img src={cdn(image, 1200)} alt="" loading="lazy" className="size-full object-cover" />
            <span className="absolute inset-0 grid place-items-center bg-background/20 transition-colors group-hover:bg-background/5 motion-reduce:transition-none">
              <span className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground glow-cyan">
                <Play className="size-7 translate-x-0.5" />
              </span>
            </span>
          </button>
        )}
      </div>
      <h2 className="p-5 font-display text-lg font-semibold">{title}</h2>
    </article>
  )
}
