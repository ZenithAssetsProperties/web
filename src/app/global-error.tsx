"use client";

import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

/**
 * Catches errors thrown by the root layout itself, so it must render its
 * own <html>/<body> — it replaces layout.tsx entirely when it activates,
 * which is why it can't reach the ThemeProvider or site header/footer.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center font-sans text-neutral-950 antialiased dark:bg-neutral-950 dark:text-neutral-50">
        <h1 className="text-2xl font-semibold tracking-tight">Something went critically wrong</h1>
        <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
          {error.message || "The application failed to load. Please try again."}
        </p>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  );
}
