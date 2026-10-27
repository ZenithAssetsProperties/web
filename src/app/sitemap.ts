import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.nav
    .filter((item) => item.href !== "/properties" && item.href !== "/how-it-works")
    .map((item) => ({
      url: `${siteConfig.url}${item.href}`,
      lastModified: new Date(),
    }));
}
