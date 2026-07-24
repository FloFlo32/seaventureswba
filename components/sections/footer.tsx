import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Navigation } from "lucide-react";
import { brand } from "@/brand.config";
import { InstagramIcon, FacebookIcon } from "@/components/icons";

const explore = [
  { label: "Meet The Fleet", href: "/boat-rentals-charters-wilmington" },
  { label: "Bookings", href: "/services" },
  { label: "Our Services", href: "/inquiry-services-page" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

export function Footer() {
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(brand.contact.mapQuery)}`;

  return (
    <footer className="mt-auto border-t border-border bg-muted/40">
      <div className="container-px mx-auto grid max-w-6xl gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="inline-flex items-center" aria-label={`${brand.name} home`}>
            <Image
              src="/logo.png"
              alt="SeaVentures logo, captain's wheel"
              width={382}
              height={107}
              className="h-11 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            Sea + Adventure = SeaVenture. High quality boat rentals and fully captained
            charters out of Wrightsville Beach, NC.
          </p>
          <div className="mt-5 flex gap-2">
            <Link
              href={brand.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <InstagramIcon className="size-4" />
            </Link>
            <Link
              href={brand.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <FacebookIcon className="size-4" />
            </Link>
            <a
              href={`mailto:${brand.social.email}`}
              aria-label="Email"
              className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5">
            {explore.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Legal
          </h4>
          <ul className="mt-4 space-y-2.5">
            {legal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Get In Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{brand.contact.address}</span>
            </li>
            <li>
              <a
                href={`tel:${brand.contact.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2.5 transition-colors hover:text-foreground"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                {brand.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${brand.social.email}`}
                className="flex items-center gap-2.5 break-all transition-colors hover:text-foreground"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                {brand.social.email}
              </a>
            </li>
            <li>
              <a
                href={directions}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-foreground"
              >
                <Navigation className="size-4 shrink-0 text-primary" />
                Get directions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <p className="container-px mx-auto max-w-6xl text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SeaVentures WB. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
