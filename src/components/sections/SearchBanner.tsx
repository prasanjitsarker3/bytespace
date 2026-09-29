"use client";

import { Container } from "@/components/shared/Container";
import { SearchField } from "@/components/shared/SearchField";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { routes } from "@/content/routes";
import { searchScopes } from "@/content/search";

/** "Find Your Next Course" search box with the Courses / Creators scope picker. */
export function SearchBanner() {
  return (
    <Container
      as="section"
      aria-labelledby="search-title"
      className="flex flex-col items-center gap-8 pt-32 pb-16 lg:pt-41 lg:pb-17.25"
    >
      <h1 id="search-title" className="text-center font-heading text-mobile-title font-semibold text-shuttle-gray-50 sm:text-title">
        Find Your Next Course
      </h1>
      <form role="search" action={routes.courses} className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
        <SearchField id="course-search" label="Search" placeholder="Search" />
        <Select items={searchScopes} defaultValue="courses" name="scope">
          <SelectTrigger
            aria-label="Search in"
            className="h-auto gap-2 rounded-pill border-0 bg-electric-lime-400 px-6 py-3 text-label-l font-medium text-shuttle-gray-950 hover:bg-electric-lime-500 data-[size=default]:h-12 [&_svg:not([class*='size-'])]:size-6 [&>svg]:text-shuttle-gray-950"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(searchScopes).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* Enter submits the form; the visible design has no separate submit button */}
        <Button type="submit" className="sr-only">
          Search
        </Button>
      </form>
    </Container>
  );
}
