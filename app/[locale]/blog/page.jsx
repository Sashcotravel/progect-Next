'use client'

import Image from "next/image";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import {useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {addBlog, setArticle} from "../../../store/blog-reduser";
import s from './blog.module.css'
import background from "../../../image/svg/swlogo.svg";


export default async function Blog() {

    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter()
    const [screen, setScreen] = useState(false)
    const [color, setColor] = useState(false)
    const [articleAll, setArticleAll] = useState([])
    const dispatch = useDispatch();
    const searchParams = useSearchParams()
    let paginatedData = []
    const pageUrl = searchParams.get('page') || 1
    let allBlog = useSelector((state) => state.blog.articleAll)


    useEffect(() => {
        window.scrollTo(0, 0)
        if (window.innerWidth > 900) {
            setScreen(false) }
        else { setScreen(true) }
        const changeColor = () => {
            if (!screen) {
                if (window.scrollY >= 200) {
                    setColor('comp')
                } else {
                    setColor(false)
                }
            }
            if (screen) {
                if (window.scrollY >= 60) {
                    setColor('mob')
                } else {
                    setColor(false)
                }
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

    async function getData() {
        const response = await fetch(`https://cb.samwash.ua/api/v1/blog/${locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'ua'}?perPage=1000`, {
            next: {revalidate: 60}
        });
        const data = await response.json();
        dispatch(addBlog(data.data.data))
        setArticleAll(data.data.data.data)
        return data.data.data;
    }

    async function main() {
        const postsData = await getData();
        let currentPage = Number(pageUrl)
        let rows = 6;

        function displayList(arrData, rowPerPage, page) {
            const postsEl = document.getElementById('posts');
            postsEl.innerHTML = "";
            page--;

            const start = rowPerPage * page;
            const end = start + rowPerPage;
            paginatedData = arrData.slice(start, end);
            if (paginatedData.length === 0) {
                paginatedData = arrData.slice(0, 6);
            }
            setArticleAll(paginatedData)
        }

        function displayPagination(arrData, rowPerPage) {
            const paginationEl = document.getElementById('pagination');
            const pagesCount = Math.ceil(arrData.length / rowPerPage);
            if (pagesCount < Number(pageUrl)) {
                // setSearchParams({ page: 1 })
                searchParams.get(1)
                currentPage = 1
            }
            const ulEl = document.createElement("ul");
            ulEl.classList.add(s['pagination__list']);

            for (let i = 0; i < pagesCount; i++) {
                const liEl = displayPaginationBtn(i + 1);
                ulEl.appendChild(liEl)
            }
            paginationEl.appendChild(ulEl)
        }

        function displayPaginationBtn(page) {
            const liEl = document.createElement("li");
            liEl.classList.add(s['pagination__item'])
            liEl.innerText = page

            if (currentPage === page) {
                liEl.classList.add(s['pagination__item__active']);
                liEl.id = 'pagination__item__active'
            }

            liEl.addEventListener('click', () => {
                window.scrollTo(0, 0);
                currentPage = page
                displayList(postsData, rows, currentPage)

                let currentItemLi = document.getElementById('pagination__item__active');

                // setSearchParams({ page })
                searchParams.get(page)

                currentItemLi.classList.remove(s['pagination__item__active']);
                currentItemLi.id = ''

                liEl.classList.add(s['pagination__item__active']);
                liEl.id = 'pagination__item__active'
            })

            return liEl;
        }

        displayList(postsData, rows, currentPage);
        displayPagination(postsData, rows);
    }

    useEffect(() => {
        main();
        (async function () {
            let item = await
                axios.get(`https://cb.samwash.ua/api/v1/blog/${locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'ua'}?perPage=6`, {
                    next: {revalidate: 60}
                }).then(item => dispatch(addBlog(item.data.data.data)))
            setArticleAll(item?.data?.data.data)
        })()
    }, [])

    let activeStyle = {
        backgroundColor: "#DF4242",
        color: "#FFFFFF",
        border: "none"
    };

    // <div className={s.loader}>Loading...</div>
    return (
        <main className={s.main}>

            <Image src={background} loading='lazy' className={s.imageThanks} alt="lable"/>

            <div>

                <div className={s.breadcrumbs}>
                    <Link className={s.breads} href="/">{t(`home`)}</Link>
                    <span className={s.breads2}> / {t(`blog`)}</span>
                </div>

                <h1 className={s.blogH1}>{t("blog")}</h1>

                <div style={{zIndex: '3', position: 'relative'}}>
                    <div
                        className={`${s.divTitle} ${color === "mob" ? s.styleUpManu : color === "comp" ? s.styleUpManu2 : s.startPosition}`}>
                        <div><Link style={activeStyle} className={s.spanTitle} href={"/blog"}>{t("blogs.all")}</Link>
                        </div>
                        <div><Link className={s.spanTitle} href={"/blog/shares"}>{t("blogs.shares")}</Link>
                        </div>
                        <div><Link className={s.spanTitle} href={"/blog/news"}>{t("blogs.news")}</Link>
                        </div>
                    </div>
                </div>

                    <div className={s.articleBlog}>
                        {
                            articleAll?.map((item, index) => <Link
                                    href={`/blog/${item.type === "article" ? "shares" : "news"}/${item.slug}`}
                                    onClick={() => dispatch(setArticle(item))} className={s.boxOne} key={index}>
                                    <p className={s.spanNew} style={item.type === "article" ? {backgroundColor: ''} : {backgroundColor: 'white', color: 'black'}}
                                    >{item.type === "article" ? t("blogs.shares1") : t("blogs.news1")}</p>
                                    {
                                        item.images.length !== 0 && <div className={s.blockInfo} style={{padding: '0'}}>
                                            <img src={'https://cb.samwash.ua/storage/image/' + item.id + '/' + item.images[0]?.path} alt="photo" width={"100%"}
                                                 height={"90%"} className={s.imgBlog} />
                                        </div>
                                    }
                                    <div className={s.blockInfo} style={item.images.length === 0 ? {marginTop: '20px'} : {}}>
                                        <div className={s.blogTitle}>
                                            <p className={s.articleTime}>{item?.start_date_time.replace(/-/g, ".").slice(0, 10)}</p>
                                            <span className={s.pTitle}>{item.content[0].title}</span>
                                        </div>
                                        <p className={s.spanDesc} dangerouslySetInnerHTML={{
                                            __html: item.content[0].description.length > 190
                                                ? item.content[0].description.slice(0, 190) + "..." : item.content[0].description }}></p>
                                        <div style={{display: 'flex', justifyContent: 'center'}}><button className={s.readMore}>Детальніше</button></div>
                                    </div>
                                </Link>
                            )
                        }
                </div>
            </div>

              {/*paginator*/}
            <div className={s.container} style={{zIndex: '2', position: 'relative'}}>
                <div id="posts" className={s.articleBlog}></div>
                <div id="pagination" className={s.pagination}></div>
            </div>

        </main>
    )
}