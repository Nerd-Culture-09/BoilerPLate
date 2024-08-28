"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import Overview from "./Quickview";

export function BurgerProducts() {
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
        Nucleus Burgers
      </h2>
      <Carousel items={cards} />
      
    </div>
  );
}

const data = [
  {
    category: "Burgers",
    title: "Double Cheese Chicken",
    price: "M30.00",
    src: "/burger1.jpg",
    content: <Overview selectedImage={"/burger1.jpg"} description={""} data={undefined} />,
  },
  {
    category: "Burgers",
    title: "Beef + Bacon ",
    price: "M40.00",
    src: "/burger2.jpg",
    content: <Overview selectedImage={"/burger2.jpg"} description={""} data={undefined} />,
  },
  {
    category: "Burgers",
    title: "Royal Deal",
    price: "M50.00",
    src: "/burger3.jpg",
    content: <Overview selectedImage={"/burger3.jpg"} description={""} data={undefined} />,
  },

];
