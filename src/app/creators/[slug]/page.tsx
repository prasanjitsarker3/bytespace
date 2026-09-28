import type { Metadata } from "next";

import { CreatorHero } from "@/components/creator/CreatorHero";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/shared/Container";
import { CourseGrid } from "@/components/shared/CourseGrid";
import { FilterBar } from "@/components/shared/FilterBar";
import { PageBanner } from "@/components/shared/PageBanner";
import { courses } from "@/content/home";
import { creator } from "@/content/creator";
import { CREATOR_SLUG } from "@/content/routes";

// Only the creator designed in Figma exists; any other slug renders the 404 page.
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: CREATOR_SLUG }];
}

export const metadata: Metadata = {
  title: `${creator.name} | ByteSpace Creator`,
  description: creator.tagline,
};

export default function CreatorProfilePage() {
  return (
    <>
      <PageBanner active="Creators">
        <CreatorHero />
      </PageBanner>

      <Container as="main" className="flex flex-1 flex-col gap-10 pt-12 pb-16 lg:pt-15.5 lg:pb-15.25">
        <h2 className="sr-only">Courses by {creator.name}</h2>
        <FilterBar />
        <CourseGrid courses={courses} label={`Courses by ${creator.name}`} />
      </Container>

      <Footer />
    </>
  );
}
