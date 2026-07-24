import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const captains = [
  {
    name: "Captain Kevin",
    bio: "Originally from the Manasquan River on the Jersey Shore, Captain Kev has been navigating the coastal waters of North Carolina with ease. Constantly learning the shifting sand patterns of the barrier islands. He enjoys cruising with locals, and when he's not running the boat, you'll catch him riding behind on the wakeboard or filming with his drone.",
    image: "/ingested/seaventureswb/services-01.webp",
    alt: "Captain Kevin out on the water near Wrightsville Beach",
  },
  {
    name: "Captain Shawn",
    bio: "Grew up on the rugged coast of Maine and has spent the last six years living and boating on Wrightsville Beach, where life on the water is second nature. Laid-back and easygoing, he brings a calm, welcoming energy to every trip and is excited to show you how to truly live the good life on the water.",
    image: "/ingested/seaventureswb/inquiry-01.webp",
    alt: "Captain Shawn's boat beached near Wrightsville Beach",
  },
];

export function Captains() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          The crew
        </span>
        <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          Meet Your Captains
        </h2>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
        {captains.map((c) => (
          <RevealItem key={c.name}>
            <ImageCard
              src={c.image}
              alt={c.alt}
              title={c.name}
              description={c.bio}
              ratio="aspect-[16/10]"
              className="h-full"
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
