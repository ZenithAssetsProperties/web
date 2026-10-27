import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HeroBackdrop } from "@/components/sections/hero-backdrop";
import { Heading, Text } from "@/components/ui/typography";

export function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-[760px] items-center overflow-hidden sm:min-h-[min(900px,100svh)] lg:min-h-[min(940px,100svh)]">
      <HeroBackdrop />

      <Container size="xl" className="relative z-10 flex min-h-[760px] flex-col justify-center pt-28 pb-28 sm:min-h-[min(900px,100svh)] sm:pt-32 sm:pb-32 lg:min-h-[min(940px,100svh)]">
        <div className="grid w-full items-end gap-14 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20">
          <div className="max-w-[920px]">
            <Reveal>
              <div className="mb-7 flex items-center gap-3 text-[9px] font-semibold tracking-[0.24em] text-white/80 uppercase sm:mb-9 sm:text-[10px]">
                <span className="h-px w-8 bg-brand-300" aria-hidden="true" />
                A more considered way to find property
              </div>
            </Reveal>

            <Reveal delay={80}>
              <Heading as="h1" level="display" className="max-w-[900px] text-white sm:text-7xl lg:text-[6.5rem] lg:leading-[0.94]">
                Property, <span className="font-normal italic">with</span><br className="hidden sm:block" /> a clearer point of view.
              </Heading>
            </Reveal>

            <Reveal delay={160}>
              <Text size="lead" className="mt-7 max-w-[530px] text-[15px] leading-7 text-white/78 sm:mt-8 sm:text-lg sm:leading-8">
                Explore residential, commercial, and land opportunities through a more thoughtful journey—from first look to informed review.
              </Text>
            </Reveal>

            <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
              <Button asChild size="md" className="group h-11 rounded-none px-5">
                <Link href="/properties">
                  Explore the collection <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
              <Link href="/how-it-works" className="group inline-flex h-11 items-center gap-2 px-3 text-[13px] font-medium text-white/90 transition-colors hover:text-white">
                How Zenith works
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={320} className="hidden lg:block">
            <aside className="mb-2 border-l border-white/30 pl-5 text-white">
              <p className="font-mono text-[9px] tracking-[0.2em] text-white/60">01 / 04</p>
              <p className="mt-4 font-heading text-2xl leading-tight">A better way<br />to move forward.</p>
              <p className="mt-4 text-[11px] leading-5 text-white/65">Property discovery, considered for the decisions that matter.</p>
            </aside>
          </Reveal>
        </div>

        <div className="absolute right-6 bottom-7 left-6 flex items-end justify-between border-t border-white/25 pt-4 text-white/65 sm:right-8 sm:bottom-9 sm:left-8 lg:right-12 lg:left-12">
          <p className="text-[9px] tracking-[0.18em] uppercase sm:text-[10px]">Lagos, Nigeria <span className="px-2 text-white/35">/</span> Property &amp; investment</p>
          <a href="#home-search" className="group flex items-center gap-2 text-[9px] tracking-[0.16em] uppercase transition-colors hover:text-white sm:text-[10px]">
            Begin exploring <ArrowDown className="size-3 transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
