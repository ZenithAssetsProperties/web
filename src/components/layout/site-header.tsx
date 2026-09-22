"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Fixed overlay header: a full-bleed transparent bar over each page's hero,
 * which transforms into a floating rounded pill once the page scrolls. The
 * nav itself tracks the pointer — a soft pill slides and resizes to match
 * whichever link is hovered (measured via getBoundingClientRect, no
 * animation library), and the current route stays subtly marked even when
 * nothing is hovered.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [hoverRect, setHoverRect] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
    setHoverRect(null);
  }, [scrolled, pathname]);

  const solid = scrolled || menuOpen;

  const handleNavEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    const nav = navRef.current;
    if (!nav) return;
    const linkBox = event.currentTarget.getBoundingClientRect();
    const navBox = nav.getBoundingClientRect();
    setHoverRect({ left: linkBox.left - navBox.left, width: linkBox.width });
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-0 sm:px-4">
      <header
        className={cn(
          "flex w-full items-center justify-between border transition-all duration-500 ease-out",
          solid
            ? "border-border bg-background/90 shadow-brand-950/10 mt-3 max-w-4xl rounded-full px-5 py-2.5 shadow-xl backdrop-blur-xl"
            : "max-w-none rounded-none border-transparent bg-transparent px-6 py-5 sm:px-8",
        )}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/brand/icon.png"
            alt=""
            width={32}
            height={32}
            priority
            className={cn("shrink-0 transition-all duration-500", solid ? "size-7" : "size-8")}
          />
          <span
            className={cn(
              "font-heading flex flex-col leading-[1.15] font-semibold tracking-[0.08em] uppercase transition-colors",
              solid ? "text-foreground" : "text-white",
            )}
          >
            <span className="text-[11px]">Zenith Asset</span>
            <span className="text-[11px]">Group</span>
          </span>
        </Link>

        <nav
          ref={navRef}
          onMouseLeave={() => setHoverRect(null)}
          className="relative hidden items-center gap-1 md:flex"
        >
          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-y-0.5 rounded-full transition-[left,width,opacity] duration-300 ease-out",
              solid ? "bg-brand-600/10 dark:bg-brand-400/10" : "bg-white/10",
              hoverRect ? "opacity-100" : "opacity-0",
            )}
            style={hoverRect ? { left: hoverRect.left, width: hoverRect.width } : undefined}
          />
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={handleNavEnter}
                className={cn(
                  "relative z-10 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                  solid
                    ? active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                    : active
                      ? "text-white"
                      : "text-white/80 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className={cn(!solid && "text-white hover:bg-white/10")} />
          <Button asChild size={solid ? "sm" : "md"} className="hidden md:inline-flex">
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
      </header>

      {menuOpen && (
        <nav
          className={cn(
            "border-border bg-background absolute inset-x-4 top-full mt-2 rounded-2xl border shadow-xl md:hidden",
          )}
        >
          <div className="flex flex-col gap-1 p-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium",
                  pathname === item.href
                    ? "bg-muted text-foreground"
                    : "text-foreground hover:bg-muted",
                )}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </nav>
      )}
    </div>
  );
}
