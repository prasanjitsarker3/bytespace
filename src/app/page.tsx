import { CallToAction } from "@/components/sections/CallToAction";
import { Categories } from "@/components/sections/Categories";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { Footer } from "@/components/sections/Footer";
import { Growth } from "@/components/sections/Growth";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1">
        <Hero />
        <Partners />
        <FeaturedCourses />
        <Categories />
        <Growth />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
