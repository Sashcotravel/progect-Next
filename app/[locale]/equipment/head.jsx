import React from "react";
import {useLocale, useTranslations} from "next-intl";

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    return (
        <React.Fragment>
            <title>{t(`equipPage.metaTitle`)}</title>
            <meta name="description" content={t(`equipPage.metaDesc`)} />
            <meta property="og:title" content={t(`equipPage.metaTitle`)} />
            <meta property="og:description" content={t(`equipPage.metaDesc`)} />
            <link rel="apple-touch-icon" href="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FoblWEBP2.f3916742.webp&w=1920&q=75"/>
            <meta property="og:image" content="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FoblWEBP2.f3916742.webp&w=1920&q=75"/>
            <meta property="og:url" content={locale === 'en' ? "https://samwash.ua/en/equipment" : locale === 'ru' ? "https://samwash.ua/ru/equipment" : "https://samwash.ua/equipment"} />
            <link rel="canonical" href={locale === 'en' ? "https://samwash.ua/en/equipment" : locale === 'ru' ? "https://samwash.ua/ru/equipment" : "https://samwash.ua/equipment"} /><link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css' />
            {/*<script type="application/ld+json">*/}
            {/*     ` {
      "@context": "https://schema.org",
      "@type": ["VideoObject", "LearningResource"],
      "name": "${t("oblTitSerch")}",
      "description": "${t("oblDescSerch")}",
      "learningResourceType": "Concept Overview",
      "educationalLevel": "SamWash",
      "contentUrl": "${locale === 'ru' ? "https://samwash.ua/ru/obladnannya" : locale === 'en' ? "https://samwash.ua/en/obladnannya" : "https://samwash.ua/obladnannya"}",
      "thumbnailUrl": [
        "../../uploads/img/svg/videoObl.MOV"
      ],
      "uploadDate": "2023-03-31T08:00:00+08:00"
    }`</script>*/}
            {/*<script type="application/ld+json">*/}
            {/* ` {
    "@context": "https://schema.org",
      "@type": "Organization",
      "url": "${locale === 'ru' ? "https://samwash.ua/ru/obladnannya" : locale === 'en' ? "https://samwash.ua/en/obladnannya" : "https://samwash.ua/obladnannya"}",
      "logo": "../../uploads/img/svg/oblTit.png"
    }` */}
            {/*</script>*/}
        </React.Fragment>
    )
}