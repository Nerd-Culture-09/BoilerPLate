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
                // Check if 'data' and 'data._id' are defined
                if (!data || !data._id) {
                    console.error("Data or data._id is undefined:", data);
                    return;
                }

                const currentItems = get().items;

                // Ensure 'currentItems' is defined and is an array
                if (!Array.isArray(currentItems)) {
                    console.error("Current items are not an array or are undefined:", currentItems);
                    return;
                }

                const existingItem = currentItems.find((item) => item?._id === data._id);

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
                if (!id) {
                    console.error("Item ID is undefined or invalid:", id);
                    return;
                }

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
