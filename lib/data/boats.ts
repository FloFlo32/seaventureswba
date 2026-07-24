export type Boat = {
  slug: string;
  name: string;
  price: number;
  lengthFt: number;
  hp: number;
  speedMph: number;
  capacity: number;
  image: string;
  alt: string;
};

/** The four boats on "Meet The Fleet" (/boat-rentals-charters-wilmington), in source order. */
export const boats: Boat[] = [
  {
    slug: "hurricane",
    name: "Hurricane",
    price: 420,
    lengthFt: 19,
    hp: 150,
    speedMph: 42,
    capacity: 10,
    image: "/ingested/seaventureswb/fleet-06.webp",
    alt: "18 foot Hurricane boat docked with its bimini top up",
  },
  {
    slug: "sea-born",
    name: "Sea Born",
    price: 350,
    lengthFt: 17,
    hp: 75,
    speedMph: 33,
    capacity: 5,
    image: "/ingested/seaventureswb/fleet-04.webp",
    alt: "17 foot Sea Born center console beached at sunrise",
  },
  {
    slug: "starcraft",
    name: "StarCraft",
    price: 420,
    lengthFt: 19,
    hp: 150,
    speedMph: 42,
    capacity: 12,
    image: "/ingested/seaventureswb/inquiry-02.webp",
    alt: "18 foot StarCraft boat with guests aboard sitting in the water",
  },
  {
    slug: "great-white",
    name: "Great White",
    price: 420,
    lengthFt: 19,
    hp: 150,
    speedMph: 42,
    capacity: 10,
    image: "/ingested/seaventureswb/fleet-05.webp",
    alt: "19 foot Great White boat on calm water",
  },
];
