import Image from "next/image";

import { Container } from "@/components/shared/Container";
import { partners } from "@/content/home";

export function Partners() {
  return (
    <section aria-label="Our partners" className="bg-shuttle-gray-50 py-12 lg:py-20">
      <Container as="ul" className="flex flex-wrap items-end justify-center gap-x-18 gap-y-8">
        {partners.map((logo, i) => (
          <li key={logo.src}>
            <Image src={logo.src} alt={`Partner logo ${i + 1}`} width={logo.width} height={logo.height} />
          </li>
        ))}
      </Container>
    </section>
  );
}
