import create from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  _id: string;
  image: string;
  description: string;
  price: string;
  quantity: number;
  
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
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
          (total, item) => total + parseFloat(item.price.replace('M', '')) * item.quantity,
          0
        );
      },
    }),
    {
      name: 'cart-storage', // unique name
    }
  )
);

export default useCart;
