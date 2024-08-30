'use client';
import CatFilters from '@/components/FrontEnd/CatFilters';
import KidCorousel from '@/components/FrontEnd/KidCorousel';
import MenClothing from '@/components/FrontEnd/MenClothing';
import ProductBanner from '@/components/FrontEnd/ProductBanner';
import ShopByBrand from '@/components/FrontEnd/ShopBrand';
import Shops from '@/components/FrontEnd/Shops';
import ViewCarousel from '@/components/FrontEnd/ViewCarousel';
import WomenClothing from '@/components/FrontEnd/WomenClothing';
import { useSearchParams } from 'next/navigation'; 
import React from 'react';

const ShopPage = () => {
  const searchParams = useSearchParams();
  // Retrieve 'category' from query parameters
  const category = searchParams.get('category'); 
  // You can use `category` to fetch data or conditionally render content

  return (
    <div>
      <ViewCarousel/>
      
      <div className='mt-10 px-5'>
      {/* <ProductBanner/> */}
      </div>
      <Shops />
      <div className='px-5'>
      <KidCorousel/>
      </div>
      <div className='px-5'>
        {/* <WomenClothing/> */}
      </div>
      <div className='px-5'>
        <ShopByBrand/>
      </div>
      <div className='px-5'>
        {/* <MenClothing/> */}
      </div>
     
     
      
    </div>
  );
}

export default ShopPage;
