import Image from "next/image";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center justify-between gap-4 py-10 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <Image src="/brand/icon.png" alt="" width={20} height={20} className="size-5" />
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
