export interface ResidenceVisual {
  src: string;
  alt: string;
  label: string;
  kind: "render" | "amenity" | "plan";
}

export const residenceVisuals: ResidenceVisual[] = [
  {
    src: "/properties/seventh-residence/living-room.jpg",
    alt: "Living room rendering for The Seventh Residence",
    label: "Living room",
    kind: "render",
  },
  {
    src: "/properties/seventh-residence/lounge.jpg",
    alt: "Lounge interior rendering for The Seventh Residence",
    label: "Lounge",
    kind: "render",
  },
  {
    src: "/properties/seventh-residence/dining-room.jpg",
    alt: "Dining area rendering for The Seventh Residence",
    label: "Dining",
    kind: "render",
  },
  {
    src: "/properties/seventh-residence/bedroom.jpg",
    alt: "Bedroom rendering for The Seventh Residence",
    label: "Bedroom",
    kind: "render",
  },
  {
    src: "/properties/seventh-residence/kitchen.jpg",
    alt: "Kitchen rendering for The Seventh Residence",
    label: "Kitchen",
    kind: "render",
  },
  {
    src: "/properties/seventh-residence/bathroom.jpg",
    alt: "Bathroom rendering for The Seventh Residence",
    label: "Bathroom",
    kind: "render",
  },
  {
    src: "/properties/seventh-residence/fitness-room.jpg",
    alt: "Fitness room rendering supplied for The Seventh Residence",
    label: "Fitness room visual",
    kind: "amenity",
  },
  {
    src: "/properties/seventh-residence/amenities.jpg",
    alt: "Supplied amenity visual referencing a gym and swimming pool",
    label: "Amenity visual",
    kind: "amenity",
  },
  {
    src: "/properties/seventh-residence/layout-one.jpg",
    alt: "Unverified floor-plan rendering supplied for The Seventh Residence",
    label: "Plan visual 01",
    kind: "plan",
  },
  {
    src: "/properties/seventh-residence/layout-two.jpg",
    alt: "Unverified floor-plan rendering supplied for The Seventh Residence",
    label: "Plan visual 02",
    kind: "plan",
  },
  {
    src: "/properties/seventh-residence/exterior-visual.jpg",
    alt: "Exterior rendering supplied for The Seventh Residence",
    label: "Exterior visual",
    kind: "render",
  },
];

export const residenceGallery = residenceVisuals.filter((visual) => visual.kind === "render");
export const residenceAmenities = residenceVisuals.filter((visual) => visual.kind === "amenity");
export const residencePlans = residenceVisuals.filter((visual) => visual.kind === "plan");
