import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ShopByDepartment() {
  const categories = [
    { label: "Women Clothing", icon: "👗", link: "/women-clothing" },
    { label: "Men Clothing", icon: "👕", link: "/men-clothing" },
    { label: "Kids Clothing", icon: "🧒", link: "/kids-clothing" },
    { label: "Promotions", icon: "🎉", link: "/promotions" },
  ];

  return (
    <Carousel className="lg:px-72 mt-10">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex flex-col items-center p-6 space-y-6">
                <h2 className="text-1xl text-neutral-800 dark:text-neutral-200 font-sans">
                  Shop By Department
                </h2>
                <div className="flex flex-row items-center space-x-6 overflow-x-auto">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href={category.link}
                      className="flex flex-col items-center"
                    >
                      <div className="text-1xl">{category.icon}</div>
                      <span className="text-l text-neutral-600 dark:text-neutral-200 font-sans transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">
                        {category.label}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
