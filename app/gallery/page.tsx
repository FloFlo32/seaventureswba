import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Reveal } from "@/components/magic/reveal";
import { Gallery } from "@/components/magic/gallery";
import { galleryImages } from "@/lib/data/gallery-images";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Welcome to SeaVentures, your ultimate boating experience in Wrightsville Beach, NC.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Gallery"
          title="Welcome to SeaVentures"
          description="Your Ultimate Boating Experience"
          image="/ingested/seaventureswb/gallery-04.webp"
          imageAlt="SeaVentures boating adventure near Wrightsville Beach, NC"
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <Reveal className="max-w-2xl">
            <p className="text-pretty text-muted-foreground">
              SeaVentures is your premier destination for unforgettable boating
              adventures. From dock to deck, we specialize in providing premium
              boat rentals and charters, allowing you to enjoy the coastal
              lifestyle. Let us take you on a journey and begin your SeaVenture.
            </p>
          </Reveal>

          <div className="mt-12">
            <Gallery images={galleryImages} />
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
