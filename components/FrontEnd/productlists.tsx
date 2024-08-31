import Overview from "./Quickview";
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Nucleus Hoodie',
    //href: '/overview',
    imageSrc: '/NucleusBlackHoodie.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'M700.00',
    color: 'Black',
    
  },
  {
    id: 2,
    name: 'Nucleus T-Shirt',
    href: '/overview',
    imageSrc: '/BlackShirt-NucleusDevs.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'M150.00',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Car Aromatherapy Diffuser ',
    href: '/overview',
    imageSrc: '/nucleusAsse.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'M350.00',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Wireless Headphones ',
    href: '/overview',
    imageSrc: '/Accesso.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'M500.00',
    color: 'Black&Purple',
  },
 
  // More products...
]

export default function Productlist() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Newly Released </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
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
    </div>
  )
}
