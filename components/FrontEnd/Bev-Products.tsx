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
    src: "/coke.jpg",
    content: <Overview selectedImage={"/coke.jpg"} description={"coke"} />,
  },
  {
    category: "Beverages",
    title: "Nucleus Water ",
    price: "M40.00",
    src: "/water-bottle.jpg",
    content: <Overview selectedImage={"/water-bottle.jpg"} description={""} />,
  },
  {
    category: "Beverages",
    title: "Blue Cocktail ",
    price: "M50.00",
    src: "/King-of-Blue-Cocktail.jpg",
    content: <Overview selectedImage={"/King-of-Blue-Cocktail.jpg"} description={""} />,
  },

];
