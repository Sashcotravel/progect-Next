import React from "react";
import {useLocale, useTranslations} from "next-intl";
import Script from "next/script";

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    return (
        <React.Fragment>
            <title>{t("blog")}</title>
            <meta name="description" content={t("blog")}/>
            <meta property="og:title" content={t("blog")}/>
            <meta property="og:description" content={t(`blog`)}/>
            <link rel="apple-touch-icon"
                  href="https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
            <meta property="og:image"
                  content="https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
            <meta property="og:url"
                  content={locale === 'en' ? "https://samwash.ua/en/blog" : locale === 'ru' ? "https://samwash.ua/ru/blog" : "https://samwash.ua/blog"}/>
            <link rel="canonical"
                  href={locale === 'en' ? "https://samwash.ua/en/blog" : locale === 'ru' ? "https://samwash.ua/ru/blog" : "https://samwash.ua/blog"}/>
            <link rel="preconnect" href="https://cdn.jsdelivr.net" />
            {/*<Script defer type="text/javascript"*/}
            {/*        src="https://web.archive.org/web/20230112140357/https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"/>*/}
            {/*<link rel="stylesheet" id="fancyapps" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"/>*/}
        </React.Fragment>
    )
}