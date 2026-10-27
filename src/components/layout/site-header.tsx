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

/** Editorial navigation, tuned to the cinematic home opening. */
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
    <div className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-full origin-top border-b border-border/80 bg-background/94 opacity-0 backdrop-blur-2xl transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          solid ? "scale-y-100 opacity-100" : "scale-y-[0.92] opacity-0",
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-brand-600 via-brand-300/70 to-transparent transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          solid ? "scale-x-100" : "scale-x-0",
        )}
      />
      <header className={cn("relative mx-auto grid w-full max-w-[1600px] grid-cols-[1fr_auto] items-center px-5 transition-[padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12", solid ? "py-3" : "py-4 sm:py-5")}>
        <Link href="/" aria-label="Zenith Asset Group home" className="group flex w-fit items-center gap-3">
          <Image src="/brand/icon.png" alt="" width={38} height={38} priority className={cn("shrink-0 transition-[width,height] duration-500 ease-out", solid ? "size-8" : "size-9")} />
          <span className={cn("flex flex-col leading-none transition-colors", solid ? "text-foreground" : "text-white")}>
            <span className={cn("font-heading tracking-[-0.04em] transition-[font-size] duration-500", solid ? "text-[21px]" : "text-[23px]")}>Zenith</span>
            <span className="mt-1.5 text-[8px] font-semibold tracking-[0.26em]">ASSET GROUP</span>
          </span>
          <span className={cn("ml-2 hidden h-8 w-px sm:block", solid ? "bg-border" : "bg-white/30")} />
          <span className={cn("hidden text-[9px] leading-[1.5] tracking-[0.12em] uppercase sm:block", solid ? "text-muted-foreground" : "text-white/65")}>
            Property<br />&amp; investment
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-8">
          {primaryNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
              "group relative flex items-baseline gap-1.5 py-2 text-[12px] tracking-[0.02em] transition-colors duration-500 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
                  solid ? "after:bg-foreground" : "after:bg-white",
                  active
                    ? solid ? "text-foreground after:scale-x-100" : "text-white after:scale-x-100"
                    : solid ? "text-muted-foreground hover:text-foreground" : "text-white/75 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Link
            href="/properties"
            className={cn(
              "group hidden items-center gap-3 border border-transparent px-3 py-2 text-[11px] font-medium tracking-[0.04em] transition-[background-color,border-color,color] duration-500 md:inline-flex",
              solid ? "text-foreground hover:border-border hover:bg-muted" : "text-white hover:border-white/25 hover:bg-white/10",
            )}
          >
            Explore properties
            <ArrowUpRight className="size-3.5 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
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
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn("flex items-center gap-3 border-b border-border/70 px-3 py-3 text-sm transition-[background-color,color,padding] duration-300 hover:bg-muted hover:pl-4", active ? "text-foreground" : "text-muted-foreground")}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/properties" className="group mt-3 flex items-center justify-between bg-brand-700 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-800">
              Explore properties <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
