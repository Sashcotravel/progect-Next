import React from "react";
import {useLocale, useTranslations} from "next-intl";

const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Блог",
    "image": [
        "https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"
    ],
    "datePublished": "2023-04-17T08:00:00+08:00",
    "author": [{
        "@type": "Person",
        "name": "Sashko",
        "url": "https://samwash.ua/blog/shares"
    },{
        "@type": "Person",
        "name": "Sashko",
        "url": "https://samwash.ua/blog/news"
    }]
}

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    return (
        <React.Fragment>
            <title>{t("blog")}</title>
            <meta name="description" content={t("blog")} />
            <meta property="og:title" content={t("blog")} />
            <meta property="og:description" content={t(`blog`)}/>
            <script type="application/ld+json" id='1' key="structured-data" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <link rel="apple-touch-icon" href="https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
            <meta property="og:image" content="https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
             <meta property="og:url" content={locale === 'en' ? "https://samwash.ua/en/blog" : locale === 'ru' ? "https://samwash.ua/ru/blog" : "https://samwash.ua/blog"} />
             <link rel="canonical" href={locale === 'en' ? "https://samwash.ua/en/blog" : locale === 'ru' ? "https://samwash.ua/ru/blog" : "https://samwash.ua/blog"} />
        </React.Fragment>
    )
}