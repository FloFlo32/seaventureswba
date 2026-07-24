export type PricingRow = {
  name: string;
  duration: string;
  price: string;
  href: string;
};

/** The 5-row pricing table from /services ("Bookings"). */
export const pricing: PricingRow[] = [
  { name: "Half Day Boat Rental", duration: "4 hr", price: "From $420", href: "/service-page/half-day-boat-rental" },
  { name: "Full Day Boat Rental", duration: "8 hr", price: "From $750", href: "/service-page/full-day-boat-rental" },
  { name: "Half Day Captained Charter", duration: "3 hr", price: "$450", href: "/service-page/half-day-boat-charter" },
  { name: "Full Day Captained Charter", duration: "6 hr", price: "$800", href: "/service-page/full-day-captained-charter" },
  { name: "Sunset Boat Charter", duration: "2 hr", price: "$350", href: "/service-page/sunset-boat-charter" },
];

/** Shared "Cancellation Policy" boilerplate, identical across all 5 /service-page/* pages. */
export const cancellationPolicy = [
  {
    title: "Security Deposit",
    body: "A refundable security deposit of $500 per boat rental is required prior to departure. This deposit is used to cover any damages, excessive cleaning, lost equipment, or incidental costs incurred during the rental period. Deposits will be refunded after the vessel has been inspected and cleared of any issues.",
  },
  {
    title: "Cancellations & Rescheduling",
    body: "Cancellations and rescheduling requests are permitted up to 24 hours prior to your scheduled rental time with no penalty. Cancellations made less than 24 hours before the scheduled rental time will not be refunded. (Weather Permitting).",
  },
  {
    title: "Arrival Grace Period",
    body: "Renters are granted a 15-minute grace period beyond their scheduled rental time to arrive. Arrivals exceeding this grace period may result in reduced rental time and may be considered a late cancellation or no-show at the company's discretion.",
  },
  {
    title: "No-Show Policy",
    body: "Failure to arrive within the 15-minute grace period without prior notice will be considered a no-show. No-shows are subject to the same charges as cancellations made within 24 hours, including a charge of 50% of the Damage Deposit. Any renter who no-shows more than two times within a calendar year will no longer be permitted to rent with SeaVentures WB until the following year.",
  },
  {
    title: "Damage & Responsibility",
    body: "Renters are responsible for the vessel during the entire rental period and agree to operate the boat safely and in accordance with all local, state, and federal boating regulations. Any damage or loss beyond normal wear and tear will be deducted from the security deposit. Additional charges may apply if damages exceed the deposit amount.",
  },
  {
    title: "Weather & Safety",
    body: "Rentals may be delayed, rescheduled, or canceled at the company's discretion due to unsafe weather or water conditions. Safety is our top priority.",
  },
];

export const cancellationFootnotes = [
  "Gas is not Included. Boats will arrive at the dock with a full tank. The difference used during the session will be paid by the primary renter.",
  "By completing your reservation, you acknowledge and agree to these policies.",
];

/** The contact block shown on all 5 /service-page/* detail pages (verbatim from source). */
export const servicePageContact = {
  address: "109 Causeway Drive, Wilmington, NC, USA",
  phone: "9104052628",
  email: "Seaventureswb@gmail.com",
};

export type ServiceDetail = {
  slug: string;
  h1: string;
  subheading: string;
  price: string;
  description: string;
  image: string;
  alt: string;
};

/** The 5 real /service-page/* detail routes. */
export const serviceDetails: ServiceDetail[] = [
  {
    slug: "sunset-boat-charter",
    h1: "Sunset Boat Charter",
    subheading: "2 Hours Sunset Cruise",
    price: "$350",
    description:
      "Our 2-hour guided dolphin tour is a relaxed, family-friendly way to experience the water while spotting dolphins in their natural habitat. Led by a knowledgeable captain, you'll cruise local waterways and coastal areas where dolphins are commonly seen, all while learning about the region's marine life and ecosystem. It's a memorable, easygoing excursion that's perfect for visitors and locals ideal for all ages and a great introduction to boating around Wrightsville Beach.",
    image: "/ingested/seaventureswb/img-051.webp",
    alt: "SeaVentures boat and guests on the beach at sunset",
  },
  {
    slug: "half-day-boat-charter",
    h1: "Half Day Captained Charter",
    subheading: "3 Hours (6 People Max)",
    price: "$450",
    description:
      "Our half-day boat charter is a 3-hour experience designed to give you the perfect taste of life on the water. Led by a U.S. Coast Guard licensed captain, you'll enjoy a relaxed cruise, explore local islands, or anchor out to swim and unwind. It's a stress-free, flexible way to soak up the coast, ideal for families, visitors, or anyone looking to make the most of a few unforgettable hours on the water.",
    image: "/ingested/seaventureswb/fleet-04.webp",
    alt: "Sea Born center console charter boat at sunrise",
  },
  {
    slug: "full-day-captained-charter",
    h1: "Full Day Captained Charter",
    subheading: "6 Hours (6 People Max)",
    price: "$800",
    description:
      "Our full-day boat charter offers 6 hours of uninterrupted time on the water, giving you the freedom to fully explore and truly unwind. With a U.S. Coast Guard licensed captain at the helm, you can cruise local waterways, visit nearby islands, anchor out to swim, or simply relax and take in the views. It's the ultimate way to experience the coast, unhurried, effortless, and tailored to your day on the water. Gas not included.",
    image: "/ingested/seaventureswb/gallery-05.webp",
    alt: "Grady-White boat cruising fast with guests aboard",
  },
  {
    slug: "half-day-boat-rental",
    h1: "Half Day Boat Rental",
    subheading: "4 Hours",
    price: "From $420",
    description:
      "Our half-day boat rental gives you 4 hours of freedom to enjoy the water on your own schedule. Take the helm and cruise at your own pace. Explore nearby islands, anchor out to swim, or enjoy a relaxed ride through local waterways. It's the perfect option for a quick escape on the water, offering flexibility, independence, and an easy way to make the most of your day.",
    image: "/ingested/seaventureswb/fleet-06.webp",
    alt: "Hurricane boat docked and ready for a rental day",
  },
  {
    slug: "full-day-boat-rental",
    h1: "Full Day Boat Rental",
    subheading: "8 Hours",
    price: "From $750",
    description:
      "Our full-day boat rental gives you 8 hours to fully embrace the water at your own pace. With plenty of time to explore local waterways, visit nearby islands, anchor out to swim, or enjoy a laid-back cruise, this option offers total freedom and flexibility. It's perfect for those who want a full, unhurried day on the water, your schedule, your route, your adventure.",
    image: "/ingested/seaventureswb/inquiry-02.webp",
    alt: "StarCraft boat with guests aboard for a full day rental",
  },
];
