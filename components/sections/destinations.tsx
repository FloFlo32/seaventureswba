import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { destinations } from "@/lib/data/destinations";
import { cn } from "@/lib/utils";

export function Destinations() {
  const [featured, ...rest] = destinations;

  return (
    <section id="destinations" className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Destinations
        </span>
        <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          Local Spots Worth The Ride
        </h2>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2">
        <RevealItem className="md:row-span-2">
          <DestinationCard destination={featured} featured />
        </RevealItem>
        {rest.map((d) => (
          <RevealItem key={d.slug}>
            <DestinationCard destination={d} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

function DestinationCard({
  destination,
  featured = false,
}: {
  destination: (typeof destinations)[number];
  featured?: boolean;
}) {
  return (
    <Link
      href={destination.postHref}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
    >
      <div
        className={cn(
          "overflow-hidden bg-muted",
          featured ? "aspect-[16/11]" : "aspect-[16/10]"
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={destination.image}
          alt={destination.alt}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3
          className={cn(
            "flex items-start justify-between gap-2 font-display font-semibold",
            featured ? "text-2xl" : "text-xl"
          )}
        >
          {destination.name}
          <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </h3>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
          {destination.subhead}
        </p>
        <p className="text-pretty text-sm text-muted-foreground">
          {destination.body}
        </p>
        {featured && destination.extra && (
          <p className="text-pretty text-sm text-muted-foreground">
            {destination.extra}
          </p>
        )}
      </div>
    </Link>
  );
}
