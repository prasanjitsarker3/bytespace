"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";

import { pillVariants } from "@/components/shared/pill";
import { Stars } from "@/components/shared/Stars";
import type { Review } from "@/content/types";

const filters = ["all", 5, 4, 3, 2, 1] as const;

/** Rating filter chips plus the individual review cards. */
export function ReviewList({ reviews }: { reviews: readonly Review[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const visible = filter === "all" ? reviews : reviews.filter((r) => r.rating === filter);

  return (
    <>
      <div role="group" aria-label="Filter reviews by rating" className="flex flex-wrap gap-4">
        {filters.map((value) => {
          const active = value === filter;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(value)}
              className={pillVariants({ active })}
            >
              {value === "all" ? (
                "All rating"
              ) : (
                <>
                  <Star aria-hidden className="fill-current" />
                  {value}
                  <span className="sr-only"> stars</span>
                </>
              )}
            </button>
          );
        })}
      </div>

      <ul className="flex flex-col gap-6">
        {visible.map((review) => (
          <li key={review.name}>
            <article className="flex flex-col gap-6 rounded-pill border border-shuttle-gray-200 p-6 sm:p-10">
              <header className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-3">
                    <Image
                      src={review.avatar}
                      alt={`Portrait of ${review.name}`}
                      width={52}
                      height={52}
                      className="size-13 rounded-full"
                    />
                    <div>
                      <h3 className="text-label-l font-medium text-shuttle-gray-950">{review.name}</h3>
                      <p className="text-body-m text-shuttle-gray-700">{review.role}</p>
                    </div>
                  </div>
                  <Stars value={review.rating} />
                </div>
                <p className="shrink-0 text-body-m text-shuttle-gray-700">{review.when}</p>
              </header>
              <p className="text-body-m leading-[1.6] text-shuttle-gray-700">{review.text}</p>
            </article>
          </li>
        ))}
        {visible.length === 0 && (
          <li className="rounded-pill border border-dashed border-shuttle-gray-200 p-10 text-center text-body-m text-shuttle-gray-700">
            No reviews with this rating yet.
          </li>
        )}
      </ul>
    </>
  );
}
