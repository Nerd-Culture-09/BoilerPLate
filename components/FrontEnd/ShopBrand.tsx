import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ShopByBrand() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Array of brand images with corresponding links
  const brands = [
    { image: "/brand.jpg", name: " ", link: "/legit" },
    { image: "/brandb.jpg", name: " ", link: "/fabiani" },
    { image: "/brandc.jpg", name: " ", link: "/identity" },
    { image: "/brandd.jpg", name: " ", link: "/markham" },
    { image: "/brande.jpg", name: " ", link: "/woolworths" },
  ];

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mt-10 px-64">
      <Carousel setApi={setApi} className="w-full max-w-4xl">
        <CarouselContent>
          <CarouselItem>
            <div className="flex flex-col items-center p-6">
              <h2 className="text-center text-1xl mb-4">Shop By Brand</h2>
              <div className="flex space-x-4"> {/* Horizontal layout */}
                {brands.map((brand, index) => (
                  <a
                    key={index}
                    href={brand.link}
                    className="flex flex-col items-center"
                  >
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={150}
                      height={150}
                      className="w-32 h-32 object-contain mb-2" // Adjust size as needed
                    />
                    <p className="text-center text-lg font-medium">
                      {brand.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        
      </div>
    </div>
  );
}
