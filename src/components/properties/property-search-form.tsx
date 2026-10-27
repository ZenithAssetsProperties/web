import { Search } from "lucide-react";
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
  return (
    <form
      action="/properties"
      method="get"
      className="border-border bg-background grid gap-4 rounded-lg border p-4 sm:grid-cols-2 sm:p-5 xl:grid-cols-4"
    >
      <div className="space-y-2">
        <Label htmlFor="property-query">Search</Label>
        <Input
          id="property-query"
          name="q"
          type="search"
          defaultValue={values.query}
          placeholder="Name, type or area"
          className="h-10"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="property-category">Property type</Label>
        <select
          id="property-category"
          name="category"
          defaultValue={values.category}
          className="border-border bg-background text-foreground focus-visible:ring-ring focus-visible:ring-offset-background h-10 w-full rounded-md border px-3.5 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
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
          className="h-10"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="property-min-price">Minimum price (NGN)</Label>
        <Input
          id="property-min-price"
          name="minPrice"
          type="number"
          min="0"
          inputMode="numeric"
          defaultValue={values.minPrice}
          placeholder="No minimum"
          className="h-10"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="property-max-price">Maximum price (NGN)</Label>
        <Input
          id="property-max-price"
          name="maxPrice"
          type="number"
          min="0"
          inputMode="numeric"
          defaultValue={values.maxPrice}
          placeholder="No maximum"
          className="h-10"
        />
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
      <div className="space-y-2">
        <Label htmlFor="property-sort">Sort by price</Label>
        <select
          id="property-sort"
          name="sort"
          defaultValue={values.sort}
          className="border-border bg-background text-foreground focus-visible:ring-ring focus-visible:ring-offset-background h-10 w-full rounded-md border px-3.5 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <option value="">Recommended</option>
          <option value="price-asc">Lowest first</option>
          <option value="price-desc">Highest first</option>
        </select>
      </div>
      <div className="flex items-end xl:col-span-4 xl:justify-end">
        <Button type="submit" size="md" className="w-full xl:w-auto">
          <Search aria-hidden="true" />
          Search properties
        </Button>
      </div>
    </form>
  );
}
