import { useState } from 'react';
import Overview from "./Quickview";
import Image from 'next/image';
import Modal from './ProductListModal';
//import Modal from './Modal'; // Import the Modal component

interface Product {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
  href?: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Nucleus Hoodie',
    description: 'Hoodie',
    imageSrc: '/NucleusBlackHoodie.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'M700.00',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Nucleus T-Shirt',
    description: 'T-Shirt',
    imageSrc: '/BlackShirt-NucleusDevs.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'M150.00',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Car Aromatherapy Diffuser',
    description: 'Diffuser',
    imageSrc: '/nucleusAsse.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'M350.00',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    description: 'Headphones',
    imageSrc: '/Accesso.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'M500.00',
    color: 'Black & Purple',
  },
  // Add more products as needed...
];

export default function Productlist() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Newly Released</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {initialProducts.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedProduct} onClose={closeModal}>
        {selectedProduct && (
          <Overview
            selectedImage={selectedProduct.imageSrc}
            description={selectedProduct.description} data={undefined}          />
        )}
      </Modal>
    </div>
  );
}
