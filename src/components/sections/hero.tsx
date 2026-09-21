import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Stack } from "@/components/ui/stack";
import { Heading } from "@/components/ui/typography";

export function Hero() {
  return (
    <section className="relative -mt-16 flex h-screen min-h-[640px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="size-full animate-ken-burns object-cover"
          poster="/videos/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/hero-skyline.webm" type="video/webm" />
          <source src="/videos/hero-skyline.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-transparent to-brand-950/40" />
      </div>

      <Container className="relative z-10">
        <Stack align="center" gap="lg" className="mx-auto max-w-2xl text-center">
          <div className="animate-fade-up">
            <Badge dot className="border border-white/25 bg-white/10 text-white backdrop-blur-sm">
              In development
            </Badge>
          </div>

          <div className="animate-fade-up [animation-delay:100ms]">
            <Heading as="h1" level="display" className="text-white">
              We&apos;re currently undergoing development.
            </Heading>
          </div>

          <div className="animate-fade-up [animation-delay:200ms]">
            <span
              className="animate-shimmer bg-[length:200%_100%] bg-clip-text text-2xl font-medium text-transparent sm:text-3xl"
              style={{
                backgroundImage: "linear-gradient(90deg, #ffffff99, #ffffff, #ffffff99)",
              }}
            >
              Watch this space.
            </span>
          </div>
        </Stack>
      </Container>

      <div className="absolute inset-x-0 bottom-8 z-10 flex animate-bounce justify-center text-white/70">
        <ChevronDown className="size-6" aria-hidden="true" />
      </div>
    </section>
  );
}
