"use client";

import { ChartNoAxesColumnIncreasing, Funnel, ListFilter, Shapes } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { levelOptions, sortOptions } from "@/content/search";
import { cn } from "@/lib/utils";

const pill =
  "h-auto gap-1 rounded-pill border border-shuttle-gray-200 bg-white px-4 py-3 text-label-m font-medium text-shuttle-gray-700 hover:bg-shuttle-gray-50 hover:text-shuttle-gray-950 [&_svg:not([class*='size-'])]:size-6";

/** Full-width select styled as a pill, used for the mobile Level / Sort row. */
function PillSelect({
  items,
  defaultValue,
  label,
  icon,
  className,
}: {
  items: Record<string, string>;
  defaultValue: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <Select items={items} defaultValue={defaultValue}>
      <SelectTrigger
        aria-label={label}
        className={cn(
          pill,
          "min-w-0 justify-start gap-2 data-[size=default]:h-auto [&>svg:last-child]:ml-auto [&>svg:last-child]:size-4",
          className,
        )}
      >
        {icon}
        <SelectValue className="truncate" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(items).map(([value, text]) => (
          <SelectItem key={value} value={value}>
            {text}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

/**
 * Filter / Level / Category pills and the sort menu (Search Page and Creator Profile).
 * On mobile it collapses to a two-column Level + Sort row; categories use their own picker.
 */
export function FilterBar() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:hidden">
        <PillSelect
          items={levelOptions}
          defaultValue="all"
          label="Filter by level"
          icon={<ChartNoAxesColumnIncreasing aria-hidden className="size-5 shrink-0" />}
          className="w-full"
        />
        <PillSelect
          items={sortOptions}
          defaultValue="relevant"
          label="Sort courses"
          icon={<ListFilter aria-hidden className="size-5 shrink-0" />}
          className="w-full"
        />
      </div>

      <div className="hidden flex-wrap items-start justify-between gap-4 md:flex">
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
    </>
  );
}
