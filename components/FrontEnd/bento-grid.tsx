"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { Drawer, DrawerBody, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/Drawer';
import { Button } from '../ui/button';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <ScrollArea className="px-5 h-full w-full">
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >

      {children}

    </div>
    </ScrollArea>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    

<div className="px-5 flex justify-center">
<Drawer>
  <DrawerTrigger asChild>
  <div
      className={cn(
        "row-span-1 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white  e78rjyi` border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="px-5 group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  </DrawerTrigger>
  <DrawerContent className="sm:max-w-lg">
    <DrawerHeader>
      <DrawerTitle>Account Created Successfully</DrawerTitle>
    </DrawerHeader>
    <DrawerBody>
    <Card
              className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
            >
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="300"
                    src="/b.jpeg"
                    width="300"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <button>
                      <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src="/aman.jpg"
                        width="84"
                      />
                    </button>
                    <button>
                      <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src="/a.jpg"
                        width="84"
                      />
                    </button>
                    <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                    <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src="/akiid.jpg"
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
        <Button
          className="mt-2 w-full sm:mt-0 sm:w-fit"
          variant="secondary"
        >
          Go back
        </Button>
      </DrawerClose>
      <DrawerClose asChild>
        <Button className="w-full sm:w-fit">Add to Cart!</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
</div>
  );
};
