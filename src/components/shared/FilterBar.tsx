"use client";

import { ChartNoAxesColumnIncreasing, Funnel, ListFilter, Shapes } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sortOptions } from "@/content/search";

const pill =
  "h-auto gap-1 rounded-pill border border-shuttle-gray-200 bg-white px-4 py-3 text-label-m font-medium text-shuttle-gray-700 hover:bg-shuttle-gray-50 hover:text-shuttle-gray-950 [&_svg:not([class*='size-'])]:size-6";

/** Filter / Level / Category pills and the sort menu (Search Page and Creator Profile). */
export function FilterBar() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div className="flex flex-wrap gap-4">
        <Button type="button" variant="outline" className={pill}>
          <Funnel aria-hidden />
          Filter
        </Button>
        <Button type="button" variant="outline" className={pill}>
          <ChartNoAxesColumnIncreasing aria-hidden />
          Level
        </Button>
        <Button type="button" variant="outline" className={pill}>
          <Shapes aria-hidden />
          Category
        </Button>
      </div>

      <Select items={sortOptions} defaultValue="relevant">
        <SelectTrigger
          aria-label="Sort courses"
          className={`${pill} data-[size=default]:h-auto [&>svg:last-child]:hidden`}
        >
          <ListFilter aria-hidden />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(sortOptions).map(([value, label]) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
