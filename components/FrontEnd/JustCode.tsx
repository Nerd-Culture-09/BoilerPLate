"use client";
import React, { useEffect, useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "./sidebar";
import Shops_Main from "./Main";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import useCart from "@/app/(front)/store";
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
import { useSearchParams } from 'next/navigation';

export function Main() {
  const cart = useCart();
  

  const links = [
    {
      label: "cart",
      href: "#",
      icon: (
        // <ShoppingBagIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        <Link href="/cart" className="group -m-2 flex items-center p-2" style={{zIndex:9999}}>
            <ShoppingBagIcon
            aria-hidden="true"
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            style={{zIndex:9999}}
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cart.items.length}</span>
            <span className="sr-only" style={{zIndex:9999}}>items in cart, view bag</span>
        </Link>
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? 
            <Image
              alt=""
              width={50}
              height={50}
              src="/logo.png"
              className=""
            /> : 
            <Image
                alt=""
                width={50}
                height={10}
                src="/logo.png"
                className=""
            />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew ",
    "Write a Javascript ",
    "How to assemble your own PC?",
  ];
  return (
    <div className="flex flex-1">
        <div className="fixed rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
            <div className="absolute -mt-3 z-[999] w-[68%] left-[10%]">
                <div className="flex items-center gap-5">
                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onChange={()=>(console.log(""))}
                        onSubmit={()=>(console.log(""))}
                    />
                    <div className="mt-5">
                        <Shops_cartogories />
                    </div>
                </div>
            </div>
            <Shops_Main />
        </div>
    </div>
  );
};

const Shops_cartogories = () => {
    const [urlOption, setUrlOption] = useState<string>("all");
    const searchParams = useSearchParams();

    useEffect(() => {
        const option = searchParams.get('set') || "all";
        setUrlOption(option);
    }, [searchParams]);

    const getClassNames = (option: string) =>
        option === urlOption
          ? "text-blue-700 hover:text-white border bg-blue-700 text-white border-blue-600 bg-white hover:bg-blue-700 focus:ring-4  focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          : "border border-white hover:border-gray-200  dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 ring-gray-300 text-gray-600 ring-2 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-full font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800";

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
}
