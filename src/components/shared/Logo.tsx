import Image from "next/image";
import Link from "next/link";

import { routes } from "@/content/routes";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** "light" for blue backgrounds (header), "dark" for white backgrounds (footer) */
  tone?: "light" | "dark";
  /** Auth screens show only the mark (the word is transparent in Figma) */
  markOnly?: boolean;
  className?: string;
};

export function Logo({ tone = "light", markOnly = false, className }: LogoProps) {
  return (
    <Link
      href={routes.home}
      aria-label="ByteSpace home"
      className={cn(
        "inline-flex items-center gap-2 rounded-md",
        tone === "light" ? "text-shuttle-gray-50 focus-ring-light" : "text-shuttle-gray-950 focus-ring",
        className,
      )}
    >
      <Image src="/images/logo-mark.svg" alt="" width={29} height={32} />
      <span className={cn("font-logo text-logo font-bold", markOnly && "sr-only")}>ByteSpace</span>
    </Link>
  );
}
