
import CatFilters from '@/components/FrontEnd/CatFilters'
import { ComputerStock } from '@/components/FrontEnd/computer-items'
import React from 'react'

export default function page() {
  return (
    <div className='md-bg-black'>
       <ComputerStock/>
       <CatFilters />
    </div>
  )
}
