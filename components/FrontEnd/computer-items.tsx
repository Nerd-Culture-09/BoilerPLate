"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import Overview from "./Quickview";

export function ComputerStock() {
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
        Nucleus comp-solution
      </h2>
      <Carousel items={cards} />
      
    </div>
  );
}

const data = [
  {
    category: "Computers",
    title: "Canvy laptop i7",
    spacs: "11th Gen Intel® Core™ i7-1365U, vPro® (12 MB cache, 10 cores, 12 threads, ",
    price: "M15999.99",
    src: "/laptop1.jpg",
    content: <Overview selectedImage={"/laptop1.jpg"} />,
  },
  {
    category: "Computers",
    title: "TJ laptop charger ",
    price: "M999.99",
    src: "/laptop2.jpg",
    content: <Overview selectedImage={"/laptop2.jpg"} />,
  },
  {
    category: "Computers",
    title: "cavv laptop i7 ",
    spacs: "13th Gen Intel® Core™ i7-1365U, vPro® (12 MB cache, 10 cores, 12 threads,256 GB, M.2, PCIe NVMe, SSD, Class 35",
    price: "M23000.00",
    src: "/laptop3.jpg",
    content: <Overview selectedImage={"/laptop3.jpg"} />,
  },

];
