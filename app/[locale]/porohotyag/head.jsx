import React from "react";
import {useTranslations} from "next-intl";

export default function Head(){
    const t = useTranslations();
    return (
        <React.Fragment>
            <title>{t(`porohPage.metaTitle`)}</title>
            <meta name="description" content={t(`porohPage.metaDesc`)}/>
            <meta property="og:title" content={t(`porohPage.metaTitle`)}/>
            <meta property="og:description" content={t(`porohPage.metaDesc`)}/>
            <link rel="apple-touch-icon" href="../../logo144.png"/>
            <meta property="og:image" content="../../logo144.png"/>
            {/* <meta property="og:url" content={language === 'en' ? "https://samwash.ua/en/porohotyag" : language === 'ru' ? "https://samwash.ua/ru/porohotyag" : "https://samwash.ua/porohotyag"} />*/}
            {/* <link rel="canonical" href={language === 'en' ? "https://samwash.ua/en/porohotyag" : language === 'ru' ? "https://samwash.ua/ru/porohotyag" : "https://samwash.ua/porohotyag"} />*/}
        </React.Fragment>
    )
}