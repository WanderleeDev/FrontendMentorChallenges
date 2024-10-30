"use client";

import ButtonBase from "@/components/ButtonBase";
import { MdShoppingCart } from "react-icons/md";
import { useShoppingCart } from "../store";
import ShoppingCart from "..";
import { useState } from "react";

export default function ShoppingCartButton() {
  const productsQuantity = useShoppingCart((state) =>
    state.items.reduce((a, b) => a + b.quantity, 0)
  );
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const markerStyles =
    "bg-accent-clr-light size-6 grid place-content-center text-white rounded-full absolute top-0 right-0 font-semibold translate-x-2/4 -translate-y-1/4 text-sm star-opacity-min";

  const toggleShoppingCart = () => {
    setShowShoppingCart(!showShoppingCart);
  };

  return (
    <>
      <ButtonBase
        onClick={toggleShoppingCart}
        className="block lg:hidden relative"
      >
        <MdShoppingCart className="size-7 md:size-9" />
        {productsQuantity > 0 && (
          <span className={markerStyles}>{productsQuantity}</span>
        )}
      </ButtonBase>
      {showShoppingCart && (
        <div
          className={`fixed z-10 top-32 right-0 transform max-w-md transition-transform lg:hidden ${
            showShoppingCart ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ShoppingCart />
        </div>
      )}
    </>
  );
}
