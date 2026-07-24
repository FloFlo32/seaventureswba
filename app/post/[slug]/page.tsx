import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { CTA } from "@/components/sections/cta";
import { Reveal } from "@/components/magic/reveal";
import { PostBody } from "@/components/sections/post-body";
import { blogPosts, getPostBySlug } from "@/lib/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-navy-deep text-navy-deep-foreground">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            priority
            sizes="100vw"
            quality={70}
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/40" />
          <div className="container-px relative mx-auto max-w-3xl pt-24 pb-16 sm:pt-28 sm:pb-20">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-navy-deep-foreground/70 transition-colors hover:text-white"
              >
                <ArrowLeft className="size-4" /> Back to Blog
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight sm:text-5xl">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 text-sm uppercase tracking-[0.14em] text-gold">
                {post.date} &middot; {post.readTime}
              </p>
            </Reveal>
          </div>
        </section>

        <article className="container-px mx-auto max-w-3xl py-16 sm:py-20">
          <PostBody blocks={post.body} />
        </article>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
