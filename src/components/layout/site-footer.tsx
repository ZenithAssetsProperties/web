import Image from "next/image";
import Link from "next/link";
import { Globe, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";
import { NewsletterForm } from "@/components/newsletter-form";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-brand-950 relative overflow-hidden">
      {/* Same interlocking-Z brand texture used on the property tiles —
          keeps the dark "bookend" sections of the site (hero, footer)
          visually related instead of each inventing their own treatment. */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url(/brand/pattern-tile.png)",
          backgroundSize: "96px 100px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      <Container size="lg" className="relative py-16">
        <div className="flex flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:flex-row lg:items-center lg:p-10">
          <Stack gap="sm" className="max-w-md">
            <Text
              as="span"
              size="sm"
              className="text-brand-400 font-semibold tracking-wider uppercase"
            >
              Newsletter
            </Text>
            <Heading as="h2" level="h3" className="text-white">
              Stay in the loop
            </Heading>
            <Text size="sm" className="text-white/60">
              Product updates and market insights, straight to your inbox.
            </Text>
          </Stack>
          <NewsletterForm />
        </div>

        <div className="grid gap-12 pt-12 md:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-sm space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/brand/icon.png" alt="" width={28} height={28} className="size-7" />
              <span className="font-heading text-base font-bold tracking-tight text-white">
                {siteConfig.name}
              </span>
            </Link>
            <Text size="sm" className="text-white/60">
              {siteConfig.description}
            </Text>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Quick links</p>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@zenithassetgroup.com"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  hello@zenithassetgroup.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.zenithassetgroup.com"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Globe className="size-4 shrink-0" aria-hidden="true" />
                  www.zenithassetgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
