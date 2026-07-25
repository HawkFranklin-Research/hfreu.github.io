export type Venture = {
  index: string;
  name: string;
  label: string;
  description: string;
  status: string;
  href: string;
  image: string;
  imageAlt: string;
  theme: "clinical" | "private" | "cinema";
};

export const ventures: Venture[] = [
  {
    index: "01",
    name: "PelliScope",
    label: "Digital health",
    description:
      "AI-assisted dermatology intake evolving into a digital-clinic platform where clinicians can organise cases, consult and build a professional online practice.",
    status: "Platform in development",
    href: "https://pelliscope.eu",
    image: "/products/pelliscope.png",
    imageAlt: "PelliScope product mark",
    theme: "clinical"
  },
  {
    index: "02",
    name: "Nimbo",
    label: "Private AI",
    description:
      "A useful AI assistant that runs on your phone, keeps local conversations on-device and remains available when the internet is not.",
    status: "Android · local inference",
    href: "https://hawkfranklin.in/products/aura2.html",
    image: "/products/nimbo.png",
    imageAlt: "Nimbo app icon",
    theme: "private"
  },
  {
    index: "03",
    name: "DSCinema",
    label: "Autonomous systems",
    description:
      "Privacy-first autonomous indoor cinematography for independent creators—designed to move the camera without moving raw footage to the cloud.",
    status: "Product concept · prototype",
    href: "https://dscinema.hawkfranklin.in/",
    image: "/products/dscinema.png",
    imageAlt: "DSCinema autonomous camera concept",
    theme: "cinema"
  }
];
