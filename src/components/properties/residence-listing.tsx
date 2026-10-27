import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ResidenceListing() {
  return (
    <article className="group grid gap-5 border-b border-border/90 pb-8 sm:gap-7 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:pb-10">
      <Link
        href="/properties/the-seventh-residence"
        aria-label="View The Seventh Residence project preview"
        className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
      >
        <figure className="relative aspect-[1.55] overflow-hidden bg-brand-900">
          <Image
            src="/properties/seventh-residence/lounge.jpg"
            alt="Interior rendering supplied for The Seventh Residence project preview"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/45 to-transparent" />
          <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 sm:inset-x-6 sm:bottom-6">
            <span className="bg-brand-950/65 px-3 py-1.5 text-[9px] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-sm">
              Project preview · supplied rendering
            </span>
            <span className="flex size-10 items-center justify-center rounded-full border border-white/50 text-white transition-[background-color,color,transform] duration-300 group-hover:-rotate-45 group-hover:bg-white group-hover:text-brand-950">
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </figcaption>
        </figure>
      </Link>

      <div className="flex flex-col justify-between gap-6 lg:py-2">
        <div>
          <p className="text-brand-600 dark:text-brand-300 text-[10px] font-semibold tracking-[0.18em] uppercase">
            Residential project <span className="px-2 text-foreground/30">/</span> Preview
          </p>
          <h2 className="font-heading mt-3 text-4xl font-medium leading-[0.98] tracking-tight sm:text-5xl">
            <Link
              href="/properties/the-seventh-residence"
              className="decoration-brand-600/40 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
            >
              The Seventh Residence
            </Link>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md text-sm leading-6">
            Explore the project visuals. Location, specifications, pricing, documents, and
            availability are pending business confirmation.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
          <p className="text-muted-foreground text-[10px] font-medium tracking-[0.12em] uppercase">
            No price or availability published
          </p>
          <Link
            href="/properties/the-seventh-residence"
            className="inline-flex items-center gap-2 text-xs font-semibold transition-colors hover:text-brand-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
          >
            View project <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
