export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Zenith Asset Group",
  description:
    "Explore property listings, review available details, and understand the next steps in the property journey with Zenith Asset Group.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  nav: [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
