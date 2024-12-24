"use client";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/Drawer";
import { AnimatedGradientText } from "@/components/ui/AnimatedGradientText";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ShoppingCart, Upload } from "lucide-react";
import Image from "next/image";

export const ProductDrawer = () => (
  <div className="flex justify-center">
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">View</Button>
      </DrawerTrigger>
      <DrawerContent className="sm:max-w-lg">
        <DrawerHeader>
          <DrawerTitle>
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
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Image
                  alt="Product image"
                  className="aspect-square w-full rounded-md object-cover"
                  height="300"
                  src="/hoodies/hoodie_4.jpg"
                  width="300"
                />
                <div className="grid grid-cols-3 gap-2">
                  <button>
                    <Image
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src="/hoodies/hoodie_1.jpg"
                      width="84"
                    />
                  </button>
                  <button>
                    <Image
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src="/hoodies/hoodie_2.jpg"
                      width="84"
                    />
                  </button>
                  <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                    <Image
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src="/hoodies/hoodie_3.jpg"
                      width="84"
                    />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </DrawerBody>
        <DrawerFooter className="mt-6">
          <DrawerClose asChild>
            <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="outline">
              Go back
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            {/* <Button className="w-full sm:w-fit">Add to Cart!</Button> */}
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </div>
);
