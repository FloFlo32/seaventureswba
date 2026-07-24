import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { pricing } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Bookings",
  description:
    "Explore dolphin tours, boat rentals, and captained charters with SeaVentures Boat Rentals & Charters out of Wrightsville Beach, NC.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Bookings"
          title="Charters & Boat Rentals"
          description="Explore dolphin tours, self-led rentals, and fully captained charters. Pick your window on the water below."
          image="/ingested/seaventureswb/img-055.webp"
          imageAlt="Sunbathers on the beach near Wrightsville Beach"
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.map((row) => (
              <RevealItem
                key={row.name}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div>
                  <h2 className="font-display text-xl font-semibold">{row.name}</h2>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="size-3.5 text-primary" />
                    {row.duration}
                  </p>
                  <p className="mt-4 font-display text-3xl font-bold text-primary">
                    {row.price}
                  </p>
                </div>
                <Button asChild className="mt-6 w-fit">
                  <Link href={row.href}>
                    Book Now <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-20 sm:pb-24">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">Charters</h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                Our charters are led by experienced captains who know the Wilmington
                area inside and out, allowing you to sit back and enjoy the ride.
                From smooth coastal cruising to exploring local waterways, each trip
                is tailored for comfort, ease, and fun. Whether you&apos;re
                celebrating something special or just soaking up a day on the water,
                our captains handle every detail so you can focus on the experience.
                Book your charter today and let us show you the best of Wilmington
                from the water.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">Boat Rentals</h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                Experience the freedom of the open water with our full-day and
                half-day boat rentals. Choose a variety of boats that perfectly fit
                your needs, available for self-led adventures. Whether you want to
                explore hidden coves or enjoy a leisurely day on the intercoastal,
                we have the perfect boat for you. Come and make unforgettable
                memories on the water!
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-20 sm:pb-24">
          <Reveal>
            <div className="rounded-3xl border border-border bg-navy-deep px-6 py-16 text-center text-navy-deep-foreground sm:px-12 sm:py-20">
              <h2 className="mx-auto max-w-xl text-balance font-display text-3xl font-semibold sm:text-4xl">
                Your SeaVenture Awaits
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-navy-deep-foreground/75">
                Ready to get out on the water? Book your boat rental or captained
                charter below and let the adventure begin.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/service-page/half-day-boat-charter">
                  Book Now <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
