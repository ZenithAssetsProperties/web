import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";

const categories = [
  {
    name: "Residential",
    description: "Considered spaces for the way life unfolds.",
    href: "/properties?category=residential",
    image: "https://images.unsplash.com/photo-1766603636483-84b2a2b8ee89?auto=format&fit=crop&w=1500&q=88",
    alt: "Contemporary residence used as concept imagery",
    number: "01",
    format: "feature" as const,
  },
  {
    name: "Land",
    description: "Room to shape what comes next.",
    href: "/properties?category=land",
    image: "https://images.unsplash.com/photo-1596768368272-b1b3a8fe9632?auto=format&fit=crop&w=1100&q=88",
    alt: "Open landscape used as concept imagery",
    number: "02",
    format: "supporting" as const,
  },
  {
    name: "Commercial",
    description: "A setting for ambitious work.",
    href: "/properties?category=commercial",
    image: "https://images.unsplash.com/photo-1785966431797-4d37f79366e5?auto=format&fit=crop&w=1100&q=88",
    alt: "Contemporary office building used as concept imagery",
    number: "03",
    format: "supporting" as const,
  },
] as const;

function CategoryLink({
  category,
  delay,
}: {
  category: (typeof categories)[number];
  delay: number;
}) {
  const feature = category.format === "feature";

  return (
    <Reveal delay={delay} className="min-w-0">
      <Link
        href={category.href}
        className={`group relative isolate flex overflow-hidden bg-brand-950 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 ${
          feature ? "min-h-[390px] sm:min-h-[470px] lg:min-h-[570px]" : "min-h-[230px] sm:min-h-[270px] lg:min-h-0"
        }`}
      >
        <Image
          src={category.image}
          alt={category.alt}
          fill
          sizes={feature ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 40vw"}
          className="object-cover transition-transform duration-[1200ms] ease-out motion-safe:group-hover:scale-[1.045]"
        />
        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            feature
              ? "bg-gradient-to-t from-brand-950/85 via-brand-950/15 to-brand-950/15 group-hover:from-brand-950/90"
              : "bg-gradient-to-r from-brand-950/75 via-brand-950/20 to-brand-950/5 group-hover:from-brand-950/85"
          }`}
          aria-hidden="true"
        />
        <div className="relative flex w-full flex-col justify-between p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <span className="text-[9px] font-semibold tracking-[0.17em] text-white/75 uppercase">
              {feature ? "A place to call your own" : "Explore the collection"}
            </span>
            <span className="font-mono text-[10px] text-white/70">{category.number}</span>
          </div>

          <div className={`flex items-end justify-between gap-4 ${feature ? "sm:max-w-xl" : ""}`}>
            <div>
              <h3 className={`font-heading font-normal tracking-tight ${feature ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl"}`}>
                {category.name}
              </h3>
              <p className={`mt-2 leading-6 text-white/80 ${feature ? "max-w-sm text-sm sm:text-base" : "max-w-xs text-xs sm:text-sm"}`}>
                {category.description}
              </p>
            </div>
            <span className="mb-1 flex size-10 shrink-0 items-center justify-center border border-white/55 transition-[background-color,color,transform,border-color] duration-500 group-hover:-rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-brand-950 sm:size-11">
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function PropertyCategories() {
  return (
    <Section spacing="lg" className="bg-[#f7f7f4]">
      <Container size="xl">
        <div className="mb-8 grid gap-6 border-b border-border/80 pb-7 sm:mb-10 sm:pb-9 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <Reveal>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.19em] text-brand-700 uppercase">
              <span className="h-px w-7 bg-brand-700/60" aria-hidden="true" />
              Find your direction <span className="text-foreground/35">/ 03 paths</span>
            </p>
            <Heading as="h2" level="h1" className="mt-4 max-w-2xl text-4xl leading-[1.04] sm:text-5xl lg:text-[3.5rem]">
              Space for what <span className="font-normal italic">comes next.</span>
            </Heading>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-l border-brand-700/35 pl-4 sm:pl-5">
              <Text size="sm" className="leading-6 text-muted-foreground">
                Explore residential, land, and commercial opportunities. These paths currently lead to a marketplace preview with illustrative imagery and fictional listings.
              </Text>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <CategoryLink category={categories[0]} delay={0} />
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
            <CategoryLink category={categories[1]} delay={100} />
            <CategoryLink category={categories[2]} delay={200} />
          </div>
        </div>

        <Reveal delay={240}>
          <p className="mt-4 text-[9px] tracking-[0.1em] text-muted-foreground uppercase">
            Concept imagery · no live inventory represented
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
