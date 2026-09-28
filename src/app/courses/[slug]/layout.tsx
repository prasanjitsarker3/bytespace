import { CourseHeader } from "@/components/course/CourseHeader";
import { CoursePreview } from "@/components/course/CoursePreview";
import { CourseSidebar } from "@/components/course/CourseSidebar";
import { CourseTabNav } from "@/components/course/CourseTabNav";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { GridBackdrop } from "@/components/shared/Backdrops";
import { Container } from "@/components/shared/Container";
import { COURSE_SLUG } from "@/content/routes";

// Only the course designed in Figma exists; any other slug renders the 404 page.
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: COURSE_SLUG }];
}

/**
 * Shared frame for Course Details, Course Lessons and Course Reviews.
 *
 * Desktop grid:  header  header
 *                video   sidebar
 *                tabs    sidebar
 * The blue band spans the first two rows; the sidebar starts on the band and overlaps it.
 */
export default function CourseLayout({ children }: LayoutProps<"/courses/[slug]">) {
  return (
    <>
      <div className="relative overflow-x-clip">
        <Navbar active="Courses" />

        <Container className="grid grid-cols-1 lg:grid-cols-[minmax(0,45.3125rem)_25.75rem] lg:justify-between lg:gap-x-10">
          <div aria-hidden className="relative col-span-full row-start-1 row-end-3 -z-10">
            <div className="absolute inset-y-0 left-1/2 isolate w-screen -translate-x-1/2 overflow-hidden bg-primary">
              <GridBackdrop preload />
            </div>
          </div>

          <CourseHeader className="col-span-full row-start-1 pt-32 lg:pt-43" />

          <div className="row-start-2 pt-10 pb-12 lg:col-start-1 lg:pt-14.75 lg:pb-15.5">
            <CoursePreview />
          </div>

          <CourseSidebar className="row-start-3 mt-10 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:mt-14.75 lg:self-start" />

          <main className="row-start-4 flex flex-col gap-10 pt-10 pb-16 lg:col-start-1 lg:row-start-3 lg:pt-15.5 lg:pb-20">
            <CourseTabNav />
            <div className="max-w-181.25">{children}</div>
          </main>
        </Container>
      </div>
      <Footer />
    </>
  );
}
