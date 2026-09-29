"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { partners } from "@/content/home";
import { cn } from "@/lib/utils";

/** Swipeable partner-logo strip for small screens, with dot indicators. */
export function PartnersCarousel({ className }: { className?: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className={className}>
      <Carousel setApi={setApi} opts={{ align: "center", loop: true }} aria-label="Partner logos">
        <CarouselContent className="-ml-6">
          {partners.map((logo, i) => (
            <CarouselItem key={logo.src} className="basis-[55%] pl-6 sm:basis-[38%]">
              <div className="flex h-16 items-center justify-center">
                <Image
                  src={logo.src}
                  alt={`Partner logo ${i + 1}`}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto w-full max-w-40 select-none"
                  draggable={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-6 flex justify-center gap-2">
        {partners.map((logo, i) => (
          <button
            key={logo.src}
            type="button"
            aria-label={`Go to partner ${i + 1}`}
            aria-current={selected === i}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-2 rounded-full bg-shuttle-gray-300 transition-all",
              selected === i ? "w-6 bg-primary" : "w-2",
            )}
          />
        ))}
      </div>
    </div>
  );
}
