"use client";

import ButtonBase from "@/components/ButtonBase";
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useShoppingCart } from "../store";
import { ProductTranslation } from "@/models/Product.models";
import { useShallow } from "zustand/shallow";
import { showToaster } from "@/lib/showToaster";
import { useTranslations } from "next-intl";

export default function PurchaseButton({ id, ...args }: ProductTranslation) {
  const { addItem, decreaseItem, productQuantity } = useShoppingCart(
    useShallow((state) => ({
      addItem: state.addItem,
      decreaseItem: state.decreaseItem,
      productQuantity: state.productQuantity(id),
    }))
  );
  const t = useTranslations("myProducts");

  const decreaseQuantity = (id: string) => {
    if (productQuantity === 0) {
      return showToaster(t("toaster.invalid"));
    }
    decreaseItem(id);
    showToaster(`1 ${args.name} ${t("toaster.remove")}`);
  };
  const increaseQuantity = (product: ProductTranslation) => {
    if (productQuantity === args.stock) {
      return showToaster(t("toaster.limit"));
    }
    addItem(product);
    showToaster(`1 ${args.name} ${t("toaster.add")}`);
  };

  return (
    <div className="grid w-10/12 mx-auto group star-opacity-min">
      <div className="flex gap-2 items-center justify-center rounded-[2rem] col-[1/2] row-[1/2] py-3 px-2 sm:p-3 bg-text-secondary-clr border-text-clr-primary-light border-2">
        <MdAddShoppingCart className="text-accent-clr" size={28} />
        <span className="font-semibold hidden sm:block">{t("btnAdd")}</span>
      </div>
      <div className="opacity-0 col-[1/2] row-[1/2] flex gap-2 items-center justify-between rounded-[2rem] bg-accent-clr-light text-[#faf1eb] py-3 px-2 sm:p-3 group-hover:opacity-100 transition-opacity">
        <ButtonBase
          className="hoverStyles"
          onClick={() => decreaseQuantity(id)}
          title={t("decrease")}
        >
          <IoIosRemoveCircleOutline size={28} />
        </ButtonBase>

        <span className="text-lg select-none">{productQuantity}</span>

        <ButtonBase
          className="hoverStyles"
          onClick={() => increaseQuantity({ id, ...args })}
          title={t("increase")}
        >
          <IoIosAddCircleOutline className="text-inherit" size={28} />
        </ButtonBase>
      </div>
    </div>
  );
}
