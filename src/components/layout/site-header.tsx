"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const primaryNav = siteConfig.nav.filter((item) => item.href !== "/");

/** Numbered editorial navigation, tuned to the cinematic home opening. */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => setMenuOpen(false), [pathname]);

  const solid = scrolled || menuOpen;

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-out",
        solid ? "border-border/80 bg-background/95 backdrop-blur-xl" : "border-white/15 bg-gradient-to-b from-black/20 to-transparent",
      )}
    >
      <header className="mx-auto grid w-full max-w-[1600px] grid-cols-[1fr_auto] items-center px-5 py-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12 lg:py-5">
        <Link href="/" aria-label="Zenith Asset Group home" className="group flex w-fit items-center gap-3">
          <Image src="/brand/icon.png" alt="" width={38} height={38} priority className="size-9 shrink-0" />
          <span className={cn("flex flex-col leading-none transition-colors", solid ? "text-foreground" : "text-white")}>
            <span className="font-heading text-[23px] tracking-[-0.04em]">Zenith</span>
            <span className="mt-1.5 text-[8px] font-semibold tracking-[0.26em]">ASSET GROUP</span>
          </span>
          <span className={cn("ml-2 hidden h-8 w-px sm:block", solid ? "bg-border" : "bg-white/30")} />
          <span className={cn("hidden text-[9px] leading-[1.5] tracking-[0.12em] uppercase sm:block", solid ? "text-muted-foreground" : "text-white/65")}>
            Property<br />&amp; investment
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-8">
          {primaryNav.map((item, index) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative flex items-baseline gap-1.5 py-2 text-[12px] tracking-[0.02em] transition-colors after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
                  solid ? "after:bg-foreground" : "after:bg-white",
                  active
                    ? solid ? "text-foreground after:scale-x-100" : "text-white after:scale-x-100"
                    : solid ? "text-muted-foreground hover:text-foreground" : "text-white/75 hover:text-white",
                )}
              >
                <span className="relative -top-1 font-mono text-[8px] opacity-45">0{index + 1}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Link
            href="/properties"
            className={cn(
              "group hidden items-center gap-3 border-b pb-1.5 text-[11px] font-medium tracking-[0.04em] transition-colors md:inline-flex",
              solid ? "border-foreground/30 text-foreground hover:border-brand-600" : "border-white/45 text-white hover:border-white",
            )}
          >
            Explore properties
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className={cn("lg:hidden", !solid && "text-white hover:bg-white/10 hover:text-white")}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      {menuOpen && (
        <nav aria-label="Mobile navigation" className="absolute inset-x-4 top-full mx-auto mt-2 max-w-[480px] animate-fade-in border border-border bg-background motion-reduce:animate-none lg:hidden">
          <div className="flex flex-col p-3">
            {siteConfig.nav.map((item, index) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn("flex items-center gap-3 border-b border-border/70 px-3 py-3 text-sm", active ? "text-foreground" : "text-muted-foreground")}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="font-mono text-[9px] text-brand-600">0{index + 1}</span>
                  {item.label}
                </Link>
              );
            })}
            <Link href="/properties" className="mt-3 flex items-center justify-between bg-brand-700 px-4 py-3 text-sm font-medium text-white">
              Explore properties <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
