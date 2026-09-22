import { ArrowRight, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";
import { WaitlistTrigger } from "@/components/waitlist-trigger";
import { HeroHeadline } from "@/components/sections/hero-headline";

export function Hero() {
  return (
    <section className="relative -mt-20 flex h-screen min-h-[640px] items-center overflow-hidden">
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
        {/* Darker toward the text on the left, clearer toward the right —
            asymmetric without splitting the section into separate boxes. */}
        <div className="from-brand-950/85 via-brand-950/45 to-brand-950/15 absolute inset-0 bg-gradient-to-r" />
        <div className="from-brand-950/60 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>

      <Container className="relative z-10">
        <Stack gap="lg" className="max-w-2xl">
          <Reveal>
            <Badge dot className="border border-white/25 bg-white/10 text-white backdrop-blur-sm">
              Launching soon
            </Badge>
          </Reveal>

          <Reveal delay={80}>
            <Text as="span" size="lead" className="text-brand-300 font-semibold tracking-tight">
              Real estate investing, reimagined
            </Text>
          </Reveal>

          <Reveal delay={160} className="min-h-[80px] sm:min-h-[110px]">
            <Heading as="h1" level="h1" className="text-white">
              <HeroHeadline />
            </Heading>
          </Reveal>

          <Reveal delay={240}>
            <Text size="lead" className="max-w-xl text-white/75">
              Fractional ownership of verified properties — secure, transparent, and built for
              everyday investors, the diaspora, and institutions alike.
            </Text>
          </Reveal>

          <Reveal delay={320} className="pt-2">
            <WaitlistTrigger size="lg">
              Join our waitlist
              <ArrowRight className="size-4" aria-hidden="true" />
            </WaitlistTrigger>
          </Reveal>
        </Stack>
      </Container>

      <a
        href="#tv-scroll"
        aria-label="Scroll to explore"
        className="absolute inset-x-0 bottom-8 z-10 flex animate-bounce justify-center text-white/70 transition-colors hover:text-white"
      >
        <ChevronDown className="size-6" aria-hidden="true" />
      </a>
    </section>
  );
}
