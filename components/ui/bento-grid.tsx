import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatedGradientText } from "./AnimatedGradientText";
import { ShoppingCart } from "lucide-react";
import { ProductDrawer } from "../FrontEnd/ProductDrawer.tsx/ProductDrawer";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  link?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div>
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
          className
        )}
      >
        {header}
        <div className="relative group-hover/bento:translate-x-2 transition duration-200 p-2">
          <div className="absolute l-0 -bottom-1">
            <div className="rounded-full pl-1 pr-2 py-1 text-white flex items-center space-x-1 border mt-4 text-xs font-bold dark:bg-zinc-800">
              <AnimatedGradientText>
                <ShoppingCart className="text-gray-600" />{" "}
                <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  Add
                </span>
              </AnimatedGradientText>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                M350.00
              </span>
            </div>
          </div>
          <div className="absolute left-64 -top-40 ">
            <div className=" font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2">
              {title}
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
              {description}
            </div>
            <div className="ml-0 pt-2 absolute">
              <ProductDrawer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
