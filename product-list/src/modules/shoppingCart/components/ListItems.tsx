import Item from "./Item";
import { formattingPrice } from "@/utils/formatterPrice";
import { adapterProductItem } from "@/adapters/ProductAdapter";
import { ProductUser } from "@/models/Product.models";

interface Props {
  products: ProductUser[];
  totalPrice: number;
}

export default function ListItems({ products, totalPrice }: Props) {
  if (products.length <= 0) {
    return <div>No items in cart</div>;
  }

  return (
    <>
      <ul className="max-h-72 h-full overflow-y-auto customScroll">
        {products.map((product) => (
          <li key={product.product.name}>
            <Item {...adapterProductItem(product)} />
          </li>
        ))}
      </ul>
      <div className="flex gap-2 items-center justify-between py-4">
        <span>Order total</span>
        <span className="font-bold text-3xl">
          {formattingPrice(totalPrice)}
        </span>
      </div>
    </>
  );
}
