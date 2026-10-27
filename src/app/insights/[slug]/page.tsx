import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { insightArticles } from "@/lib/insights";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insightArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) return { title: "Insight not found", robots: { index: false, follow: false } };
  return { title: article.title, description: article.excerpt };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <>
      <PageHero eyebrow={`The journal / ${article.category}`} title={article.title} description={article.excerpt} />

      <Section spacing="md">
        <Container size="md">
          <Link href="/insights" className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600">
            <ArrowLeft className="size-3.5" aria-hidden="true" /> Back to insights
          </Link>
          <figure className="relative mt-6 aspect-[1.75] overflow-hidden bg-brand-950">
            <Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </figure>
          <p className="mt-4 text-[9px] font-semibold tracking-[0.14em] text-brand-700 uppercase">{article.category} <span className="px-1 text-border">/</span> {article.readTime}</p>
          <div className="mt-10 space-y-9 sm:mt-12">
            {article.sections.map(({ heading, paragraphs }) => (
              <section key={heading}>
                <Heading as="h2" level="h3">{heading}</Heading>
                <div className="mt-4 space-y-4">
                  {paragraphs.map((paragraph) => (
                    <Text key={paragraph} className="leading-7 text-muted-foreground">{paragraph}</Text>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border/80 pt-6 sm:flex-row sm:items-center">
            <p className="max-w-md text-[10px] leading-5 text-muted-foreground">General editorial perspective only. Confirm current property details and terms with Zenith.</p>
            <Button asChild size="sm" variant="secondary">
              <Link href="/properties">Explore properties <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
