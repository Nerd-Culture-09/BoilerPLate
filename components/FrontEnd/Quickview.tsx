import React, { MouseEventHandler } from "react";
import { BackgroundGradientDemo } from "./Card";
import { Button } from "../ui/button";
import useCart from "@/app/(front)/store";
import { Product } from "@/app/(front)/types";

interface OverviewProps {
  selectedImage: string;
  description: string;
  data: Product | undefined;
}

const Overview: React.FC<OverviewProps> = ({ selectedImage, description, data }) => {
  const cart = useCart();

  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    if (data) {
      // Make sure data is defined and of type Product
      cart.addItem(data);
    } else {
      console.error("Product data is undefined.");
    }
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-5 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-5">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <p className="mt-4 text-xl text-gray-500">{description}</p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 rounded-md">
                      <BackgroundGradientDemo src={selectedImage} />
                    </div>
                  </div>
                </div>
              </div>
              <Button 
                onClick={addToCart}
                className="inline-block rounded-md border border-transparent bg-green-800 text-center font-medium text-white hover:bg-black">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
