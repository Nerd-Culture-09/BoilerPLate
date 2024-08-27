"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import Overview from "./Quickview";
import useCart from "@/app/(front)/store"; // Import the useCart store

interface Product {
  _id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  size: string;
  category: string;
  subcategory: string;
  status: string;
  color: string;
  thumbnail: string;
  image_one: string;
  image_two: string;
  image_three: string;
}

export function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const cart = useCart(); // Access the cart store

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await axios.get<Product[]>("https://nu-serverless-api.netlify.app/.netlify/functions/api/nu-commerce", {
          headers: {
            "Authorization": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTIzYzFkODYxYzI3OTkxOTZiMzFkNiIsIm5hbWUiOiJSZXRzZXBpbGUgU2hhbyIsImVtYWlsIjoicmV0c2VwaWxlLnJheW1vbmRzaGFvQGdtYWlsLmNvbSIsImlhdCI6MTcyMjM1MDA3MH0.ppuoQ_GYjNqAw-5fCsgruYRp2lzJIzqDYx07uDzZRbM`,
          },
        });
        setProducts(response.data);
        setSelectedImage(response.data[0]?.image_one || null);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    cart.addItem(product); // Add the product to the cart using the store's addItem function
  };

  const cards = products.map((product, index) => (
    <div key={product._id} onClick={() => setSelectedImage(product.image_one)}>
      <Card
        key={product._id}
        card={{
          category: product.category,
          title: product.name,
          price: `M${product.price}`,
          src: product.image_one,
          content: (
            <div>
              <p>{product.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the card click
                  addToCart(product);  // Call addToCart when button is clicked
                }}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add to Cart
              </button>
            </div>
          ),
        }}
        index={index}
      />
    </div>
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-8 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Nucleus Hoodies And Sweaters
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
