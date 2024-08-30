"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

// Define the type for the product
interface Product {
  id: string | undefined;
  name: string;
  images: string[];
  price: string;
  colors: string[];
  sizes: string[];
}

const PreviewPage: React.FC = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [selectedColor, setSelectedColor] = useState<string>("red");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<number>(1);
  const [paymentOption, setPaymentOption] = useState<string>("pay-now");
  const [paymentMethod, setPaymentMethod] = useState<string>("credit-card");
  const [deliveryOption, setDeliveryOption] = useState<string>("standard");
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Sample data for demonstration, replace with actual data fetching logic
  const product: Product = {
    id,
    name: "Sample Product",
    images: ["/front.jpg", "/fside.jpg", "/back.jpg"],
    price: "M190.00",
    colors: ["red", "blue", "green"],
    sizes: ["S", "M", "L", "XL"],
  };

  const handleAddToCart = () => {
    console.log("Added to cart", {
      id,
      selectedColor,
      selectedSize,
      quantity,
      paymentOption,
      paymentMethod,
      deliveryOption,
    });
  };

  const handleImageClick = (image: string) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="flex justify-center gap-2 mb-4">
        {product.images.map((image, index) => (
          <div key={index} className="cursor-pointer" onClick={() => handleImageClick(image)}>
            <Image
              width={100}
              height={100}
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-24 h-24 object-cover rounded"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Color Selection */}
        <div>
          <label htmlFor="color" className="text-sm font-medium text-gray-700">
            Color
          </label>
          <select
            id="color"
            className="mt-1 w-full border border-gray-300 rounded"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {product.colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        {/* Size Selection */}
        <div>
          <label htmlFor="size" className="text-sm font-medium text-gray-700">
            Size
          </label>
          <select
            id="size"
            className="mt-1 w-full border border-gray-300 rounded"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quantity Selection */}
      <div className="mb-4">
        <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          className="mt-1 w-full border border-gray-300 rounded"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>

      {/* Payment and Delivery Options */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Payment Option */}
        <div>
          <label className="text-sm font-medium text-gray-700">Pay Option</label>
          <select
            className="mt-1 w-full border border-gray-300 rounded"
            value={paymentOption}
            onChange={(e) => setPaymentOption(e.target.value)}
          >
            <option value="pay-now">Pay Now</option>
            <option value="pay-later">Pay Later</option>
          </select>
        </div>

        {/* Payment Method */}
        <div>
          <label className="text-sm font-medium text-gray-700">Pay Method</label>
          <select
            className="mt-1 w-full border border-gray-300 rounded"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>
      </div>

      {/* Delivery Option */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">Delivery</label>
        <select
          className="mt-1 w-full border border-gray-300 rounded"
          value={deliveryOption}
          onChange={(e) => setDeliveryOption(e.target.value)}
        >
          <option value="standard">Standard</option>
          <option value="express">Express</option>
        </select>
      </div>

      <button
        className="w-full py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

      {/* Modal for Image Zoom */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-4xl p-4 bg-white rounded">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={modalImage}
              alt="Zoomed view"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewPage;
