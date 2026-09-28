import Image from "next/image";

import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { creator } from "@/content/creator";
import { blurProps } from "@/lib/blur-data";

/** Creator identity, bio, stats and Follow button on the blue profile banner. */
export function CreatorHero() {
  return (
    <Container
      as="section"
      aria-labelledby="creator-name"
      className="flex flex-col gap-10 pt-32 pb-16 lg:pt-43 lg:pb-20.5"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Image
            src={creator.photo}
            {...blurProps(creator.photo)}
            alt={`Portrait of ${creator.name}`}
            width={96}
            height={96}
            preload
            className="size-24 rounded-pill object-cover"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 id="creator-name" className="font-heading text-title font-semibold text-shuttle-gray-50">
                {creator.name}
              </h1>
              <Badge className="h-auto rounded-pill bg-electric-lime-400 px-6 py-2 text-label-m font-medium text-shuttle-gray-950">
                {creator.badge}
              </Badge>
            </div>
            <p className="text-body-l text-shuttle-gray-50">{creator.tagline}</p>
          </div>
        </div>
        <div className="text-body-l text-shuttle-gray-50">
          {creator.bio.map((line) => (
            <p key={line.slice(0, 20)}>{line}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <ul className="flex flex-wrap gap-4">
          {creator.stats.map((stat) => (
            <li key={stat.label} className="flex items-center gap-2 rounded-pill bg-white px-6 py-3 text-label-l font-medium">
              <span className="text-primary">{stat.value}</span>
              <span className="text-shuttle-gray-950">{stat.label}</span>
            </li>
          ))}
        </ul>
        <Button type="button" variant="secondary" size="pill" className="focus-visible:ring-white/60">
          Follow
        </Button>
      </div>
    </Container>
  );
}
