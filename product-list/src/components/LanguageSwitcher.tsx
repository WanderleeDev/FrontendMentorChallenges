"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const langs = [
    { value: "en", label: "🇺🇸 EN" },
    { value: "es", label: "🇪🇦 ES" },
  ];

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label form="lang" className="rounded flex gap-2 items-center text-lg">
      <p className="sr-only">change language</p>
      <select
        id="lang"
        defaultValue={localActive}
        className="bg-transparent py-2 text-[#260e05]"
        onChange={onSelectChange}
        disabled={isPending}
      >
        {langs.map((lang) => (
          <>
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          </>
        ))}
      </select>
    </label>
  );
}
