import DarkLightToggle from "./DarkLightToggle";
import ShoppingCartButton from "@/modules/shoppingCart/components/ShoppingCartButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("home");

  return (
    <header className="flex justify-between items-center gap-6 flex-wrap">
      <h1 className="font-bold text-xl sm:text-2xl md:text-4xl">
        {t("title")}
      </h1>
      <div className="flex gap-1 sm:gap-2 md:gap-4 items-center mx-auto xs:mx-0">
        <ShoppingCartButton />
        <DarkLightToggle />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
