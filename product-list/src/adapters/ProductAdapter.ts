import { ProductItem, ProductUser } from "@/models/Product.models";

export function adapterProductItem({
  product,
  quantity,
}: ProductUser): ProductItem {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: quantity,
    thumbnail: product.image.thumbnail
  };
}
