import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Zenith Asset Group and its planned digital property experience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Zenith Asset Group" title="A clearer way to navigate property." />
      <About />
    </>
  );
}
