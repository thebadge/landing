"use client";
import { Carousel, CarouselApi } from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";

export default function SectionCarousel({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer?: (current: number, count: number) => React.ReactNode;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-[100%]">
      {children}
      <div className="py-2 text-center text-sm text-muted-foreground text-body-color">
        {current} of {count}
      </div>
    </Carousel>
  );
}
