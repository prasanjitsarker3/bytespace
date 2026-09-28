import Image from "next/image";
import { Play } from "lucide-react";

import { course } from "@/content/course";
import { blurProps } from "@/lib/blur-data";

/** 720x479 preview still with the frosted play button. */
export function CoursePreview() {
  return (
    <div className="relative aspect-720/479 w-full max-w-180 overflow-hidden rounded-pill bg-shuttle-gray-900">
      <Image
        src={course.video}
        {...blurProps(course.video)}
        alt={`Preview video for ${course.title}`}
        fill
        preload
        sizes="(min-width: 1024px) 720px, 100vw"
        className="object-cover"
      />
      <button
        type="button"
        aria-label="Play course preview"
        className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill border border-ink-700 bg-shuttle-gray-900/25 p-4 text-white backdrop-blur-[20px] transition-transform focus-ring-light hover:scale-105"
      >
        <Play aria-hidden className="size-10 fill-white sm:size-18" strokeWidth={1} />
      </button>
    </div>
  );
}
