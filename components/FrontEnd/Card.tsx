"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

// Define the props type for BackgroundGradientDemo
interface BackgroundGradientDemoProps {
  src: string;
}


export const BackgroundGradientDemo: React.FC<BackgroundGradientDemoProps> = ({src}) => {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm bg-white dark:bg-zinc-900">
        <Image
          src={src}
          alt="selected item"
          height="400"
          width="400"
          className="object-contain rounded-[22px]"
        />

      </BackgroundGradient>
    </div>
  );
}
