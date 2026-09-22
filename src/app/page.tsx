import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { TvScroll } from "@/components/sections/tv-scroll";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TvScroll />
      <Faq />
    </>
  );
}
