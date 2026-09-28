import { CourseCard } from "@/components/shared/CourseCard";
import type { Course } from "@/content/types";
import { cn } from "@/lib/utils";

/** Responsive 1 / 2 / 3 column grid of course cards with the design's 40px gaps. */
export function CourseGrid({
  courses,
  label,
  className,
}: {
  courses: (Course & { key?: string })[];
  /** Accessible name for the list */
  label?: string;
  className?: string;
}) {
  return (
    <ul
      aria-label={label}
      className={cn("grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3", className)}
    >
      {courses.map((course) => (
        <li key={course.key ?? course.title} className="flex w-full justify-center">
          <CourseCard course={course} />
        </li>
      ))}
    </ul>
  );
}
