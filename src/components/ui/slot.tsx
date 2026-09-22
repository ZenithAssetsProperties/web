"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SlotProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

/**
 * Hand-rolled `asChild` mechanism (no Radix): merges the props/className
 * given to <Slot> directly onto its single child element instead of
 * rendering a wrapper. This is what lets `<Button asChild><Link .../></Button>`
 * apply button styling to the rendered <a> without an extra DOM node.
 *
 * Must stay "use client": it attaches a merged `ref` via cloneElement, and a
 * Server Component can never hand a `ref` prop to a Client Component
 * invocation (e.g. next/link's `Link`) — Next fails the build with "Refs
 * cannot be used in Server Components, nor passed to Client Components" if
 * this runs server-side (see Button, which is "use client" for the same
 * reason whenever it renders this).
 */
export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, className, style, ...props }, ref) => {
    if (!React.isValidElement(children)) {
      if (process.env.NODE_ENV !== "production") {
        console.error("<Slot> expected exactly one valid React element as its child.");
      }
      return null;
    }

    const child = children as React.ReactElement<Record<string, unknown>>;
    const childProps = child.props as Record<string, unknown>;

    return React.cloneElement(child, {
      ...props,
      ...childProps,
      className: cn(className, childProps.className as string | undefined),
      style: { ...style, ...(childProps.style as React.CSSProperties | undefined) },
      ref: mergeRefs(ref, (child as unknown as { ref?: React.Ref<HTMLElement> }).ref),
    });
  },
);
Slot.displayName = "Slot";

function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return (node: T) => {
    for (const ref of refs) {
      if (typeof ref === "function") ref(node);
      else if (ref && typeof ref === "object") (ref as React.RefObject<T | null>).current = node;
    }
  };
}
