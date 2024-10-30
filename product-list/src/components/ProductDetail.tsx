import type { ProductTranslation } from "@/models/Product.models";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  data: ProductTranslation;
}

export default function ProductDetail({ data }: Props) {
  const t = useTranslations("product");

  return (
    <article>
      <Image
        className="size-44 sm:size-80 mx-auto md:size-[30rem] rounded-lg bg-gray-300 object-cover"
        src={data.image.desktop}
        width={192}
        height={192}
        alt={data.name}
      />
      <header className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-accent-clr-light font-bold text-lg sm:text-2xl">
          {data.name}
        </h1>
        <span className="text-text-clr-primary-light tracking-wide text-sm font-semibold">
          {t("category")} : <span className="font-normal">{data.category}</span>
        </span>
      </header>
    </article>
  );
}
