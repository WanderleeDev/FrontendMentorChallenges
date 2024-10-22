import { Product } from "@/models/Product.models";
import ProductCard from "./ProductCard";
import fetcher from "@/utils/fetcher";

export default async function Gallery() {
  const { data, error } = await fetcher<Product[]>(
    `${process.env.API_PRODUCTS}/products`
  );

  if (error) {
    return <div>{error}</div>;
  }

  if (data === null || data.length === 0) {
    return <div>Less than one product</div>;
  }

  return (
    <ul className="grid xs:grid-cols-2 gap-6 md:grid-cols-3">
      {data.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
