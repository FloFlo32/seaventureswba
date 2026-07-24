import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { AboutStats } from "@/components/sections/about-stats";
import { Captains } from "@/components/sections/captains";
import { BoatLocal } from "@/components/sections/boat-local";
import { Destinations } from "@/components/sections/destinations";
import { CTA } from "@/components/sections/cta";
import { Map } from "@/components/sections/map";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <AboutStats />
        <Captains />
        <BoatLocal />
        <Destinations />
        <CTA />
        <Map />
      </main>
      <Footer />
    </>
  );
}
