'use client'

import {
  Popover,
  PopoverButton,
  PopoverGroup,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { UserDropdown } from './UserDropdown'
import Link from 'next/link'
import useCart from '@/app/(front)/store'
import Image from 'next/image'


const navigation = {
  categories: [
    {
      id: 'clothing',
      name: 'Clothing',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ]
    },
    {
      id: 'food',
      name: 'Food',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Stores', href: '/stores' }, // Link to the Stores page
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const cart = useCart();
  const [open, setOpen] = useState(false)
  return (
    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="border-b border-gray-200">
      <div className="flex h-16 items-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
        >
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
        {/* Logo */}
        <div className="ml-4 flex lg:ml-0">
          <Link href="/">
            <span className="sr-only">V-Mol</span>
            <Image
              alt=""
              width={50}
              height={50}
              src="/logo.png"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        {/* Flyout menus */}
        <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
          <div className="flex h-full space-x-8">
            {navigation.categories.map((category) => (
              <Popover key={category.name} className="flex">
                <div className="relative flex">
                  <PopoverButton className="z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                    {category.name}
                  </PopoverButton>
                </div>
              </Popover>
            ))}

            {navigation.pages.map((page) => (
              <a
                key={page.name}
                href={page.href}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
              >
                {page.name}
              </a>
            ))}
          </div>
        </PopoverGroup>

        <div className="ml-auto flex items-center">
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
              Sign in
            </a>
            <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
              Create account
            </a>
          </div>

          <div className="hidden lg:ml-8 lg:flex">
            <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
              <Image
                alt=""
                width={50}
                height={50}
                src="/les.png"
                className="block h-auto w-5 flex-shrink-0"
              />
              <span className="ml-3 block text-sm font-medium">LES</span>
              <span className="sr-only">, change currency</span>
            </a>
          </div>

          {/* Search */}
          <div className="flex lg:ml-6">
            <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Search</span>
              <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
            </a>
          </div>

          {/* Cart */}
          <div className="ml-4 flow-root lg:ml-6">
            <Link href="/cart" className="group -m-2 flex items-center p-2" style={{zIndex:9999}}>
              <ShoppingBagIcon
                aria-hidden="true"
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                style={{zIndex:9999}}
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cart.items.length}</span>
              <span className="sr-only" style={{zIndex:9999}}>items in cart, view bag</span>
              <UserDropdown/>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}
