import Image from "next/image";

import { Blob, FrameLayer } from "@/components/shared/Backdrops";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/Typography";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/content/home";
import { blurProps } from "@/lib/blur-data";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative isolate overflow-hidden bg-surface py-20 lg:pt-18.5 lg:pb-14.25"
    >
      <FrameLayer className="-z-10">
        <Blob src="/images/t-blob-1.svg" size={{ width: 1217, height: 1217 }} className="top-[-281px] left-[802px]" />
        <Blob src="/images/t-blob-2.svg" size={{ width: 752, height: 752 }} className="top-[-178px] left-[355px]" />
        <Blob src="/images/t-blob-3.svg" size={{ width: 1217, height: 1217 }} className="top-[109px] left-[-482px]" />
      </FrameLayer>

      <Container className="flex flex-col gap-12 lg:gap-18">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-10.75">
          <SectionHeading id="testimonials-title" className="text-ink-950 lg:w-144.25 lg:shrink-0">
            Discover What Our Community Is Saying
          </SectionHeading>
          <p className="text-body-l text-ink-700 lg:w-145">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <ul className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10.25">
          {testimonials.map((t) => (
            <li key={t.name}>
              <Card className="gap-6 rounded-pill bg-white p-6 ring-0">
                <figure className="flex flex-col gap-6">
                  <Image
                    src={t.avatar}
                    {...blurProps(t.avatar)}
                    alt={`Portrait of ${t.name}`}
                    width={80}
                    height={80}
                    className="size-20 rounded-full object-cover"
                  />
                  <figcaption>
                    <p className="font-heading text-heading-xs font-semibold text-ink-950">{t.name}</p>
                    <p className="text-body-l text-primary">{t.role}</p>
                  </figcaption>
                  <blockquote className="text-body-l text-ink-700">{t.quote}</blockquote>
                </figure>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
