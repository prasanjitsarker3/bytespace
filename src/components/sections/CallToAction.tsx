import Link from "next/link";

import { FrameLayer, GridBackdrop } from "@/components/shared/Backdrops";
import { Container } from "@/components/shared/Container";
import { Ornament } from "@/components/shared/Ornament";
import { SectionHeading } from "@/components/shared/Typography";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/content/routes";
import { cn } from "@/lib/utils";

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-primary py-20 lg:py-21">
      <GridBackdrop />

      <FrameLayer className="hidden lg:block">
        <Ornament shape="coil" tint="lime" size={385} className="top-[-162px] left-[-118px]" />
        <Ornament shape="coil" tint="white" size={175} flip className="top-[5px] left-[178px]" />
        <Ornament shape="cone" tint="white" size={188} className="top-[225px] left-[-48px]" />
        <Ornament shape="torus" tint="lime" size={342} className="top-[299px] left-[20px]" />
        <Ornament shape="pyramid" tint="lime" size={188} className="top-0 left-[1080px]" />
        <Ornament shape="cylinder" tint="white" size={370} className="top-[6px] left-[1226px]" />
        <Ornament shape="spring" tint="lime" size={330} className="top-[289px] left-[1110px]" />
      </FrameLayer>

      <Container className="relative z-10 flex max-w-241 flex-col items-center gap-10 text-center">
        <SectionHeading id="cta-title" className="max-w-177.5 text-shuttle-gray-50">
          Unlock Your Potential as a Creator with ByteSpace
        </SectionHeading>
        <p className="text-body-l text-shuttle-gray-50">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          href={routes.register}
          className={cn(buttonVariants({ variant: "secondary", size: "pill" }), "focus-visible:ring-white/60")}
        >
          Join as Creator
        </Link>
      </Container>
    </section>
  );
}
