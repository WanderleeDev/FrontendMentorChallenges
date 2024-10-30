"use client";

import ButtonBase from "@/components/ButtonBase";
import TagInfo from "./components/TagInfo";
import ListItems from "./components/ListItems";
import { useShoppingCart } from "./store";
import EmptyList from "./components/EmptyList";
import { useShallow } from "zustand/shallow";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Item from "./components/Item";
import { adapterProductItem } from "@/adapters/ProductAdapter";
import { useModalContext } from "../modal/context/modalContext";

export default function ShoppingCart() {
  const [hydrated, setHydrated] = useState(false);
  const { setState } = useModalContext();
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
  const t = useTranslations("myProducts");

  useEffect(() => setHydrated(true), []);

  if (!hydrated || products.length <= 0) {
    return <EmptyList />;
  }

  return (
    <article className="bg-text-secondary-clr p-4 rounded-lg h-[35rem] w-full shadow-md shadow-text-clr-primary flex flex-col gap-2">
      <h2 className="text-accent-clr-light font-bold text-2xl">
        {t("title")} {`(${allProductsQuantity})`}
      </h2>
      <ListItems totalPrice={totalPrice}>
        {products.map((product) => (
          <li key={product.product.id}>
            <Item {...adapterProductItem(product)} />
          </li>
        ))}
      </ListItems>
      <TagInfo />
      <ButtonBase
        className="bg-accent-clr-light rounded-[2rem] w-full p-4 text-[#faf1eb] font-semibold tracking-wide hover:bg-accent-clr transition-colors"
        onClick={() => setState(true)}
      >
        {t("button")}
      </ButtonBase>
    </article>
  );
}
