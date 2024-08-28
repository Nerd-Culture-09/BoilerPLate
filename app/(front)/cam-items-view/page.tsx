
import { CameraItems } from '@/components/FrontEnd/camera-items'
import CatFilters from '@/components/FrontEnd/CatFilters'
import React from 'react'

export default function page() {
  return (
    <div className='md-bg-black'>
       <CameraItems/>
       <CatFilters />
    </div>
  )
}
