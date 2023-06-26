import React from "react";
import {useLocale, useTranslations} from "next-intl";

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    return (
        <React.Fragment>
            <title>{t("titleLisatWash")}</title>
            <meta name="description" content={t("descLisatWash")} />
            <meta property="og:title" content={t("titleLisatWash")} />
            <meta property="og:description" content={t("descLisatWash")} />
            <link rel="apple-touch-icon" href='https://samwash.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75' />
            <meta property="og:image" content='https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75' />
            <meta property="og:url" content={locale === 'en' ? "https://samwash.ua/en/all-car-wash" : locale === 'ru' ? "https://samwash.ua/ru/all-car-wash" : "https://samwash.ua/all-car-wash"} />
            <link rel="canonical" href={locale === 'en' ? "https://samwash.ua/en/all-car-wash" : locale === 'ru' ? "https://samwash.ua/ru/all-car-wash" : "https://samwash.ua/all-car-wash"} />
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