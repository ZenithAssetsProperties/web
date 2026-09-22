import { Inter, League_Spartan } from "next/font/google";

// Per the official brand guideline: League Spartan for headings, Inter for body.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});
