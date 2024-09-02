"use client";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StretchHorizontal } from "lucide-react";
import { Drawer, DrawerBody, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "../Drawer";
import { Button } from "../ui/button";
import { RiHome2Line, RiLinkM, RiListCheck, RiMenuLine, RiSettings5Line } from "@remixicon/react";
import { cx, focusRing } from "@/lib/cx";
import { siteConfig } from "@/app/siteConfig";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Overview", href: siteConfig.baseLinks.overview, icon: RiHome2Line },
  { name: "Details", href: siteConfig.baseLinks.details, icon: RiListCheck },
  {
    name: "Settings",
    href: siteConfig.baseLinks.settings,
    icon: RiSettings5Line,
  },
] as const

const shortcuts = [
  {
    name: "Add new user",
    href: "#",
    icon: RiLinkM,
  },
  {
    name: "Workspace usage",
    href: "#",
    icon: RiLinkM,
  },
  {
    name: "Cost spend control",
    href: "#",
    icon: RiLinkM,
  },
  {
    name: "Overview – Rows written",
    href: "#",
    icon: RiLinkM,
  },
] as const
interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};
export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-full px-4 py-4 hidden  md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",
          className
        )}
        animate={{
          width: animate ? (open ? "300px" : "60px") : "300px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  const pathname = usePathname()
  const isActive = (itemHref: string) => {
    if (itemHref === siteConfig.baseLinks.settings) {
      return pathname.startsWith("/settings")
    }
    return pathname === itemHref || pathname.startsWith(itemHref)
  }
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <StretchHorizontal
            className="text-neutral-800 dark:text-neutral-200"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                aria-label="open sidebar"
                className="group flex items-center rounded-md p-2 text-sm font-medium hover:bg-gray-100 data-[state=open]:bg-gray-100 data-[state=open]:bg-gray-400/10 hover:dark:bg-gray-400/10"
              >
                <RiMenuLine
                  className="size-6 shrink-0 sm:size-5"
                  aria-hidden="true"
                />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="sm:max-w-lg">
              <DrawerHeader>
                <DrawerTitle>Retail Analytics</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <nav
                  aria-label="core mobile navigation links"
                  className="flex flex-1 flex-col space-y-10"
                >
                  <ul role="list" className="space-y-1.5">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <DrawerClose asChild>
                          <Link
                            href={item.href}
                            className={cx(
                              isActive(item.href)
                                ? "text-indigo-600 dark:text-indigo-400"
                                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                              "flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-base font-medium transition hover:bg-gray-100 sm:text-sm hover:dark:bg-gray-900",
                              focusRing,
                            )}
                          >
                            <item.icon
                              className="size-5 shrink-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        </DrawerClose>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <span className="text-sm font-medium leading-6 text-gray-500 sm:text-xs">
                      Shortcuts
                    </span>
                    <ul aria-label="shortcuts" role="list" className="space-y-0.5">
                      {shortcuts.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={cx(
                              pathname === item.href || pathname.includes(item.href)
                                ? "text-indigo-600 dark:text-indigo-400"
                                : "text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                              "flex items-center gap-x-2.5 rounded-md px-2 py-1.5 font-medium transition hover:bg-gray-100 sm:text-sm hover:dark:bg-gray-900",
                              focusRing,
                            )}
                          >
                            <item.icon
                              className="size-4 shrink-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-2  group/sidebar py-2",
        className
      )}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
