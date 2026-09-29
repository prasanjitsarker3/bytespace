import Image from "next/image";

import { Container } from "@/components/shared/Container";
import { partners } from "@/content/home";

import { PartnersCarousel } from "./PartnersCarousel";

export function Partners() {
  return (
    <section aria-label="Our partners" className="bg-shuttle-gray-50 py-10 md:py-12 lg:py-20">
      <PartnersCarousel className="md:hidden" />

      <Container as="ul" className="hidden flex-wrap items-end justify-center gap-x-18 gap-y-8 md:flex">
        {partners.map((logo, i) => (
          <li key={logo.src}>
            <Image src={logo.src} alt={`Partner logo ${i + 1}`} width={logo.width} height={logo.height} />
          </li>
        ))}
      </Container>
    </section>
  );
}
