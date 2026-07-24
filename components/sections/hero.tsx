import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-navy-deep-foreground">
      <Image
        src="/ingested/seaventureswb/gallery-05.webp"
        alt="Guests riding a Grady-White boat across the water near Wrightsville Beach"
        fill
        priority
        sizes="100vw"
        quality={75}
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />

      <div className="container-px relative mx-auto max-w-6xl pt-28 pb-20 sm:pt-36 sm:pb-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
            Wrightsville Beach, NC
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-7 max-w-3xl text-balance font-display text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
            Welcome to Your Next Adventure
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-pretty text-lg text-navy-deep-foreground/80">
            Whether you&apos;re looking to kick back on the water or explore somewhere
            new, we&apos;ve got you covered. From captained charters to easy boat
            rentals and laid-back excursions, your perfect day on the water starts
            here.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link href="/services">
                Book Now <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/inquiry-services-page">
                <CalendarCheck className="size-4" /> Learn More
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
