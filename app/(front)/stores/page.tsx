"use client"
import Feacture from '@/components/FrontEnd/Feacture'
import Footer from '@/components/FrontEnd/Footer'
import ShopsCategory from '@/components/FrontEnd/shopsCategory'
import Vstore from '@/components/FrontEnd/Vstore'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="lg:px-72 mt-20">
     <Vstore/>
     </div> 
     <div className=" justify-center">
      <ShopsCategory/> 
      <Feacture/>
     </div>
    </div>
  )
}

