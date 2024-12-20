import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export type LanguagesType = 'es' | 'en'

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
});


// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);