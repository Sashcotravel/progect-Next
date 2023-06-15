import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['ua', 'en', 'ru'],
    defaultLocale: 'ua'
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};