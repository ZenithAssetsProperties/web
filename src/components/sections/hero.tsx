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
    <section className="relative -mt-20 flex min-h-[680px] items-center overflow-hidden sm:min-h-[760px]">
      <div className="absolute inset-0">
        <Image
          src="/videos/hero-lagos-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover"
        />
        <div className="from-brand-950/90 via-brand-950/55 to-brand-950/20 absolute inset-0 bg-gradient-to-r" />
        <div className="from-brand-950/55 absolute inset-0 bg-gradient-to-t via-transparent to-brand-950/10" />
      </div>

      <Container className="relative z-10 py-32 sm:py-40">
        <Stack gap="lg" className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
              Zenith Asset Group · Property marketplace preview
            </span>
          </Reveal>

          <Reveal delay={80}>
            <Heading as="h1" level="display" className="max-w-3xl text-white">
              Find the right property. Buy with confidence.
            </Heading>
          </Reveal>

          <Reveal delay={160}>
            <Text size="lead" className="max-w-2xl text-white/80">
              Explore property details, understand what is available to review, and plan your next
              step with Zenith Asset Group.
            </Text>
          </Reveal>

          <Reveal delay={240} className="flex flex-wrap gap-3 pt-1">
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

          <Reveal delay={320}>
            <p className="text-xs text-white/60">
              Preview environment · Listings and prices shown are illustrative.
            </p>
          </Reveal>
        </Stack>
      </Container>
    </section>
  );
}
