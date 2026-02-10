import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { type NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export const proxy = async (request: NextRequest) => {
  return intlMiddleware(request);
};

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
