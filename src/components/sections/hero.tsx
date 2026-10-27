import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";

export function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-[680px] items-center overflow-hidden sm:min-h-[760px]">
      <div className="absolute inset-0">
        <video
          className="animate-ken-burns size-full object-cover"
          poster="/videos/hero-lagos-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/hero-lagos.mp4" type="video/mp4" />
        </video>
        <div className="from-brand-950/85 via-brand-950/45 to-brand-950/15 absolute inset-0 bg-gradient-to-r" />
        <div className="from-brand-950/60 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>

      <Container className="relative z-10 py-28">
        <Stack gap="lg" className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
              Property discovery, with a clearer next step
            </span>
          </Reveal>

          <Reveal delay={80}>
            <Heading as="h1" level="display" className="max-w-3xl text-white">
              Find the right property. Buy with confidence.
            </Heading>
          </Reveal>

          <Reveal delay={160}>
            <Text size="lead" className="max-w-2xl text-white/75">
              Explore properties, review available details, and understand the next steps in your
              property journey with Zenith Asset Group.
            </Text>
          </Reveal>

          <Reveal delay={240} className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link href="/properties">
                Explore properties <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 active:bg-white/15"
            >
              <Link href="/how-it-works">How it works</Link>
            </Button>
          </Reveal>
        </Stack>
      </Container>

      <a
        href="#tv-scroll"
        aria-label="Scroll to featured property previews"
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center text-white/70 transition-colors hover:text-white"
      >
        <ArrowDown className="size-5" aria-hidden="true" />
      </a>
    </section>
  );
}
