import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/typography";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-brand-950 relative overflow-hidden text-white">
      {/* Brand Watermark Pattern Tile */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "url(/brand/pattern-tile.png)",
          backgroundSize: "96px 100px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      <Container size="xl" className="relative pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-12 lg:gap-14">
          {/* Brand Identity Column */}
          <div className="space-y-6 lg:col-span-4">
            <Link
              href="/"
              aria-label="Zenith Asset Group Home"
              className="group inline-flex items-center gap-3"
            >
              <Image
                src="/brand/icon.png"
                alt=""
                width={36}
                height={36}
                className="size-9 shrink-0 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="flex flex-col leading-none text-white">
                <span className="font-heading text-[22px] tracking-[-0.04em]">Zenith</span>
                <span className="mt-1 text-[8px] font-semibold tracking-[0.26em] text-white/80">
                  ASSET GROUP
                </span>
              </span>
            </Link>

            <Text size="sm" className="max-w-sm text-sm leading-relaxed text-white/65">
              A real estate brand committed to providing reliable, strategic, and value-driven
              property solutions that empower individuals, families, and businesses to make
              confident real estate decisions.
            </Text>

            <div className="border-brand-600/30 flex items-center gap-3 rounded border bg-white/[0.02] p-3">
              <ShieldCheck className="text-brand-400 size-5 shrink-0" aria-hidden="true" />
              <p className="text-[11px] leading-tight text-white/70">
                100% legal due diligence &amp; title verification standard.
              </p>
            </div>
          </div>

          {/* Quick Links Column 1: Portfolio */}
          <div className="space-y-4 sm:col-span-1 lg:col-span-2 lg:col-start-6">
            <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-white/90 uppercase">
              Portfolio
            </p>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <Link href="/properties" className="transition-colors hover:text-white">
                  All Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?category=residential"
                  className="transition-colors hover:text-white"
                >
                  Residential Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?category=land"
                  className="transition-colors hover:text-white"
                >
                  Land Corridors
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?category=commercial"
                  className="transition-colors hover:text-white"
                >
                  Commercial Assets
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/the-seventh-residence"
                  className="text-brand-300 inline-flex items-center gap-1 transition-colors hover:text-white"
                >
                  The Seventh Residence
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: The Firm */}
          <div className="space-y-4 sm:col-span-1 lg:col-span-2">
            <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-white/90 uppercase">
              The Firm
            </p>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="transition-colors hover:text-white">
                  The Zenith Approach
                </Link>
              </li>
              <li>
                <Link href="/about#values" className="transition-colors hover:text-white">
                  Guiding Principles
                </Link>
              </li>
              <li>
                <Link href="/about#governance" className="transition-colors hover:text-white">
                  Governance &amp; Diligence
                </Link>
              </li>
              <li>
                <Link href="/insights" className="transition-colors hover:text-white">
                  Market Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 3: Private Advisory */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-3">
            <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-white/90 uppercase">
              Client Advisory Desk
            </p>
            <ul className="space-y-3 text-xs text-white/70">
              <li>
                <a
                  href="mailto:hello@zenithassetgroup.com"
                  className="group flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="text-brand-400 size-4 shrink-0" aria-hidden="true" />
                  <span className="font-mono text-[11px]">hello@zenithassetgroup.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <MapPin className="text-brand-400 mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span>Lagos, Nigeria &mdash; West Africa Advisory Desk</span>
                </div>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="bg-brand-600/40 hover:bg-brand-600 border-brand-500/50 inline-flex items-center gap-2 rounded border px-3 py-1.5 text-[11px] font-medium text-white transition-all duration-300"
                >
                  Schedule Private Consultation
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[11px] text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Your vision.
            Our commitment. A future of lasting value.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/about#governance" className="transition-colors hover:text-white/80">
              Title Assurance
            </Link>
            <Link href="/how-it-works" className="transition-colors hover:text-white/80">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white/80">
              Confidentiality
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
