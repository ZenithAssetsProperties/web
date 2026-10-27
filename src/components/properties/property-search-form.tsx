import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { PropertyAvailability, PropertyCategory } from "@/lib/properties";

export interface PropertySearchValues {
  query: string;
  category: PropertyCategory | "";
  location: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  availability: PropertyAvailability | "";
  sort: "price-asc" | "price-desc" | "";
}

export function PropertySearchForm({ values }: { values: PropertySearchValues }) {
  const advancedFilterCount = [values.minPrice, values.maxPrice, values.bedrooms, values.availability, values.sort]
    .filter(Boolean).length;
  const advancedFiltersApplied = advancedFilterCount > 0;

  return (
    <form
      action="/properties"
      method="get"
      className="grid gap-x-4 gap-y-5 border-y border-border/80 py-5 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-end"
    >
      <div className="space-y-2">
        <Label htmlFor="property-query">Search properties</Label>
        <Input
          id="property-query"
          name="q"
          type="search"
          defaultValue={values.query}
          placeholder="Name, property type"
          className="h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="property-category">Property type</Label>
        <select
          id="property-category"
          name="category"
          defaultValue={values.category}
          className="border-border bg-background text-foreground focus-visible:ring-ring focus-visible:ring-offset-background h-11 w-full rounded-md border px-3.5 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <option value="">All types</option>
          <option value="land">Land</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="property-location">Location</Label>
        <Input
          id="property-location"
          name="location"
          type="search"
          defaultValue={values.location}
          placeholder="City, state or area"
          className="h-11"
        />
      </div>

      <Button type="submit" size="md" className="h-11 w-full px-5 lg:w-auto">
        <Search aria-hidden="true" />
        Search
      </Button>

      <details open={advancedFiltersApplied} className="group col-span-full border-t border-border/70 pt-4">
        <summary className="flex w-fit cursor-pointer list-none items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 [&::-webkit-details-marker]:hidden">
          <SlidersHorizontal className="size-3.5" aria-hidden="true" />
          More filters
          {advancedFiltersApplied && (
            <span className="text-brand-600">{advancedFilterCount} applied</span>
          )}
          <ChevronDown className="size-3.5 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
        </summary>

        <div className="mt-5 grid gap-4 border-l border-brand-600/25 pl-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="property-min-price">Minimum price (NGN)</Label>
            <Input id="property-min-price" name="minPrice" type="number" min="0" inputMode="numeric" defaultValue={values.minPrice} placeholder="No minimum" className="h-10" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="property-max-price">Maximum price (NGN)</Label>
            <Input id="property-max-price" name="maxPrice" type="number" min="0" inputMode="numeric" defaultValue={values.maxPrice} placeholder="No maximum" className="h-10" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="property-bedrooms">Bedrooms</Label>
            <select
              id="property-bedrooms"
              name="bedrooms"
              defaultValue={values.bedrooms}
              className="border-border bg-background text-foreground focus-visible:ring-ring focus-visible:ring-offset-background h-10 w-full rounded-md border px-3.5 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <option value="">Any number</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="property-availability">Availability</Label>
            <select
              id="property-availability"
              name="availability"
              defaultValue={values.availability}
              className="border-border bg-background text-foreground focus-visible:ring-ring focus-visible:ring-offset-background h-10 w-full rounded-md border px-3.5 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <option value="">Any status</option>
              <option value="available">Available</option>
              <option value="reserved">Reserved</option>
              <option value="sold">Sold</option>
            </select>
          </div>
          <div className="space-y-2 sm:col-span-2 lg:col-span-4">
            <Label htmlFor="property-sort">Sort by</Label>
            <select
              id="property-sort"
              name="sort"
              defaultValue={values.sort}
              className="border-border bg-background text-foreground focus-visible:ring-ring focus-visible:ring-offset-background h-10 w-full rounded-md border px-3.5 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:max-w-sm"
            >
              <option value="">Recommended</option>
              <option value="price-asc">Lowest price first</option>
              <option value="price-desc">Highest price first</option>
            </select>
          </div>
        </div>
      </details>
    </form>
  );
}
