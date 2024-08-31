"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useCart from "@/app/(front)/store"; // Import Zustand store

interface ProductImage {
  _id: string;
  defaultImage: string;
  price: string; // Price as a string
  name: string;
}

const ShoppingCard: React.FC = () => {
  const [productImages, setProductImages] = useState<ProductImage[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart(); // Use Zustand store hook

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fetchProductImages = async () => {
      try {
        const response = await axios.get("http://192.168.1.22:8000/nu-commerce", {
          headers: {
            "Authorization":`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTIzYzFkODYxYzI3OTkxOTZiMzFkNiIsIm5hbWUiOiJSZXRzZXBpbGUgU2hhbyIsImVtYWlsIjoicmV0c2VwaWxlLnJheW1vbmRzaGFvQGdtYWlsLmNvbSIsImlhdCI6MTcyMjM1MDA3MH0.ppuoQ_GYjNqAw-5fCsgruYRp2lzJIzqDYx07uDzZRbM`,
          },
        });
        setProductImages(response.data);
      } catch (error) {
        console.error("Error fetching product images:", error);
      }
    };

    fetchProductImages();
  }, []);

  useEffect(() => {
    const calculateSubtotal = () => {
      return cart.items.reduce((acc, item) => {
        const priceStr = typeof item.price === 'string' ? item.price : String(item.price);
        const priceValue = parseFloat(priceStr.replace('M', '').replace(',', ''));
        return !isNaN(priceValue) ? acc + priceValue * item.quantity : acc;
      }, 0);
    };

    const calculatedSubtotal = calculateSubtotal();
    setSubtotal(calculatedSubtotal);

    const fixedShipping = 0; // Example fixed shipping rate
    setShipping(fixedShipping);

    const calculatedTax = calculatedSubtotal * 0.1; // Example tax rate
    setTax(calculatedTax);

    const calculatedTotal = calculatedSubtotal + fixedShipping + calculatedTax;
    setTotal(calculatedTotal);
  }, [cart.items]);

  const handleBackClick = () => {
    if (isMounted) {
      router.push("/");
    }
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout");
  };

  const handleRemove = (_id: string) => {
    cart.removeItem(_id);
  };

  const handleIncreaseQuantity = (_id: string) => {
    const item = cart.items.find((item) => item._id === _id);
    if (item) {
      cart.updateItemQuantity(_id, item.quantity + 1);
    }
  };

  const handleDecreaseQuantity = (_id: string) => {
    const item = cart.items.find((item) => item._id === _id);
    if (item) {
      cart.updateItemQuantity(_id, Math.max(item.quantity - 1, 1));
    }
  };

  return (
    <div>
      <div
        className="w-full h-full bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
        id="chec-div"
      >
        <div
          className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <div className="flex items-end lg:flex-row flex-col justify-end" id="cart">
            <div
              className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto"
              id="scroll"
            >
              <div
                className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer"
                onClick={handleBackClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">Back</p>
              </div>
              <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Products</p>

              {cart.items.map((item) => (
                <div key={item._id} className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
                  <div className="md:w-4/12 2xl:w-1/4 w-full">
                    <Image
                      width={100}
                      height={100}
                      src={item.image_one}
                      alt="Product Image"
                      className="h-full object-center object-cover"
                    />
                  </div>
                  <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                    <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">Product Name</p>
                    <div className="flex items-center justify-between w-full pt-1">
                      <p className="text-base font-black leading-none text-gray-800 dark:text-white">{item.description}</p>
                      <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                        {item.price} x {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 pt-2">
                      <button
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
                        onClick={() => handleDecreaseQuantity(item._id)}
                      >
                        -
                      </button>
                      <p className="text-base font-black leading-none text-gray-800 dark:text-white">{item.quantity}</p>
                      <button
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
                        onClick={() => handleIncreaseQuantity(item._id)}
                      >
                        +
                      </button>
                      <p
                        className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                        onClick={() => handleRemove(item._id)}
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
              <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                <div>
                  <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Summary</p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800 dark:text-white">Subtotal</p>
                    <p className="text-base leading-none text-gray-800 dark:text-white">M{subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800 dark:text-white">Local Delivery</p>
                    <p className="text-base leading-none text-gray-800 dark:text-white">M{shipping.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800 dark:text-white">Tax</p>
                    <p className="text-base leading-none text-gray-800 dark:text-white">M{tax.toFixed(2)}</p>
                  </div>
                </div>
                <div className="pt-12">
                  <div className="flex items-center justify-between pt-5">
                    <p className="lg:text-3xl text-xl font-black leading-9 text-gray-800 dark:text-white">Total</p>
                    <p className="lg:text-3xl text-xl font-black leading-9 text-gray-800 dark:text-white">M{total.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 px-6 mt-10 bg-gray-800 dark:bg-gray-600 text-white text-base font-semibold leading-none rounded-md"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
