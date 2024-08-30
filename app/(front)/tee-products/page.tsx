

import CatFilters from '@/components/FrontEnd/CatFilters'
import { TeeProducts } from '@/components/FrontEnd/Tee-Products'
import React from 'react'

export default function page() {
  return (
    <div className='md-bg-black'>
      <TeeProducts/>
      <CatFilters />
    </div>
  )
}
