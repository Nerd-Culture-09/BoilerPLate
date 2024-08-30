import * as React from "react";
import { useState } from "react"; // Import useState
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import useCart from "@/app/(front)/store"; // Import Zustand store

export default function CarouselSpacing() {
  // Zustand store hook
  const cart = useCart();

  // State for displaying added to cart message
  const [addedToCartMessage, setAddedToCartMessage] = useState<string | null>(null);

  // Sample data for products
  const products = [
    {
      _id: "1", // Add a unique ID for each product
      image: "/rain.jpg",
      description: "Rain boots for kids",
      price: "M190.00",
    },
    {
      _id: "2",
      image: "/sandals.jpg",
      description: "Beautiful girls shoes",
      price: "M120.00",
    },
    {
      _id: "3",
      image: "/toy.jpg",
      description: "G-Wagon Powered Car for Kids",
      price: "M300.00",
    },
    {
      _id: "4",
      image: "/coat.jpeg",
      description: "Rain Coat for Kids",
      price: "M200.00",
    },
    {
      _id: "5",
      image: "/casual.jpg",
      description: "Smart Casual shoes",
      price: "M500.00",
    },
  ];

  // Function to handle adding to the cart
  const handleAddToCart = (product: any) => {
    cart.addItem(product);
    setAddedToCartMessage(`${product.description} has been added to the cart.`);
    
    // Hide the message after 3 seconds
    setTimeout(() => {
      setAddedToCartMessage(null);
    }, 3000);
  };

  return (
    <div className="mt-10 px-64">
      <h2 className="text-center text-1xl mb-6">Nucleus Kid&apos;s Gear</h2>
      
      {/* Display "Added to Cart" message */}
      {addedToCartMessage && (
        <div className="mb-4 text-center text-green-600 font-medium">
          {addedToCartMessage}
        </div>
      )}
      
      <Carousel>
        <CarouselContent className="-ml-1">
          {products.map((product) => (
            <CarouselItem key={product._id} className="pl-1 md:basis-1/2 lg:basis-1/3">
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
                        onClick={() => handleAddToCart(product)} // Attach handler
                      >
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
  );
}
