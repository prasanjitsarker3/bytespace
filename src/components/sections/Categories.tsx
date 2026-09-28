import Link from "next/link";
import { Building2, Camera, CodeXml, Laptop, Megaphone, PencilRuler, type LucideIcon } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionIntro } from "@/components/shared/Typography";
import { routes } from "@/content/routes";

// Closest lucide equivalents of the Material icons used in Figma
const categories: { label: string; icon: LucideIcon }[] = [
  { label: "Design", icon: PencilRuler },
  { label: "Development", icon: CodeXml },
  { label: "IT & Software", icon: Laptop },
  { label: "Business", icon: Building2 },
  { label: "Marketing", icon: Megaphone },
  { label: "Photography", icon: Camera },
];

export function Categories() {
  return (
    <section aria-labelledby="categories-title" className="bg-white pt-16 pb-20 lg:pt-18 lg:pb-30">
      <Container className="flex flex-col items-center">
        <SectionIntro
          id="categories-title"
          title="Explore Diverse Learning Paths at Bytespace"
          headingClassName="text-display-xs"
        >
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans
          various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </SectionIntro>

        <ul className="mt-17 grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:flex lg:justify-center lg:gap-10">
          {categories.map(({ label, icon: Icon }) => (
            <li key={label}>
              <CategoryCard label={label} icon={Icon} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function CategoryCard({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  return (
    <Link
      href={routes.courses}
      className="group flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-pill border border-shuttle-gray-200 text-shuttle-gray-950 transition-colors focus-ring hover:border-primary hover:bg-shuttle-gray-50 lg:size-41.75"
    >
      <span className="flex items-center justify-center rounded-full bg-electric-lime-400 p-3 transition-transform group-hover:scale-105">
        <Icon aria-hidden className="size-9" strokeWidth={1.75} />
      </span>
      <span className="text-label-xl font-medium">{label}</span>
    </Link>
  );
}
