export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Zenith Asset Group",
  description:
    "Zenith Asset Group is a real estate brand committed to providing reliable, strategic, and value-driven property solutions that empower individuals, families, and businesses to make confident real estate decisions.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  nav: [
    { label: "Home", href: "/" },
    { label: "Listings", href: "/listings" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
