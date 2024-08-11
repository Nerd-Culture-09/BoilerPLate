'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const ShopsTab = () => {
  const searchParams = useSearchParams();
  const [urlOption, setUrlOption] = useState<string>("all");

  useEffect(() => {
    const option = searchParams.get('set') || "all";
    setUrlOption(option);
  }, [searchParams]);

  const getClassNames = (option: string) =>
    option === urlOption
      ? "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
      : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800";

  return (
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
      {['all', 'clothing', 'food', 'accessories'].map((option) => (
        <Link key={option} href={`?set=${option}`}>
          <button type="button" className={getClassNames(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ShopsTab;
