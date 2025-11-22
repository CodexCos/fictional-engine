"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CarouselImageProps {
  images: string[];
}

export default function CarouselImage({ images }: CarouselImageProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false })
  );

  const [zoomedImage, setZoomedImage] = React.useState<string | null>(null);

  return (
    <div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          duration: 40,
        }}
        plugins={[plugin.current]}
        className="xl:w-full w-xs max-w-xs sm:w-lg m-auto xl:m-0 sm:max-w-lg xl:max-w-3xl"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img
                  className="cursor-zoom-in rounded-lg"
                  src={src}
                  alt={`slide-${index}`}
                  onClick={() => setZoomedImage(src)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center image-full"
          onClick={() => setZoomedImage(null)}
          style={{ touchAction: "none" }}
        >
          <img
            src={zoomedImage}
            alt="zoomed"
            className="max-w-full max-h-full object-contain cursor-zoom-out"
          />
        </div>
      )}
    </div>
  );
}
