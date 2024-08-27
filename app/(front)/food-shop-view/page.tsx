import FoodShops from '@/components/FrontEnd/Food-shops'
import NucleusBev from '@/components/FrontEnd/NucleusBev'
import NucleusFood from '@/components/FrontEnd/NucleusFood'
import NucleusPizza from '@/components/FrontEnd/NucleusPizza'
import React from 'react'

export default function page() {
  return (
    <div className='md-bg-black'>
        <FoodShops />
        <div className='px-5'>
        <NucleusFood/>
      </div>
      <div className='px-5'>
        <NucleusPizza/>
      </div>
      <div className='px-5'>
        <NucleusBev/>
      </div>
    </div>
  )
}
