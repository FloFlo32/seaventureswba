import Image from "next/image";
import { Reveal } from "@/components/magic/reveal";

/** Compact hero band used on every inner page: real photo, eyebrow, H1, one-line description. */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-navy-deep-foreground">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        quality={70}
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/40" />
      <div className="container-px relative mx-auto max-w-6xl pt-24 pb-16 sm:pt-28 sm:pb-20">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-pretty text-navy-deep-foreground/80">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
