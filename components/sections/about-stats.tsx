import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const stats = [
  { label: "🐬 Pod Count:", value: "57" },
  { label: "🐬 Sighting Success Rate:", value: "92%" },
];

export function AboutStats() {
  return (
    <section className="overflow-hidden bg-navy-deep text-navy-deep-foreground">
      <div className="container-px mx-auto grid max-w-6xl gap-12 py-20 sm:py-24 md:grid-cols-2 md:items-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Charters, Rentals, & More!
          </span>
          <h2 className="mt-3 max-w-lg text-balance font-display text-3xl font-semibold sm:text-4xl">
            Built with locals in mind
          </h2>
          <p className="mt-5 max-w-md text-pretty text-navy-deep-foreground/75">
            SeaVentures removes the hassle of boat ownership while delivering a
            coastal lifestyle. Whether you&apos;re looking to explore Masonboro
            island, cruise the Intracoastal or drift away fishing, SeaVentures
            delivers a seamless dock to deck experience.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <RevealItem
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-sm"
            >
              <p className="font-display text-4xl font-bold text-gold sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-navy-deep-foreground/70">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
