"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import useCart from "@/app/(front)/store"; // Import the useCart store
import { nu_commerce_base_url } from "@/Constants";
import { Product } from "@/app/(front)/types";


export function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [cartMessage, setCartMessage] = useState<string | null>(null); // State for cart message

  const cart = useCart(); // Access the cart store

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await axios.get<Product[]>(`${nu_commerce_base_url}/nu-commerce`, {
          headers: {
            "Authorization": `Bearer <YOUR_TOKEN_HERE>`,
          },
        });
        setProducts(response.data);
        setSelectedImage(response.data[0]?.thumbnail || null);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    // Map Product to CartItem
    const cartItem: Product = {
      _id : product._id,
      name: product.name,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      size: product.size,
      category: product.category,
      subcategory: product.subcategory,
      status: product.status,
      color:  product.color,
      thumbnail:  product.thumbnail,
      image_one: product.image_one,
      image_two: product.image_two,
      image_three: product.image_three
    };

    cart.addItem(cartItem); // Add the mapped cart item to the cart

    setCartMessage(`${product.name} has been added to the cart!`); // Set the cart message

    // Hide the message after 3 seconds
    setTimeout(() => {
      setCartMessage(null);
    }, 3000);
  };

  const cards = products.map((product, index) => (
    <div key={product._id} onClick={() => setSelectedImage(product.thumbnail)}>
      <Card
        key={product._id}
        card={{
          category: product.category,
          title: product.name,
          price: `M${product.price}`,
          src: product.thumbnail,
          content: (
            <div>
              <p>{product.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the card click
                  addToCart(product); // Call addToCart when button is clicked
                }}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add to Cart
              </button>
            </div>
          ),
        }}
        index={index}
        onAddToCart={function (card: { src: string; title: string; category: string; price: string; content: React.ReactNode; }): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-8 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Nucleus Hoodies And Sweaters
      </h2>

      {cartMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow">
          {cartMessage}
        </div>
      )}

      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Hoodies",
    title: "Black Nucleus Hoodie.",
    price: "M300.00",
    src: "/NucleusBlackHoodie.jpg",

  },
  {
    category: "Hoodies",
    title: "Greige Nucleus Hoodie.",
    price: "M300",
    src: "/NucleusBrownHoodie.png",

  },
  {
    category: "Sweater",
    title: "White Nucleus Sweater.",
    price: "M300",
    src: "/white.jpg",

  },
  {
    category: "Sweater",
    title: "Peach Nucleus Sweater.",
    price: "M300",
    src: "/NucleusPeachHoodie.jpg",

  },
];
