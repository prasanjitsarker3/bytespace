import Image from "next/image";
import Link from "next/link";
import { FolderCode, IdCard, UsersRound, Video, type LucideIcon } from "lucide-react";

import { BlockTitle, BodyText } from "@/components/shared/Typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { course } from "@/content/course";
import { routes } from "@/content/routes";
import { cn } from "@/lib/utils";

const includeIcons: LucideIcon[] = [FolderCode, Video, IdCard, UsersRound];

/** Enroll card: lesson preview, price, inclusions and instructor. */
export function CourseSidebar({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Enroll in this course"
      className={cn("flex flex-col gap-6 rounded-pill border border-shuttle-gray-200 bg-white p-6 sm:p-10", className)}
    >
      <div className="flex flex-col gap-6">
        <BlockTitle>{course.lessonsSummary}</BlockTitle>
        <ol className="flex flex-col gap-3 text-body-m">
          {course.previewLessons.map((lesson) => (
            <li key={lesson.n} className="flex items-start justify-between gap-6">
              <span className="flex gap-2 text-label-m font-medium text-shuttle-gray-950">
                <span className="w-6 shrink-0">{lesson.n}</span>
                <span className="max-w-50">{lesson.title}</span>
              </span>
              <span className="shrink-0 text-primary">{lesson.duration}</span>
            </li>
          ))}
          <li className="text-shuttle-gray-700">{course.moreVideos}</li>
        </ol>
      </div>

      <div className="flex flex-col gap-6">
        <BodyText>{course.enrollPitch}</BodyText>
        <p className="flex items-end">
          <span className="font-heading text-title font-semibold text-primary">{course.price}</span>
          <span className="text-body-m text-shuttle-gray-700">{course.priceSuffix}</span>
        </p>
        <Button type="button" variant="secondary" size="pill" className="w-full">
          Enroll Now
        </Button>
      </div>

      <BlockTitle>This course include</BlockTitle>
      <ul className="flex flex-col gap-3">
        {course.includes.map((item, i) => {
          const Icon = includeIcons[i];
          return (
            <li key={item} className="flex items-center gap-2 text-body-m text-shuttle-gray-700">
              <Icon aria-hidden className="size-6 shrink-0 text-primary" />
              {item}
            </li>
          );
        })}
      </ul>

      <Separator />

      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-3">
          <Image
            src={course.instructor.avatar}
            alt={`Portrait of ${course.instructor.name}`}
            width={52}
            height={52}
            className="size-13 rounded-full"
          />
          <div>
            <p className="text-label-l font-medium text-shuttle-gray-950">{course.instructor.name}</p>
            <p className="text-body-m text-shuttle-gray-700">{course.instructor.role}</p>
          </div>
        </div>
        <BodyText>{course.enrollPitch}</BodyText>
        <Link
          href={routes.creator}
          className="self-start rounded-pill border border-shuttle-gray-200 px-4 py-2 text-label-m font-medium text-shuttle-gray-700 transition-colors focus-ring hover:border-primary hover:text-primary"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
