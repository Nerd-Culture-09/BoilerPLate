import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from './types';

interface CartStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (_id: string) => void;
  updateItemQuantity: (_id: string, quantity: number) => void;
  getTotalPrice: () => number;
}

const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => i._id === item._id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i._id === item._id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          } else {
            return { items: [...state.items, { ...item, quantity: 1 }] };
          }
        });
      },
      removeItem: (_id) => {
        set((state) => ({
          items: state.items.filter((item) => item._id !== _id),
        }));
      },
      updateItemQuantity: (_id, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item._id === _id
              ? { ...item, quantity: Math.max(quantity, 1) }
              : item
          ),
        }));
      },
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => {
            const price = parseFloat(item.price.toString().replace('M', ''));
            return total + price * item.quantity;
          },
          0
        );
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useCart;
