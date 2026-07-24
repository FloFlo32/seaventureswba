import { ImageCard } from "@/components/magic/image-card";
import { Reveal } from "@/components/magic/reveal";
import { AutoSlider } from "@/components/magic/auto-slider";

const highlights = [
  {
    title: "Sunset Dolphin Cruise",
    description:
      "The key to spotting bottlenose dolphins around Wrightsville Beach is one hour before sunset.",
    image: "/ingested/seaventureswb/img-057.webp",
    alt: "Sunset over the ocean waves near Wrightsville Beach",
  },
  {
    title: "Water Sports",
    description:
      "We'll throw you the line, take your pick! Wakeboard, Wake Surf, Knee Board & Tube.",
    image: "/ingested/seaventureswb/img-042.webp",
    alt: "Wakeboarder clearing the wake behind a SeaVentures boat",
  },
  {
    title: "Island Hopping",
    description:
      "Set anchor along the shores of Masonboro island, a glass calm cove, or beached up on a sandbar.",
    image: "/ingested/seaventureswb/gallery-19.webp",
    alt: "Guests anchored near a sandbar close to Wrightsville Beach",
  },
];

export function Highlights() {
  return (
    <section id="start-your-seaventure" className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Start your SeaVenture
        </span>
        <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          Sea + Adventure = SeaVenture
        </h2>
      </Reveal>

      <div className="mt-12">
        <AutoSlider itemClassName="w-[85%] sm:w-[60%] lg:w-[32%]">
          {highlights.map((h) => (
            <ImageCard
              key={h.title}
              src={h.image}
              alt={h.alt}
              title={h.title}
              description={h.description}
              ratio="aspect-[4/3]"
            />
          ))}
        </AutoSlider>
      </div>
    </section>
  );
}
