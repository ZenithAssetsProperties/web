import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  Compass,
  FileCheck2,
  Home,
  Lightbulb,
  Scale,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";

const coreValues = [
  {
    label: "Integrity",
    icon: ShieldCheck,
    description:
      "Uncompromising ethics, transparent dealings, and fiduciary accountability in every advisory engagement and property transaction.",
  },
  {
    label: "Excellence",
    icon: Award,
    description:
      "Institutional-grade property vetting, thorough market due diligence, and superior execution standards across all client portfolios.",
  },
  {
    label: "Long-Term Value Creation",
    icon: TrendingUp,
    description:
      "A strategic focus on enduring capital appreciation and wealth preservation that extends far beyond immediate transactions.",
  },
  {
    label: "Innovation",
    icon: Lightbulb,
    description:
      "Leveraging contemporary property intelligence, transparent digital processes, and modern real estate investment methodologies.",
  },
  {
    label: "Professionalism",
    icon: BadgeCheck,
    description:
      "Disciplined legal diligence, reliable advisory, and structured support guiding our clients through every milestone.",
  },
  {
    label: "Client Empowerment",
    icon: Users,
    description:
      "Providing the clarity, insight, and confidence needed for individuals, families, and businesses to make transformative property decisions.",
  },
];

const strategicPathways = [
  {
    step: "01",
    title: "Own Your Dream Property",
    subtitle: "Residential Sanctuary & Security",
    icon: Home,
    description:
      "Whether seeking a family sanctuary, executive residence, or personal haven, we connect you with verified residential properties that match your lifestyle and long-term aspirations.",
    highlights: [
      "Vetted prime residential locations",
      "Authentic legal title & documentation",
      "Tailored lifestyle & amenity matching",
    ],
  },
  {
    step: "02",
    title: "Expand Your Real Estate Portfolio",
    subtitle: "Strategic Asset Accumulation",
    icon: Building2,
    description:
      "For seasoned investors and enterprise builders looking to diversify their wealth across commercial spaces, high-growth land corridors, and income-generating assets.",
    highlights: [
      "High-conviction growth corridors",
      "Asset diversification strategies",
      "Capital appreciation potential",
    ],
  },
  {
    step: "03",
    title: "Explore Rewarding Property Investments",
    subtitle: "Disciplined Value & Yield",
    icon: Briefcase,
    description:
      "Discover carefully structured property investments designed to bridge the gap between capital and prime real estate opportunities, backed by thorough due diligence.",
    highlights: [
      "Rigorous due diligence checks",
      "Transparent fee structures",
      "Long-term wealth compounding",
    ],
  },
];

const governancePillars = [
  {
    title: "Title & Legal Diligence",
    description:
      "Exhaustive title verifications, registry searches, and regulatory reviews ensuring unencumbered ownership before any property is presented.",
    icon: FileCheck2,
  },
  {
    title: "Strategic Market Analysis",
    description:
      "Deep appraisal of infrastructure corridors, demographic trends, and comparative market valuations to validate upside potential.",
    icon: Scale,
  },
  {
    title: "Fiduciary Alignment",
    description:
      "We champion our clients' goals with total transparency, unbiased guidance, and relentless dedication to your best financial interests.",
    icon: CheckCircle2,
  },
];

