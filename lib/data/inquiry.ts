export type InquiryService = {
  number: string;
  name: string;
  body: string;
  image: string;
  alt: string;
};

/** The 3 experiences on /inquiry-services-page ("Our Services"), in source order. */
export const inquiryServices: InquiryService[] = [
  {
    number: "01",
    name: "Guided Coastal Charter",
    body: "Embark on a personalized boating adventure tailored to your interests. Our experienced captains will guide you to hidden coves, scenic spots, and local attractions, ensuring a safe and memorable day on the water. Explore at your own pace with our expert local knowledge.",
    image: "/ingested/seaventureswb/inquiry-01.webp",
    alt: "Guests enjoying a guided charter along the coast",
  },
  {
    number: "02",
    name: "Wrightsville Waterway Pub Crawl",
    body: "Skip the Uber and hop bars the Wrightsville way, by boat. We'll cruise the Intracoastal stopping at Dockside, Fish House Grill, Bridge Tender, and Bluewater for drinks, food, and waterfront vibes. Expect great music, scenic cruising, and some of the best dockside spots on the coast to watch boats.",
    image: "/ingested/seaventureswb/services-01.webp",
    alt: "Boats cruising the Intracoastal Waterway past waterfront restaurants",
  },
  {
    number: "03",
    name: "Sunset Cruise",
    body: "Experience the magic of golden hour with our Sunset Cruise by SeaVentures. Enjoy a peaceful journey as you cruise alongside playful dolphins, creating unforgettable memories with loved ones and even your furry friends, as we are pet-friendly. Our seamless dock to deck experience ensures you relax and soak in the beauty of the coast.",
    image: "/ingested/seaventureswb/img-053.webp",
    alt: "Sunset over the water on a SeaVentures cruise",
  },
];
