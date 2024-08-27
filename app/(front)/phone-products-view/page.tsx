

import CatFilters from '@/components/FrontEnd/CatFilters'
import { PhoneStock } from '@/components/FrontEnd/phone-items'
import React from 'react'

export default function page() {
  return (
    <div className='md-bg-black'>
      <PhoneStock/>
      <CatFilters />
    </div>
  )
}
