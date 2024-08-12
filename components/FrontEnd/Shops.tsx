'use client'
import Link from "next/link";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import ShopsTab from "./ShopsTab";

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
                            <DirectionAwareHover imageUrl={imageUrl}>
                                <p className="font-bold text-xl">Nucleus Hoodies</p>
                                <p className="font-normal text-sm">Shop</p>
                            </DirectionAwareHover>
                        </Link>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <Link href='/tee-products'>
                            <DirectionAwareHover imageUrl={imageUrl2}>
                                <p className="font-bold text-xl">Nucleus Tees</p>
                                <p className="font-normal text-sm">Shop</p>
                            </DirectionAwareHover>
                        </Link>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <Link href='/formal-wear-view'>
                            <DirectionAwareHover imageUrl={imageUrl3}>
                                <p className="font-bold text-xl">Nucleus Formal</p>
                                <p className="font-normal text-sm">Shop</p>
                            </DirectionAwareHover>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Footer should be in the main Layout */}
        </div>
    )
}

export default Shops;
