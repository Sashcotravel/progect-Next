import React from "react";
import {useLocale, useTranslations} from "next-intl";

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    return (
        <React.Fragment>
            <title>{t("mainTit")}</title>
            <meta name="description" content={t("mainDesc")} />
            <meta property="og:title" content={t("mainTit")} />
            <meta property="og:description" content={t("mainDesc")} />
            <link rel="apple-touch-icon" href="https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
            <meta property="og:image" content="https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
             <meta property="og:url" content={locale === 'en' ? "https://samwash.ua/en/" : locale === 'ru' ? "https://samwash.ua/ru/" : "https://samwash.ua/"} />
             <link rel="canonical" href={locale === 'en' ? "https://samwash.ua/en/" : locale === 'ru' ? "https://samwash.ua/ru/" : "https://samwash.ua/"} />
            {/*<script type="application/ld+json">*/}
            {/*      { `"@context": "https://schema.org",*/}
            {/*      "@type": ["VideoObject", "LearningResource"],*/}
            {/*      "name": "${t("porohTitSerch")}",*/}
            {/*      "description": "${t("porohDescSerch")}",*/}
            {/*      "learningResourceType": "Concept Overview",*/}
            {/*      "educationalLevel": "SamWash",*/}
            {/*      "contentUrl": "${locale === 'ru' ? "https://samwash.ua/ru/porohotyag" : locale === 'en' ? "https://samwash.ua/en/porohotyag" : "https://samwash.ua/porohotyag"}",*/}
            {/*      "thumbnailUrl": [*/}
            {/*        "https://www.youtube.com/watch?v=OJv67JG7QRo"*/}
            {/*      ],*/}
            {/*      "uploadDate": "2023-03-31T08:00:00+08:00"*/}
            {/*    `}</script>*/}
        </React.Fragment>
    )
}