'use client'
import Link from "next/link";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import Footer from "./Footer"

const FoodShops = () => {
    const imageUrl = "/burger-home.jpg";
    const imageUrl2 = "/pizza.jpg";
    const imageUrl3 = "/soft-drinks.jpg";
  return (
      <div>
        {/* This page should be handled through url attributes to it should be a dynamic route, to cute down server cost */}
        <div className="lg:px-72">
        <div className="pt-5 flex items-center justify-center py-4 md:py-8 flex-wrap lg:text-sm">
            <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
            <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Shoes</button>
            <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags</button>
            <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
            <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="h-[40rem] relative  flex items-center justify-center">
                <DirectionAwareHover imageUrl={imageUrl}>
                <Link href='/food-burger-view'>
                    <p className="font-bold text-xl">Nucleus Burgers</p>
                    <p className="font-normal text-sm">Shop</p>
                    </Link>
                </DirectionAwareHover>
                
            </div>
            <div className="h-[40rem] relative  flex items-center justify-center">
                <DirectionAwareHover imageUrl={imageUrl2}>
                <Link href='/food-pizza-view'>
                    <p className="font-bold text-xl">Nucleus Pizza</p>
                    <p className="font-normal text-sm">Shop</p>
                </Link>
                </DirectionAwareHover>
            </div>
            <div className="h-[40rem] relative  flex items-center justify-center">
                <DirectionAwareHover imageUrl={imageUrl3}>
                <Link href='/food-bev-view'>
                    <p className="font-bold text-xl">Nucleus Beverages</p>
                    <p className="font-normal text-sm">Shop</p>
                    </Link>
                </DirectionAwareHover>
            </div>
        </div>
        </div>
    
    </div>
  )
}
export default FoodShops;