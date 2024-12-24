import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { IconSignature } from "@tabler/icons-react";
import { ProductDrawer } from "./ProductDrawer.tsx/ProductDrawer";
import Image from "next/image";
import { AnimatedGradientText } from "../ui/AnimatedGradientText";
import { ChevronRight, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export function ShopsBentoGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          link={item.link}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem]  rounded-xl">
    <Image
      src={"/hoodies/hoodie_1.jpg"}
      objectFit="cover"
      alt="Hoodie"
      width={160}
      height={200}
    />
    <div className="flex flex-row gap-4 p-4 w-full">
      <div className="flex flex-col md:flex-row h-full pt-2 pl-5 lg:pl-0">
        <Image
          src={"/hoodies/hoodie_2.jpg"}
          objectFit="cover"
          alt="Hoodie"
          width={40}
          height={40}
          style={{ maxWidth: "100%" }}
        />
        <Image
          src={"/hoodies/hoodie_3.jpg"}
          objectFit="cover"
          alt="Hoodie"
          width={40}
          height={40}
          style={{ maxWidth: "100%" }}
        />
        <Image
          src={"/hoodies/hoodie_4.jpg"}
          objectFit="cover"
          alt="Hoodie"
          width={40}
          height={40}
          style={{ maxWidth: "100%" }}
        />
      </div>
    </div>
  </div>
);
const items = [
  {
    title: "Ridic Hoodie",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <>M350.00</>,
    link: "/stores",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "/stores",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "/stores",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "/stores",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "/stores",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "/stores",
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "/stores",
  },
];
