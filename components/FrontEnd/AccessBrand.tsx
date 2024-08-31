"use client"
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function ShopByBrand() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  // Array of brand images (replace with actual paths)
  const brands = [
    { image: "/abrand.jpg", name: "" },
    { image: "/abrandb.jpg", name: "" },
    { image: "/abrandc.jpg", name: "" },
    { image: "/abrandd.jpg", name: "" },
    { image: "/abrande.jpg", name: "" },
  ]

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mt-10 px-64">
      <Carousel setApi={setApi} className="w-full max-w-4xl">
        <CarouselContent>
          {/* Subheading inside the carousel */}
          <CarouselItem>
            <div className="flex flex-col items-center p-6">
              <h2 className="text-center text-l mb-4">Shop By Brand</h2>
              <div className="flex space-x-4">  {/* Horizontal layout */}
                {brands.map((brand, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={150}
                      height={150}
                      className="w-32 h-32 object-contain mb-2" // Adjust size as needed
                    />
                    <p className="text-center text-lg font-medium">
                      {brand.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
       
      </div>
    </div>
  )
}
