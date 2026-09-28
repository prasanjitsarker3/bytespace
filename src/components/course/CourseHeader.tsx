import Link from "next/link";
import { ChartNoAxesColumnIncreasing, Share2, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { course } from "@/content/course";
import { routes } from "@/content/routes";
import { cn } from "@/lib/utils";

const metaChip =
  "flex items-center gap-2 rounded-pill bg-white px-6 py-2 text-label-m font-medium text-shuttle-gray-950 [&_svg]:size-6 [&_svg]:shrink-0";

/** Title, subtitle, creator link, meta chips and Share button on the blue course banner. */
export function CourseHeader({ className }: { className?: string }) {
  return (
    <header className={cn("flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between", className)}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-shuttle-gray-50">
          <h1 className="font-heading text-title font-semibold">{course.title}</h1>
          <p className="font-heading text-heading-xs font-semibold">{course.subtitle}</p>
        </div>
        <p className="text-label-l font-medium text-shuttle-gray-50">
          by{" "}
          <Link href={routes.creator} className="rounded-sm text-electric-lime-400 focus-ring-light hover:underline">
            {course.creator}
          </Link>
        </p>
        <ul className="flex flex-wrap gap-4">
          <li className={metaChip}>
            <ChartNoAxesColumnIncreasing aria-hidden />
            {course.level}
          </li>
          <li className={metaChip}>
            <Star aria-hidden className="fill-primary text-primary" />
            {course.rating}
          </li>
          <li className={metaChip}>
            <Users aria-hidden className="text-primary" />
            {course.students}
          </li>
        </ul>
      </div>
      <Button
        type="button"
        variant="secondary"
        className="h-auto gap-2 self-start rounded-pill px-6 py-2 text-label-m font-medium [&_svg:not([class*='size-'])]:size-6"
      >
        <Share2 aria-hidden />
        Share
      </Button>
    </header>
  );
}
