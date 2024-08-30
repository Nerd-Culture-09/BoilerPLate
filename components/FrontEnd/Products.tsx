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

// Define CartItem interface according to the store
interface CartItem {
  _id: string;
  image: string;
  description: string;
  price: string;
  quantity: number;
}

export function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [cartMessage, setCartMessage] = useState<string | null>(null); // State for cart message

  const cart = useCart(); // Access the cart store

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await axios.get<Product[]>("https://nu-serverless-api.netlify.app/.netlify/functions/api/nu-commerce", {
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
    const cartItem: CartItem = {
      _id: product._id,
      image: product.thumbnail || product.thumbnail, // Use either `thumbnail` or another appropriate image
      description: product.description,
      price: `M${product.price}`, // Convert price to string format expected in CartItem
      quantity: 1, // Default quantity is 1 or adjust as needed
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
