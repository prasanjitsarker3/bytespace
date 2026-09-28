import Link from "next/link";

import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/shared/Container";
import { PageBanner } from "@/components/shared/PageBanner";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/content/routes";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <>
      <PageBanner>
        <Container as="main" className="flex flex-col items-center pt-32 pb-20 text-center lg:pt-40 lg:pb-31.25">
          {/* Lime-to-transparent numerals sit behind the heading, as in Figma */}
          <p
            aria-hidden
            className="-z-20 -mb-[8vw] bg-linear-to-b from-electric-lime-400 via-electric-lime-400/80 to-transparent bg-clip-text font-heading text-[40vw] leading-none font-semibold tracking-[-0.01em] text-transparent lg:-mb-29.75 lg:text-display-404"
          >
            404
          </p>
          <div className="relative flex flex-col items-center gap-8">
            <h1 className="max-w-233.75 font-heading text-heading-m font-semibold text-white md:text-heading-l">
              The page you are looking for doesn’t exist
            </h1>
            <p className="text-body-l text-shuttle-gray-100">
              Try to use a correct url or go back to homepage to start again
            </p>
            <Link
              href={routes.home}
              className={cn(buttonVariants({ variant: "secondary", size: "pill" }), "focus-visible:ring-white/60")}
            >
              Back to Home
            </Link>
          </div>
        </Container>
      </PageBanner>
      <Footer />
    </>
  );
}
