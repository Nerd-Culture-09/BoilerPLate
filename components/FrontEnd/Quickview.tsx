import React from "react";
import Link from "next/link";
import { BackgroundGradientDemo } from "./Card";

interface OverviewProps {
  selectedImage: string;
}

const Overview: React.FC<OverviewProps> = ({ selectedImage }) => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-5 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-5">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
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
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <BackgroundGradientDemo src={selectedImage} />
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/cart"
                className="inline-block rounded-md border border-transparent bg-green-800 px-8 py-3 text-center font-medium text-white hover:bg-black"
              >
                Add To Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
