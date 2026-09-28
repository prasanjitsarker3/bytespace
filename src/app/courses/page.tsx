import type { Metadata } from "next";

import { Footer } from "@/components/sections/Footer";
import { SearchBanner } from "@/components/sections/SearchBanner";
import { CategoryPills } from "@/components/shared/CategoryPills";
import { Container } from "@/components/shared/Container";
import { CourseGrid } from "@/components/shared/CourseGrid";
import { CoursePagination } from "@/components/shared/CoursePagination";
import { FilterBar } from "@/components/shared/FilterBar";
import { PageBanner } from "@/components/shared/PageBanner";
import { searchResults, searchCategories } from "@/content/search";

export const metadata: Metadata = {
  title: "Find Your Next Course | ByteSpace",
};

export default function SearchPage() {
  return (
    <>
      <PageBanner active="Courses">
        <SearchBanner />
      </PageBanner>

      <Container as="main" className="flex flex-1 flex-col pt-12 pb-16 lg:pt-18 lg:pb-18">
        <FilterBar />
        <div className="mt-8">
          <CategoryPills rows={[searchCategories]} rowClassName="xl:w-full xl:flex-nowrap xl:justify-between xl:gap-x-2" />
        </div>
        <CourseGrid courses={searchResults} label="Search results" className="mt-12 lg:mt-19.25" />
        <div className="mt-18">
          <CoursePagination current={1} total={5} />
        </div>
      </Container>

      <Footer />
    </>
  );
}
