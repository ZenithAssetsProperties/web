import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";

const categories = [
  {
    name: "Land",
    description: "Room to build what comes next.",
    href: "/properties?category=land",
    image: "https://images.unsplash.com/photo-1596768368272-b1b3a8fe9632?auto=format&fit=crop&w=1100&q=85",
    alt: "Open landscape used as concept imagery",
    number: "01",
  },
  {
    name: "Residential",
    description: "Places designed around everyday life.",
    href: "/properties?category=residential",
    image: "https://images.unsplash.com/photo-1766603636483-84b2a2b8ee89?auto=format&fit=crop&w=1100&q=85",
    alt: "Contemporary residence used as concept imagery",
    number: "02",
  },
  {
    name: "Commercial",
    description: "Spaces for businesses to take shape.",
    href: "/properties?category=commercial",
    image: "https://images.unsplash.com/photo-1785966431797-4d37f79366e5?auto=format&fit=crop&w=1100&q=85",
    alt: "Contemporary office building used as concept imagery",
    number: "03",
  },
];

export function PropertyCategories() {
  return (
    <Section spacing="lg">
      <Container size="xl">
        <Reveal>
          <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-brand-600 dark:text-brand-300 text-[10px] font-semibold tracking-[0.18em] uppercase">
                Explore by property type
              </p>
              <Heading as="h2" level="h1" className="mt-3 max-w-xl">
                Find the kind of space that moves you forward.
              </Heading>
            </div>
            <Text className="text-muted-foreground max-w-md text-sm leading-6">
              Choose a path through the marketplace preview. All images are illustrative and all
              listings are fictional.
            </Text>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {categories.map(({ name, description, href, image, alt, number }, index) => (
            <Reveal key={name} delay={index * 90} className={index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <Link
                href={href}
                className="group relative isolate block aspect-[1.24] overflow-hidden rounded-[1.35rem] bg-brand-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 sm:aspect-[1.32] lg:aspect-[0.88]"
              >
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/10 to-brand-950/15 transition-colors duration-500 group-hover:from-brand-950/95" />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6">
                  <span className="rounded-full border border-white/25 bg-brand-950/40 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-md">
                    Concept imagery
                  </span>
                  <span className="font-mono text-xs text-white/75">{number}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <h3 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {name}
                    </h3>
                    <p className="mt-2 text-sm text-white/75">{description}</p>
                  </div>
                  <span className="mb-0.5 flex size-11 shrink-0 items-center justify-center rounded-full border border-white/35 text-white transition-[background-color,color,transform] duration-300 group-hover:-rotate-45 group-hover:bg-white group-hover:text-brand-950">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
