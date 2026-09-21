import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Heading } from "@/components/ui/typography";

export function Hero() {
  return (
    <Section spacing="lg" className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <Container>
        <Stack align="center" gap="lg" className="mx-auto max-w-2xl text-center">
          <div className="animate-fade-up">
            <Badge dot>In development</Badge>
          </div>

          <div className="animate-fade-up [animation-delay:100ms]">
            <Heading as="h1" level="display">
              We&apos;re currently undergoing development.
            </Heading>
          </div>

          <div className="animate-fade-up [animation-delay:200ms]">
            <span
              className="animate-shimmer bg-[length:200%_100%] bg-clip-text text-2xl font-medium text-transparent sm:text-3xl"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--color-muted-foreground), var(--color-brand-500), var(--color-muted-foreground))",
              }}
            >
              Watch this space.
            </span>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
