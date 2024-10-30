"use client";

import { useLocale } from "next-intl";
import { ChangeEvent } from "react";
import { createNavigation } from "next-intl/navigation";

export default function LanguageSwitcher() {
  const { useRouter } = createNavigation();
  const router = useRouter();
  const localActive = useLocale();
  const langs = [
    { value: "en", label: "🇺🇸 EN" },
    { value: "es", label: "🇪🇦 ES" },
  ];

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.push(nextLocale);
  };
  return (
    <>
      <label form="lang" className="rounded flex gap-2 items-center text-lg">
        <p className="sr-only">change language</p>
        <select
          id="lang"
          className="bg-transparent py-2 text-[#260e05]"
          defaultValue={localActive}
          onChange={onSelectChange}
        >
          {langs.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
