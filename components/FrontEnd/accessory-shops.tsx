'use client'
import Link from "next/link";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import Footer from "./Footer"

const AccessoryShops = () => {
    const imageUrl = "/camera.jpg";
    const imageUrl2 = "/laptops.jpg";
    const imageUrl3 = "/phone store.jpg";
  return (
      <div>
        <div className="px-72">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
            <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Shoes</button>
            <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags</button>
            <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
            <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="h-[40rem] relative  flex items-center justify-center">
                <Link href='/cam-items-view'>
                <DirectionAwareHover imageUrl={imageUrl}>
                    <p className="font-bold text-xl">Nucleus CAMERA-STORE</p>
                    <p className="font-normal text-sm">Shop</p>
                </DirectionAwareHover>
                </Link>
                
            </div>
            <div className="h-[40rem] relative  flex items-center justify-center">
                <Link href='/computer-view'>
                <DirectionAwareHover imageUrl={imageUrl2}>
                    <p className="font-bold text-xl">Nucleus Comp-solution</p>
                    <p className="font-normal text-sm">Shop</p>
                </DirectionAwareHover>
                </Link>
            </div>
            <div className="h-[40rem] relative  flex items-center justify-center">
                <Link href='/phone-products-view'>
                <DirectionAwareHover imageUrl={imageUrl3}>
                    <p className="font-bold text-xl">Nucleus PHONE-STORE</p>
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
export default AccessoryShops;