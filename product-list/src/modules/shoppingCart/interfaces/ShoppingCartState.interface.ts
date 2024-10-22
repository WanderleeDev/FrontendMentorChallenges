import { Product, ProductUser } from "@/models/Product.models";

type Store = {
  items: ProductUser[];
};

type Actions = {
  addItem: (product: Product, quantity?: number) => void;
  productQuantity: (id: string) => number;
  decreaseItem: (id: string) => void;
  removeItem: (id: string) => void;
  getTotalPrice: () => number;
  clearCart: () => void;
};

export type ShoppingCartState = Store & Actions;
