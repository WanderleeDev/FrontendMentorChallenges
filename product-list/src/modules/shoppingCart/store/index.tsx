import { create } from "zustand";
import { ShoppingCartManager } from "../services/ShoppingCartManager";
import { persist } from "zustand/middleware";
import { ShoppingCartState } from "../interfaces/ShoppingCartState.interface";

export const useShoppingCart = create<ShoppingCartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        const newItems = ShoppingCartManager.addItem(get().items, {
          product,
          quantity,
        });

        set({ items: newItems });
      },
      decreaseItem: (id) => {
        const newItems = ShoppingCartManager.decreaseItem(get().items, id);

        set({ items: newItems });
      },
      removeItem: (id) => {
        const newItems = ShoppingCartManager.removeItem(get().items, id);

        set({ items: newItems });
      },
      productQuantity: (id) => {
        return ShoppingCartManager.getQuantityById(get().items, id);
      },
      getTotalPrice: () => ShoppingCartManager.getTotalPrice(get().items),
      clearCart: () => set({ items: [] }),
    }),
    { name: ShoppingCartManager.getKeyStorage() }
  )
);
