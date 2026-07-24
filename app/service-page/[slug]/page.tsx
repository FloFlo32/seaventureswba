import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import {
  serviceDetails,
  cancellationPolicy,
  cancellationFootnotes,
  servicePageContact,
} from "@/lib/data/services";

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.h1, description: service.description.slice(0, 155) };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="relative overflow-hidden bg-navy-deep text-navy-deep-foreground">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt={service.alt}
            className="absolute inset-0 size-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/40" />
          <div className="container-px relative mx-auto max-w-4xl pt-24 pb-16 sm:pt-28 sm:pb-20">
            <Reveal>
              <nav className="flex items-center gap-1.5 text-sm text-navy-deep-foreground/60">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="size-3.5" />
                <Link href="/services" className="hover:text-white">Services</Link>
                <ChevronRight className="size-3.5" />
                <span className="text-navy-deep-foreground/85">{service.h1}</span>
              </nav>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-balance font-display text-4xl font-semibold sm:text-5xl">
                {service.h1}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-3 text-lg text-gold">{service.subheading}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-1 font-display text-2xl font-semibold">{service.price}</p>
            </Reveal>
          </div>
        </div>

        <div className="container-px mx-auto max-w-4xl py-16 sm:py-20">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-10">
              <Reveal>
                <h2 className="font-display text-2xl font-semibold">Service Description</h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Reveal>

              <Reveal delay={0.06}>
                <h2 className="font-display text-2xl font-semibold">Cancellation Policy</h2>
                <div className="mt-4 space-y-4">
                  {cancellationPolicy.map((c) => (
                    <div key={c.title}>
                      <h3 className="font-medium">{c.title}</h3>
                      <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                        {c.body}
                      </p>
                    </div>
                  ))}
                  {cancellationFootnotes.map((f) => (
                    <p key={f} className="text-pretty text-sm leading-relaxed text-muted-foreground">
                      {f}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-7">
                <h2 className="font-display text-lg font-semibold">Contact Details</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    {servicePageContact.address}
                  </li>
                  <li>
                    <a
                      href={`tel:${servicePageContact.phone}`}
                      className="flex items-center gap-2.5 hover:text-foreground"
                    >
                      <Phone className="size-4 shrink-0 text-primary" />
                      {servicePageContact.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${servicePageContact.email}`}
                      className="flex items-center gap-2.5 break-all hover:text-foreground"
                    >
                      <Mail className="size-4 shrink-0 text-primary" />
                      {servicePageContact.email}
                    </a>
                  </li>
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/services">
                    Book Now <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
