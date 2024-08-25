'use client';
import CatFilters from '@/components/FrontEnd/CatFilters';
import Shops from '@/components/FrontEnd/Shops';
import { useSearchParams } from 'next/navigation'; 
import React from 'react';

const ShopPage = () => {
  const searchParams = useSearchParams();
  // Retrieve 'category' from query parameters
  const category = searchParams.get('category'); 
  // You can use `category` to fetch data or conditionally render content

  return (
    <div>
      <Shops />
      <CatFilters />
    </div>
  );
}

export default ShopPage;
