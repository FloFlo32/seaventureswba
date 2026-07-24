import Image from "next/image";
import { Reveal } from "@/components/magic/reveal";

export function BoatLocal() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg shadow-primary/5">
            <Image
              src="/ingested/seaventureswb/img-050.webp"
              alt="Aerial view of boats cruising Wilmington's waterways"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Boat Local
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Boat Local
          </h2>
          <p className="mt-5 max-w-md text-pretty text-muted-foreground">
            Cruise through Wilmington&apos;s water ways, best spots and premier
            waterfront locations with ease, taking in the views and the laid-back
            coastal atmosphere along the way. Whether you&apos;re looking to relax,
            explore, or simply enjoy time on the water, each outing is designed to
            feel effortless and unforgettable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
