import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { inquiryServices } from "@/lib/data/inquiry";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Guided coastal charters, the Wrightsville Waterway pub crawl, and sunset cruises with SeaVentures.",
};

export default function InquiryServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Our Services"
          title="A Little Of What We Do..."
          description="Where Will The Day Take You"
          image="/ingested/seaventureswb/img-053.webp"
          imageAlt="Sunset over the water on a SeaVentures cruise"
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <RevealGroup className="space-y-6">
            {inquiryServices.map((s) => (
              <RevealItem
                key={s.number}
                className="group grid gap-0 overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 md:grid-cols-[1fr_1.4fr]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted md:aspect-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col justify-center gap-3 p-7 sm:p-9">
                  <span className="font-mono text-3xl font-bold text-foreground/10">
                    {s.number}
                  </span>
                  <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                    {s.name}
                  </h2>
                  <p className="text-pretty text-muted-foreground">{s.body}</p>
                  <Button asChild className="mt-2 w-fit">
                    <Link href="/services">
                      Book Now <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
