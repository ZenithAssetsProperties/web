export interface InsightArticle {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  sections: { heading: string; paragraphs: string[] }[];
}

/** Editorial content is local and reviewable until an approved CMS is available. */
export const insightArticles: InsightArticle[] = [
  {
    slug: "questions-to-ask-before-a-property-viewing",
    category: "The viewing",
    title: "A more useful property viewing starts with better questions.",
    excerpt:
      "A simple way to prepare for a visit, focus your attention, and leave with clearer next steps.",
    readTime: "4 min read",
    image: "/properties/seventh-residence/living-room.jpg",
    imageAlt: "Interior rendering supplied for The Seventh Residence project preview",
    sections: [
      {
        heading: "Decide what you need to learn",
        paragraphs: [
          "Before a viewing, write down the things that matter most to your decision. That could be how a space feels at different times of day, how rooms connect, or which details still need confirmation.",
          "A short list helps you stay present during the visit instead of trying to remember every question at once.",
        ],
      },
      {
        heading: "Separate what you see from what you need confirmed",
        paragraphs: [
          "A visit can help you understand the physical space, but it may not answer questions about availability, title, services, fees, or terms. Ask which information is approved and what supporting material is available for review.",
          "Keep notes on open questions and who will follow up. A clear next step is more useful than an assumption made on the day.",
        ],
      },
      {
        heading: "Leave room to reflect",
        paragraphs: [
          "After the visit, compare the experience with your original priorities. Record what felt right, what needs clarification, and what you would like to see or discuss next.",
          "This article is general guidance. Project-specific information and any applicable terms should be confirmed directly with Zenith before you make a decision.",
        ],
      },
    ],
  },
  {
    slug: "how-to-review-a-property-listing",
    category: "The details",
    title: "How to read a property listing with a clearer point of view.",
    excerpt:
      "Look beyond the first impression and make a note of the details that shape your next questions.",
    readTime: "3 min read",
    image: "/properties/seventh-residence/exterior-visual.jpg",
    imageAlt: "Exterior rendering supplied for The Seventh Residence project preview",
    sections: [
      {
        heading: "Start with the basics",
        paragraphs: [
          "Identify the property type, stated location, size, and the features that matter to your search. Compare like with like where possible, and note when a detail is missing or described as an example.",
        ],
      },
      {
        heading: "Check the status of each detail",
        paragraphs: [
          "Images, plans, availability, and price can have different levels of confirmation. Look for clear labels that tell you whether an item is approved, illustrative, or still awaiting confirmation.",
          "If the status is unclear, ask before relying on it. A thoughtful listing should make it easy to distinguish what is known from what still needs review.",
        ],
      },
      {
        heading: "Turn gaps into useful questions",
        paragraphs: [
          "Make a short list of the information you need next: location context, documentation status, viewing options, or current terms. This helps a conversation stay focused on your priorities.",
          "Listings in this website preview are fictional examples. Always request current, property-specific information from Zenith.",
        ],
      },
    ],
  },
  {
    slug: "a-considered-way-to-compare-property-options",
    category: "The search",
    title: "A considered way to compare property options.",
    excerpt:
      "Build a simple comparison around your priorities, not just the details that are easiest to count.",
    readTime: "4 min read",
    image: "/properties/seventh-residence/lounge.jpg",
    imageAlt: "Lounge rendering supplied for The Seventh Residence project preview",
    sections: [
      {
        heading: "Choose your decision criteria first",
        paragraphs: [
          "Before comparing options, decide what matters most to you. Location, intended use, layout, timing, and the information available for review may all play a part.",
          "A few clear priorities make it easier to compare properties on the same basis instead of being pulled in different directions by presentation alone.",
        ],
      },
      {
        heading: "Keep confirmed details distinct",
        paragraphs: [
          "Use a simple note for each property and mark which details are confirmed, which are illustrative, and which you still need to ask about. This keeps unknowns visible as you review options.",
        ],
      },
      {
        heading: "Agree on your next step",
        paragraphs: [
          "Once you have compared your priorities, decide whether you need more information, a viewing, or a conversation about the process. Keep the next step specific to the property you are considering.",
          "This is general editorial guidance, not a recommendation to purchase. Confirm each property's current details and terms directly with Zenith.",
        ],
      },
    ],
  },
];
