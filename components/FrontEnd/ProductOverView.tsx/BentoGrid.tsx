"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import {
  IconSignature,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../bento-grid";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Product } from "@/app/(front)/types";
import axios from "axios";
import NuLoad from "../Nu-Load";

export function BentoGridProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
        setLoading(true)
        try {
          const response = await axios.get('https://nu-serverless-api.netlify.app/.netlify/functions/api/nu-commerce');
          setProducts(response.data); // Set the data to state
        } catch (err) {
          setError('Failed to fetch products');
        } finally {
          setLoading(false);
        }
    };

    fetchProducts();
}, []);
  return (
    <>
    {loading ? 
    <div className="absolute top-0 lg:h-full w-full ">
      <NuLoad /> 
    </div>
    :
     <ScrollArea className="h-[40%] lg:h-full w-full ">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {products.map((item, i) => (
          <BentoGridItem
            key={item._id}
            title={item.name}
            description={item.description}
            header={ <SkeletonFour title={item.name} price={item.price} discription={item.description} image={item.thumbnail} /> }
            className={cn("[&>p:text-lg]", "md:col-span-1 pl-15 p-5")}
            icon={<IconSignature className="h-4 w-4 text-neutral-500" />}
          />
        ))}
      </BentoGrid>
    </ScrollArea>}
    </>
  );
}
const SkeletonFour = ({image, title, price, discription}:{image:any,discription:any, title:any, price:any }) => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
<div className="">
    <div className="flex flex-1 w-screen lg:w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2">
      <motion.div
        variants={first}
        className="h-full w-full rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src={image}
          alt="avatar"
          height="100"
          width="100"
          className=""
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          {title}
        </p>
        <p className="   text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          M{price}.00
        </p>
      </motion.div>
    </div>
  </div>
  );
};
