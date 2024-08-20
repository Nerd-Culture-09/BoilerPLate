"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import Overview from "./Quickview";
import { Product } from "@/app/(front)/types";
import axios from "axios";

// Define the Card type based on what is expected
type CardType = {
  category: string;
  title: string;
  price: string; // Ensure this is a string
  src: string;
  content: React.JSX.Element;
};

export function ComputerStock() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    try {
      const response = await axios.get<Product[]>('https://nu-com-0e51cf02b2c8.herokuapp.com/nu-commerce/');
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // Generate data dynamically based on fetched products
  const data: CardType[] = products.map(product => ({
    category: product.category,  // Assuming `category` is a property of `Product`
    title: product.name,  // Assuming `title` is a property of `Product`
    price: product.price.toString(),  // Convert price to string
    src: product.thumbnail,  // Assuming `image` is a property of `Product`
    content: <Overview description={product.description} selectedImage={product.thumbnail} />,  // Adjust as needed
  }));

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-8 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Nucleus Computers
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// Dummy Content Component
const DummyContent = () => {
  return (
    <>
      {[...new Array(2).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
