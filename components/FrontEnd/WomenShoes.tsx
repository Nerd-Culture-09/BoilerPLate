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

export default function CarouselSpacing() {
  // Sample data for products
  const products = [
    {
      image: "/shoes.jpg", // Replace with actual image path
      description: "Rain boots for kids",
      price: "M190.00",
    },
    {
      image: "/shoesf.png", // Replace with actual image path
      description: "Beautiful girls shoes",
      price: "M120.00",
    },
    
    {
      image: "/shoesc.jpeg", // Replace with actual image path
      description: "Rain Coat for Kids",
      price: "M200.00",
    },
    {
      image: "/shoesd.jpg", // Replace with actual image path
      description: "Smart Casual shoes",
      price: "M500.00",
    },
    {
        image: "/shoese.jpg", // Replace with actual image path
        description: "Smart Casual shoes",
        price: "M500.00",
      },
  ]

  return (
    <div className="mt-10 px-64">
      <h2 className="text-center text-1xl  mb-6">Shoes</h2>
      <Carousel>
        <CarouselContent className="-ml-1">
          {products.map((product, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Image
                      width={800}
                      height={800}
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
