'use client'

import React, {useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {oblFalse, postColIn, postColInId} from "../../additionalFunctions";

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    const {id, postPage} = useParams();
    const [pageId, setPageId] = useState('')
    const [postPagePost, setPostPage] = useState('')
    if(pageId === ''){
        let f = `${t("titleLisatWashId")} ${oblFalse(id, locale)} ${postColInId(postPage, t)}`
        setPageId(f)
    }
    if(postPagePost === ''){
        let f = `${t("descLisatWashId3")} ${oblFalse(id, locale)} ${postColInId(postPage, t)}`
        setPostPage(f)
    }
    return (
        <React.Fragment>
            <title>{`${pageId} ${t("titleLisatWashId2")}`}</title>
            <meta name="description" content={`${postPagePost} ${t("descLisatWashId2")}`} />
            <meta property="og:title" content={`${pageId} ${t("titleLisatWashId2")}`} />
            <meta property="og:description" content={`${postPagePost} ${t("descLisatWashId2")}`} />
            <link rel="apple-touch-icon" href="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
            <meta property="og:image" content="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
            <meta property="og:url" content={locale === 'en' ? `https://samwash.ua/en/all-car-wash/${id}/${postPage}`
                : locale === 'ru' ? `https://samwash.ua/ru/all-car-wash/${id}/${postPage}` : `https://samwash.ua/all-car-wash/${id}/${postPage}`} />
            <link rel="canonical" href={locale === 'en' ? `https://samwash.ua/en/all-car-wash/${id}/${postPage}`
                : locale === 'ru' ? `https://samwash.ua/ru/all-car-wash/${id}/${postPage}` : `https://samwash.ua/all-car-wash/${id}/${postPage}`} />
        </React.Fragment>
    )
}