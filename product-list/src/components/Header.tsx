import DarkLightToggle from "./DarkLightToggle";
import ShoppingCartButton from "@/modules/shoppingCart/components/ShoppingCartButton";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header className="flex justify-between items-center gap-2">
      <h1 className="font-bold text-4xl">Desserts</h1>
      <div className="flex gap-4 items-center">
        <ShoppingCartButton />
        <DarkLightToggle />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
