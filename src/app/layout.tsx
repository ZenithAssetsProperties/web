import type { Metadata } from "next";
import { Cursor } from "@/components/cursor";
import { TawkChat } from "@/components/tawk-chat";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { inter, leagueSpartan } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${leagueSpartan.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Cursor />
          <TawkChat />
          <SiteHeader />
          {/* pt-20 clears the fixed header's full-bleed (not-scrolled) height
              for normal content; a hero that wants to bleed full-bleed under
              the transparent header cancels this with -mt-20 on its own root
              element. */}
          <main className="flex-1 pt-20">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
