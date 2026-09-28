import Image from "next/image";

import { FrameLayer, GridBackdrop } from "@/components/shared/Backdrops";
import { Container } from "@/components/shared/Container";
import { Ornament } from "@/components/shared/Ornament";
import { SearchField } from "@/components/shared/SearchField";
import { CategoryStatCard, HappyStudentsCard, LearningProgressCard } from "@/components/shared/StatCards";
import { Button } from "@/components/ui/button";
import { routes } from "@/content/routes";
import { blurProps } from "@/lib/blur-data";

const heroPhoto = "/images/hero-student.png";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-primary">
      <GridBackdrop preload />

      {/* 3D shapes at their Figma positions; visible on first paint, so load eagerly */}
      <FrameLayer className="z-10 hidden lg:block">
        <Ornament eager shape="coil" tint="lime" size={385} className="top-[221px] left-[-118px]" />
        <Ornament eager shape="coil" tint="white" size={175} flip className="top-[477px] left-[183px]" />
        <Ornament eager shape="torus" tint="white" size={342} className="top-[682px] left-[18px]" />
        <Ornament eager shape="spring" tint="white" size={330} className="top-[672px] left-[1127px]" />
        <Ornament eager shape="cylinder" tint="lime" size={370} className="top-[221px] left-[1231px]" />
        <Ornament eager shape="pyramid" tint="white" size={188} className="top-[464px] left-[1106px]" />
      </FrameLayer>

      <Container className="relative flex flex-col items-center pt-32 lg:pt-42.25">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1
            id="hero-title"
            className="max-w-233.75 font-heading text-heading-m font-semibold text-white md:text-heading-l"
          >
            Get Access to Hundreds Courses Available
          </h1>
          <p className="text-body-l text-shuttle-gray-100 lg:whitespace-nowrap">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        <form role="search" action={routes.courses} className="mt-15 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <SearchField id="hero-search" label="Search courses" placeholder="Course, topic, creator" />
          <Button type="submit" variant="secondary" size="pill" className="focus-visible:ring-white/60">
            Search
          </Button>
        </form>

        {/* Student photo on the lime ring, with floating stat cards */}
        <div className="relative mt-12 -mb-7.25 aspect-578/541 w-full max-w-144.5 lg:-mt-0.5">
          <div aria-hidden className="absolute top-[13%] left-1/2 -z-10 aspect-square w-[199%] -translate-x-1/2">
            <Image src="/images/hero-circle.svg" alt="" fill sizes="1149px" />
          </div>
          <Image
            src={heroPhoto}
            {...blurProps(heroPhoto)}
            alt="Smiling student wearing headphones and holding a laptop"
            fill
            preload
            sizes="(min-width: 640px) 578px, 100vw"
            className="object-cover drop-shadow-float"
          />
          <CategoryStatCard className="absolute top-[23.5%] left-[-4.7%] z-20 hidden md:block" />
          <LearningProgressCard className="absolute top-[25.7%] left-[71.1%] z-20 hidden md:flex" />
          <HappyStudentsCard className="absolute top-[60.1%] left-[-17.8%] z-20 hidden md:flex" />
        </div>
      </Container>
    </section>
  );
}
