import React from "react";
import {useLocale, useTranslations} from "next-intl";


const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://samwash.ua/cover",
        "logo": "https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarchello4.722c428d.jpg&w=1920&q=75"
}

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    return (
        <React.Fragment>
            <title>{t(`coverPage.metaTitle`)}</title>
            <meta name="description" content={t(`coverPage.metaDesc`)} />
            <meta property="og:title" content={t(`coverPage.metaTitle`)} />
            <meta property="og:description" content={t(`coverPage.metaDesc`)} />
            <script type="application/ld+json" id='1' key="structured-data" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <link rel="apple-touch-icon" href="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarchello4.722c428d.jpg&w=1920&q=75"/>
            <meta property="og:image" content="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarchello4.722c428d.jpg&w=1920&q=75"/>
            <meta property="og:url" content={locale === 'en' ? "https://samwash.ua/en/cover" : locale === 'ru' ? "https://samwash.ua/ru/cover" : "https://samwash.ua/cover"} />
            <link rel="canonical" href={locale === 'en' ? "https://samwash.ua/en/cover" : locale === 'ru' ? "https://samwash.ua/ru/cover" : "https://samwash.ua/cover"} />
        </React.Fragment>
    )
}