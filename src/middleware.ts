import { NextRequest } from 'next/server';
import Negotiator from 'negotiator';

const locales = ['en-US', 'hr-HR', 'en', 'hr'];
const defaultLocale = 'en';

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language') || '';

  // Proceed with your existing logic, now that you have a default empty string if undefined
  const negotiator = new Negotiator({
    headers: { 'accept-language': acceptLanguage },
  });
  const availableLanguages = negotiator.languages();
  const matchedLocale =
    availableLanguages.find((lang) => locales.includes(lang)) || defaultLocale;

  return matchedLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return new Response(null, {
    status: 302,
    headers: { Location: request.nextUrl.toString() },
  });
}

export const config = {
  matcher: '/((?!_next).*)',
};
