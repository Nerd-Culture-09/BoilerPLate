import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hooks/use-outside-click";
import { CloseIcon } from "./hooks/ExpandableProducts";
const callouts = [
  {
    name: 'Clothing',
    description: 'Elevate Your Everyday Wardrobe',
    imageSrc: '/clothes1.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/view',
  },
  {
    name: 'Food',
    description: 'Gourmet Goodness, Right at Home',
    imageSrc: '/food2.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/food-shop-view',
  },
  {
    name: 'Accessories',
    description: 'Cutting-Edge Electronics, Everyday Deals',
    imageSrc: '/VMALL.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/accessory-view',
  },
]

export default function CategoryOverview() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Shops</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="z-[9999]">
                  <>
                    <AnimatePresence>
                      {active && typeof active === "object" && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 bg-black/20 h-full w-full z-10"
                        />
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {active && typeof active === "object" ? (
                        <div className="fixed inset-0  grid place-items-center z-[100]">
                          <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                              opacity: 0,
                            }}
                            animate={{
                              opacity: 1,
                            }}
                            exit={{
                              opacity: 0,
                              transition: {
                                duration: 0.05,
                              },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                          >
                            <CloseIcon />
                          </motion.button>
                          <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                          >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                              <Image
                                priority
                                width={200}
                                height={200}
                                src={active.src}
                                alt={active.title}
                                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                              />
                            </motion.div>

                            <div>
                              <div className="flex justify-between items-start p-4">
                                <div className="">
                                  <motion.h3
                                    layoutId={`title-${active.title}-${id}`}
                                    className="font-bold text-neutral-700 dark:text-neutral-200"
                                  >
                                    {active.title}
                                  </motion.h3>
                                  <motion.p
                                    layoutId={`description-${active.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400"
                                  >
                                    {active.description}
                                  </motion.p>
                                </div>

                                <motion.a
                                  layoutId={`button-${active.title}-${id}`}
                                  href={active.ctaLink}
                                  target="_blank"
                                  className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                >
                                  {active.ctaText}
                                </motion.a>
                              </div>
                              <div className="pt-4 relative px-4">
                                <motion.div
                                  layout
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                >
                                  {typeof active.content === "function"
                                    ? active.content()
                                    : active.content}
                                </motion.div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      ) : null}
                    </AnimatePresence>
                    <ul className="max-w-2xl mx-auto w-full gap-4">
                      {cards.map((card, index) => (
                        <motion.div
                          layoutId={`card-${card.title}-${id}`}
                          key={`card-${card.title}-${id}`}
                          onClick={() => setActive(card)}
                          className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                        >
                          <div className="flex gap-4 flex-col md:flex-row ">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                              <Image
                                width={100}
                                height={100}
                                src={card.src}
                                alt={card.title}
                                className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                              />
                            </motion.div>
                            <div className="">
                              <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                              >
                                {card.title}
                              </motion.h3>
                              <motion.p
                                layoutId={`description-${card.description}-${id}`}
                                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                              >
                                {card.description}
                              </motion.p>
                            </div>
                          </div>
                          <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                          >
                            {card.ctaText}
                          </motion.button>
                        </motion.div>
                      ))}
                    </ul>
                  </>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


const cards = [
  {
    description: 'Your Everyday Wardrobe',
    title: "Clothing",
    src: "/clothes1.jpg",
    ctaText: "view",
    ctaLink: "/view",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: "Gourmet Goodness, Right at Home",
    title: "Food",
    src: "/food2.jpg",
    ctaText: "view",
    ctaLink: "/food-shop-view",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },
];
