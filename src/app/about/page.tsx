import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zenith Asset Group is a Nigerian real estate investment company making property ownership accessible through fractional investing.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Zenith Asset Group" title="Real estate investing, simplified." />
      <About />
    </>
  );
}
