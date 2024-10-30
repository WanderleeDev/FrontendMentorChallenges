import { formattingPrice } from "@/utils/formatterPrice";
import { useTranslations } from "next-intl";

interface Props {
  totalPrice: number;
  children: React.ReactNode
}

export default function ListItems({ totalPrice, children }: Props) {
  const t = useTranslations('myProducts')

  return (
    <>
      <ul className="h-64 overflow-y-auto customScroll">
      {children}
      </ul>
      <div className="flex gap-2 items-center justify-between py-4">
        <span> {t('footer')}</span>
        <span className="font-bold text-3xl">
          {formattingPrice(totalPrice)}
        </span>
      </div>
    </>
  );
}
