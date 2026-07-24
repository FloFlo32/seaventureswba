export type Destination = {
  slug: string;
  name: string;
  subhead: string;
  body: string;
  extra?: string;
  image: string;
  alt: string;
  postHref: string;
};

/** The six destination tiles from the real homepage, in source order. */
export const destinations: Destination[] = [
  {
    slug: "masonboro-island",
    name: 'Masonboro Island',
    subhead: "North Carolina's Largest Undeveloped Barrier Island",
    body: "Tired of the Wrightsville Beach Crowd? Come over to Masonboro Island and have the beach to yourself. Located South of Wrightsville Beach you'll find Masonboro Island. It's our local paradise. Stroll down 8 miles of shoreline in search of shells & shark teeth. Take It easy as you lay out on the white sand beach, or get active and play spike ball!",
    extra: "At its most northern point you'll see dozens of surfers tearing up the break. (These pogues are no joke)",
    image: "/ingested/seaventureswb/gallery-26.webp",
    alt: "Aerial view of boaters and beachgoers gathered on a sandbar near Masonboro Island",
    postHref: "/post/masonboro-island-a-natural-escape-near-wrightsville-beach-nc",
  },
  {
    slug: "palm-tree-island",
    name: "Palm Tree Island",
    subhead: "When Paid Parking was Enforced on WB a Parking Meter was Placed on Palm",
    body: "As the current slowly pulls out to sea, Palm Tree Island comes to life. With each dropping tide, more and more boats beach up. Blasting music & floating down the 'lazy river'. For a few hours, this Atlantis-like paradise becomes the heart of the Intracoastal until the tide rises once again, and Palm Tree Island slips back beneath the waves.",
    image: "/ingested/seaventureswb/img-052.webp",
    alt: "Group walking a sandbar at sunset next to an anchored SeaVentures boat",
    postHref: "/post/palm-tree-island-by-boat-a-favorite-stop-in-wrightsville-beach-nc",
  },
  {
    slug: "the-lollipop",
    name: 'The "Lollipop"',
    subhead: "A Windless Cove, Water Sports Central",
    body: 'Just North of Palm Tree Island sits Lollipop Cove, named for its unique shape. A narrow run off the Intracoastal leads you down the "stick," opening into a calm, tucked-away cove. With homes wrapping around it, the area stays protected from the wind, creating perfect conditions for wakeboarding, waterskiing, kneeboarding, and tubing. With deep water and great fishing, it\'s a hidden gem many boaters unknowingly pass by.',
    image: "/ingested/seaventureswb/img-060.webp",
    alt: "Aerial view of a calm, tucked-away cove off the Intracoastal Waterway",
    postHref: "/post/lollipop-cove-by-boat-a-hidden-gem-in-wrightsville-beach-nc",
  },
  {
    slug: "masons-inlet",
    name: "Mason's Inlet",
    subhead: "Caribbean Blue Water",
    body: "Mason's Inlet is known for its ever shifting sands, making navigation a bit of a challenge here. Enter Mason's Inlet from the ICW, you'll first see a large island of sand, perfect for climbing and seeing a full panoramic view. You can also beach your boat along the north side of Wrightsville or anchor on any sandbar that emerges from the shallows. Just be safe as you enjoy this dynamic and ever-changing inlet!",
    image: "/ingested/seaventureswb/gallery-12.webp",
    alt: "Turquoise inlet waters meeting a shifting sandbar",
    postHref: "/blog",
  },
  {
    slug: "the-swimming-hole",
    name: 'The "Swimming Hole"',
    subhead: "Hot day? Take a Dip at the Local Swimming Hole",
    body: "A hidden wonder ideal during high tide. Tucked away on the sound side of Masonboro. It offers a peaceful place to swim, float, and relax.",
    image: "/ingested/seaventureswb/img-058.webp",
    alt: "Small SeaVentures boat anchored in a quiet swimming hole",
    postHref: "/post/the-swimming-hole-at-wrightsville-beach-a-boater-s-favorite-local-spot",
  },
  {
    slug: "figure-8",
    name: "Figure 8",
    subhead: "Speaks for Itself",
    body: "Just north of Masons Inlet lies Figure 8 Island. Explore the coastline and navigate its marsh channels admiring some of the most stunning waterfront homes on the Carolina coast.",
    image: "/ingested/seaventureswb/gallery-01.webp",
    alt: "Aerial view of the waterway and waterfront homes near Figure 8 Island",
    postHref: "/post/discover-figure-eight-island",
  },
];
