import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import ShoppingCart from "@/modules/shoppingCart";
import PurchaseOrder from "@/modules/shoppingCart/components/PurchaseOrder";
import CustomToast from "@/components/CustomToast";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  return (
    <>
      <main className="grid grid-cols-1  gap-10 lg:grid-cols-[1fr_.5fr] relative">
        <div className="flex flex-col gap-10">
          <Header />
          <Gallery />
        </div>{" "}
        <ShoppingCart />
      </main>
      <PurchaseOrder />
      <CustomToast message={t("welcome")} />
    </>
  );
}
