import { CategoryPills } from "@/components/shared/CategoryPills";
import { Container } from "@/components/shared/Container";
import { CourseGrid } from "@/components/shared/CourseGrid";
import { SectionIntro } from "@/components/shared/Typography";
import { courses, categoryRows } from "@/content/home";

export function FeaturedCourses() {
  return (
    <section id="courses" aria-labelledby="courses-title" className="bg-white pt-16 lg:pt-18">
      <Container className="flex flex-col items-center">
        <SectionIntro id="courses-title" title="Discover Your Passion, Build Your Skills" headingClassName="max-w-147">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across
          different fields, from technology to the arts, and make a difference in your career and life.
        </SectionIntro>

        <div className="mt-10.5">
          <CategoryPills rows={categoryRows} showMore />
        </div>

        <CourseGrid courses={courses} label="Featured courses" className="mt-19.25 w-full" />
      </Container>
    </section>
  );
}
