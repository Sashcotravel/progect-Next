'use client'

import React, {useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {oblFalse, postColIn, postColInId} from "../additionalFunctions";

export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    const {id} = useParams();
    const [pageId, setPageId] = useState('')
    const [pageDescId, setPageDescId] = useState('')
    if(pageId === ''){
        if(Number(id)){
            let f = `${t("titleLisatWashId3")} ${postColInId(id, t)}`
            setPageId(f)
        } else {
            let f = `${t("titleLisatWashId")} ${oblFalse(id, locale)}`
            setPageId(f)
        }
    }
    if(pageId === ''){
        if(Number(id)){
            let f = `${t("descLisatWashId")} ${postColInId(id, t)}`
            setPageDescId(f)
        } else {
            let f = `${t("descLisatWashId")} ${oblFalse(id, locale)}`
            setPageDescId(f)
        }
    }
    return (
        <React.Fragment>
            <title>{`${pageId} ${t("titleLisatWashId2")}`}</title>
            <meta name="description" content={`${pageDescId} ${t("descLisatWashId2")}`} />
            <meta property="og:title" content={`${pageId} ${t("titleLisatWashId2")}`} />
            <meta property="og:description" content={`${pageDescId} ${t("descLisatWashId2")}`} />
            <link rel="apple-touch-icon" href="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
            <meta property="og:image" content="https://progect-next-sashcotravel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"/>
            <meta property="og:url" content={locale === 'en' ? `https://samwash.ua/en/all-car-wash/${id}`
                : locale === 'ru' ? `https://samwash.ua/ru/all-car-wash/${id}` : `https://samwash.ua/all-car-wash/${id}`} />
            <link rel="canonical" href={locale === 'en' ? `https://samwash.ua/en/all-car-wash/${id}`
                : locale === 'ru' ? `https://samwash.ua/ru/all-car-wash/${id}` : `https://samwash.ua/all-car-wash/${id}`} />
        </React.Fragment>
    )
}