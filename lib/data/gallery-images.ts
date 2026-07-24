/** Every real (non-icon) photo pulled from seaventureswb.com, for the /gallery page. */
const base = "/ingested/seaventureswb";

const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => i + from);

export const galleryImages = [
  ...range(41, 60).map((n) => ({
    src: `${base}/img-${String(n).padStart(3, "0")}.webp`,
    alt: "SeaVentures on the water near Wrightsville Beach, NC",
  })),
  ...range(1, 6).map((n) => ({
    src: `${base}/fleet-${String(n).padStart(2, "0")}.webp`,
    alt: "SeaVentures fleet boat out on the water",
  })),
  ...range(1, 26).map((n) => ({
    src: `${base}/gallery-${String(n).padStart(2, "0")}.webp`,
    alt: "SeaVentures boating adventure near Wrightsville Beach, NC",
  })),
  ...range(1, 5).map((n) => ({
    src: `${base}/services-${String(n).padStart(2, "0")}.webp`,
    alt: "SeaVentures charter and rental boats on the water",
  })),
  ...range(1, 3).map((n) => ({
    src: `${base}/inquiry-${String(n).padStart(2, "0")}.webp`,
    alt: "SeaVentures guests enjoying a day on the water",
  })),
];
