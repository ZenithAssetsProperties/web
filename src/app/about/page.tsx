import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About Us | Zenith Asset Group",
  description:
    "At Zenith Asset Group, we believe real estate is an opportunity to build lasting value, create wealth, and secure a better future. Discover our vision, approach, and commitment to your prosperity.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "About" }]}
        eyebrow="About Zenith Asset Group"
        title={
          <>
            Building a foundation for{" "}
            <span className="font-normal italic">lasting prosperity.</span>
          </>
        }
        description="At Zenith Asset Group, we believe that real estate is more than just property; it is an opportunity to build lasting value, create wealth, and secure a better future."
      />
      <About />
    </>
  );
}
