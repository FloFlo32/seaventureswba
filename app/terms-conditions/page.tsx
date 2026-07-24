import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "SeaVentures WB terms and conditions.",
};

const paragraphs = [
  "By submitting your information through this website, you agree to the following terms:",
  "When you provide your contact details, you consent to being contacted by SeaVentures WB via phone, email, or text message regarding your inquiry, bookings, services, updates, or promotions. Message and data rates may apply. You may opt out of communications at any time.",
  "Submitting a form or inquiry does not constitute a reservation or guarantee availability. All rentals, charters, and excursions are subject to scheduling, weather conditions, and vessel availability.",
  "Participation in boating and water activities involves inherent risks. All guests may be required to review and sign additional rental agreements and liability waivers prior to participating in SeaVentures services.",
  "We respect your privacy. Your personal information will never be sold or shared with third parties for marketing purposes and is used solely to communicate with you and provide our services.",
  "All website content, including logos, images, and text, is the property of SeaVentures WB and may not be copied or reproduced without permission.",
  "SeaVentures WB reserves the right to update these terms at any time. Continued use of this website constitutes acceptance of any changes.",
  "For questions regarding these terms, please contact us at seaventureswb@gmail.com.",
];

export default function TermsConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl py-24 sm:py-28">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Legal
            </span>
            <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
              Terms & Conditions
            </h1>
          </Reveal>

          <Reveal delay={0.08} className="mt-10 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            {paragraphs.map((text, i) => (
              <p key={i}>
                {i === paragraphs.length - 1 ? (
                  <>
                    For questions regarding these terms, please contact us at{" "}
                    <a href="mailto:seaventureswb@gmail.com" className="text-primary hover:underline">
                      seaventureswb@gmail.com
                    </a>
                    .
                  </>
                ) : (
                  text
                )}
              </p>
            ))}
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
