import React from "react";
import { formattingPrice } from "@/utils/formatterPrice";
import Image from "next/image";

interface Props {
  id: string;
  name: string;
  quantity: number;
  price: number;
  thumbnail: string;
}

export default function ItemPurchase({
  price,
  quantity,
  name,
  thumbnail,
}: Props) {
  return (
    <figure className="flex items-center justify-between border-b-[.1rem]  border-text-clr-primary-light star-opacity py-2 text-sm">
      <div className="flex gap-4">
        <Image
          className="rounded-md"
          src={thumbnail}
          width={60}
          height={60}
          alt={name}
        />
        <div className="flex flex-col gap-1 text-sm justify-center">
          <figcaption className="font-semibold text-sm">{name}</figcaption>
          <div className="flex gap-2 items-center">
            <span className="text-accent-clr-light font-semibold">
              {quantity}x
            </span>
            <span className="text-text-clr-primary-light">
              @ {formattingPrice(price)}
            </span>
          </div>
        </div>
      </div>
      <span className="font-semibold">{formattingPrice(price * quantity)}</span>
    </figure>
  );
}
