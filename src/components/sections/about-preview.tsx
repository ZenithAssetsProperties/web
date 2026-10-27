import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";

export function AboutPreview() {
  return (
    <Section id="about-zenith" spacing="lg" className="border-border/80 bg-background border-y">
      <Container size="xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="text-brand-600 text-[10px] font-semibold tracking-[0.2em] uppercase">
              About Zenith
            </p>
            <Heading
              as="h2"
              level="h2"
              className="mt-4 max-w-xl text-4xl leading-[1.04] sm:text-5xl"
            >
              Making the property journey <span className="font-normal italic">clearer.</span>
            </Heading>
          </Reveal>

          <Reveal delay={140}>
            <div className="border-brand-600/35 max-w-2xl border-l pl-5 sm:pl-7">
              <Text className="text-muted-foreground text-sm leading-7 sm:text-base">
                Zenith Asset Group is building a digital property experience that brings discovery,
                property information, inspection options, and customer support into a more connected
                journey.
              </Text>
              <Link
                href="/about"
                className="group border-border text-foreground hover:border-brand-600/40 hover:bg-brand-50 focus-visible:outline-brand-600 mt-6 inline-flex h-10 items-center gap-3 border px-4 text-xs font-medium transition-[background-color,border-color] duration-500 focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Get to know Zenith
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
