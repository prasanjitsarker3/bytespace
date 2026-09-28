import type { Metadata } from "next";

import { ReviewList } from "@/components/course/ReviewList";
import { ProgressBar } from "@/components/shared/ProgressBar";
import { Stars } from "@/components/shared/Stars";
import { BlockTitle, BodyText } from "@/components/shared/Typography";
import { course, courseReviews } from "@/content/course";

export const metadata: Metadata = {
  title: `Reviews: ${course.title} | ByteSpace`,
};

export default function CourseReviewsPage() {
  return (
    <div className="flex flex-col gap-6">
      <BlockTitle>What Learners Are Saying</BlockTitle>
      <BodyText>{courseReviews.intro}</BodyText>

      <RatingSummary />

      <BlockTitle>Individual Reviews:</BlockTitle>
      <ReviewList reviews={courseReviews.reviews} />
    </div>
  );
}

function RatingSummary() {
  return (
    <div className="flex flex-col items-stretch gap-6 rounded-panel border border-shuttle-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:p-10">
      <div className="flex flex-col items-center justify-center rounded-lg bg-electric-lime-400 p-10 text-shuttle-gray-950">
        <p className="text-label-s font-medium">Ratings</p>
        <p className="font-heading text-title font-semibold">{courseReviews.average}</p>
      </div>
      <ul aria-label="Rating breakdown" className="flex min-w-0 flex-1 flex-col gap-1">
        {courseReviews.breakdown.map((row) => (
          <li key={row.count} className="flex items-center gap-4">
            <ProgressBar value={row.fill} className="min-w-0 flex-1" />
            <Stars className="hidden sm:flex" />
            <span className="w-10 text-right text-body-m leading-[1.6] text-shuttle-gray-700">{row.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
