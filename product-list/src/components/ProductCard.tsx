import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ProductTranslation } from "@/models/Product.models";
import { formattingPrice } from "@/utils/formatterPrice";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

interface Props {
  product: ProductTranslation;
}

export default function ProductCard({ product }: Props) {
  const { name, category, price, image, id } = product;
  const t = useTranslations("myProducts");
  const PurchaseButton = dynamic(
    () => import("@/modules/shoppingCart/components/PurchaseButton"),
    { ssr: false }
  );

  return (
    <figure className="flex flex-col gap-12 star-opacity">
      <div className="relative">
        <Link
          className="outline-accent-clr-light hover:outline outline-[.2rem]  focus:outline-accent-clr-light rounded-lg"
          href={`/product/${id}`}
        >
          <Image
            className="rounded-lg aspect-square size-48 object-cover bg-gray-300 w-full h-full"
            src={image.tablet}
            alt={name}
            title={t("alt")}
            width={192}
            height={192}
          />
        </Link>
        <div className="absolute w-full -translate-y-2/4">
          <PurchaseButton {...product} />
        </div>
      </div>
      <div>
        <small>{category}</small>
        <figcaption className="font-semibold">{name}</figcaption>
        <span className="text-accent-clr font-semibold">
          {formattingPrice(price)}
        </span>
      </div>
    </figure>
  );
}
