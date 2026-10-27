import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/ui/reveal";
import { Heading, Text } from "@/components/ui/typography";

export function HomeSearch() {
  return (
    <section id="home-search" className="relative z-20 -mt-10 pb-4 sm:-mt-14">
      <Container>
        <Reveal delay={100}>
          <form
            action="/properties"
            method="get"
            className="border-border/80 bg-background/95 grid gap-5 rounded-lg border p-5 transition-[border-color,background-color] duration-500 focus-within:border-brand-600/40 sm:p-7 lg:grid-cols-[1.1fr_1.05fr_1fr_auto] lg:items-end lg:gap-6"
          >
            <div className="lg:pb-1">
              <p className="text-brand-600 dark:text-brand-300 text-[10px] font-semibold tracking-[0.18em] uppercase">
                Begin your search
              </p>
              <Heading as="h2" level="h4" className="mt-1.5">
                Find a property
              </Heading>
            </div>

            <div className="space-y-2">
              <Label htmlFor="home-location">Location</Label>
              <Input id="home-location" name="location" placeholder="City, state or area" className="h-10" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="home-category">Property type</Label>
              <select
                id="home-category"
                name="category"
                defaultValue=""
                className="border-border bg-background text-foreground focus-visible:ring-ring focus-visible:ring-offset-background h-10 w-full rounded-lg border px-3.5 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <option value="">All property types</option>
                <option value="land">Land</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            <Button type="submit" size="md" className="group w-full rounded-sm px-4 lg:w-auto">
              <Search aria-hidden="true" />
              Search
              <ArrowRight className="hidden transition-transform duration-500 ease-out group-hover:translate-x-1 sm:inline" aria-hidden="true" />
            </Button>
            <Text size="sm" className="text-muted-foreground text-xs lg:col-span-4">
              Preview search uses fictional properties and illustrative imagery.
            </Text>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
