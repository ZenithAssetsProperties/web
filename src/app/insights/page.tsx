import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { insightArticles } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Thoughtful perspectives on exploring property and making the next step clearer.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Zenith journal"
        title="Perspective for the property journey."
        description="Practical notes to help you explore, review, and ask better questions along the way."
      />

      <Section spacing="lg">
        <Container size="xl">
          <div className="border-border/80 mb-8 border-b pb-5 sm:mb-10 sm:pb-7">
            <p className="text-brand-700 text-[10px] font-semibold tracking-[0.18em] uppercase">
              Ideas to take with you
            </p>
            <Heading as="h2" level="h2" className="mt-3">
              The latest perspectives.
            </Heading>
          </div>

          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
            {insightArticles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 90}>
                <article className="group/article">
                  <Link
                    href={`/insights/${article.slug}`}
                    aria-label={`Read: ${article.title}`}
                    className="bg-brand-950 focus-visible:outline-brand-600 relative block aspect-[1.35] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1000ms] ease-out group-hover/article:scale-[1.04]"
                    />
                    <span className="bg-brand-950/20 group-hover/article:text-brand-950 absolute right-3 bottom-3 flex size-9 items-center justify-center border border-white/70 text-white transition-[background-color,color,transform] duration-500 group-hover/article:-rotate-45 group-hover/article:bg-white">
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </span>
                  </Link>
                  <p className="text-brand-700 mt-4 text-[9px] font-semibold tracking-[0.14em] uppercase">
                    {article.category} <span className="text-border px-1">/</span>{" "}
                    {article.readTime}
                  </p>
                  <h3 className="font-heading mt-2 text-2xl leading-tight font-normal tracking-tight">
                    <Link
                      href={`/insights/${article.slug}`}
                      className="hover:text-brand-700 transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <Text size="sm" className="text-muted-foreground mt-3 leading-6">
                    {article.excerpt}
                  </Text>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="border-border/80 text-muted-foreground mt-10 border-t pt-4 text-[10px] leading-5">
            These articles provide general perspective. Property details, availability, and
            applicable terms should be confirmed with Zenith.
          </p>
        </Container>
      </Section>
    </>
  );
}
