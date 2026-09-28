import type { Metadata } from "next";
import { Video } from "lucide-react";

import { ProgressBar } from "@/components/shared/ProgressBar";
import { BlockTitle, BodyText } from "@/components/shared/Typography";
import { course, courseLessons } from "@/content/course";

export const metadata: Metadata = {
  title: `Lessons: ${course.title} | ByteSpace`,
};

export default function CourseLessonsPage() {
  return (
    <div className="flex flex-col gap-6">
      <BlockTitle>Explore the Modules</BlockTitle>
      <BodyText>{courseLessons.intro}</BodyText>

      <BlockTitle>Lesson List</BlockTitle>
      <ol className="flex flex-col gap-6">
        {courseLessons.modules.map((module) => (
          <li key={module.title} className="flex items-center gap-3.25">
            <span className="flex shrink-0 items-center justify-center rounded-pill bg-electric-lime-400 p-4 text-shuttle-gray-950">
              <Video aria-hidden className="size-10" strokeWidth={1.75} />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-label-m font-medium text-shuttle-gray-950">{module.title}</h3>
              <BodyText>{module.body}</BodyText>
            </div>
          </li>
        ))}
      </ol>

      <BlockTitle>Lesson Content</BlockTitle>
      <BodyText>{courseLessons.content}</BodyText>

      <BlockTitle>Lesson Progress Tracking</BlockTitle>
      <BodyText>{courseLessons.tracking}</BodyText>

      <div className="flex flex-col gap-2 rounded-panel border border-shuttle-gray-200 bg-white p-4">
        <p className="text-label-s font-medium text-shuttle-gray-950">Learning Progress</p>
        <p className="font-heading text-title font-semibold text-shuttle-gray-950">55%</p>
        <ProgressBar value={56} label="Learning progress" />
      </div>
    </div>
  );
}
