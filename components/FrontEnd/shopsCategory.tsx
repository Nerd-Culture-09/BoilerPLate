"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";

export default function ShopsCategory() {
  return (
    <BackgroundBeamsWithCollision>
      <CardContainer className="inter-var">
        <BackgroundBeamsWithCollision>
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <div className="text-center mb-4">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                V-MOL STORES
              </CardItem>
            </div>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
            >
              Discover. Click. Love
            </CardItem>
            <div className="flex flex-col space-y-4 mt-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src="/nucl.jpg"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </div>
                <div className="flex-1">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src="/labb.jpg"  // Replace with the path to your second image
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="another-thumbnail"
                    />
                  </CardItem>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Explore
              </CardItem>
            </div>
          </CardBody>
        </BackgroundBeamsWithCollision>
      </CardContainer>
    </BackgroundBeamsWithCollision>
  );
}
