import ProductDetail from "@/components/ProductDetail";
import { ProductTranslation } from "@/models/Product.models";
import fetcher from "@/utils/fetcher";

interface Props {
  params: { id: string };
}

export default async function page({ params }: Props) {
  const { data, error } = await fetcher<ProductTranslation>(
    `${process.env.API_PRODUCTS}/products/${params.id}`
  );

  if (error) return <div>{error}</div>;
  if (!data) return <div>Product not found</div>;

  return <ProductDetail data={data} />;
}
