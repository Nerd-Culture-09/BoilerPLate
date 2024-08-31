import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function MenClothing() {
  // Sample data for products
  const products = [
    {
      image: "/camera.jpg", // Replace with actual image path
      description: "1080px Camera",
      price: "M4000.00",
    },
    {
      image: "/camera1.jpg", // Replace with actual image path
      description: "Cannon Camera",
      price: "M5200.00",
    },
    {
      image: "/camera2.jpg", // Replace with actual image path
      description: "Canon Camera Long Lense",
      price: "M6000.00",
    },
    {
      image: "/camera3.jpg", // Replace with actual image path
      description: "Full HD Camera",
      price: "M9000.00",
    },
   
  ]

  return (
    <div className="mt-10 px-64">
      <h2 className="text-center text-1xl mb-6">Nucleus Cams </h2>
      <Carousel>
        <CarouselContent className="-ml-1">
          {products.map((product, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Image
                      width={400}
                      height={400}
                      src={product.image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-48 object-cover mb-4 rounded-xl" // Adjust size as needed
                    />
                    <p className="text-center text-lg font-medium mb-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-l text-green-600">
                        {product.price}
                      </p>
                      <button className="ml-4 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
                        Add to Cart
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
  )
}

