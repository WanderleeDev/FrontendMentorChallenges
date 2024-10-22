import ButtonBase from "@/components/ButtonBase";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function PurchaseOrder() {
  const btnStyles =
    "bg-accent-clr-light rounded-[2rem] w-full p-4 text-[#faf1eb] font-semibold tracking-wide hover:bg-accent-clr transition-colors";
  return (
    <article className="bg-text-secondary-clr p-8 rounded-lg h-[35rem] w-full shadow-md shadow-text-clr-primary flex flex-col gap-7 max-w-[35rem]">
      <header className="flex flex-col gap-2">
        <FaRegCircleCheck
          className="text-green-600 mb-4"
          aria-hidden={true}
          size={40}
        />
        <h2 className="text-3xl font-semibold">Order Confirmed</h2>
        <span className="text-text-clr-primary-light text-sm">
          We hope you enjoyed your food!
        </span>
      </header>
      <div className="rounded-lg bg-background h-72"></div>
      <ButtonBase className={btnStyles}>Confirm Order</ButtonBase>
    </article>
  );
}
