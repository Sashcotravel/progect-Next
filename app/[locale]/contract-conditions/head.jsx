import React from "react";
import {useLocale, useTranslations} from "next-intl";

export default function Head(){
    const t = useTranslations('contract-conditions');
    const locale = useLocale();
    return (
        <React.Fragment>
            <title>{t("contract-conditionsMeta")}</title>
            <meta name="description" content={t("contract-conditionsMetaDesc")} />
            <meta property="og:title" content={t("contract-conditionsMeta")} />
            <meta property="og:description" content={t("contract-conditionsMetaDesc")} />
            <link rel="origin" href='https://samwash.ua' />
            <meta property="og:type" content="website" />
            <link rel="apple-touch-icon" href='https://samwash.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75' />
            <meta property="og:image" content='https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75' />
            <meta property="og:url" content={locale === 'en' ? "https://samwash.ua/en/privacy-policy" : locale === 'ru' ? "https://samwash.ua/ru/privacy-policy" : "https://samwash.ua/privacy-policy"} />
            <link rel="canonical" href={locale === 'en' ? "https://samwash.ua/en/privacy-policy" : locale === 'ru' ? "https://samwash.ua/ru/privacy-policy" : "https://samwash.ua/privacy-policy"} />
        </React.Fragment>
    )
}