import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heading, Text } from "@/components/ui/typography";

export function HomeSearch() {
  return (
    <section className="relative z-20 -mt-10 pb-4 sm:-mt-14">
      <Container>
        <form
          action="/properties"
          method="get"
          className="border-border bg-background grid gap-5 rounded-2xl border p-5 shadow-[0_18px_60px_-32px_rgba(4,16,19,0.5)] sm:p-7 lg:grid-cols-[1fr_1fr_1.15fr_auto] lg:items-end lg:gap-6"
        >
          <div className="lg:pb-1">
            <p className="text-brand-600 dark:text-brand-300 text-xs font-semibold tracking-[0.14em] uppercase">
              Start exploring
            </p>
            <Heading as="h2" level="h4" className="mt-1">
              What are you looking for?
            </Heading>
          </div>

          <div className="space-y-2">
            <Label htmlFor="home-location">Location</Label>
            <Input id="home-location" name="location" placeholder="City, state or area" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="home-category">Property type</Label>
            <select
              id="home-category"
              name="category"
              defaultValue=""
              className="border-border bg-background text-foreground focus-visible:ring-ring focus-visible:ring-offset-background h-11 w-full rounded-md border px-3.5 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <option value="">All property types</option>
              <option value="land">Land</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <Button type="submit" size="lg" className="w-full lg:w-auto">
            <Search aria-hidden="true" />
            Search properties
            <ArrowRight className="hidden sm:inline" aria-hidden="true" />
          </Button>
          <Text size="sm" className="text-muted-foreground lg:col-span-4">
            Search is interactive in this preview and uses fictional example listings.
          </Text>
        </form>
      </Container>
    </section>
  );
}
