"use client";

import Link from "next/link";
import { useState } from "react";

import { pillVariants } from "@/components/shared/pill";
import { routes } from "@/content/routes";
import { cn } from "@/lib/utils";

type CategoryPillsProps = {
  /** Rows of labels; kept as separate rows so desktop line breaks match Figma */
  rows: readonly (readonly string[])[];
  /** Show the trailing "+ More" link on the last row */
  showMore?: boolean;
  rowClassName?: string;
};

/** Single-select category filter pills (home "Discover" section and search page). */
export function CategoryPills({ rows, showMore = false, rowClassName }: CategoryPillsProps) {
  const [active, setActive] = useState(rows[0]?.[0]);

  return (
    <div role="group" aria-label="Filter courses by category" className="flex flex-col items-center gap-5.25">
      {rows.map((row, rowIndex) => (
        <ul key={row.join("|")} className={cn("flex flex-wrap items-center justify-center gap-4", rowClassName)}>
          {row.map((label) => (
            <li key={label}>
              <button
                type="button"
                aria-pressed={label === active}
                onClick={() => setActive(label)}
                className={pillVariants({ active: label === active })}
              >
                {label}
              </button>
            </li>
          ))}
          {showMore && rowIndex === rows.length - 1 && (
            <li>
              <Link
                href={routes.courses}
                className="rounded-sm px-1 text-label-m font-medium text-shuttle-gray-700 focus-ring hover:text-primary"
              >
                + More
              </Link>
            </li>
          )}
        </ul>
      ))}
    </div>
  );
}
