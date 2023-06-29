import React from "react";
import {useLocale, useTranslations} from "next-intl";

const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://samwash.ua/equipment",
    "logo": "https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FoblWEBP2.f3916742.webp&w=1920&q=75"
}

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();

    const schema2 = {
        "@context": "https://schema.org",
        "@type": ["VideoObject", "LearningResource"],
        "name": `${t("oblTitSerch")}`,
        "description": `${t("oblDescSerch")}`,
        "learningResourceType": "Concept Overview",
        "educationalLevel": "SamWash",
        "contentUrl": "https://samwash.ua/obladnannya",
        "thumbnailUrl": ["https://samwash.ua/static/media/pinaNis.3dfefda1afacfc03f3b3.mp4"],
        "uploadDate": "2023-03-31T08:00:00+08:00"
    }

    return (
        <React.Fragment>
            <title>{t(`equipPage.metaTitle`)}</title>
            <meta name="description" content={t(`equipPage.metaDesc`)} />
            <meta property="og:title" content={t(`equipPage.metaTitle`)} />
            <meta property="og:description" content={t(`equipPage.metaDesc`)} />
            <script type="application/ld+json" id='1' key="structured-data" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" id='2' key="structured-data" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }} />
            <link rel="apple-touch-icon" href="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FoblWEBP2.f3916742.webp&w=1920&q=75"/>
            <meta property="og:image" content="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FoblWEBP2.f3916742.webp&w=1920&q=75"/>
            <meta property="og:url" content={locale === 'en' ? "https://samwash.ua/en/equipment" : locale === 'ru' ? "https://samwash.ua/ru/equipment" : "https://samwash.ua/equipment"} />
            <link rel="canonical" href={locale === 'en' ? "https://samwash.ua/en/equipment" : locale === 'ru' ? "https://samwash.ua/ru/equipment" : "https://samwash.ua/equipment"} /><link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css' />
        </React.Fragment>
    )
}