export function About() {
  return (
    <div className="flex flex-col">
      {/* 1. Executive Philosophy & Impact Metrics Banner */}
      <Section id="philosophy" spacing="lg" border="bottom">
        <Container size="lg">
          <Stack gap="xl">
            <Reveal>
              <div className="border-brand-600/30 from-brand-950 via-brand-900 to-brand-950 relative overflow-hidden rounded-2xl border bg-gradient-to-br p-8 text-white shadow-xl sm:p-12">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: "url(/brand/pattern-tile.png)",
                    backgroundSize: "96px 100px",
                    backgroundRepeat: "repeat",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10 max-w-4xl space-y-6">
                  <Badge
                    variant="outline"
                    className="border-brand-400/40 bg-brand-900/60 text-brand-200"
                  >
                    OUR CORE BELIEF
                  </Badge>
                  <blockquote className="font-heading text-2xl leading-tight font-bold tracking-tight sm:text-3xl lg:text-4xl">
                    &ldquo;At Zenith Asset Group, we believe that real estate is more than just
                    property; it is an opportunity to build lasting value, create wealth, and secure
                    a better future.&rdquo;
                  </blockquote>
                  <p className="text-brand-300 font-mono text-sm tracking-widest uppercase">
                    Zenith Asset Group &mdash; Strategic Property Solutions
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Spec-style institutional metrics */}
            <Reveal delay={150}>
              <Grid cols={4} gap="md" className="pt-2">
                <div className="border-border/70 relative border p-6">
                  <span className="border-brand-600/60 dark:border-brand-400/60 absolute -top-px -left-px size-2.5 border-t-2 border-l-2" />
                  <span className="text-muted-foreground/60 font-mono text-xs">01 / DILIGENCE</span>
                  <Heading as="h4" level="h3" className="text-brand-600 dark:text-brand-400 mt-2">
                    100%
                  </Heading>
                  <Text size="sm" className="mt-1 font-medium">
                    Verified Legal Due Diligence
                  </Text>
                  <Text size="muted" className="mt-1 text-xs">
                    Every property audited for clean title and legal clarity.
                  </Text>
                </div>

                <div className="border-border/70 relative border p-6">
                  <span className="border-brand-600/60 dark:border-brand-400/60 absolute -top-px -left-px size-2.5 border-t-2 border-l-2" />
                  <span className="text-muted-foreground/60 font-mono text-xs">02 / FOCUS</span>
                  <Heading as="h4" level="h3" className="text-brand-600 dark:text-brand-400 mt-2">
                    Client-First
                  </Heading>
                  <Text size="sm" className="mt-1 font-medium">
                    Strategic Advisory
                  </Text>
                  <Text size="muted" className="mt-1 text-xs">
                    Solutions tailored to your exact aspirations and capital goals.
                  </Text>
                </div>

                <div className="border-border/70 relative border p-6">
                  <span className="border-brand-600/60 dark:border-brand-400/60 absolute -top-px -left-px size-2.5 border-t-2 border-l-2" />
                  <span className="text-muted-foreground/60 font-mono text-xs">03 / REACH</span>
                  <Heading as="h4" level="h3" className="text-brand-600 dark:text-brand-400 mt-2">
                    Multi-Tier
                  </Heading>
                  <Text size="sm" className="mt-1 font-medium">
                    Individuals, Families, Businesses
                  </Text>
                  <Text size="muted" className="mt-1 text-xs">
                    Empowering diverse stakeholders to invest with confidence.
                  </Text>
                </div>

                <div className="border-border/70 relative border p-6">
                  <span className="border-brand-600/60 dark:border-brand-400/60 absolute -top-px -left-px size-2.5 border-t-2 border-l-2" />
                  <span className="text-muted-foreground/60 font-mono text-xs">04 / HORIZON</span>
                  <Heading as="h4" level="h3" className="text-brand-600 dark:text-brand-400 mt-2">
                    Lasting
                  </Heading>
                  <Text size="sm" className="mt-1 font-medium">
                    Generational Prosperity
                  </Text>
                  <Text size="muted" className="mt-1 text-xs">
                    Creating enduring value that extends beyond today.
                  </Text>
                </div>
              </Grid>
            </Reveal>
          </Stack>
        </Container>
      </Section>

      {/* 2. Institutional Overview: Who We Are */}
      <Section id="overview" spacing="lg" border="bottom">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6">
              <Stack gap="md">
                <div className="flex items-center gap-2">
                  <span className="bg-brand-600 dark:bg-brand-400 size-2 rounded-full" />
                  <Text
                    as="span"
                    size="sm"
                    className="text-brand-600 dark:text-brand-400 font-mono font-semibold tracking-wider uppercase"
                  >
                    Who We Are
                  </Text>
                </div>
                <Heading as="h2" level="h2">
                  Bridging the gap between people and the right property opportunities.
                </Heading>
                <Text size="lead">
                  We are a real estate brand committed to providing reliable, strategic, and
                  value-driven property solutions that empower individuals, families, and businesses
                  to make confident real estate decisions.
                </Text>
                <Text>
                  With a focus on integrity, excellence, and long-term value, we seek to bridge the
                  gap between people and the right property opportunities. In a market often
                  burdened by complexity and opacity, Zenith Asset Group stands as a trusted partner
                  bringing certainty, professionalism, and structured insight to property
                  acquisition and investment.
                </Text>
              </Stack>
            </Reveal>

            <Reveal delay={200} className="lg:col-span-6">
              <div className="space-y-4">
                <div className="border-border/70 hover:border-brand-600 dark:hover:border-brand-400 group bg-background/50 relative border p-6 transition-all duration-300">
                  <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -top-px -left-px size-3 border-t-2 border-l-2 transition-colors" />
                  <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -right-px -bottom-px size-3 border-r-2 border-b-2 transition-colors" />
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800 flex size-12 shrink-0 items-center justify-center rounded-lg border">
                      <ShieldCheck className="size-6" />
                    </div>
                    <div>
                      <Heading as="h3" level="h4" className="text-base font-bold">
                        Reliable & Vetted Solutions
                      </Heading>
                      <Text size="muted" className="mt-1">
                        Rigorous property audits, confirmed land titles, and complete legal
                        transparency before any opportunity is presented.
                      </Text>
                    </div>
                  </div>
                </div>

                <div className="border-border/70 hover:border-brand-600 dark:hover:border-brand-400 group bg-background/50 relative border p-6 transition-all duration-300">
                  <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -top-px -left-px size-3 border-t-2 border-l-2 transition-colors" />
                  <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -right-px -bottom-px size-3 border-r-2 border-b-2 transition-colors" />
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800 flex size-12 shrink-0 items-center justify-center rounded-lg border">
                      <Target className="size-6" />
                    </div>
                    <div>
                      <Heading as="h3" level="h4" className="text-base font-bold">
                        Strategic Advisory
                      </Heading>
                      <Text size="muted" className="mt-1">
                        Unbiased market guidance calibrated to individual investment capacities,
                        risk tolerances, and capital growth objectives.
                      </Text>
                    </div>
                  </div>
                </div>

                <div className="border-border/70 hover:border-brand-600 dark:hover:border-brand-400 group bg-background/50 relative border p-6 transition-all duration-300">
                  <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -top-px -left-px size-3 border-t-2 border-l-2 transition-colors" />
                  <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -right-px -bottom-px size-3 border-r-2 border-b-2 transition-colors" />
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800 flex size-12 shrink-0 items-center justify-center rounded-lg border">
                      <TrendingUp className="size-6" />
                    </div>
                    <div>
                      <Heading as="h3" level="h4" className="text-base font-bold">
                        Value-Driven Wealth Creation
                      </Heading>
                      <Text size="muted" className="mt-1">
                        Curating real estate assets positioned in prime economic corridors that
                        yield superior long-term appreciation.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 3. Our Strategic Approach: 3 Pathways */}
      <Section id="approach" spacing="lg" border="bottom" className="bg-muted/20">
        <Container size="lg">
          <Stack gap="xl">
            <Reveal>
              <div className="max-w-3xl space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-brand-600 dark:bg-brand-400 size-2 rounded-full" />
                  <Text
                    as="span"
                    size="sm"
                    className="text-brand-600 dark:text-brand-400 font-mono font-semibold tracking-wider uppercase"
                  >
                    Our Approach
                  </Text>
                </div>
                <Heading as="h2" level="h2">
                  Built on understanding your needs, delivering professional service.
                </Heading>
                <Text size="lead">
                  Our approach is built on understanding our clients&apos; needs, delivering
                  professional service, and identifying opportunities that align with their
                  aspirations and investment goals.
                </Text>
                <Text>
                  Whether you are looking to own your dream property, expand your real estate
                  portfolio, or explore rewarding property investments, Zenith Asset Group is
                  committed to guiding you every step of the way.
                </Text>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <Grid cols={3} gap="lg">
                {strategicPathways.map((pathway) => {
                  const Icon = pathway.icon;
                  return (
                    <div
                      key={pathway.step}
                      className="border-border/80 hover:border-brand-600 dark:hover:border-brand-400 group bg-background relative flex flex-col justify-between border p-8 transition-all duration-300 hover:shadow-lg"
                    >
                      <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -top-px -left-px size-3 border-t-2 border-l-2 transition-colors" />
                      <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -right-px -bottom-px size-3 border-r-2 border-b-2 transition-colors" />

                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs font-semibold">
                            PATHWAY {pathway.step}
                          </span>
                          <Icon
                            strokeWidth={1.5}
                            className="text-brand-600/70 group-hover:text-brand-600 dark:text-brand-400/70 dark:group-hover:text-brand-400 size-8 transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>

                        <Heading as="h3" level="h4" className="mt-6 text-xl">
                          {pathway.title}
                        </Heading>
                        <Text
                          size="sm"
                          className="text-brand-600 dark:text-brand-400 mt-1 font-medium"
                        >
                          {pathway.subtitle}
                        </Text>
                        <Text size="muted" className="mt-4 leading-relaxed">
                          {pathway.description}
                        </Text>

                        <div className="border-border/60 mt-6 border-t pt-6">
                          <p className="text-muted-foreground font-mono text-xs font-semibold tracking-wider uppercase">
                            Key Focus Areas
                          </p>
                          <ul className="mt-3 space-y-2">
                            {pathway.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="text-foreground/80 flex items-center gap-2 text-sm"
                              >
                                <CheckCircle2 className="text-brand-600 dark:text-brand-400 size-4 shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 pt-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="group/btn text-brand-600 dark:text-brand-400 hover:text-brand-700 -ml-3"
                        >
                          <Link href="/contact" className="inline-flex items-center gap-2">
                            <span>Inquire for Guidance</span>
                            <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </Grid>
            </Reveal>
          </Stack>
        </Container>
      </Section>

      {/* 4. Vision & Mission: Institutional Foundations */}
      <Section id="vision-mission" spacing="lg" border="bottom">
        <Container size="lg">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Vision */}
            <Reveal>
              <div className="border-border/80 bg-background relative flex h-full flex-col justify-between border p-8 sm:p-10">
                <span className="border-brand-600 dark:border-brand-400 absolute -top-px -left-px size-3 border-t-2 border-l-2" />
                <span className="border-brand-600 dark:border-brand-400 absolute -right-px -bottom-px size-3 border-r-2 border-b-2" />

                <div>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800 flex size-12 items-center justify-center rounded-lg border">
                      <Compass className="size-6" />
                    </div>
                    <div>
                      <span className="text-muted-foreground font-mono text-xs font-semibold uppercase">
                        OUR DIRECTION
                      </span>
                      <Heading as="h3" level="h3">
                        Our Vision
                      </Heading>
                    </div>
                  </div>

                  <blockquote className="border-brand-600 font-heading text-foreground mt-6 border-l-2 pl-4 text-lg font-semibold italic sm:text-xl">
                    &ldquo;We envision a future where property ownership and real estate investment
                    are more accessible, transparent, and rewarding.&rdquo;
                  </blockquote>

                  <Text className="text-muted-foreground mt-5 leading-relaxed">
                    Through professionalism, innovation, and a commitment to lasting relationships,
                    we strive to create value that extends beyond today. We look toward an ecosystem
                    where real estate transactions are free from traditional friction, driven by
                    trust, verified title security, and equitable access.
                  </Text>
                </div>

                <div className="border-border/70 mt-8 border-t pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-muted-foreground font-mono text-xs uppercase">
                        Pillar
                      </span>
                      <p className="text-foreground mt-1 text-sm font-semibold">
                        Transparent Ownership
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-mono text-xs uppercase">
                        Pillar
                      </span>
                      <p className="text-foreground mt-1 text-sm font-semibold">
                        Lasting Relationships
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal delay={200}>
              <div className="border-border/80 bg-background relative flex h-full flex-col justify-between border p-8 sm:p-10">
                <span className="border-brand-600 dark:border-brand-400 absolute -top-px -left-px size-3 border-t-2 border-l-2" />
                <span className="border-brand-600 dark:border-brand-400 absolute -right-px -bottom-px size-3 border-r-2 border-b-2" />

                <div>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800 flex size-12 items-center justify-center rounded-lg border">
                      <Target className="size-6" />
                    </div>
                    <div>
                      <span className="text-muted-foreground font-mono text-xs font-semibold uppercase">
                        OUR MANDATE
                      </span>
                      <Heading as="h3" level="h3">
                        Our Mission
                      </Heading>
                    </div>
                  </div>

                  <blockquote className="border-brand-600 font-heading text-foreground mt-6 border-l-2 pl-4 text-lg font-semibold italic sm:text-xl">
                    &ldquo;At Zenith Asset Group, we don&apos;t just connect people to properties;
                    we help them build a foundation for lasting prosperity.&rdquo;
                  </blockquote>

                  <Text className="text-muted-foreground mt-5 leading-relaxed">
                    Our mission is rooted in serving as your dedicated real estate partner. We
                    deliver the clarity, due diligence, and strategic alignment that transform
                    property from a simple physical acquisition into an engine of generational
                    wealth and peace of mind.
                  </Text>
                </div>

                <div className="border-border/70 mt-8 border-t pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-muted-foreground font-mono text-xs uppercase">
                        Pillar
                      </span>
                      <p className="text-foreground mt-1 text-sm font-semibold">
                        Fiduciary Alignment
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-mono text-xs uppercase">
                        Pillar
                      </span>
                      <p className="text-foreground mt-1 text-sm font-semibold">
                        Prosperity Foundation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 5. Core Values: Blueprint Spec Panels */}
      <Section id="values" spacing="lg" border="bottom">
        <Container size="lg">
          <Stack gap="lg">
            <Reveal>
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-brand-600 dark:bg-brand-400 size-2 rounded-full" />
                  <Text
                    as="span"
                    size="sm"
                    className="text-brand-600 dark:text-brand-400 font-mono font-semibold tracking-wider uppercase"
                  >
                    Guiding Principles
                  </Text>
                </div>
                <Heading as="h2" level="h2">
                  Our Core Values
                </Heading>
                <Text size="lead">
                  Principles that govern our decisions, our client interactions, and our ongoing
                  stewardship of real estate value.
                </Text>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <Grid cols={3} gap="md">
                {coreValues.map(({ label, icon: Icon, description }, index) => (
                  <div
                    key={label}
                    className="border-border/70 hover:border-brand-600 dark:hover:border-brand-400 group hover:bg-muted/10 relative border p-7 transition-all duration-300"
                  >
                    <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -top-px -left-px size-3 border-t-2 border-l-2 transition-colors" />
                    <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -right-px -bottom-px size-3 border-r-2 border-b-2 transition-colors" />

                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground/60 font-mono text-xs">
                        SPEC // {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon
                        strokeWidth={1.25}
                        className="text-brand-600/70 group-hover:text-brand-600 dark:text-brand-400/70 dark:group-hover:text-brand-400 size-8 transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />
                    </div>

                    <Heading as="h3" level="h4" className="mt-6 text-lg font-bold">
                      {label}
                    </Heading>

                    <Text size="muted" className="mt-3 text-sm leading-relaxed">
                      {description}
                    </Text>
                  </div>
                ))}
              </Grid>
            </Reveal>
          </Stack>
        </Container>
      </Section>

      {/* 6. Institutional Due Diligence & Governance Standards */}
      <Section id="governance" spacing="lg" border="bottom" className="bg-muted/20">
        <Container size="lg">
          <Stack gap="xl">
            <Reveal>
              <div className="mx-auto max-w-2xl space-y-3 text-center">
                <Badge variant="default" className="mx-auto">
                  THE ZENITH STANDARD
                </Badge>
                <Heading as="h2" level="h2">
                  Rigorous Governance in Every Transaction
                </Heading>
                <Text size="lead">
                  We bridge the gap between people and property by upholding institutional-grade
                  standards of title verification, financial feasibility, and client advocacy.
                </Text>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <Grid cols={3} gap="lg">
                {governancePillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="border-border/70 bg-background relative border p-8"
                    >
                      <span className="border-brand-600 dark:border-brand-400 absolute -top-px -left-px size-2.5 border-t-2 border-l-2" />
                      <div className="bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800 flex size-12 items-center justify-center rounded-lg border">
                        <Icon className="size-6" />
                      </div>
                      <Heading as="h3" level="h4" className="mt-5 text-lg font-bold">
                        {pillar.title}
                      </Heading>
                      <Text size="muted" className="mt-3 leading-relaxed">
                        {pillar.description}
                      </Text>
                    </div>
                  );
                })}
              </Grid>
            </Reveal>
          </Stack>
        </Container>
      </Section>

      {/* 7. Signature Institutional Mandate & Call to Action */}
      <Section id="cta" spacing="lg" border="none">
        <Container size="lg">
          <Reveal>
            <div className="border-brand-600/40 bg-brand-950 relative overflow-hidden rounded-3xl border p-10 text-center text-white shadow-2xl sm:p-16">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: "url(/brand/pattern-tile.png)",
                  backgroundSize: "96px 100px",
                  backgroundRepeat: "repeat",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 mx-auto max-w-3xl space-y-6">
                <Text
                  as="span"
                  size="sm"
                  className="text-brand-400 font-mono font-semibold tracking-widest uppercase"
                >
                  Your vision. Our commitment. A future of lasting value.
                </Text>
                <Heading as="h2" level="h1" className="text-3xl text-white sm:text-4xl lg:text-5xl">
                  Build your real estate foundation with confidence.
                </Heading>
                <Text size="lead" className="mx-auto max-w-2xl text-white/80">
                  Whether you are looking to own your dream property, expand your real estate
                  portfolio, or explore rewarding property investments, Zenith Asset Group is
                  committed to guiding you every step of the way.
                </Text>

                <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-brand-500 hover:bg-brand-400 w-full font-semibold text-white sm:w-auto"
                    asChild
                  >
                    <Link href="/listings">Explore Available Properties</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full border-white/20 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
                    asChild
                  >
                    <Link href="/contact">Speak With an Advisor</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </div>
  );
}
