"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import Overview from "./Quickview";

export function CameraItems() {
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
        Nucleus Cam Store
      </h2>
      <Carousel items={cards} />
      
    </div>
  );
}

const data = [
  {
    category: "Cameras",
    title: "camera",
    price: "M2000.00",
    src: "/camera1.jpg",
    content: <Overview selectedImage={"/camera1.jpg"} />,
  },
  {
    category: "Cameras",
    title: "Hamon camera",
    price: "M4250.00",
    src: "/camera2.jpg",
    content: <Overview selectedImage={"/camera2.jpg"} />,
  },
  {
    category: "Cameras",
    title: "cinema camera ",
    price: "M5000.00",
    src: "/camera3.jpg",
    content: <Overview selectedImage={"/camera3.jpg"} />,
  },

];
