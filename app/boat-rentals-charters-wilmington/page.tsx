import type { Metadata } from "next";
import Link from "next/link";
import { Ruler, Gauge, Zap, Users, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { boats } from "@/lib/data/boats";

export const metadata: Metadata = {
  title: "Meet The Fleet",
  description:
    "Meet the SeaVentures fleet: Hurricane, Sea Born, StarCraft, and Great White. Rental boats built for comfort, safety, and fun out of Wrightsville Beach, NC.",
};

const specs = [
  { key: "lengthFt", label: "Size", icon: Ruler, suffix: " ft" },
  { key: "hp", label: "HP", icon: Zap, suffix: "" },
  { key: "speedMph", label: "Speed", icon: Gauge, suffix: " mph" },
  { key: "capacity", label: "Capacity", icon: Users, suffix: "" },
] as const;

export default function FleetPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Meet The Fleet"
          title="Begin Your Journey"
          description="Four boats, each ready to take you from dock to deck. Pick the one that fits your crew and book straight through to our rentals and charters."
          image="/ingested/seaventureswb/fleet-02.webp"
          imageAlt="Aerial view of waves rolling onto the beach near Wrightsville Beach"
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            {boats.map((boat) => (
              <RevealItem
                key={boat.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={boat.image}
                    alt={boat.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-2xl font-semibold">{boat.name}</h2>
                    <span className="whitespace-nowrap rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      ${boat.price}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {specs.map((s) => (
                      <div
                        key={s.label}
                        className="flex flex-col items-center gap-1 rounded-xl bg-muted/60 py-3 text-center"
                      >
                        <s.icon className="size-4 text-primary" />
                        <span className="text-sm font-semibold">
                          {boat[s.key]}
                          {s.suffix}
                        </span>
                        <span className="text-[11px] uppercase tracking-wide text-muted-foreground">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="mt-auto w-fit">
                    <Link href="/services">
                      Book Now <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10 text-center text-sm text-muted-foreground">
            Prices shown are starting rates. See{" "}
            <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
              Bookings
            </Link>{" "}
            for full pricing on rentals and captained charters.
          </Reveal>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
