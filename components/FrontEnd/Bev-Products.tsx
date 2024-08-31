"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import Overview from "./Quickview";
import { Product } from "@/app/(front)/types";

const sampleProduct: Product = {
  _id: "1",
  name: "Nucleus Hoodie",
  description: "A stylish and comfortable hoodie from Nucleus.",
  quantity: 20,
  price: 59.99,
  size: "M",
  category: "Clothing",
  subcategory: "Hoodies",
  status: "In Stock",
  color: "Black",
  thumbnail: "/images/hoodie-thumbnail.png", // Sample thumbnail image URL
  image_one: "/images/hoodie-1.png", // Sample image URL
  image_two: "/images/hoodie-2.png", // Sample image URL
  image_three: "/images/hoodie-3.png", // Sample image URL
};
export function BevProducts() {
  // State to keep track of the selected image source
  const [selectedImage, setSelectedImage] = useState<string>(data[0].src);

  const cards = data.map((card, index) => (
    <div key={index} onClick={() => setSelectedImage(data[index].src)}>
      <Card onAddToCart={()=>{"hello world"}} key={card.src} card={card} index={index} />
    </div>
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-8 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Nucleus Beverages
      </h2>
      <Carousel items={cards} />
      
    </div>
  );
}

const data = [
  {
    category: "Beverages",
    title: "Coke Can",
    price: "M20.00",
    src: "/coke.jpg",
    content: <Overview
    selectedImage={sampleProduct.image_one}
    description={sampleProduct.description}
    data={sampleProduct}
  />,
  },
  {
    category: "Beverages",
    title: "Nucleus Water ",
    price: "M40.00",
    src: "/water-bottle.jpg",
    content: <Overview
    selectedImage={sampleProduct.image_one}
    description={sampleProduct.description}
    data={sampleProduct}
  />,
  },
  {
    category: "Beverages",
    title: "Blue Cocktail ",
    price: "M50.00",
    src: "/King-of-Blue-Cocktail.jpg",
    content: <Overview
    selectedImage={sampleProduct.image_one}
    description={sampleProduct.description}
    data={sampleProduct}
  />,

  },

];
