import { createFileRoute } from '@tanstack/react-router'

import { InquiryForm } from '@/components/site/inquiry-form'
import { PageHero } from '@/components/site/page-hero'
import { skinFields } from '@/data/forms'
import { cdn } from '@/data/site'

export const Route = createFileRoute('/custom-skin')({
  head: () => ({ meta: [{ title: 'Custom Minecraft Skins · BabyBluJ Productions' }] }),
  component: CustomSkinPage,
})

function CustomSkinPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom skins · $5"
        title={
          <>
            Want a <span className="text-neon">custom skin?</span>
          </>
        }
        image="/img/site/mc-bg-2.png"
        aside={
          <img
            src={cdn('/img/site/mc-skin.png', 400)}
            alt="Example custom Minecraft skin"
            width={211}
            height={444}
            className="mx-auto h-80 w-auto"
          />
        }
      >
        <p>
          Give me a description of what you want and I will make it for you! For $5 I will make a custom
          skin you can use on any Minecraft world. The price includes the skin with one edit (if needed).
          Start below and we will go through the details.
        </p>
      </PageHero>
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6">
        <InquiryForm formName="custom-skin" fields={skinFields} submitLabel="Request my skin" />
      </section>
    </>
  )
}
