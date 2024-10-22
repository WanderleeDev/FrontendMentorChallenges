"use client";

import ButtonBase from "@/components/ButtonBase";
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useShoppingCart } from "../store";
import { Product } from "@/models/Product.models";
import { useShallow } from "zustand/shallow";
import { showToaster } from "@/lib/showToaster";

export default function PurchaseButton({ id, ...args }: Product) {
  const { addItem, decreaseItem, productQuantity } = useShoppingCart(
    useShallow((state) => ({
      addItem: state.addItem,
      decreaseItem: state.decreaseItem,
      productQuantity: state.productQuantity(id),
    }))
  );

  const decreaseQuantity = (id: string) => {
    decreaseItem(id);
    showToaster("Quantity decreased");
  };

  const increaseQuantity = (product: Product) => {
    addItem(product);
    showToaster("Quantity increased");
  };

  return (
    <div className="grid w-10/12 mx-auto group star-opacity-min">
      <div className="flex gap-2 items-center justify-center rounded-[2rem] col-[1/2] row-[1/2] py-3 px-2 sm:p-3 bg-text-secondary-clr border-text-clr-primary-light border-2">
        <MdAddShoppingCart className="text-accent-clr" size={28} />
        <span className="font-semibold hidden sm:block">Add to Cart</span>
      </div>
      <div className="opacity-0 col-[1/2] row-[1/2] flex gap-2 items-center justify-between rounded-[2rem] bg-accent-clr-light text-[#faf1eb] py-3 px-2 sm:p-3 group-hover:opacity-100 transition-opacity">
        <ButtonBase
          onClick={() => decreaseQuantity(id)}
          title="decrease quantity"
        >
          <IoIosRemoveCircleOutline size={28} />
        </ButtonBase>

        <span className="text-lg select-none">{productQuantity}</span>

        <ButtonBase
          onClick={() => increaseQuantity({ id, ...args })}
          title="increase quantity"
        >
          <IoIosAddCircleOutline className="text-inherit" size={28} />
        </ButtonBase>
      </div>
    </div>
  );
}
