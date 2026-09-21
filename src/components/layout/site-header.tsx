"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Fixed overlay header: transparent over the homepage hero (which bleeds up
 * behind it), solid/blurred once the page scrolls. Every other route has no
 * dark hero to sit on top of, so it's always solid there regardless of
 * scroll position.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [scrolled, pathname]);

  const solid = !isHome || scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-border bg-background/85 border-b backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/brand/icon.png" alt="" width={32} height={32} priority className="size-8" />
          <span
            className={cn(
              "font-heading text-lg font-bold tracking-tight transition-colors",
              solid ? "text-foreground" : "text-white",
            )}
          >
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                solid
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className={cn(!solid && "text-white hover:bg-white/10")} />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Get in touch</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn("md:hidden", !solid && "text-white hover:bg-white/10")}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </Container>

      {menuOpen && (
        <nav className="border-border bg-background border-t md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:bg-muted rounded-md px-3 py-2.5 text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
