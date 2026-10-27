import { Faq } from "@/components/sections/faq";
import { CustomerJourney } from "@/components/sections/customer-journey";
import { FeaturedProperties } from "@/components/sections/featured-properties";
import { AboutPreview } from "@/components/sections/about-preview";
import { Hero } from "@/components/sections/hero";
import { HomeSearch } from "@/components/sections/home-search";
import { PropertyCategories } from "@/components/sections/property-categories";
import { PropertyPrinciples } from "@/components/sections/property-principles";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeSearch />
      <FeaturedProperties />
      <AboutPreview />
      <PropertyCategories />
      <CustomerJourney />
      <PropertyPrinciples />
      <Faq />
    </>
  );
}
