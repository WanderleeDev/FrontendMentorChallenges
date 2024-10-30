"use client";

import { useRouter } from "@/i18n/routing";
import ButtonBase from "./ButtonBase";
import { IoIosArrowBack } from "react-icons/io";
import { useTranslations } from "next-intl";

interface Props {
  children: React.ReactNode;
}

export default function Modal({ children }: Props) {
  const router = useRouter();
  const t = useTranslations("product");

  const handleBackClick = () => router.back();

  return (
    <div className="fixed inset-0 bg-black/20 grid place-content-center backdrop-blur-md gap-8">
      <ButtonBase
        onClick={handleBackClick}
        className="text-accent-clr-light ml-auto py-2 px-6 bg-accent-clr-light rounded-lg text-white font-semibold"
      >
        <div className="flex gap-2 items-center justify-center">
          <IoIosArrowBack />
          {t("back")}
        </div>
      </ButtonBase>
      {children}
    </div>
  );
}
