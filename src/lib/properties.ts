export type PropertyCategory = "land" | "residential" | "commercial";
export type PropertyAvailability = "available" | "reserved" | "sold";

export interface PropertyDocumentSummary {
  name: string;
  status: "available-for-review" | "requested";
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  category: PropertyCategory;
  type: string;
  location: {
    area: string;
    city: string;
    state: string;
  };
  priceNgn: number;
  size: { value: number; unit: "sqm" | "hectares" };
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  availability: PropertyAvailability;
  description: string;
  features: string[];
  documents: PropertyDocumentSummary[];
  featured: boolean;
}

/**
 * Fictional records used only to build and review the public marketplace UI.
 * Replace with approved inventory through the property data adapter before
 * publishing the catalogue as a live offer.
 */
export const demoProperties: Property[] = [
  {
    id: "demo-property-01",
    slug: "demo-detached-home-lekki",
    title: "Demo Detached Home",
    category: "residential",
    type: "Detached duplex",
    location: { area: "Lekki", city: "Lagos", state: "Lagos" },
    priceNgn: 185_000_000,
    size: { value: 185, unit: "sqm" },
    bedrooms: 4,
    bathrooms: 5,
    parking: 2,
    availability: "available",
    description:
      "Illustrative property copy for layout review. Replace this description with approved listing details before launch.",
    features: ["4 bedrooms", "5 bathrooms", "2 parking spaces", "Demo listing"],
    documents: [
      { name: "Survey plan", status: "available-for-review" },
      { name: "Title document", status: "requested" },
    ],
    featured: true,
  },
  {
    id: "demo-property-02",
    slug: "demo-apartment-lekki",
    title: "Demo City Apartment",
    category: "residential",
    type: "Apartment",
    location: { area: "Lekki", city: "Lagos", state: "Lagos" },
    priceNgn: 95_000_000,
    size: { value: 120, unit: "sqm" },
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    availability: "available",
    description:
      "Illustrative property copy for layout review. Replace this description with approved listing details before launch.",
    features: ["3 bedrooms", "3 bathrooms", "1 parking space", "Demo listing"],
    documents: [{ name: "Documentation summary", status: "available-for-review" }],
    featured: true,
  },
  {
    id: "demo-property-03",
    slug: "demo-land-abuja",
    title: "Demo Residential Plot",
    category: "land",
    type: "Residential land",
    location: { area: "Central Area", city: "Abuja", state: "Federal Capital Territory" },
    priceNgn: 72_000_000,
    size: { value: 500, unit: "sqm" },
    availability: "reserved",
    description:
      "Illustrative property copy for layout review. Replace this description with approved listing details before launch.",
    features: ["500 sqm", "Residential use", "Demo listing"],
    documents: [{ name: "Survey plan", status: "requested" }],
    featured: true,
  },
  {
    id: "demo-property-04",
    slug: "demo-commercial-suite-vi",
    title: "Demo Commercial Suite",
    category: "commercial",
    type: "Commercial property",
    location: { area: "Victoria Island", city: "Lagos", state: "Lagos" },
    priceNgn: 240_000_000,
    size: { value: 260, unit: "sqm" },
    availability: "available",
    description:
      "Illustrative property copy for layout review. Replace this description with approved listing details before launch.",
    features: ["Commercial use", "260 sqm", "Demo listing"],
    documents: [{ name: "Documentation summary", status: "available-for-review" }],
    featured: false,
  },
];

export interface PropertyFilters {
  query?: string;
  category?: PropertyCategory | "";
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  availability?: PropertyAvailability | "";
  sort?: "price-asc" | "price-desc";
}

export function filterProperties(properties: Property[], filters: PropertyFilters) {
  const query = filters.query?.trim().toLocaleLowerCase();
  const location = filters.location?.trim().toLocaleLowerCase();

  const filtered = properties.filter((property) => {
    const matchesQuery =
      !query ||
      [property.title, property.type, property.location.area, property.location.city]
        .join(" ")
        .toLocaleLowerCase()
        .includes(query);
    const matchesCategory = !filters.category || property.category === filters.category;
    const matchesLocation =
      !location ||
      [property.location.area, property.location.city, property.location.state]
        .join(" ")
        .toLocaleLowerCase()
        .includes(location);
    const matchesMinPrice = filters.minPrice === undefined || property.priceNgn >= filters.minPrice;
    const matchesMaxPrice = filters.maxPrice === undefined || property.priceNgn <= filters.maxPrice;
    const matchesBedrooms = filters.bedrooms === undefined || (property.bedrooms ?? 0) >= filters.bedrooms;
    const matchesAvailability = !filters.availability || property.availability === filters.availability;

    return (
      matchesQuery &&
      matchesCategory &&
      matchesLocation &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesBedrooms &&
      matchesAvailability
    );
  });

  if (filters.sort === "price-asc") return filtered.sort((a, b) => a.priceNgn - b.priceNgn);
  if (filters.sort === "price-desc") return filtered.sort((a, b) => b.priceNgn - a.priceNgn);
  return filtered;
}

export interface PropertyCatalogue {
  list(filters?: PropertyFilters): Promise<Property[]>;
  findBySlug(slug: string): Promise<Property | undefined>;
  featured(): Promise<Property[]>;
}

/** Local UI adapter. Replace its implementation when an approved data source exists. */
export const propertyCatalogue: PropertyCatalogue = {
  list: async (filters = {}) => filterProperties(demoProperties, filters),
  findBySlug: async (slug) => demoProperties.find((property) => property.slug === slug),
  featured: async () => demoProperties.filter((property) => property.featured),
};

export function formatNgn(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}
