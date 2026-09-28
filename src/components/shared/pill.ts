import { cva } from "class-variance-authority";

/**
 * Rounded selectable pill: lime when active, light grey otherwise.
 * Shared by the category filters, the course tabs and the review rating filter.
 */
export const pillVariants = cva(
  "inline-flex h-auto items-center justify-center gap-1 rounded-pill px-4 py-3 text-label-m font-medium whitespace-nowrap transition-colors focus-ring [&_svg:not([class*='size-'])]:size-6",
  {
    variants: {
      active: {
        true: "bg-electric-lime-400 text-shuttle-gray-950 hover:bg-electric-lime-500",
        false: "bg-shuttle-gray-50 text-shuttle-gray-700 hover:bg-shuttle-gray-100 hover:text-shuttle-gray-950",
      },
    },
    defaultVariants: { active: false },
  },
);
