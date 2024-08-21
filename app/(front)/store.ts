import { create } from "zustand";
import { Product } from "./types";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (data: Product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item._id === data._id);

                if (existingItem) {
                    set((state) => ({
                        items: state.items.map((item) =>
                            item._id === data._id ? { ...item, quantity: item.quantity + 1 } : item
                        ),
                    }));
                } else {
                    set((state) => ({
                        items: [...state.items, { ...data, quantity: 1 }],
                    }));
                }
            },
            removeItem: (id: string) => {
                set((state) => ({
                    items: state.items.filter((item) => item._id !== id),
                }));
            },
            removeAll: () => {
                set(() => ({
                    items: [],
                }));
            },
        }),
        {
            name: "cart-storage", // name of the storage key
            storage: createJSONStorage(() => localStorage), // define storage method
        }
    )
);

export default useCart;
