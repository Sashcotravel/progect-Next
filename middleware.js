import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ["ua", "en", "ru"],
    defaultLocale: "ua",
    localeDetection: false
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};