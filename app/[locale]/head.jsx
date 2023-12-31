import React from "react";
import {useLocale, useTranslations} from "next-intl";

const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://samwash.ua/",
    "logo": "https://samwash.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"
}

const schema2 = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://samwash.ua/",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://samwash.ua/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
}

const schema3 = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Title of a News Article",
    "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
    ],
    "datePublished": "2015-02-05T08:00:00+08:00",
    "dateModified": "2015-02-05T09:20:00+08:00",
    "author": [{
        "@type": "Person",
        "name": "Jane Doe",
        "url": "https://example.com/profile/janedoe123"
    },{
        "@type": "Person",
        "name": "John Doe",
        "url": "https://example.com/profile/johndoe123"
    }]
}

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    return (
        <React.Fragment>
            <title>{t("mainTit")}</title>
            <meta name="description" content={t("mainDesc")} />
            <meta property="og:title" content={t("mainTit")} />
            <meta property="og:description" content={t("mainDesc")} />
            <link rel="origin" href='https://samwash.ua' />
            <meta property="og:type" content="website" />
            <script type="application/ld+json" id='1' key="structured-data" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" id='3' key="structured-data" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }} />
            <script type="application/ld+json" id='4' key="structured-data" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }} />
            <link rel="apple-touch-icon" href='https://samwash.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75' />
            <meta property="og:image" content='https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75' />
            <meta property="og:url" content={locale === 'en' ? "https://samwash.ua/en/" : locale === 'ru' ? "https://samwash.ua/ru/" : "https://samwash.ua/"} />
            <link rel="canonical" href={locale === 'en' ? "https://samwash.ua/en/" : locale === 'ru' ? "https://samwash.ua/ru/" : "https://samwash.ua/"} />
            <link rel="alternate" hrefLang="en" href="https://samwash.ua/en/" />
            <link rel="alternate" hrefLang="ru" href="https://samwash.ua/ru/" />
            <link rel="alternate" hrefLang="uk-UA" href="https://samwash.ua/" />
            <link rel="alternate" hrefLang="x-default" href="https://samwash.ua/" />
            <script async id='2' src="https://www.googletagmanager.com/gtag/js?id=AW-11190466139"></script>
            <link rel="dns-prefetch" href="https://www.googletagmanager.com/gtag/js?id=G-MMYDFHJ1EK" />
            <meta name="robots" content="noindex" />
        </React.Fragment>
    )
}