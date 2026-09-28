import { ChevronLeft, ChevronRight } from "lucide-react";

import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const arrow =
  "h-12 w-14 rounded-pill border border-shuttle-gray-200 bg-white text-shuttle-gray-950 hover:bg-shuttle-gray-50 [&_svg:not([class*='size-'])]:size-6";

/** Pagination from the Search Page: outlined arrow pills and Poppins page numbers. */
export function CoursePagination({ current = 1, total = 5 }: { current?: number; total?: number }) {
  return (
    <Pagination>
      <PaginationContent className="gap-6">
        <PaginationItem>
          <PaginationLink href="#" aria-label="Go to previous page" className={arrow}>
            <ChevronLeft aria-hidden />
          </PaginationLink>
        </PaginationItem>
        {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={page === current}
              className={cn(
                "size-auto border-0 bg-transparent px-0 font-heading text-heading-xs font-semibold hover:bg-transparent hover:text-primary",
                page === current ? "text-shuttle-gray-200" : "text-shuttle-gray-950",
              )}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink href="#" aria-label="Go to next page" className={arrow}>
            <ChevronRight aria-hidden />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
