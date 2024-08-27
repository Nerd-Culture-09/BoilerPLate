'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const sortOptions = [
  { name: 'Most Popular', value: 'popular' },
  { name: 'Newest', value: 'newest' },
  { name: 'Price: Low to High', value: 'price_low' },
  { name: 'Price: High to Low', value: 'price_high' },
]
const subCategories = [
  { name: 'Totes', value: 'totes' },
  { name: 'Backpacks', value: 'backpacks' },
  { name: 'Travel Bags', value: 'travel_bags' },
  { name: 'Hip Bags', value: 'hip_bags' },
  { name: 'Laptop Sleeves', value: 'laptop_sleeves' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals' },
      { value: 'sale', label: 'Sale' },
      { value: 'travel', label: 'Travel' },
      { value: 'organization', label: 'Organization' },
      { value: 'accessories', label: 'Accessories' },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L' },
      { value: '6l', label: '6L' },
      { value: '12l', label: '12L' },
      { value: '18l', label: '18L' },
      { value: '20l', label: '20L' },
      { value: '40l', label: '40L' },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ShopPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState(sortOptions[0].value)
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [products, setProducts] = useState<any[]>([]) 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchProducts = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.get("http://192.168.1.22:8000/nu-commerce", {
        params: {
          sort: selectedSort,
          colors: selectedColors.join(','),
          categories: selectedCategories.join(','),
          sizes: selectedSizes.join(','),
        },
        headers: {
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTIzYzFkODYxYzI3OTkxOTZiMzFkNiIsIm5hbWUiOiJSZXRzZXBpbGUgU2hhbyIsImVtYWlsIjoicmV0c2VwaWxlLnJheW1vbmRzaGFvQGdtYWlsLmNvbSIsImlhdCI6MTcyMjM1MDA3MH0.ppuoQ_GYjNqAw-5fCsgruYRp2lzJIzqDYx07uDzZRbM`,
        },
      })
      setProducts(response.data)
    } catch (err) {
      setError('Failed to fetch products')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [selectedSort, selectedColors, selectedCategories, selectedSizes])

  const handleSortChange = (value: string) => {
    setSelectedSort(value)
  }

  const handleFilterChange = (id: string, value: string) => {
    if (id === 'color') {
      setSelectedColors(prev =>
        prev.includes(value) ? prev.filter(color => color !== value) : [...prev, value]
      )
    } else if (id === 'category') {
      setSelectedCategories(prev =>
        prev.includes(value) ? prev.filter(category => category !== value) : [...prev, value]
      )
    } else if (id === 'size') {
      setSelectedSizes(prev =>
        prev.includes(value) ? prev.filter(size => size !== value) : [...prev, value]
      )
    }
  }

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.value}>
                      <a
                        href="#"
                        className={`block px-2 py-3 ${selectedCategories.includes(category.value) ? 'bg-gray-100' : ''}`}
                        onClick={(e) => {
                          e.preventDefault()
                          handleFilterChange('category', category.value)
                        }}
                      >
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-mobile-${section.id}-${option.value}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              checked={section.id === 'color' ? selectedColors.includes(option.value) : section.id === 'category' ? selectedCategories.includes(option.value) : selectedSizes.includes(option.value)}
                              onChange={() => handleFilterChange(section.id, option.value)}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${option.value}`}
                              className="ml-3 min-w-0 flex-1 text-sm text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main>
          <div className="px-4 pt-6 pb-24 sm:px-6 lg:px-8 lg:pt-8">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex w-0 flex-1">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50">
                        Sort
                        <ChevronDownIcon
                          className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <MenuItem key={option.value}>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault()
                                handleSortChange(option.value)
                              }}
                              className={classNames(
                                selectedSort === option.value ? 'font-medium text-gray-900' : 'text-gray-500',
                                'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
                              )}
                            >
                              {option.name}
                            </a>
                          </MenuItem>
                        ))}
                      </div>
                    </MenuItems>
                  </Menu>

                  <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                    <span className="sr-only">View grid</span>
                    <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  >
                    <span className="sr-only">Filters</span>
                    <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <section aria-labelledby="products-heading" className="pb-24 pt-6">
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  {/* Filters */}
                  <form className="hidden lg:block">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.value}>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              handleFilterChange('category', category.value)
                            }}
                            className={selectedCategories.includes(category.value) ? 'font-medium text-gray-900' : 'text-gray-500'}
                          >
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                              <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${option.value}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  checked={section.id === 'color' ? selectedColors.includes(option.value) : section.id === 'category' ? selectedCategories.includes(option.value) : selectedSizes.includes(option.value)}
                                  onChange={() => handleFilterChange(section.id, option.value)}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor={`filter-${section.id}-${option.value}`} className="ml-3 text-sm text-gray-600">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                    ))}
                  </form>

                  {/* Product grid */}
                  <div className="lg:col-span-3">
                    {loading && <p>Loading...</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    {products.map(product => (
                      <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                        <Image
                         src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
                        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                        <p className="text-gray-500">{product.description}</p>
                        <p className="text-gray-900 font-semibold">${product.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
