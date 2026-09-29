"use client";

import Link from "next/link";
import { useState } from "react";

import { CategoryCombobox } from "@/components/shared/CategoryCombobox";
import { pillVariants } from "@/components/shared/pill";
import { routes } from "@/content/routes";
import { cn } from "@/lib/utils";

type CategoryPillsProps = {
  rows: readonly (readonly string[])[];
  showMore?: boolean;
  rowClassName?: string;
};




export function CategoryPills({
  rows,
  showMore = false,
  rowClassName,
}: CategoryPillsProps) {
  const [active, setActive] = useState<string | undefined>(rows[0]?.[0]);

  return (
    <>
      <div className="flex w-full flex-col gap-3 md:hidden">
        <CategoryCombobox
          categories={rows.flat()}
          value={active}
          onChange={setActive}
        />
        {showMore && (
          <Link
            href={routes.courses}
            className="self-end rounded-sm px-1 text-label-m font-medium text-shuttle-gray-700 focus-ring hover:text-primary"
          >
            + More
          </Link>
        )}
      </div>

      <div
        role="group"
        aria-label="Filter courses by category"
        className="hidden flex-col items-center gap-5.25 md:flex"
      >
        {rows.map((row, rowIndex) => (
          <ul
            key={row.join("|")}
            className={cn(
              "flex flex-wrap items-center justify-center gap-4",
              rowClassName,
            )}
          >
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
    </>
  );
}
