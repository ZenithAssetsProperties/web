import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";

const residenceImages = [
  {
    src: "/properties/seventh-residence/lounge.jpg",
    alt: "Lounge interior rendering for The Seventh Residence",
    className: "row-span-2",
  },
  {
    src: "/properties/seventh-residence/bedroom.jpg",
    alt: "Bedroom rendering for The Seventh Residence",
    className: "",
  },
  {
    src: "/properties/seventh-residence/kitchen.jpg",
    alt: "Kitchen rendering for The Seventh Residence",
    className: "",
  },
];

export function FeaturedProperties() {
  return (
    <Section id="featured-properties" spacing="lg" className="bg-muted/45">
      <Container size="xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
          <Reveal>
            <div className="max-w-lg py-2">
              <p className="text-brand-600 dark:text-brand-300 text-[10px] font-semibold tracking-[0.2em] uppercase">
                A project preview <span className="px-2 text-foreground/30">/</span> 01
              </p>
              <Heading as="h2" level="h1" className="mt-5 text-5xl leading-[0.98] sm:text-6xl">
                The Seventh <span className="font-normal italic">Residence</span>
              </Heading>
              <Text className="text-muted-foreground mt-5 max-w-md leading-7">
                Explore the architectural and interior visuals supplied for this residential
                project. Confirmed location, unit details, pricing, documentation, and availability
                will be added when approved by Zenith.
              </Text>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button asChild size="sm" className="rounded-sm px-4">
                  <Link href="/properties/the-seventh-residence">
                    Explore the project <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
                <span className="text-muted-foreground text-[10px] font-medium tracking-[0.14em] uppercase">
                  Project visuals · preview only
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid aspect-[1.06] grid-cols-[1.6fr_1fr] grid-rows-2 gap-2.5 sm:gap-3">
            {residenceImages.map(({ src, alt, className }, index) => (
              <Reveal key={src} delay={index * 90} className={className}>
                <figure className="group relative h-full min-h-0 overflow-hidden bg-brand-900">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 56vw"
                    className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035]"
                  />
                  <figcaption className="absolute right-3 bottom-3 left-3 flex items-center justify-between gap-2">
                    <span className="bg-brand-950/60 px-2.5 py-1.5 text-[9px] font-medium tracking-[0.12em] text-white uppercase backdrop-blur-sm">
                      Supplied rendering
                    </span>
                    {index === 0 && (
                      <span className="text-[9px] tracking-[0.12em] text-white/80 uppercase">
                        The Seventh Residence
                      </span>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
