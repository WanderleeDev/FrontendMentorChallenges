"use client";

import ButtonBase from "@/components/ButtonBase";
import { useTranslations } from "next-intl";
import { FaRegCircleCheck } from "react-icons/fa6";
import ListItems from "./ListItems";
import { useShoppingCart } from "../store";
import { useShallow } from "zustand/shallow";
import { adapterProductItem } from "@/adapters/ProductAdapter";
import ItemPurchase from "./ItemPurchase";
import { useModalContext } from "@/modules/modal/context/modalContext";

export default function PurchaseOrder() {
  const { setState } = useModalContext();
  const { products, totalPrice, clear } = useShoppingCart(
    useShallow((state) => ({
      totalPrice: state.getTotalPrice(),
      products: state.items,
      clear: state.clearCart,
    }))
  );
  const t = useTranslations("paymentConfirm");
  const btnStyles =
    "bg-accent-clr-light rounded-[2rem] w-full p-4 text-[#faf1eb] font-semibold tracking-wide hover:bg-accent-clr transition-colors mt-auto";

  const purchaseHandler = () => {
    setState(() => {
      clear();
      return false;
    });
  };

  return (
    <article className="bg-text-secondary-clr p-8 rounded-lg min-h-[40rem] w-full shadow-md shadow-text-clr-primary flex flex-col gap-7 max-w-[30rem]">
      <header className="flex flex-col gap-2">
        <FaRegCircleCheck
          className="text-green-600 mb-4"
          aria-hidden={true}
          size={40}
        />
        <h2 className="text-3xl font-semibold">{t("title")}</h2>
        <span className="text-text-clr-primary-light text-sm">{t("info")}</span>
      </header>
      <div className="rounded-lg bg-background p-4 flex flex-col">
        <ListItems totalPrice={totalPrice}>
          {products.map((product) => (
            <li key={product.product.id}>
              <ItemPurchase {...adapterProductItem(product)} />
            </li>
          ))}
        </ListItems>
      </div>
      <ButtonBase onClick={purchaseHandler} className={btnStyles}>
        {t("button")}
      </ButtonBase>
    </article>
  );
}
