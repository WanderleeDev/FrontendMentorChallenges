import React from "react";
import Modal from "@/components/Modal";
import fetcher from "@/utils/fetcher";
import type { ProductTranslation } from "@/models/Product.models";
import ProductDetail from "@/components/ProductDetail";

interface Props {
  params: { id: string };
}

export default async function page({ params }: Props) {
  const { data, error } = await fetcher<ProductTranslation>(
    `${process.env.API_PRODUCTS}/products/${params.id}`
  );

  if (error) return <div>{error}</div>;

  return (
    <Modal>
      <ProductDetail data={data} />
    </Modal>
  );
}
