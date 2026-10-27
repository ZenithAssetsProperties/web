import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HeroBackdrop } from "@/components/sections/hero-backdrop";
import { Heading, Text } from "@/components/ui/typography";

export function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-[700px] items-center overflow-hidden sm:min-h-[min(840px,100svh)] lg:min-h-[min(900px,100svh)]">
      <HeroBackdrop />

      <Container
        size="xl"
        className="relative z-10 flex min-h-[700px] flex-col justify-center pt-28 pb-28 sm:min-h-[min(840px,100svh)] sm:pt-32 sm:pb-32 lg:min-h-[min(900px,100svh)]"
      >
        <div className="w-full max-w-[760px]">
          <Reveal>
            <div className="mb-6 flex items-center gap-3 text-[9px] font-medium tracking-[0.22em] text-white/75 uppercase sm:mb-8 sm:text-[10px]">
              <span
                className="hero-kicker-rule bg-brand-300/80 h-px w-7 origin-left"
                aria-hidden="true"
              />
              A more considered way to find property
            </div>
          </Reveal>

          <Reveal delay={120} className="hero-title-wrap">
            <Heading
              as="h1"
              level="display"
              className="max-w-[760px] text-[clamp(2.5rem,4.4vw,4.5rem)] leading-[1.04] tracking-[-0.035em] text-white"
            >
              <span className="hero-title-line">
                <span>
                  Property, <em>with</em>
                </span>
              </span>
              <span className="hero-title-line">
                <span>a clearer point of view.</span>
              </span>
            </Heading>
          </Reveal>

          <Reveal delay={280} className="duration-1000">
            <Text
              size="lead"
              className="mt-6 max-w-[490px] text-[14px] leading-6 text-white/75 sm:mt-7 sm:text-base sm:leading-7"
            >
              Explore residential, commercial, and land opportunities through a more thoughtful
              journey, from first look to informed review.
            </Text>
          </Reveal>

          <Reveal
            delay={440}
            className="mt-7 flex flex-wrap items-center gap-3 duration-1000 sm:mt-8"
          >
            <Button asChild size="sm" className="group h-10 rounded-none px-4 text-[12px]">
              <Link href="/properties">
                Explore the collection{" "}
                <ArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Link
              href="/how-it-works"
              className="group inline-flex h-10 items-center gap-2 border border-white/30 bg-white/[0.03] px-4 text-[12px] text-white/85 transition-[background-color,border-color,color] duration-500 hover:border-white/65 hover:bg-white/12 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              How Zenith works
              <ArrowRight
                className="size-3.5 transition-transform duration-500 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 flex w-full flex-col items-start gap-3 border-t border-white/25 pt-4 text-white/65 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] tracking-[0.18em] uppercase sm:text-[10px]">
            Residential <span className="px-2 text-white/35">/</span> Commercial{" "}
            <span className="px-2 text-white/35">/</span> Land
          </p>
          <a
            href="#home-search"
            className="group inline-flex items-center gap-2 border border-transparent px-3 py-1.5 text-[9px] tracking-[0.16em] uppercase transition-[background-color,border-color,color] duration-500 hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-[10px]"
          >
            Begin exploring{" "}
            <ArrowDown
              className="size-3 transition-transform duration-500 ease-out group-hover:translate-y-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
