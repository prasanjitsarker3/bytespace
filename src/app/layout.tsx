import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

// Satoshi and Clash Display are Fontshare fonts, not on Google Fonts.
const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
});

const clashDisplay = localFont({
  variable: "--font-clash-display",
  display: "swap",
  src: [{ path: "./fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" }],
});

export const metadata: Metadata = {
  title: "ByteSpace | Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
