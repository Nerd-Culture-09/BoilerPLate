"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import Overview from "./Quickview";

export function BevProducts() {
  // State to keep track of the selected image source
  const [selectedImage, setSelectedImage] = useState<string>(data[0].src);

  const cards = data.map((card, index) => (
    <div key={index} onClick={() => setSelectedImage(data[index].src)}>
      <Card key={card.src} card={card} index={index} />
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
    src: "/coke1.jpg",
    content: <Overview selectedImage={"/coke1.jpg"} />,
  },
  {
    category: "Beverages",
    title: "Nucleus Water ",
    price: "M40.00",
    src: "/water1.jpg",
    content: <Overview selectedImage={"/water1.jpg"} />,
  },
  {
    category: "Beverages",
    title: "Blue Cocktail ",
    price: "M50.00",
    src: "/Cocktail1.jpg",
    content: <Overview selectedImage={"/Cocktail1.jpg"} />,
  },

];
