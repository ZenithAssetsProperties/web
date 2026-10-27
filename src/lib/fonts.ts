import { DM_Sans, DM_Serif_Display } from "next/font/google";

// Confident editorial display face with a clear, modern interface sans.
export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif-display",
  display: "swap",
});
