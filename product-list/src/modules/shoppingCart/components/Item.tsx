import ButtonBase from "@/components/ButtonBase";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { formattingPrice } from "@/utils/formatterPrice";
import { useShoppingCart } from "../store";
import { showToaster } from "@/lib/showToaster";
import { useTranslations } from "next-intl";

interface Props {
  id: string;
  name: string;
  quantity: number;
  price: number;
  thumbnail: string;
}

export default function Item({ price, quantity, name, id }: Props) {
  const removeItem = useShoppingCart((state) => state.removeItem);
  const t = useTranslations("myProducts");
  const removeProduct = (id: string) => {
    removeItem(id);
    showToaster(`${quantity} ${name} removed from cart`);
  };

  return (
    <figure className="grid grid-cols-[1fr_auto gap-y-2 py-4 border-b-[.1rem]  border-text-clr-primary-light star-opacity">
      <figcaption className="font-semibold col-[1/2] row-[1/2] text-sm">
        {name}
      </figcaption>
      <div className="flex gap-4 col-[1/2] row-[2/3] text-sm">
        <span className="text-accent-clr-light font-semibold">{quantity}x</span>
        <span className="text-text-clr-primary-light">
          @ {formattingPrice(price)}
        </span>
        <span className="text-text-clr-primary-light font-semibold">
          {formattingPrice(price * quantity)}
        </span>
      </div>
      <ButtonBase
        className="col-[2/3] row-[1/3] justify-self-end"
        onClick={() => removeProduct(id)}
        title={t("remove")}
      >
        <IoIosCloseCircleOutline
          className="text-text-clr-primary-light font-extralight hover:text-accent-clr-light transition-colors"
          size={24}
        />
      </ButtonBase>
    </figure>
  );
}
