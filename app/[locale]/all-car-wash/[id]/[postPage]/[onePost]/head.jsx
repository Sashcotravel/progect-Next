'use client'

import React, {useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {listWash} from "../../../../../../users";

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    const {id, postPage, onePost} = useParams();
    const [postOne, setPostOne] = useState('')

    if (postOne.length === 0) {
        listWash.filter(item => {
            if (item.st2 === onePost) {
                setPostOne(item)
            }
        })
    }

    return (
        <React.Fragment>
            <title>{`${t("titleH1OnePost")} ${locale === 'en' ? postOne?.titleH1EN : locale === 'ru'
                ? postOne?.titleH1RU : postOne?.titleH1}`}</title>
            <meta name="description" content={`${t("metaDesc2")} ${locale === 'en' ? postOne?.descTitleEN : locale === 'ru'
                ? postOne?.descTitleRU : postOne?.descTitle}`} />
            <meta property="og:title" content={`${t("titleH1OnePost")} ${locale === 'en' ? postOne?.titleH1EN : locale === 'ru'
                ? postOne?.titleH1RU : postOne?.titleH1}`} />
            <meta property="og:description" content={`${t("metaDesc2")} ${locale === 'en' ? postOne?.descTitleEN : locale === 'ru'
                ? postOne?.descTitleRU : postOne?.descTitle}`} />
            <link rel="apple-touch-icon" href="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fasset2.a61db8da.jpg&w=384&q=75"/>
            <meta property="og:image" content="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fasset2.a61db8da.jpg&w=384&q=75"/>
            <meta property="og:url" content={locale === 'en' ? `https://samwash.ua/en/all-car-wash/${id}/${postPage}/${onePost}`
                : locale === 'ru' ? `https://samwash.ua/ru/all-car-wash/${id}/${postPage}/${onePost}` : `https://samwash.ua/all-car-wash/${id}/${postPage}/${onePost}`} />
            <link rel="canonical" href={locale === 'en' ? `https://samwash.ua/en/all-car-wash/${id}/${postPage}/${onePost}`
                : locale === 'ru' ? `https://samwash.ua/ru/all-car-wash/${id}/${postPage}/${onePost}` : `https://samwash.ua/all-car-wash/${id}/${postPage}/${onePost}`} />
        </React.Fragment>
    )
}