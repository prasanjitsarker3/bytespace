import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesColumnIncreasing, Star } from "lucide-react";

import { AvatarStack } from "@/components/shared/AvatarStack";
import { Card } from "@/components/ui/card";
import { learnerAvatars } from "@/content/home";
import { routes } from "@/content/routes";
import type { Course } from "@/content/types";
import { blurProps } from "@/lib/blur-data";
import { cn } from "@/lib/utils";

const thumbChip =
  "rounded-pill bg-shuttle-gray-50/60 px-3 py-1.5 text-label-xs font-medium text-ink-700 backdrop-blur-xs";

export function CourseCard({
  course,
  className,
  moreTone = "lime",
}: {
  course: Course;
  className?: string;
  moreTone?: "lime" | "dark";
}) {
  return (
    <Card
      className={cn(
        "relative w-full max-w-93.25 gap-5 rounded-pill border border-shuttle-gray-200 bg-white p-3.75 ring-0 transition-shadow hover:shadow-lg",
        className,
      )}
    >
      <div className="relative aspect-341/195 overflow-hidden rounded-media">
        <Image
          src={course.image}
          {...blurProps(course.image)}
          alt={`${course.title} course thumbnail`}
          fill
          sizes="(min-width: 1024px) 341px, 90vw"
          className="object-cover"
        />
        <ul className="absolute inset-x-3 bottom-4.5 flex flex-wrap gap-3">
          <li className={thumbChip}>{course.lessons}</li>
          <li className={thumbChip}>{course.duration}</li>
          <li className={thumbChip}>{course.comments}</li>
        </ul>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="min-w-0">
            <h3 className="truncate font-heading text-heading-xs font-semibold text-ink-950">
              <Link href={course.href ?? routes.course} className="rounded-sm focus-ring after:absolute after:inset-0">
                {course.title}
              </Link>
            </h3>
            <p className="text-body-xs text-ink-700">
              by <span className="text-primary">{course.creator}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-pill bg-shuttle-gray-50 px-3 py-1.5 text-label-xs font-medium text-shuttle-gray-700">
              <ChartNoAxesColumnIncreasing aria-hidden className="size-5" />
              {course.level}
            </span>
            <AvatarStack avatars={learnerAvatars} more={course.learners} size={32} tone={moreTone} />
          </div>

          <p className="flex items-end">
            <span className="font-heading text-heading-xs font-semibold text-primary">{course.price}</span>
            <span className="text-body-xs text-ink-700">{course.priceSuffix}</span>
          </p>
        </div>

        <p className="flex shrink-0 items-center gap-0.5 text-body-l text-ink-700">
          {course.rating}
          <Star aria-label="out of 5 stars" className="size-6 fill-shuttle-gray-200 text-shuttle-gray-200" />
        </p>
      </div>
    </Card>
  );
}
