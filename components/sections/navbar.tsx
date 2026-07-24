"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/boat-rentals-charters-wilmington", label: "Meet The Fleet" },
  { href: "/services", label: "Bookings" },
  { href: "/inquiry-services-page", label: "Our Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 shadow-sm shadow-black/[0.02] backdrop-blur-xl"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm"
      )}
    >
      {/* Eyebrow strip: quick-contact bar, hidden on scroll+mobile to save space */}
      <div
        className={cn(
          "hidden overflow-hidden border-b border-border/60 bg-navy-deep text-navy-deep-foreground transition-[max-height,opacity] duration-300 md:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        )}
      >
        <div className="container-px mx-auto flex max-w-6xl items-center justify-between py-1.5 text-xs">
          <span className="inline-flex items-center gap-1.5 text-navy-deep-foreground/80">
            <MapPin className="size-3.5 text-gold" />
            {brand.contact.address}
          </span>
          <a
            href={`tel:${brand.contact.phone.replace(/[^\d+]/g, "")}`}
            className="inline-flex items-center gap-1.5 text-navy-deep-foreground/80 transition-colors hover:text-gold"
          >
            <Phone className="size-3.5 text-gold" />
            {brand.contact.phone}
          </a>
        </div>
      </div>

      <nav className="container-px mx-auto flex h-18 max-w-6xl items-center justify-between py-2.5">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${brand.name} home`}>
          <Image
            src="/logo.png"
            alt="SeaVentures logo, captain's wheel"
            width={382}
            height={107}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative rounded-md px-3.5 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gold transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/services">Book Now</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-px mx-auto flex max-w-6xl flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${brand.contact.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <Phone className="size-4 text-primary" /> {brand.contact.phone}
            </a>
            <Button asChild className="mt-2">
              <Link href="/services" onClick={() => setOpen(false)}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
