"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import Overview from "./Quickview";

export function PizzaProducts() {
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
        Nucleus Pizzas
      </h2>
      <Carousel items={cards} />
      
    </div>
  );
}

const data = [
  {
    category: "Pizzas",
    title: "Pepperoni Pizza",
    price: "M30.00",
    src: "/pepperoni-pizza.jpg",
    content: <Overview selectedImage={"/pepperoni-pizza.jpg"} />,
  },
  {
    category: "Pizzas",
    title: "Cheesy Cheese ",
    price: "M40.00",
    src: "/pizza-cheese.jpg",
    content: <Overview selectedImage={"/pizza-cheese.jpg"} />,
  },
  {
    category: "Pizzas",
    title: "Vegan ",
    price: "M50.00",
    src: "/veggie-pizza.jpg",
    content: <Overview selectedImage={"/veggie-pizza.jpg"} />,
  },

];
