import AccessBrand from "@/components/FrontEnd/AccessBrand";
import AccessCam from "@/components/FrontEnd/AccessCam";
import AccessoryShops from "@/components/FrontEnd/accessory-shops";
import AccessoryBanner from '@/components/FrontEnd/AccessoryBanner';
import AccessPhone from "@/components/FrontEnd/AccessPhone";
import AccessProducts from "@/components/FrontEnd/AccessProducts";
import React from "react";

export default function page() {
  return (
    <div className='md-bg-black'>
       <div className='mt-10 px-5'>
      <AccessoryBanner/>
      </div>
       <AccessoryShops />
       <div className='px-5'>
      <AccessProducts/>
      </div>
      <div className='px-5'>
      <AccessPhone/>
      </div>
      <div className='px-5'>
        <AccessBrand/>
      </div>
      <div className='px-5'>
        <AccessCam/>
      </div>
    </div>
  )
}
