'use client'
import Link from "next/link";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import ShopsTab from "./ShopsTab";
import { cn } from "@/lib/utils";

const Shops = () => {
    const imageUrl = "/hoodie-img.jpg";
    const imageUrl2 = "/tees-img.jpg";
    const imageUrl3 = "/formal.jpg";
    return (
        <div className="py-5">
            <div className="lg:px-72">
                <ShopsTab />
                {/* This section displays a grid of product categories */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 lg:gap-16">
                    <div className="relative flex items-center justify-center">
                        <Link href='/products'>
                        <div className="max-w-xs w-full">
                            <div
                                className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url('/NucleusWhiteHoddie.jpg')] bg-cover",
                                // Preload hover image by setting it in a pseudo-element
                                "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url('/NucleusBrownHoodie.png)']",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500"
                                )}
                            >
                                <div className="text relative z-50">
                                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                    Nucleus Hoodies
                                </h1>
                                </div>
                            </div>
                            </div>
                        </Link>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <Link href='/tee-products'>
                        <div className="max-w-xs w-full">
                            <div
                                className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url('/NucleusWhiteShirt.jpg')] bg-cover",
                                // Preload hover image by setting it in a pseudo-element
                                "before:bg-[url('/NucleusWhiteShirt.jpg')] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url('/clothing.jpg')]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500"
                                )}
                            >
                                <div className="text relative z-50">
                                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                    Nucleus Tee Shirts
                                </h1>
                                </div>
                            </div>
                            </div>
                        </Link>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <Link href='/formal-wear-view'>
                        <div className="max-w-xs w-full">
                            <div
                                className={cn(
                                "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                                "bg-[url('/formal1.jpg')] bg-cover",
                                // Preload hover image by setting it in a pseudo-element
                                "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                                "hover:bg-[url('/formal2.jpg')]",
                                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                                "transition-all duration-500"
                                )}
                            >
                                <div className="text relative z-50">
                                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                                    Nucleus Formalwear
                                </h1>
                                </div>
                            </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Footer should be in the main Layout */}
        </div>
    )
}

export default Shops;
