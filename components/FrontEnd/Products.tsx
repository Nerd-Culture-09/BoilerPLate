"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import Overview from "./Quickview";

interface Product {
  _id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  size: string;
  category: string;
  subcategory: string;
  status: string;
  color: string;
  thumbnail: string;
  image_one: string;
  image_two: string;
  image_three: string;
}

export function Products() {
  // State to keep track of the selected image source
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from the API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get<Product[]>("https://nu-com-0e51cf02b2c8.herokuapp.com/nu-commerce");
        setProducts(response.data);
        setSelectedImage(response.data[0]?.image_one || null);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProducts();
  }, []);

  const cards = products.map((product, index) => (
    <div key={product._id} onClick={() => setSelectedImage(product.image_one)}>
      <Card
        key={product._id}
        card={{
          category: product.category,
          title: product.name,
          price: `M${product.price}`,
          src: product.image_one,
          content: <p>test</p>,
          // content: <Overview selectedImage={product.image_one} />,
        }}
        index={index}
      />
    </div>
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-8 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Nucleus Hoodies And Sweaters
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
