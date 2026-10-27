import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { insightArticles } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const navigablePages = siteConfig.nav
    .filter((item) => item.href !== "/properties" && item.href !== "/how-it-works")
    .map((item) => ({
      url: `${siteConfig.url}${item.href}`,
      lastModified: new Date(),
    }));

  const insightPages = insightArticles.map(({ slug }) => ({
    url: `${siteConfig.url}/insights/${slug}`,
    lastModified: new Date(),
  }));

  return [...navigablePages, ...insightPages];
}
