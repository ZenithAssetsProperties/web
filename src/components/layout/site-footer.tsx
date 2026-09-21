import Image from "next/image";
import Link from "next/link";
import { Globe, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/typography";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-border bg-muted/40 border-t">
      <Container size="lg" className="py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-sm space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/brand/icon.png" alt="" width={28} height={28} className="size-7" />
              <span className="font-heading text-foreground text-base font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <Text size="sm" className="text-muted-foreground">
              {siteConfig.description}
            </Text>
          </div>

          <div className="space-y-3">
            <p className="text-foreground text-sm font-semibold">Quick links</p>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-foreground text-sm font-semibold">Contact</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@zenithassetgroup.com"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  hello@zenithassetgroup.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.zenithassetgroup.com"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                >
                  <Globe className="size-4 shrink-0" aria-hidden="true" />
                  www.zenithassetgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border text-muted-foreground mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
