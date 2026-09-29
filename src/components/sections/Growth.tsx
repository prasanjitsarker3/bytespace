import Image from "next/image";

import { Blob, FrameLayer } from "@/components/shared/Backdrops";
import { CheckList } from "@/components/shared/CheckList";
import { Container } from "@/components/shared/Container";
import { CourseCard } from "@/components/shared/CourseCard";
import { Ornament } from "@/components/shared/Ornament";
import {
  HappyStudentsCard,
  LearningProgressCard,
  TotalRevenueCard,
  YearToDateCard,
} from "@/components/shared/StatCards";
import { SectionHeading } from "@/components/shared/Typography";
import { courses, creatorBenefits, growthStats } from "@/content/home";
import { blurProps } from "@/lib/blur-data";

export function Growth() {
  return (
    <section
      id="creators"
      aria-labelledby="growth-title"
      className="relative isolate overflow-hidden bg-surface py-20 lg:py-30"
    >
      <FrameLayer className="-z-10">
        <Blob src="/images/growth-bg.svg" size={{ width: 2536, height: 2471 }} className="top-[-506px] left-[-548px]" />
        <Blob src="/images/growth-blob.svg" size={{ width: 752, height: 752 }} className="top-[906px] left-[-327px]" />
      </FrameLayer>

      <Container className="flex flex-col gap-20 lg:gap-18">
        <div className="flex flex-col items-center gap-12 xl:flex-row xl:gap-15.75">
          <div className="flex w-full flex-col gap-10 xl:w-143.5 xl:shrink-0">
            <SectionHeading id="growth-title">Your Path to Professional Growth Starts Here!</SectionHeading>
            <p className="max-w-119.25 text-body-l text-shuttle-gray-700">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
              career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark
              on a new career path entirely, we have the resources you need.
            </p>
            <dl className="flex flex-wrap items-end gap-x-8 gap-y-4 sm:gap-x-14">
              {growthStats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-body-l text-shuttle-gray-700">{stat.label}</dt>
                  <dd className="font-heading text-display-xs font-medium text-primary">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <LearnerCollage />
        </div>

        <div className="flex flex-col-reverse items-center gap-12 xl:flex-row xl:gap-19.75">
          <CreatorCollage />
          <div className="flex w-full flex-col gap-10 xl:w-145 xl:shrink-0">
            <SectionHeading className="max-w-97.75">Create &amp; Manage Courses Easily.</SectionHeading>
            <p className="max-w-143.5 text-body-l text-shuttle-gray-700">
              <strong className="font-bold text-shuttle-gray-950">ByteSpace</strong> supports individuals or entities
              in the creation, publication, and administration of educational courses.
            </p>
            <CheckList items={creatorBenefits} tone="feature" />
          </div>
        </div>
      </Container>
    </section>
  );
}


function LearnerCollage() {
  const photo = "/images/hero-student.png";
  return (
    <div className="relative aspect-621/552 w-full max-w-155.25 xl:shrink-0">
      <CourseCard course={courses[0]} className="absolute top-0 left-0 hidden w-[60%] max-w-none sm:flex" />
      <div className="absolute top-[2.2%] left-0 aspect-577/540 w-[93%]">
        <Image
          src={photo}
          {...blurProps(photo)}
          alt="Student with headphones holding a laptop"
          fill
          sizes="(min-width: 1024px) 577px, 90vw"
          className="object-cover drop-shadow-float"
        />
      </div>
      <LearningProgressCard className="absolute top-[38.6%] left-[55.6%] hidden sm:flex" />
      <Ornament shape="spring" tint="lime" size={215} className="top-[12.1%] left-[65.4%] hidden sm:block" />
    </div>
  );
}

function CreatorCollage() {
  const photo = "/images/creator-woman.png";
  return (
    <div className="relative aspect-541/596 w-full max-w-135.25 xl:shrink-0">
      <TotalRevenueCard className="absolute top-[7.4%] left-0 hidden sm:flex" />
      <YearToDateCard className="absolute top-[32.6%] left-0 hidden sm:flex" />
      <div className="absolute top-0 left-[5.1%] h-full w-[80.4%] drop-shadow-float">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={photo}
            {...blurProps(photo)}
            alt="Smiling creator with headphones holding a tablet"
            fill
            sizes="(min-width: 1024px) 683px, 110vw"
            className="origin-top scale-[1.146] object-cover object-[50%_0%]"
          />
        </div>
      </div>
      <HappyStudentsCard compact className="absolute top-[69.3%] left-[52.3%] hidden sm:flex" />
      <Ornament shape="coil" tint="lime" size={215} className="top-[19.1%] left-[56.4%] hidden sm:block" />
    </div>
  );
}
