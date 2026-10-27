import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ResidenceListing() {
  return (
    <article className="group border-border/90 grid gap-5 border-b pb-8 sm:gap-7 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:pb-10">
      <Link
        href="/properties/the-seventh-residence"
        aria-label="View The Seventh Residence project"
        className="focus-visible:outline-brand-600 focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <figure className="bg-brand-900 relative aspect-[1.55] overflow-hidden">
          <Image
            src="/properties/seventh-residence/lounge.jpg"
            alt="Interior rendering supplied for The Seventh Residence project"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035]"
          />
          <div className="from-brand-950/45 absolute inset-0 bg-gradient-to-t to-transparent" />
          <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 sm:inset-x-6 sm:bottom-6">
            <span className="bg-brand-950/65 px-3 py-1.5 text-[9px] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-sm">
              Supplied project rendering
            </span>
            <span className="group-hover:text-brand-950 flex size-10 items-center justify-center rounded-full border border-white/50 text-white transition-[background-color,color,transform] duration-300 group-hover:-rotate-45 group-hover:bg-white">
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </figcaption>
        </figure>
      </Link>

      <div className="flex flex-col justify-between gap-6 lg:py-2">
        <div>
          <p className="text-brand-600 dark:text-brand-300 text-[10px] font-semibold tracking-[0.18em] uppercase">
            Residential project <span className="text-foreground/30 px-2">/</span> Supplied visuals
          </p>
          <h2 className="font-heading mt-3 text-4xl leading-[0.98] font-medium tracking-tight sm:text-5xl">
            <Link
              href="/properties/the-seventh-residence"
              className="decoration-brand-600/40 focus-visible:outline-brand-600 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              The Seventh Residence
            </Link>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md text-sm leading-6">
            Explore the project visuals. Location, specifications, pricing, documents, and
            availability are pending business confirmation.
          </p>
        </div>

        <div className="border-border flex flex-wrap items-center justify-between gap-4 border-t pt-4">
          <p className="text-muted-foreground text-[10px] font-medium tracking-[0.12em] uppercase">
            No price or availability published
          </p>
          <Link
            href="/properties/the-seventh-residence"
            className="hover:text-brand-600 focus-visible:outline-brand-600 inline-flex items-center gap-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            View project <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
