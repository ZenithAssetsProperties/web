import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-heading font-bold text-foreground", {
  variants: {
    level: {
      display: "text-5xl tracking-tight sm:text-6xl lg:text-7xl",
      h1: "text-4xl tracking-tight sm:text-5xl",
      h2: "text-3xl tracking-tight sm:text-4xl",
      h3: "text-2xl tracking-tight sm:text-3xl",
      h4: "text-xl tracking-tight sm:text-2xl",
    },
  },
  defaultVariants: { level: "h2" },
});

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  /** Element actually rendered to the DOM — keep this the true document outline. */
  as?: HeadingElement;
  asChild?: boolean;
}

export function Heading({ className, level, as: Tag = "h2", asChild, ...props }: HeadingProps) {
  const Comp = asChild ? Slot : Tag;
  return <Comp className={cn(headingVariants({ level }), className)} {...props} />;
}

const textVariants = cva("text-foreground", {
  variants: {
    size: {
      lead: "text-xl leading-8 text-muted-foreground",
      base: "text-base leading-7",
      sm: "text-sm leading-6",
      muted: "text-sm leading-6 text-muted-foreground",
    },
  },
  defaultVariants: { size: "base" },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

export function Text({ className, size, as: Comp = "p", ...props }: TextProps) {
  return <Comp className={cn(textVariants({ size }), className)} {...props} />;
}

export function Code({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "bg-muted text-foreground rounded-sm px-1.5 py-0.5 font-mono text-[0.85em]",
        className,
      )}
      {...props}
    />
  );
}

export function Blockquote({
  className,
  ...props
}: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn("border-border text-muted-foreground border-l-2 pl-6 italic", className)}
      {...props}
    />
  );
}
