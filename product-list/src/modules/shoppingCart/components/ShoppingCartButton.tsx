"use client";

import ButtonBase from "@/components/ButtonBase";
import { MdShoppingCart } from "react-icons/md";
import { useShoppingCart } from "../store";

export default function ShoppingCartButton() {
  const productsQuantity = useShoppingCart((state) =>
    state.items.reduce((a, b) => a + b.quantity, 0)
  );
  const markerStyles =
    "bg-accent-clr-light size-6 grid place-content-center text-white rounded-full absolute top-0 right-0 font-semibold translate-x-2/4 -translate-y-1/4 text-sm star-opacity-min";

  return (
    <ButtonBase className="block lg:hidden relative">
      <MdShoppingCart size={36} />
      {productsQuantity > 0 && (
        <span className={markerStyles}>{productsQuantity}</span>
      )}
    </ButtonBase>
  );
}
