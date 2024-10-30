import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import ShoppingCart from "@/modules/shoppingCart";
import { Modal } from "@/modules/modal";
import PurchaseOrder from "@/modules/shoppingCart/components/PurchaseOrder";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1  gap-10 lg:grid-cols-[1fr_.5fr] relative">
        <Modal>
          <PurchaseOrder />
        </Modal>
        <div className="flex flex-col gap-10">
          <Header />
          <Gallery />
        </div>{" "}
        <div className="hidden lg:block">
          <ShoppingCart />
        </div>
      </main>
    </>
  );
}
