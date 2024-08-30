"use client";
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


export function TeeProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    try {
      const response = await axios.get<Product[]>("https://nu-serverless-api.netlify.app/.netlify/functions/api/nu-commerce",
        {headers :
        {
          "Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTIzYzFkODYxYzI3OTkxOTZiMzFkNiIsIm5hbWUiOiJSZXRzZXBpbGUgU2hhbyIsImVtYWlsIjoicmV0c2VwaWxlLnJheW1vbmRzaGFvQGdtYWlsLmNvbSIsImlhdCI6MTcyMjM1MDA3MH0.ppuoQ_GYjNqAw-5fCsgruYRp2lzJIzqDYx07uDzZRbM`
      }
      });
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
    content: <Overview description={product.description} selectedImage={product.thumbnail} data={product} />,  // Pass the entire product object as `data`
  }));

  const cards = data.map((card, index) => (
    <Card onAddToCart={()=>(console.log(""))} key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-8 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Nucleus Tees
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
