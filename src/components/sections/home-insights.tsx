import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { insightArticles } from "@/lib/insights";

export function HomeInsights() {
  const [leadArticle, ...articles] = insightArticles;

  return (
    <Section spacing="lg" border="top" className="bg-background">
      <Container size="xl">
        <div className="border-border/80 mb-8 grid gap-6 border-b pb-7 sm:mb-10 sm:pb-9 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <Reveal>
            <p className="text-brand-700 flex items-center gap-3 text-[10px] font-semibold tracking-[0.19em] uppercase">
              <span className="bg-brand-700/60 h-px w-7" aria-hidden="true" />
              The journal <span className="text-foreground/35">/ Perspective</span>
            </p>
            <Heading
              as="h2"
              level="h1"
              className="mt-4 max-w-2xl text-4xl leading-[1.04] sm:text-5xl lg:text-[3.5rem]"
            >
              Read the space <span className="font-normal italic">between the details.</span>
            </Heading>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start">
              <Text size="sm" className="text-muted-foreground max-w-sm leading-6">
                Thoughtful notes for exploring property, asking better questions, and understanding
                what to review.
              </Text>
              <Link
                href="/insights"
                className="group border-foreground/20 text-foreground hover:border-brand-950 hover:bg-brand-950 focus-visible:outline-brand-600 inline-flex h-10 shrink-0 items-center gap-3 border px-4 text-xs font-medium transition-[background-color,border-color,color] duration-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Visit the journal{" "}
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>

        {leadArticle && (
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <Reveal>
              <article className="group/article">
                <Link
                  href={`/insights/${leadArticle.slug}`}
                  className="focus-visible:outline-brand-600 block focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <figure className="bg-brand-950 relative aspect-[1.55] overflow-hidden sm:aspect-[1.8]">
                    <Image
                      src={leadArticle.image}
                      alt={leadArticle.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover/article:scale-[1.035]"
                    />
                    <div
                      className="from-brand-950/70 absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <span className="bg-brand-950/30 absolute top-4 left-4 border border-white/45 px-3 py-1.5 text-[9px] font-medium tracking-[0.14em] text-white uppercase backdrop-blur-sm">
                      Featured perspective
                    </span>
                    <span className="group-hover/article:text-brand-950 absolute right-4 bottom-4 flex size-10 items-center justify-center border border-white/65 text-white transition-[background-color,color,transform] duration-500 group-hover/article:-rotate-45 group-hover/article:bg-white sm:right-6 sm:bottom-6">
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </span>
                  </figure>
                </Link>
                <div className="text-brand-700 mt-5 flex items-center gap-3 text-[9px] font-semibold tracking-[0.13em] uppercase">
                  <span>{leadArticle.category}</span>
                  <span className="bg-brand-700/50 size-1 rounded-full" aria-hidden="true" />
                  <span>{leadArticle.readTime}</span>
                </div>
                <h3 className="font-heading mt-2 max-w-2xl text-2xl leading-tight font-normal tracking-tight sm:text-3xl">
                  <Link
                    href={`/insights/${leadArticle.slug}`}
                    className="hover:text-brand-700 transition-colors"
                  >
                    {leadArticle.title}
                  </Link>
                </h3>
                <Text size="sm" className="text-muted-foreground mt-3 max-w-xl leading-6">
                  {leadArticle.excerpt}
                </Text>
              </article>
            </Reveal>

            <div className="border-border/80 flex flex-col border-t lg:border-t-0">
              {articles.map((article, index) => (
                <Reveal key={article.slug} delay={100 + index * 100} className="h-full">
                  <article className="group/article border-border/80 grid h-full grid-cols-[100px_minmax(0,1fr)] gap-4 border-b py-5 first:pt-0 sm:grid-cols-[128px_minmax(0,1fr)] sm:gap-5 lg:grid-cols-[140px_minmax(0,1fr)]">
                    <Link
                      href={`/insights/${article.slug}`}
                      aria-label={`Read: ${article.title}`}
                      className="bg-brand-950 focus-visible:outline-brand-600 relative aspect-[0.95] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      <Image
                        src={article.image}
                        alt=""
                        fill
                        sizes="140px"
                        className="object-cover transition-transform duration-700 group-hover/article:scale-[1.05]"
                      />
                    </Link>
                    <div className="flex min-w-0 flex-col justify-center py-1">
                      <p className="text-brand-700 text-[9px] font-semibold tracking-[0.13em] uppercase">
                        {article.category} <span className="text-border px-1">/</span>{" "}
                        {article.readTime}
                      </p>
                      <h3 className="font-heading mt-2 text-xl leading-tight font-normal tracking-tight sm:text-2xl">
                        <Link
                          href={`/insights/${article.slug}`}
                          className="hover:text-brand-700 transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mt-2 line-clamp-2 text-xs leading-5">
                        {article.excerpt}
                      </p>
                      <Link
                        href={`/insights/${article.slug}`}
                        className="text-foreground mt-3 inline-flex w-fit items-center gap-2 text-[10px] font-semibold tracking-wide uppercase"
                      >
                        Read perspective{" "}
                        <ArrowRight
                          className="size-3 transition-transform duration-300 group-hover/article:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}
        <p className="text-muted-foreground mt-6 text-[9px] leading-4 tracking-[0.08em] uppercase">
          Editorial guidance is general. Confirm current property details and terms with Zenith.
        </p>
      </Container>
    </Section>
  );
}
