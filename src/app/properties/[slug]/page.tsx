import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Bath,
  BedDouble,
  CarFront,
  FileText,
  Maximize2,
} from "lucide-react";
import { DemoPropertyVisual } from "@/components/properties/demo-property-visual";
import { PropertyInterestForm } from "@/components/properties/property-interest-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";
import { formatNgn, propertyCatalogue } from "@/lib/properties";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await propertyCatalogue.findBySlug(slug);
  if (!property) return { title: "Property not found", robots: { index: false, follow: false } };

  return {
    title: property.title,
    description: `Property details for ${property.title} from Zenith Asset Group.`,
    robots: { index: false, follow: false },
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = await propertyCatalogue.findBySlug(slug);
  if (!property) notFound();
  const sizeLabel = `${new Intl.NumberFormat("en-NG").format(property.size.value)} ${property.size.unit}`;
  const availabilityLabel = {
    available: "Availability to confirm",
    reserved: "Availability to confirm",
    sold: "Availability to confirm",
  }[property.availability];

  return (
    <>
      <Section spacing="sm" className="pt-28 pb-4 sm:pt-32">
        <Container>
          <Link
            href="/properties"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> Back to properties
          </Link>
        </Container>
      </Section>

      <Section spacing="sm" className="pt-3">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:items-start">
            <DemoPropertyVisual property={property} />

            <Stack gap="lg" className="lg:sticky lg:top-28">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge>Illustrative listing</Badge>
                  <Badge variant="outline">{availabilityLabel}</Badge>
                </div>
                <p className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                  {property.type}
                </p>
                <Heading as="h1" level="h2" className="mt-2">
                  {property.title}
                </Heading>
                <Text className="text-muted-foreground mt-2">
                  {property.location.area}, {property.location.city}, {property.location.state}
                </Text>
              </div>

              <Card className="rounded-2xl p-5 sm:p-6">
                <p className="text-muted-foreground text-sm">Illustrative price</p>
                <p className="font-heading mt-1 text-3xl font-normal tracking-tight">
                  {formatNgn(property.priceNgn)}
                </p>
                <p className="text-muted-foreground mt-2 text-xs">
                  Demo value only. Not an offer or current property price.
                </p>
                <div className="mt-6 grid gap-3">
                  <Button asChild>
                    <Link href="#property-interest">
                      Express interest <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/how-it-works">See how the process works</Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link href={`/virtual-tours/${property.slug}`}>View tour details</Link>
                  </Button>
                </div>
              </Card>

              <div>
                <Heading as="h2" level="h4" className="mb-4">
                  Property details
                </Heading>
                <div className="border-border grid grid-cols-2 gap-3 border-y py-4">
                  <DetailFact icon={Maximize2} label="Size" value={sizeLabel} />
                  {property.bedrooms !== undefined && (
                    <DetailFact
                      icon={BedDouble}
                      label="Bedrooms"
                      value={String(property.bedrooms)}
                    />
                  )}
                  {property.bathrooms !== undefined && (
                    <DetailFact icon={Bath} label="Bathrooms" value={String(property.bathrooms)} />
                  )}
                  {property.parking !== undefined && (
                    <DetailFact icon={CarFront} label="Parking" value={String(property.parking)} />
                  )}
                </div>
              </div>
            </Stack>
          </div>
        </Container>
      </Section>

      <Section spacing="md" border="top">
        <Container>
          <Grid cols={2} gap="lg">
            <div>
              <Heading as="h2" level="h3">
                Overview
              </Heading>
              <Text className="text-muted-foreground mt-4 max-w-2xl leading-7">
                {property.description}
              </Text>
              <Heading as="h3" level="h4" className="mt-8">
                Features
              </Heading>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {property.features.map((feature) => (
                  <li
                    key={feature}
                    className="border-border flex items-center gap-3 border-b pb-3 text-sm"
                  >
                    <span
                      className="bg-brand-600 size-1.5 shrink-0 rounded-full"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Card className="h-fit rounded-2xl p-5 sm:p-7">
              <div className="flex items-start gap-3">
                <FileText
                  className="text-brand-600 dark:text-brand-300 mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <Heading as="h2" level="h4">
                    Documentation status
                  </Heading>
                  <Text size="sm" className="text-muted-foreground mt-2">
                    Ask Zenith to confirm the current status and availability of each document.
                  </Text>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {property.documents.map((document) => (
                  <li
                    key={document.name}
                    className="border-border flex items-center justify-between gap-3 border-t pt-3 text-sm"
                  >
                    <span>{document.name}</span>
                    <span className="text-muted-foreground text-right text-xs">
                      {document.status === "available-for-review"
                        ? "Status to confirm"
                        : "Request status to confirm"}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section spacing="md" border="top">
        <Container size="md">
          <PropertyInterestForm
            propertyTitle={property.title}
            propertyHref={`/properties/${property.slug}`}
          />
        </Container>
      </Section>

      <Section spacing="sm" border="top" className="bg-muted/40">
        <Container>
          <p className="text-muted-foreground text-center text-xs leading-5">
            Illustrative listing. Confirm availability, documents, inspection arrangements, and
            transaction terms with Zenith.
          </p>
        </Container>
      </Section>
    </>
  );
}

function DetailFact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Maximize2;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-brand-600 dark:text-brand-300 size-4 shrink-0" aria-hidden="true" />
      <div>
        <p className="text-muted-foreground text-xs">{label}</p>
        <p className="mt-0.5 text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}
