export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Zenith Assets Properties",
  description:
    "Zenith Assets Properties connects buyers, sellers, and investors with premium property opportunities.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  nav: [
    { label: "Home", href: "/" },
    { label: "Listings", href: "/listings" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
