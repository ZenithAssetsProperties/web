import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  /** Optional breadcrumbs path starting after Home. */
  breadcrumbs?: BreadcrumbItem[];
  /** Eyebrow / kicker text above title. */
  eyebrow?: string;
  /** Primary headline. */
  title: string | ReactNode;
  /** Explanatory lead paragraph. */
  description?: string | ReactNode;
  /** Background image URL. Defaults to the signature modern villa poster. */
  backgroundImage?: string;
  /** Size variant controlling vertical spacing. */
  size?: "default" | "compact" | "large";
  /** Optional interactive element placed beneath the text (e.g. search form, buttons, badges). */
  children?: ReactNode;
  className?: string;
}

const sizeClasses = {
  compact: "pt-28 pb-12 sm:pt-36 sm:pb-16 min-h-[360px]",
  default: "pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 min-h-[440px] sm:min-h-[480px]",
  large: "pt-36 pb-20 sm:pt-48 sm:pb-28 lg:pt-52 lg:pb-32 min-h-[540px] sm:min-h-[620px]",
};

/**
 * Institutional PageHero component:
 * Guarantees visual, structural, and typographic consistency across every inner route.
 * Features synchronized header offset, Ken Burns cinematic backdrop, breadcrumbs,
 * signature kicker rules, and high-contrast typography.
 */
export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  backgroundImage = "/videos/hero-modern-villa-poster.jpg",
  size = "default",
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "bg-brand-950 relative isolate -mt-20 flex items-center overflow-hidden text-white",
        sizeClasses[size],
        className,
      )}
    >
      {/* 1. Cinematic Backdrop with Layered Vignette & Ken Burns Motion */}
      <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <div
          className="animate-ken-burns absolute inset-0 bg-cover bg-center brightness-[0.72] saturate-[0.85]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Soft edge blur backdrop extension */}
        <div className="bg-brand-950/60 absolute inset-0 backdrop-blur-[0.5px]" />
        {/* Deep architectural gradients */}
        <div className="from-brand-950 via-brand-950/85 to-brand-950/60 absolute inset-0 bg-gradient-to-t" />
        <div className="from-brand-950/90 via-brand-950/50 absolute inset-0 bg-gradient-to-r to-transparent" />
        {/* Watermark brand texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "url(/brand/pattern-tile.png)",
            backgroundSize: "96px 100px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* 2. Content Container */}
      <Container size="xl" className="relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Breadcrumb Navigation */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Reveal delay={40}>
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex flex-wrap items-center gap-2 text-[10px] tracking-[0.08em] text-white/60 uppercase"
              >
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  return (
                    <span key={crumb.label} className="flex items-center gap-2">
                      <ChevronRight className="size-3 text-white/40" aria-hidden="true" />
                      {crumb.href && !isLast ? (
                        <Link href={crumb.href} className="transition-colors hover:text-white">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-white/90" aria-current="page">
                          {crumb.label}
                        </span>
                      )}
                    </span>
                  );
                })}
              </nav>
            </Reveal>
          )}

          {/* Kicker Rule & Eyebrow */}
          {eyebrow && (
            <Reveal delay={80}>
              <div className="text-brand-300 mb-4 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] uppercase">
                <span
                  className="hero-kicker-rule bg-brand-300/80 h-px w-7 origin-left"
                  aria-hidden="true"
                />
                <span>{eyebrow}</span>
              </div>
            </Reveal>
          )}

          {/* Main Headline */}
          <Reveal delay={160} className="hero-title-wrap">
            <Heading
              as="h1"
              level="display"
              className="text-[clamp(2.25rem,4.2vw,4.25rem)] leading-[1.06] tracking-[-0.035em] text-white"
            >
              {title}
            </Heading>
          </Reveal>

          {/* Subtitle / Lead Paragraph */}
          {description && (
            <Reveal delay={240}>
              <Text
                size="lead"
                className="mt-4 max-w-2xl text-[14px] leading-6 text-white/80 sm:mt-5 sm:text-base sm:leading-7"
              >
                {description}
              </Text>
            </Reveal>
          )}

          {/* Action Children Slot */}
          {children && (
            <Reveal delay={320} className="mt-8">
              {children}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
