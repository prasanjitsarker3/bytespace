import { CourseCard } from "@/components/shared/CourseCard";
import { Ornament } from "@/components/shared/Ornament";
import { HappyStudentsCard } from "@/components/shared/StatCards";
import { courses } from "@/content/home";
import type { AuthMode } from "@/content/auth";
import { cn } from "@/lib/utils";

/**
 * Decorative collage beside the auth form, laid out on the 698x648 Figma artboard.
 * Desktop only; the only difference between Login and Register is the white coil's x position.
 */
export function AuthCollage({ mode }: { mode: AuthMode }) {
  return (
    <div aria-hidden className="relative mt-2 hidden h-[40.5rem] w-[43.625rem] max-w-full xl:block">
      <CourseCard course={courses[1]} moreTone="dark" className="pointer-events-none absolute top-[10.5rem] left-0" />
      <CourseCard
        course={courses[2]}
        moreTone="dark"
        className="pointer-events-none absolute top-[4.9375rem] left-[6.9375rem]"
      />
      <HappyStudentsCard lime compact className="absolute top-[32.5rem] left-[14.125rem]" />
      <Ornament
        shape="coil"
        tint="white"
        size={175}
        flip
        className={cn("top-[25.25rem]", mode === "register" ? "left-[32.6875rem]" : "left-[21.75rem]")}
      />
      <Ornament shape="torus" tint="lime" size={146} className="top-[4.375rem] left-[1.8125rem]" />
      <Ornament shape="pyramid" tint="lime" size={188} className="top-[28.625rem] left-[-1.5625rem]" />
    </div>
  );
}
