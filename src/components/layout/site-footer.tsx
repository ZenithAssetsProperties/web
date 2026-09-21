import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-border border-t">
      <Container className="text-muted-foreground flex flex-col items-center justify-between gap-4 py-10 text-sm md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
