import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Compass, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { propertyCatalogue } from "@/lib/properties";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await propertyCatalogue.findBySlug(slug);
  if (!property) return { title: "Virtual tour not found", robots: { index: false, follow: false } };

  return {
    title: `Virtual tour preview: ${property.title}`,
    description: "A preview of the virtual inspection experience.",
    robots: { index: false, follow: false },
  };
}

export default async function VirtualTourPage({ params }: PageProps) {
  const { slug } = await params;
  const property = await propertyCatalogue.findBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <Section spacing="sm" className="pb-4 pt-28 sm:pt-32">
        <Container>
          <Link
            href={`/properties/${property.slug}`}
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> Back to property
          </Link>
        </Container>
      </Section>

      <Section spacing="md" className="pt-3">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <Badge>Virtual tour · demo</Badge>
                <Heading as="h1" level="h2" className="mt-3">
                  Explore the tour experience
                </Heading>
                <Text className="text-muted-foreground mt-2">
                  {property.title} · {property.location.area}, {property.location.city}
                </Text>
              </div>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <MapPin className="size-4" aria-hidden="true" />
                Location preview only
              </div>
            </div>

            <div className="bg-brand-950 relative flex aspect-video min-h-72 items-center justify-center overflow-hidden rounded-2xl border border-white/10 p-6 text-center text-white sm:min-h-[440px]">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: "url(/brand/pattern-tile.png)",
                  backgroundSize: "112px 117px",
                  backgroundRepeat: "repeat",
                }}
                aria-hidden="true"
              />
              <div className="from-brand-950/30 absolute inset-0 bg-gradient-to-t via-transparent to-brand-950/30" />
              <div className="relative max-w-md">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                  <Compass className="size-7 text-brand-300" aria-hidden="true" />
                </div>
                <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-white/60 uppercase">
                  Tour media not supplied
                </p>
                <h2 className="font-heading mt-2 text-2xl font-bold sm:text-3xl">
                  This is the virtual inspection preview.
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  No property video or 360° tour is attached to this fictional demo listing. Approved
                  tour media can replace this state when it is available.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col justify-between gap-4 rounded-xl border border-border bg-background p-5 sm:flex-row sm:items-center">
              <div>
                <p className="font-semibold">Preview only</p>
                <p className="text-muted-foreground mt-1 text-sm">
                  This page does not start a live viewing or inspection request.
                </p>
              </div>
              <Button asChild>
                <Link href={`/properties/${property.slug}#inspection-request`}>
                  Preview inspection request <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
