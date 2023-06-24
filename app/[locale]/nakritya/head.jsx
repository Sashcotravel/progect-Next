import React from "react";
import {useLocale, useTranslations} from "next-intl";

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    return (
        <React.Fragment>
            <title>{t(`porohPage.metaTitle`)}</title>
            <meta name="description" content={t(`porohPage.metaDesc`)}/>
            <meta property="og:title" content={t(`porohPage.metaTitle`)}/>
            <meta property="og:description" content={t(`porohPage.metaDesc`)}/>
            <link rel="apple-touch-icon" href="https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
            <meta property="og:image" content="https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
             <meta property="og:url" content={locale === 'en' ? "https://samwash.ua/en/porohotyag" : locale === 'ru' ? "https://samwash.ua/ru/porohotyag" : "https://samwash.ua/porohotyag"} />
             <link rel="canonical" href={locale === 'en' ? "https://samwash.ua/en/porohotyag" : locale === 'ru' ? "https://samwash.ua/ru/porohotyag" : "https://samwash.ua/porohotyag"} />
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