"use client"

import * as React from "react";
import { useRouter } from "next/navigation"; // Use next/navigation instead
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function LegitClothing() {
  const router = useRouter(); // Correct usage for server components

  // Sample data for products
  const products = [
    {
      id: 1, // Add unique IDs for products
      image: "/front.jpg", 
      description: "Legit women wear",
      price: "M190.00",
    },
    {
      id: 2,
      image: "/legitb.jpeg",
      description: "Stylish",
      price: "M120.00",
    },
    {
      id: 3,
      image: "/legitc.jpg",
      description: "Elegant",
      price: "M210.00",
    },
    {
      id: 4,
      image: "/legitf.jpg",
      description: "Dress your soul",
      price: "M200.00",
    },
    {
      id: 5,
      image: "/legitg.jpg",
      description: "Feel the spring",
      price: "M180.00",
    },
  ];

  const handlePreviewClick = (productId: number) => {
    // Redirect to the product preview page with the product ID
    router.push(`/preview/${productId}`);
  };

  return (
    <div className="mt-10 px-64">
      <h2 className="text-center text-1xl mb-6">Clothing</h2>
      <Carousel>
        <CarouselContent className="-ml-1">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Image
                      width={400}
                      height={400}
                      src={product.image}
                      alt={product.description}
                      className="w-full h-48 object-cover mb-4 rounded-xl"
                    />
                    <p className="text-center text-lg font-medium mb-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-l text-green-600">{product.price}</p>
                      <button
                        className="ml-4 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
                        onClick={() => handlePreviewClick(product.id)}
                      >
                        Preview
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
