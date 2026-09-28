import type { Metadata } from "next";
import Image from "next/image";

import { CheckList } from "@/components/shared/CheckList";
import { BlockTitle } from "@/components/shared/Typography";
import { course, courseAbout } from "@/content/course";
import { blurProps } from "@/lib/blur-data";

export const metadata: Metadata = {
  title: `${course.title} | ByteSpace`,
  description: course.subtitle,
};

export default function CourseAboutPage() {
  return (
    <div className="flex flex-col gap-6">
      <BlockTitle>Description</BlockTitle>
      <div className="flex flex-col gap-[1.6em] text-body-m leading-[1.6] text-shuttle-gray-700">
        {courseAbout.description.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <BlockTitle>Sneak Peak</BlockTitle>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {courseAbout.sneakPeek.map((src, i) => (
          <li key={src} className="relative aspect-167/125 overflow-hidden rounded-panel">
            <Image
              src={src}
              {...blurProps(src)}
              alt={`Course preview ${i + 1}`}
              fill
              sizes="(min-width: 640px) 167px, 45vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>

      <BlockTitle>Key Points</BlockTitle>
      <CheckList items={courseAbout.keyPoints} />
    </div>
  );
}
