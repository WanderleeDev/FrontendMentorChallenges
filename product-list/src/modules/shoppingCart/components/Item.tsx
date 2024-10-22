import ButtonBase from "@/components/ButtonBase";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { formattingPrice } from "@/utils/formatterPrice";
import { useShoppingCart } from "../store";

interface Props {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export default function Item({ price, quantity, name, id }: Props) {
  const removeItem = useShoppingCart((state) => state.removeItem);

  return (
    <figure className="grid grid-cols-[1fr_auto gap-y-2 py-4 border-b-2  border-text-clr-primary-light star-opacity">
      <figcaption className="font-semibold col-[1/2] row-[1/2]">
        {name}
      </figcaption>
      <div className="flex gap-4 col-[1/2] row-[2/3]">
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
        onClick={() => removeItem(id)}
        title="remove product"
      >
        <IoIosCloseCircleOutline
          className="text-text-clr-primary-light font-extralight hover:text-accent-clr-light transition-colors"
          size={28}
        />
      </ButtonBase>
    </figure>
  );
}
