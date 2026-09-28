import Image from "next/image";

import { cn } from "@/lib/utils";

type AvatarStackProps = {
  avatars: string[];
  /** Label shown in the trailing lime circle, e.g. "2K+" */
  more: string;
  /** Avatar diameter in px: 43 in the stat cards, 32 in course cards */
  size: 32 | 43;
  /** lime circle with dark text (default) or dark circle with light text (auth artwork) */
  tone?: "lime" | "dark";
  className?: string;
};

export function AvatarStack({ avatars, more, size, tone = "lime", className }: AvatarStackProps) {
  const overlap = size === 43 ? "-ml-4" : "-ml-2";

  return (
    <div className={cn("flex items-center", className)}>
      {avatars.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          className={cn("shrink-0 rounded-full", i > 0 && overlap)}
          style={{ width: size, height: size }}
        />
      ))}
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full text-label-xs",
          tone === "lime" ? "bg-electric-lime-400 text-shuttle-gray-950" : "bg-shuttle-gray-950 text-shuttle-gray-50",
          size === 43 ? "font-bold" : "font-medium",
          overlap,
        )}
        style={{ width: size, height: size }}
      >
        {more}
      </span>
    </div>
  );
}
