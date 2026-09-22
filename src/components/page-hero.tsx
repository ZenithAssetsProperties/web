import { Container } from "@/components/ui/container";
import { Heading, Text } from "@/components/ui/typography";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

/**
 * Shared banner hero for every inner route — same dark, image-backed
 * treatment as the homepage hero (so the fixed header's transparent-to-solid
 * transition behaves identically on every page), just shorter than the
 * homepage's full-bleed video moment.
 */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative -mt-20 flex h-[45vh] min-h-[360px] items-end overflow-hidden sm:items-center">
      <div className="absolute inset-0">
        <div
          className="animate-ken-burns absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/videos/hero-lagos-poster.jpg)" }}
        />
        <div className="bg-brand-950/60 absolute inset-0" />
        <div className="from-brand-950/90 to-brand-950/50 absolute inset-0 bg-gradient-to-t via-transparent" />
      </div>

      <Container className="relative z-10 pb-10 sm:pb-0">
        <div className="max-w-2xl">
          {eyebrow && (
            <Text
              as="span"
              size="sm"
              className="font-semibold tracking-wider text-white/70 uppercase"
            >
              {eyebrow}
            </Text>
          )}
          <Heading as="h1" level="h1" className="mt-2 text-white">
            {title}
          </Heading>
          {description && (
            <Text size="lead" className="mt-3 text-white/80">
              {description}
            </Text>
          )}
        </div>
      </Container>
    </section>
  );
}
