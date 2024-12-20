import { getRequestConfig } from "next-intl/server";
import { routing, LanguagesType } from "./routing";

export default getRequestConfig(async ({requestLocale}) => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.

  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as LanguagesType)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
