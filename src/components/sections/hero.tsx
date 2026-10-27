import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";

export function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-[700px] items-center overflow-hidden sm:min-h-[min(820px,100svh)]">
      <div className="absolute inset-0">
        <Image
          src="/videos/hero-lagos-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/60 to-brand-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/65 via-transparent to-brand-950/15" />
      </div>

      <Container size="xl" className="relative z-10 py-32 sm:py-40">
        <Stack gap="lg" className="max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-white/85 uppercase">
              <span className="size-1.5 rounded-full bg-brand-300" aria-hidden="true" />
              Zenith Asset Group <span className="text-white/35">/</span> Property marketplace preview
            </span>
          </Reveal>

          <Reveal delay={80}>
            <Heading as="h1" level="display" className="max-w-4xl text-white sm:text-7xl lg:text-[5.5rem] lg:leading-[0.98]">
              Property, <span className="font-normal italic">with</span> clarity.
            </Heading>
          </Reveal>

          <Reveal delay={160}>
            <Text size="lead" className="max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Explore residential, land, and commercial opportunities through a considered path from
              discovery to property review.
            </Text>
          </Reveal>

          <Reveal delay={240} className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" className="group rounded-full px-7 shadow-xl shadow-black/15">
              <Link href="/properties">
                Explore properties <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="rounded-full border-white/30 bg-white/10 px-7 text-white backdrop-blur-md hover:bg-white/20 active:bg-white/15"
            >
              <Link href="/how-it-works">How it works</Link>
            </Button>
          </Reveal>

          <Reveal delay={320}>
            <p className="max-w-sm border-l border-white/25 pl-3 text-xs leading-5 text-white/65">
              Preview environment. Sample listings, availability, and prices are illustrative.
            </p>
          </Reveal>
        </Stack>

        <div className="absolute right-8 bottom-12 hidden items-center gap-3 text-white/65 xl:flex">
          <span className="font-mono text-[10px] tracking-[0.18em]">LAGOS, NIGERIA</span>
          <span className="h-px w-14 bg-white/40" aria-hidden="true" />
          <span className="text-[10px] tracking-[0.12em] uppercase">A place to begin</span>
        </div>
      </Container>
    </section>
  );
}
