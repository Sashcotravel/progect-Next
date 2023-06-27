'use client'

import {useLocale, useTranslations} from "next-intl";
import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import axios from "axios";
import s from '../../blog.module.css'
import './MoreInfoBlog.css'
import Link from "next/link";
import ImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css'


export default async function MoreInfoBlog(props) {

    const t = useTranslations();
    const locale = useLocale();
    const { id } = useParams();
    const [article, setArticleOne] = useState()
    const [screen, setScreen] = useState(false)
    const [images, setImages] = useState([])
    let pageImg = -2
    let pageImg2 = -1


    // async function getData() {
    //     await fetch(`https://cb.samwash.ua/api/v1/blog/${locale === "en" ? "en" : locale === "ru" ? "ru" : "ua"}/${id}`, {
    //         next: {revalidate: 60}
    //     }) .then((response) => {return response.json()})
    //         .then((data) => setArticleOne(data.data) )
    // }

    useEffect(  () => {
        (async function () {
                await fetch(`https://cb.samwash.ua/api/v1/blog/${locale === "en" ? "en" : locale === "ru" ? "ru" : "ua"}/${id}`, {
                    next: {revalidate: 60}
                }) .then((response) => {return response.json()})
                    .then((data) => setArticleOne(data.data) )
            // getData()
        })();
    }, [locale, id]);

    useEffect(() => {
        if (article?.images !== undefined) {
            article.images.forEach((item, index) => {
                pageImg2 += 2;
                pageImg += 2;
                if (article?.images[pageImg2] !== undefined) {
                    const newImage = {
                        original: `https://cb.samwash.ua/storage/image/${article.id}/${article?.images[pageImg].path}`,
                        thumbnail: `https://cb.samwash.ua/storage/image/${article.id}/${article?.images[pageImg2].path}`,
                    };
                    setImages((prev) => {
                        return [...prev, newImage]
                    });
                }
            })
        }
    }, [article?.images])


    return (
        <main className={s.main}>

            {!article && <div className={s.loader}>Loading...</div>}

            {article && <div>
                <div>
                    <div className={s.breadcrumbs}>
                        <Link className={s.breads} href="/">{t(`home`)}</Link>
                        <Link className={s.breads} href="/blog"> / {t(`blog`)}</Link>
                        <Link className={s.breads} href={`/blog/${article?.type === "article" ? "shares" : "news"}`}>
                            / {t(`blogs.${article?.type === "article" ? "shares" : "news"}`)}</Link>
                        <span className={s.breads2}> / {t(`blogs.moreInfo`)}</span>
                    </div>

                    <h1 className={s.titleMoreInfo}>{article?.length !== 0 && article?.content[0].title}</h1>

                    <p className={s.articleTimeMore}>{article?.length !== 0 && article?.start_date_time.replace(/-/g, ".").slice(0, 10)}</p>

                    {article.images.length !== 0 && <div style={{zIndex: '2', position: 'relative'}}>
                        <ImageGallery lazyLoad={true}
                                      thumbnailPosition={'left'}
                                      useBrowserFullscreen={true}
                                      items={images}
                                      showIndex={true}
                                      autoPlay={true}
                                      disableThumbnailScroll={true}
                                      alt={'photo'}
                        />
                    </div>}

                    <p className={s.descMoreInfo}
                       dangerouslySetInnerHTML={{__html: article?.content[0]?.description}}></p>

                    <div>
                        <a className={s.buttonMoreInfo} target="_blank"
                           href={article.button_link}>{article?.content[0].button_title}</a>
                    </div>

                </div>
            </div>}

        </main>
    )
}