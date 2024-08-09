'use client'
import Link from "next/link";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import Footer from "./Footer"

const Shops = () => {
    const imageUrl = "/hoodie-img.jpg";
    const imageUrl2 = "/tees-img.jpg";
    const imageUrl3 = "/formal.jpg";
  return (
      <div>
        <div className="px-72">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
            <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Clothing</button>
            <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Food</button>
            <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Accessories</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="h-[40rem] relative  flex items-center justify-center">
                <Link href='/products'>
                <DirectionAwareHover imageUrl={imageUrl}>
                    <p className="font-bold text-xl">Nucleus Hoodies</p>
                    <p className="font-normal text-sm">Shop</p>
                </DirectionAwareHover>
                </Link>
            </div>
            <div className="h-[40rem] relative  flex items-center justify-center">
                <Link href='/tee-products'>
                <DirectionAwareHover imageUrl={imageUrl2}>
                    <p className="font-bold text-xl">Nucleus Tees</p>
                    <p className="font-normal text-sm">Shop</p>
                </DirectionAwareHover>
                </Link>
            </div>
            <div className="h-[40rem] relative  flex items-center justify-center">
                <Link href='/formal-wear-view'>
                <DirectionAwareHover imageUrl={imageUrl3}>
                    <p className="font-bold text-xl">Nucleus Formal</p>
                    <p className="font-normal text-sm">Shop</p>
                </DirectionAwareHover>
                </Link>
            </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}
export default Shops;