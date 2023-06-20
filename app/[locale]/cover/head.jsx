import React from "react";
import {useLocale, useTranslations} from "next-intl";

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    return (
        <React.Fragment>
            <title>{t(`coverPage.metaTitle`)}</title>
            <meta name="description" content={t(`coverPage.metaDesc`)} />
            <meta property="og:title" content={t(`coverPage.metaTitle`)} />
            <meta property="og:description" content={t(`coverPage.metaDesc`)} />
            <link rel="apple-touch-icon" href="https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
            <meta property="og:image" content="https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
            <meta property="og:url" content={locale === 'en' ? "https://samwash.ua/en/cover" : locale === 'ru' ? "https://samwash.ua/ru/cover" : "https://samwash.ua/cover"} />
            <link rel="canonical" href={locale === 'en' ? "https://samwash.ua/en/cover" : locale === 'ru' ? "https://samwash.ua/ru/cover" : "https://samwash.ua/cover"} />
            {/*<script type="application/ld+json">*/}
            {/*     ` {
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": "${language === 'en' ? "https://samwash.ua/en/cover" : language === 'ru' ? "https://samwash.ua/ru/cover" : "https://samwash.ua/cover"}",
                "logo": "../../../image/nacr/marchello12.jpg"
                }`</script>*/}
        </React.Fragment>
    )
}