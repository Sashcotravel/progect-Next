'use client'

import {useLocale, useTranslations} from "next-intl";
import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import axios from "axios";
import s from '../../blog.module.css'
import './MoreInfoBlog.css'
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from "next/link";


export default async function MoreInfoBlog() {

    const t = useTranslations();
    const locale = useLocale();
    const [article, setArticleOne] = useState()
    const [screen, setScreen] = useState(false)
    const { id } = useParams();


    useEffect(() => {
        (async function() {
                let data = await axios.get(`https://cb.samwash.ua/api/v1/blog/${locale === "en" ? "en" : locale === "ru" ? "ru" : "ua"}/${id}`);
                setArticleOne(data.data.data);
        })();
    }, [id]);

    useEffect(() => {
        if(article?.length === 0) return
        if(article?.images.length === 0) return

        function reCaptchaOnFocus() {
            let head = document.getElementsByTagName("head")[0];
            let script = document.createElement("link");
            let script2 = document.createElement("script");
            script.rel = "stylesheet";
            script.id = "fancyapps";
            script2.src = "https://cdn.tailwindcss.com";
            script2.id = "tailwindcss";
            script.href = "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css";
            head.appendChild(script);
            head.appendChild(script2);
        }
        reCaptchaOnFocus();

        return () => {
            if(!article?.images[0]) return
            document.getElementById('tailwindcss').remove()
            document.getElementById('fancyapps').remove()
        };
    }, [article?.images]);

    useEffect(() => {
        setTimeout(() => {
            if(article?.images?.length === 0) return
            const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {Dots: true,});

            const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
                Sync: { target: mainCarousel, friction: 0 },
                Dots: false, Navigation: false, center: true, slidesPerPage: 1, infinite: false,});

            Fancybox.bind('[data-fancybox="gallery"]', {
                Carousel: {on: {change: (that) => {
                            mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                                friction: 0,});},},},});
        }, 300)
    }, [article?.images?.length])

    let pageImg = -2
    let pageImg2 = -1
    let pageImg3 = -1

    return (
        <main className={s.main}>

            {!article && <div className={s.loader}>Loading...</div> }

            {article && <div>
                <div className={s.breadcrumbs}>
                    <Link className={s.breads} href="/">{t(`home`)}</Link>
                    <Link className={s.breads} href="/blog"> / {t(`blog`)}</Link>
                    <Link className={s.breads} href={`/blog/${article?.type === "article" ? "shares" : "news"}`}>
                         / {t(`blogs.${article?.type === "article" ? "shares" : "news"}`)}</Link>
                    <span className={s.breads2}> / {t(`blogs.moreInfo`)}</span>
                </div>

                <h1 className={s.titleMoreInfo}>{article.length !== 0 && article?.content[0].title}</h1>

                <p className={s.articleTimeMore}>{article.length !== 0 && article?.start_date_time.replace(/-/g, ".").slice(0, 10)}</p>

                { article?.images.length !== 0 &&
                    <figure>
                        <div id="mainCarousel" className="carousel w-10/12 max-w-5xl mx-auto">
                            {
                                article?.images.map((item, index) => { // webp 1, 3, 5
                                    pageImg2 += 2;
                                    pageImg += 2;
                                    if (article?.images[pageImg2] !== undefined) {
                                        if (item?.path.slice(0, 4) === "http") {
                                            return <div key={index} className="carousel__slide" data-fancybox="gallery"
                                                        data-src={article?.you_tube_link}>
                                                <iframe width="100%" height="100%" key={index} src={article?.you_tube_link} title="video" />
                                            </div>;
                                        }
                                        return <div key={index} className="carousel__slide" data-fancybox="gallery"
                                                    data-src={"https://cb.samwash.ua/storage/image/" + article.id + '/' + article?.images[pageImg]?.path}>
                                            <img key={index} src={"https://cb.samwash.ua/storage/image/"+ article.id + '/' + article?.images[pageImg2].path} alt="image" />
                                        </div>;
                                    }
                                })
                            }
                        </div>
                        <div id="thumbCarousel" className="carousel max-w-xl mx-auto">
                            {
                                article?.images.map((item, index) => {
                                    pageImg3 += 2;
                                    if (article?.images[pageImg3] !== undefined) {
                                        if (item?.path.slice(0, 4) === "http") {
                                            return <div key={index} className="carousel__slide">
                                                <iframe key={index} className="panzoom__content" src={article?.you_tube_link} title="video" />
                                            </div>;
                                        }
                                        return <div key={index} className="carousel__slide">
                                            <img className="panzoom__content" key={index}
                                                 src={"https://cb.samwash.ua/storage/image/"+ article.id + '/' + article?.images[pageImg3]?.path} alt="image" />
                                        </div>;
                                    }
                                })
                            }
                        </div>
                    </figure>
                }

                <p className={s.descMoreInfo} dangerouslySetInnerHTML={{ __html: article?.content[0].description }}></p>

                {
                    article?.button_link &&
                    <div>
                        <a className={s.buttonMoreInfo} target="_blank" href={article.button_link}>{article?.content[0].button_title}</a>
                    </div>
                }

            </div>}

        </main>
    )
}