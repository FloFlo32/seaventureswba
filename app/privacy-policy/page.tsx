import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SeaVentures WB privacy policy: how we collect, use, and safeguard your information.",
};

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h4 className="font-display text-lg font-semibold">{title}</h4>
      <div className="mt-2 space-y-2 text-pretty text-muted-foreground">{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: February, 2026</p>
          </Reveal>

          <Reveal delay={0.06} className="mt-10 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              SeaVentures WB (&quot;SeaVentures,&quot; &quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) values your privacy and is committed to protecting your
              personal information. This Privacy Policy explains how we collect, use,
              and safeguard the information you provide when visiting our website or
              using our services.
            </p>
            <p>By using this website, you agree to the practices described below.</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-10 font-display text-2xl font-semibold">Information We Collect</h2>
            <p className="mt-3 text-muted-foreground">
              We may collect the following types of information when you interact
              with our website or services:
            </p>

            <Sub title="Information You Provide Directly">
              <ul className="list-disc space-y-1 pl-5">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Booking or rental details</li>
                <li>Messages or inquiries you submit</li>
              </ul>
            </Sub>

            <Sub title="Information Collected Automatically">
              <ul className="list-disc space-y-1 pl-5">
                <li>IP address</li>
                <li>Browser/device information</li>
                <li>Pages visited and website usage data</li>
                <li>Cookies and analytics data</li>
              </ul>
            </Sub>

            <Sub title="Booking & Payment Information">
              <p>
                When you make a reservation or rental, payment details may be
                processed securely through trusted third-party platforms.
                SeaVentures does not store full credit card information on our
                servers.
              </p>
            </Sub>

            <Sub title="How We Use Your Information">
              <p>We use your information to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Respond to inquiries and questions</li>
                <li>Schedule and manage rentals, charters, and excursions</li>
                <li>Send booking confirmations and updates</li>
                <li>Communicate via phone, email, or text message</li>
                <li>Provide customer support</li>
                <li>Improve our website and services</li>
                <li>Send occasional promotions or special offers (you may opt out anytime)</li>
              </ul>
            </Sub>

            <Sub title="Text & Email Communications">
              <p>
                By providing your contact information, you consent to receive
                calls, emails, and text messages from SeaVentures related to your
                inquiry, reservations, or services. Message and data rates may
                apply.
              </p>
              <p>
                You may unsubscribe from marketing emails or texts at any time by
                following the opt-out instructions or contacting us directly.
              </p>
            </Sub>

            <Sub title="How We Share Information">
              <p>We respect your privacy.</p>
              <p>SeaVentures does not sell or rent your personal information.</p>
              <p>We may share information only with:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Booking or rental software providers (such as scheduling or inventory platforms)</li>
                <li>Payment processors</li>
                <li>Service providers that help us operate our business</li>
                <li>Authorities when required by law</li>
              </ul>
              <p>All partners are expected to protect your data.</p>
            </Sub>

            <Sub title="Cookies & Analytics">
              <p>
                Our website may use cookies and analytics tools to understand how
                visitors use the site and improve your experience. You can adjust
                your browser settings to disable cookies if you prefer.
              </p>
            </Sub>

            <Sub title="Data Security">
              <p>
                We implement reasonable security measures to protect your
                information. While no online system is 100% secure, we take
                appropriate steps to safeguard your data.
              </p>
            </Sub>

            <Sub title="Your Choices">
              <p>You may:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Request access to your personal information</li>
                <li>Ask us to update or delete your information</li>
                <li>Opt out of marketing communications at any time</li>
              </ul>
              <p>To make a request, contact us using the information below.</p>
            </Sub>

            <Sub title="Third Party Links">
              <p>
                Our website may include links to other websites. SeaVentures is
                not responsible for the privacy practices of those sites.
              </p>
            </Sub>

            <Sub title="Policy Updates">
              <p>
                We may update this Privacy Policy from time to time. Updates will
                be posted on this page with a revised date.
              </p>
            </Sub>

            <h3 className="mt-8 font-display text-xl font-semibold">Contact Us</h3>
            <p className="mt-2 text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact:
            </p>
            <p className="mt-1 text-muted-foreground">
              SeaVentures WB &middot;{" "}
              <a href="mailto:seaventureswb@gmail.com" className="text-primary hover:underline">
                seaventureswb@gmail.com
              </a>
            </p>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
