import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { blogPosts } from "@/lib/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "All posts from SeaVentures: coastal guides, boating tips, and local Wrightsville Beach favorites.",
};

/** The /blog index on the source site lists exactly these 4 posts, in this order. */
const indexSlugs = [
  "explore-seaventures-your-premium-boat-rentals",
  "discover-mason-inlet-boat-rentals-explore-the-scenic-mason-inlet-by-boat",
  "experience-thrilling-watersport-rentals-at-wrightsville-beach",
  "wrightsville-beach-captained-cruises-rentals-your-ultimate-guide-to-fun-on-the-water",
];

const posts = indexSlugs
  .map((slug) => blogPosts.find((p) => p.slug === slug))
  .filter((p): p is (typeof blogPosts)[number] => Boolean(p));

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Blog"
          title="All Posts"
          description="Coastal guides, boating tips, and local Wrightsville Beach favorites from the SeaVentures crew."
          image="/ingested/seaventureswb/gallery-09.webp"
          imageAlt="Aerial view of the Wrightsville Beach waterway"
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <RevealItem key={post.slug}>
                <Link
                  href={`/post/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {post.date} &middot; {post.readTime}
                    </span>
                    <h2 className="flex items-start justify-between gap-2 font-display text-lg font-semibold">
                      {post.title}
                      <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h2>
                    <p className="text-pretty text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
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
