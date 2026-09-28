import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * The 120px white grid pattern drawn over every blue surface.
 * Place inside a `relative isolate overflow-hidden` parent.
 */
export function GridBackdrop({ preload = false, className }: { preload?: boolean; className?: string }) {
  return (
    <Image
      src="/images/grid-hero.svg"
      alt=""
      aria-hidden
      width={1442}
      height={1026}
      preload={preload}
      className={cn("pointer-events-none absolute top-0 left-1/2 -z-10 max-w-none -translate-x-1/2", className)}
    />
  );
}

/**
 * A 1440px-wide layer centred on the viewport, matching the Figma frame.
 * Decorative children (3D shapes, blurred blobs) are positioned on it with
 * the exact pixel offsets from the design.
 */
export function FrameLayer({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-y-0 left-1/2 w-frame -translate-x-1/2", className)}>
      {children}
    </div>
  );
}

/** One of the soft gradient blobs exported from Figma, placed on a FrameLayer. */
export function Blob({
  src,
  size,
  className,
}: {
  src: string;
  size: { width: number; height: number };
  className: string;
}) {
  return <Image src={src} alt="" width={size.width} height={size.height} className={cn("absolute max-w-none", className)} />;
}
