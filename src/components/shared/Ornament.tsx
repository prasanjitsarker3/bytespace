import Image from "next/image";

import { cn } from "@/lib/utils";

export type OrnamentShape = "spring" | "coil" | "torus" | "cylinder" | "pyramid" | "cone";

type OrnamentProps = {
  shape: OrnamentShape;
  tint: "lime" | "white";
  size: number;
  flip?: boolean;
  eager?: boolean;
  className?: string;
};

export function Ornament({ shape, tint, size, flip = false, eager = false, className }: OrnamentProps) {
  const mask = `url(/images/ornament-${shape}-mask.png)`;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute isolate transform-gpu select-none", flip && "-scale-x-100", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={`/images/ornament-${shape}.png`}
        alt=""
        fill
        sizes={`${size}px`}
        loading={eager ? "eager" : "lazy"}
        className="object-contain"
      />
      <div
        className={cn(
          "absolute inset-0 mix-blend-hard-light",
          tint === "lime" ? "bg-electric-lime-400" : "bg-shuttle-gray-50",
        )}
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
