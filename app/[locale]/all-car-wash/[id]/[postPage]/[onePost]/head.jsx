'use client'

import React, {useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {useSelector} from "react-redux";
import {listWash} from "../../../../../../users";

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    const {id, postPage, onePost} = useParams();
    const [pageId, setPageId] = useState('')
    const [postPagePost, setPostPage] = useState('')
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
            <title>${`${t("titleH1OnePost")} ${locale === 'en' ? postOne?.titleH1EN : locale === 'ru'
                ? postOne?.titleH1RU : postOne?.titleH1}`}</title>
            <meta name="description" content={`${t("metaDesc2")} ${locale === 'en' ? postOne?.descTitleEN : locale === 'ru'
                ? postOne?.descTitleRU : postOne?.descTitle}`} />
            <meta property="og:title" content={`${pageId} ${t("titleLisatWashId2")}`} />
            <meta property="og:description" content={`${postPagePost} ${t("descLisatWashId2")}`} />
            <link rel="apple-touch-icon" href="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
            <meta property="og:image" content="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
            <meta property="og:url" content={locale === 'en' ? `https://samwash.ua/en/all-car-wash/${id}/${postPage}/${onePost}`
                : locale === 'ru' ? `https://samwash.ua/ru/all-car-wash/${id}/${postPage}/${onePost}` : `https://samwash.ua/all-car-wash/${id}/${postPage}/${onePost}`} />
            <link rel="canonical" href={locale === 'en' ? `https://samwash.ua/en/all-car-wash/${id}/${postPage}/${onePost}`
                : locale === 'ru' ? `https://samwash.ua/ru/all-car-wash/${id}/${postPage}/${onePost}` : `https://samwash.ua/all-car-wash/${id}/${postPage}/${onePost}`} />
        </React.Fragment>
    )
}