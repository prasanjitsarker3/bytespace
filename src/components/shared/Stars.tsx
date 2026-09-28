import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

/** Row of five 24px stars, filled up to `value`. */
export function Stars({ value = 5, className }: { value?: number; className?: string }) {
  return (
    <span role="img" aria-label={`${value} out of 5 stars`} className={cn("flex gap-1", className)}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          aria-hidden
          className={cn(
            "size-6",
            n <= value ? "fill-shuttle-gray-700 text-shuttle-gray-700" : "fill-shuttle-gray-100 text-shuttle-gray-100",
          )}
        />
      ))}
    </span>
  );
}
