import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal } from "@/components/magic/reveal";

export function CTA() {
  return (
    <section id="cta" className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
          <GridPattern />
          <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl font-semibold sm:text-5xl">
            Begin Your <span className="text-primary">Journey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Sea + Adventure = SeaVenture. Book your boat rental or captained charter
            and let the adventure begin.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/services">
                Book Now <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${brand.contact.phone.replace(/[^\d+]/g, "")}`}>
                <Phone className="size-4" /> {brand.contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
