"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import Overview from "./Quickview";

export function PhoneStock() {
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
        Nucleus PHONE-STORE
      </h2>
      <Carousel items={cards} />
      
    </div>
  );
}

const data = [
  {
    category: "PHONES",
    title: "OCNESHIORS TEBLET",
    price: "M12000.00",
    src: "/phone1.jpg",
    content: <Overview selectedImage={"/phone1.jpg"} />,
  },
  {
    category: "PHONES",
    title: "TJ smartphone ",
    price: "M8999.99",
    src: "/phone2.jpg",
    content: <Overview selectedImage={"/phone2.jpg"} />,
  },
  {
    category: "PHONES",
    title: "TJ phone charger ",
    price: "M200.00",
    src: "/phone3.jpg",
    content: <Overview selectedImage={"/phone3.jpg"} />,
  },

];
