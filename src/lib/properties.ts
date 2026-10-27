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
  image: {
    src: string;
    alt: string;
    photographer: string;
    creditUrl: string;
  };
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
    image: {
      src: "https://images.unsplash.com/photo-1766603636483-84b2a2b8ee89?auto=format&fit=crop&w=1800&q=85",
      alt: "Contemporary home with a timber facade and landscaped garden, used as concept imagery",
      photographer: "Alef Morais",
      creditUrl:
        "https://unsplash.com/photos/modern-house-with-wooden-facade-and-green-lawn-p9jDz1AbLig",
    },
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
    image: {
      src: "https://images.unsplash.com/photo-1774199679021-db3b421867c3?auto=format&fit=crop&w=1400&q=85",
      alt: "Bright contemporary living room, used as concept imagery",
      photographer: "Clay Banks",
      creditUrl:
        "https://unsplash.com/photos/modern-living-room-with-large-windows-overlooking-trees-A9DmoCgM5iw",
    },
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
    image: {
      src: "https://images.unsplash.com/photo-1596768368272-b1b3a8fe9632?auto=format&fit=crop&w=1400&q=85",
      alt: "Open green field used as concept imagery for a fictional land listing",
      photographer: "Muhammad Ma'ruf",
      creditUrl:
        "https://unsplash.com/photos/green-grass-field-under-white-sky-during-daytime-3x65TvaOLKQ",
    },
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
    image: {
      src: "https://images.unsplash.com/photo-1785966431797-4d37f79366e5?auto=format&fit=crop&w=1400&q=85",
      alt: "Contemporary office building exterior, used as concept imagery",
      photographer: "Aliaksei Liohenki",
      creditUrl: "https://unsplash.com/photos/office-building-with-grid-facade-YWhnVSj7bBE",
    },
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
    const matchesBedrooms =
      filters.bedrooms === undefined || (property.bedrooms ?? 0) >= filters.bedrooms;
    const matchesAvailability =
      !filters.availability || property.availability === filters.availability;

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
