import Link from "next/link";
import { ArrowUpRight, Building2, Home, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";

const categories = [
  {
    name: "Land",
    description: "Browse land opportunities by location and size.",
    href: "/properties?category=land",
    icon: MapPin,
    index: "01",
  },
  {
    name: "Residential",
    description: "Explore homes and residential properties.",
    href: "/properties?category=residential",
    icon: Home,
    index: "02",
  },
  {
    name: "Commercial",
    description: "Review commercial property options.",
    href: "/properties?category=commercial",
    icon: Building2,
    index: "03",
  },
];

export function PropertyCategories() {
  return (
    <Section spacing="lg">
      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-brand-600 dark:text-brand-300 text-xs font-semibold tracking-[0.14em] uppercase">
                Browse by category
              </p>
              <Heading as="h2" level="h1" className="mt-3">
                Start with what matters to you.
              </Heading>
            </div>
            <Text className="text-muted-foreground max-w-md">
              Choose a property type to narrow the marketplace preview. Category links keep your
              search shareable.
            </Text>
          </div>
        </Reveal>

        <Grid cols={3} gap="md">
          {categories.map(({ name, description, href, icon: Icon, index }, position) => (
            <Reveal key={name} delay={position * 80}>
              <Link
                href={href}
                className="group border-border bg-background focus-visible:ring-ring focus-visible:ring-offset-background block h-full rounded-2xl border p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-600/50 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="bg-brand-50 text-brand-700 dark:bg-brand-900 dark:text-brand-200 flex size-12 items-center justify-center rounded-xl">
                    <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="text-muted-foreground/60 font-mono text-xs">{index}</span>
                </div>
                <div className="mt-10 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold tracking-tight">{name}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-6">{description}</p>
                  </div>
                  <ArrowUpRight className="text-muted-foreground mt-1 size-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </Link>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
