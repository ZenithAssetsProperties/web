export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Zenith Asset Group",
  description:
    "Zenith Asset Group is a Nigerian real estate investment company making property ownership accessible through fractional investing — own shares of income-generating properties without needing millions upfront.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  nav: [
    { label: "Home", href: "/" },
    { label: "Listings", href: "/listings" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
