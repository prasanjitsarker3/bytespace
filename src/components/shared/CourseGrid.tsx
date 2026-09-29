import { CourseCard } from "@/components/shared/CourseCard";
import type { Course } from "@/content/types";
import { cn } from "@/lib/utils";

export function CourseGrid({
  courses,
  label,
  className,
}: {
  courses: (Course & { key?: string })[];
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
