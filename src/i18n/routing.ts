import { defineRouting } from "next-intl/routing";

export enum Locale {
  EN = "en",
  TR = "tr",
}

export const routing = defineRouting({
  locales: Object.values(Locale),
  defaultLocale: Locale.EN,
  pathnames: {
    "/": "/",
  },
});

export type AppLocale = (typeof routing.locales)[number];
