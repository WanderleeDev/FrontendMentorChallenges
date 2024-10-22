"use client";

import ButtonBase from "@/components/ButtonBase";
import TagInfo from "./components/TagInfo";
import ListItems from "./components/ListItems";
import { useShoppingCart } from "./store";
import EmptyList from "./components/EmptyList";
import { useShallow } from "zustand/shallow";
import { useEffect, useState } from "react";

export default function ShoppingCart() {
  const [hydrated, setHydrated] = useState(false);
  const { allProductsQuantity, products, totalPrice } = useShoppingCart(
    useShallow((state) => ({
      totalPrice: state.getTotalPrice(),
      products: state.items,
      allProductsQuantity: state.items.reduce(
        (prev, curr) => prev + curr.quantity,
        0
      ),
    }))
  );

  useEffect(() => setHydrated(true), []);

  if (!hydrated || products.length <= 0) {
    return <EmptyList />;
  }

  return (
    <article className="bg-text-secondary-clr p-4 rounded-lg h-[35rem] w-full shadow-md shadow-text-clr-primary flex flex-col gap-2">
      <h2 className="text-accent-clr-light font-bold text-2xl">
        Your Cart {`(${allProductsQuantity})`}
      </h2>
      <ListItems totalPrice={totalPrice} products={products} />
      <TagInfo />
      <ButtonBase className="bg-accent-clr-light rounded-[2rem] w-full p-4 text-[#faf1eb] font-semibold tracking-wide hover:bg-accent-clr transition-colors">
        Confirm Order
      </ButtonBase>
    </article>
  );
}
