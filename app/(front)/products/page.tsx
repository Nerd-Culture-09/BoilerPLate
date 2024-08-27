import CatFilters from '@/components/FrontEnd/CatFilters'
import { Products } from '@/components/FrontEnd/Products'
import React from 'react'

export default function page() {
  return (
    <div>
        <Products />
        <CatFilters />
    </div>
  )
}
