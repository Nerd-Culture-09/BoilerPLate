"use client";
import React, { useState } from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import Overview from "./Quickview";

export function Products() {
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
        Nucleus Hoodies And Sweaters
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Hoodies",
    title: "Black Nucleus Hoodie.",
    price: "M300.00",
    src: "/NucleusBlackHoodie.jpg",
<<<<<<< HEAD
    content: <Overview selectedImage={"/NucleusBlackHoodie.jpg"} description="" />,
=======
    content: <Overview selectedImage={"/NucleusBlackHoodie.jpg"} description={"Black Nucleus Hoodie."} />,
>>>>>>> 968f0ce6d3cd8a9a5562109860de2dfc8fe23f00
  },
  {
    category: "Hoodies",
    title: "Greige Nucleus Hoodie.",
    price: "M300",
    src: "/NucleusBrownHoodie.png",
<<<<<<< HEAD
    content: <Overview selectedImage={"/NucleusBrownHoodie.png"} description="" />,
=======
    content: <Overview selectedImage={"/NucleusBrownHoodie.png"} description={"Greige Nucleus Hoodie"} />,
>>>>>>> 968f0ce6d3cd8a9a5562109860de2dfc8fe23f00
  },
  {
    category: "Sweater",
    title: "White Nucleus Sweater.",
    price: "M300",
    src: "/white.jpg",
<<<<<<< HEAD
    content: <Overview selectedImage={"/white.jpg"} description="" />,
=======
    content: <Overview selectedImage={"/white.jpg"} description={"White Nucleus Hoodie"} />,
>>>>>>> 968f0ce6d3cd8a9a5562109860de2dfc8fe23f00
  },
  {
    category: "Sweater",
    title: "Peach Nucleus Sweater.",
    price: "M300",
    src: "/NucleusPeachHoodie.jpg",
<<<<<<< HEAD
    content: <Overview selectedImage={"/NucleusPeachHoodie.jpg"} description="" />,
=======
    content: <Overview selectedImage={"/NucleusPeachHoodie.jpg"} description={"Peach Nucleus Hoodie"} />,
>>>>>>> 968f0ce6d3cd8a9a5562109860de2dfc8fe23f00
  },
];
