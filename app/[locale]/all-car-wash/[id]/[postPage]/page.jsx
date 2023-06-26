'use client'

import {useLocale, useTranslations} from 'next-intl';
import Link from 'next-intl/link';
import React, {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import background from "../../../../../image/svg/swlogo.svg";
import s from "./../../ListWash.module.css";
import Image from "next/image";
import './../../ListWash.css'
import image from "../../../../../image/svg/Route.svg";
import image1 from "../../../../../image/svg/Location_icon.svg";
import image3 from "../../../../../image/svg/Ω.svg";
import {listWash} from "../../../../../users";
import {useDispatch} from "react-redux";
import {addPost} from "../../../../../store/listwash-reduser";
import {clickObl, oblFalse, oblTrue, postColIn} from "../../additionalFunctions";

let col = [];
let col2 = 0;
let colP = 0;
let obl = "all";
let colPost;
let allObl = [];

export default function ListWash3() {

    const t = useTranslations();
    const locale = useLocale();
    const {id, postPage} = useParams();
    const router = useRouter()
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch()

    const onePost = (st2) => {
        listWash.forEach(item => {
            if(item.st2 === st2){
                dispatch(addPost(item))
            }
        });
    };

    let url = locale === 'en'

    useEffect(() => {
        window.scrollTo(0, 0);
        setChecked(true)
        const optionMenu = document.querySelector(".select-menu"),
            sBtn_text = optionMenu.querySelector(".sBtn-text");
        const optionMenu2 = document.querySelector(".select-menu2"),
            sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");
        if (Number(postPage) > 10 || Number(postPage) < 1) {
            router.push('/error')
        }
        colPost = Number(postPage);
        obl = oblFalse(id, locale);
        sBtn_text2.innerText = postPage;
        optionMenu2.classList.remove("active");
        let selectedOption = document.getElementById(obl).textContent;
        sBtn_text.innerText = selectedOption;

    }, [])

    useEffect(() => {
        const optionMenu = document.querySelector(".select-menu");
        const selectBtn = optionMenu.querySelector(".select-btn");
        const options = optionMenu.querySelectorAll(".option");
        const sBtn_text = optionMenu.querySelector(".sBtn-text");
        selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
        options.forEach(option => {
            option.addEventListener("click", () => {
                clickRegion(option.querySelector(".option-text"))
                let selectedOption = option.querySelector(".option-text").innerText;
                sBtn_text.innerText = selectedOption;
                optionMenu.classList.remove("active");
            });
        });

        const optionMenu2 = document.querySelector(".select-menu2"),
            selectBtn2 = optionMenu2.querySelector(".select-btn2"),
            options2 = optionMenu2.querySelectorAll(".option2"),
            sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");
        selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));
        options2.forEach(option2 => {
            option2.addEventListener("click", () => {
                let selectedOption2 = option2.querySelector(".option-text2").innerText;
                sBtn_text2.innerText = selectedOption2;
                optionMenu2.classList.remove("active");
            });
        });
    }, [])

    const container = ({item, city, vOb, imgNum, map, city2, st, i,
                           proect, st2, st3, st4, city3, city4, obl, colPost}) => {
        let oblUrl = oblTrue(obl, locale);
        if (locale === 'en') oblUrl = clickObl(obl)
        return (
            <div key={imgNum} className="zPoz">
                {proect === true && <div className={s.addBlock + ' ' + s.projectClass}>{t("projectBuild")}</div>}
                <div className={s.boxItem}>
                    <p className={s.pRed}>SAMWASH</p>
                    <div className={s.divRoad}>
                        <div>
                            <p className={s.titlePName}>{locale === 'ru' ? city4 : locale === 'en' ? city3 : city}</p>
                            <p className={s.titlePName2}>{st !== undefined && st !== "" ? `${t("street")} ${
                                locale === 'ru' ? st4 : locale === 'en' ? st3 : st}` : ""}</p>
                        </div>
                        <a href={map} target="_blank" rel="noreferrer">
                            <Image src={image} style={{margin: "0 10px 0 0"}} width={53.74} height={53.74}
                                   alt="Прокласти маршрут"/>
                        </a>
                    </div>
                    <Link onClick={() => onePost(st2)} href={`/all-car-wash${oblUrl}/${colPost}/${st2}`}>
                        <button key={imgNum} id={imgNum} className={s.redBut}>{t("Details")}</button>
                    </Link>
                </div>
            </div>
        );
    };


    let tap = false

    const closeSelect = (e) => {
        tap = true
        const optionMenu2 = document.querySelector(".select-menu2");
        if (e.target.id === '1') {
            optionMenu2.classList.remove("active");
        }
    };

    const closeSelect2 = (e) => {
        if (e.target.id === 'divBox' && tap === true) {
            const optionMenu2 = document.querySelector(".select-menu2");
            const optionMenu = document.querySelector(".select-menu");
            optionMenu.classList.remove("active");
            optionMenu2.classList.remove("active");
        }
    };

    const clickNumber = (e) => {
        let oblUrl = oblTrue(obl, locale);
        // if(e.target.title === ''){
        //     router.push(`/all-car-wash`)
        // } else
        if (obl !== 'all') {
            router.push(`/all-car-wash${oblUrl}/${e.target.title}`)
        } else {
            router.push(`/all-car-wash/${e.target.title}`)
        }
    };

    const clickRegion = (e) => {
        let oblUrl = oblTrue(e.id, locale);
        if(e.id === 'all'){
            router.push(`/all-car-wash`)
        } else {
            router.push(`/all-car-wash${oblUrl}`)
        }
    };

    if(obl === 'all'){
        colPost = Number(postPage);
        obl = oblFalse(id, locale);
    }

    useEffect(() => {
        col = []
        listWash.filter(item => {
            if(item.obl === obl || item.obl2 === obl){
                col.push(item.colPost)
            }
        })
    }, [])


    return (
        <main className={s.divBlock}>

            <Image src={require('../../../../logo144.png')} alt='aa' />

            <Image src={background} loading='lazy' className={s.imageThanks} alt="lable"/>

            <div className={s.breadcrumbs}>
                <Link className={s.breads} href="/">{t(`home`)}</Link>
                <Link className={s.breads} href="/all-car-wash"> / {t(`OurCarWashes`)}</Link>
                {<Link className={s.breads} href={`/all-car-wash/${id}`}> / {oblFalse(id, locale)}</Link>  }
                { colPost === 0 ? "" : colPost === undefined ? ""
                    : <span className={s.breads2}>
                        {colPost !== 0 ? " / " : ""} {postColIn(colPost, "breads2", t)} </span> }
            </div>

            <div className={s.divBoxTitASel} id='divBox' onClick={closeSelect2}>
                <div>
                    <h1 className={s.titleH2} id='divBox'>{t("title2")}</h1>
                    { locale === "en" && <h3 className="titleH4">in {oblFalse(id, locale)} <p>{postColIn(colPost, "titleH4", t)}</p></h3> }
                    { locale !== "en" && <h3 className="titleH4">в {oblFalse(id, locale).split(" ")[0]
                        .slice(0, obl.split(" ")[0].length - 1)}ій {t("oblast")} {postColIn(colPost, "titleH4321", t)}</h3>}
                </div>

                <div className={s.marginLeftSelector}>
                    <div className="select-menu"
                         style={{zIndex: '3', position: 'relative', backgroundColor: 'transparent'}}>
                        <div className="select-btn" id='1' onClick={closeSelect}>
                            <span id="sBtn-text" className="sBtn-text">{t("SelectAnArea")}</span>
                            <i className="bx bx-chevron-down"></i>
                        </div>
                        <ul className="options">
                            <li className="option">
                                <i className="bx bxl-github"></i>
                                <Image style={{marginRight: '10px'}} src={image1} alt='photo'/>
                                <span id='all' className="option-text">{t("SelectAnArea")}</span>
                            </li>
                            <li className="option">
                                <i className="bx bxl-instagram-alt"></i>
                                <Image alt='photo' style={{marginRight: '10px'}} src={image1}/>
                                <span className="option-text"
                                      id={url ? "Dnipropetrovska Oblast" : "Дніпропетровська область"}>
                                    {url ? "Dnipropetrovska Oblast" : "Дніпропетровська область"}</span>
                            </li>
                            <li className="option">
                                <i className="bx bxl-linkedin-square"></i>
                                <Image alt='photo' style={{marginRight: '10px'}} src={image1}/>
                                <span className="option-text" id={url ? "Ternopilska Oblast" : "Тернопільська область"}>
                                    {url ? "Ternopilska Oblast" : "Тернопільська область"}</span>
                            </li>
                            <li className="option">
                                <i className="bx bxl-facebook-circle"></i>
                                <Image alt='photo' style={{marginRight: '10px'}} src={image1}/>
                                <span className="option-text" id={url ? "Zakarpatska Oblast" : "Закарпатська область"}>
                                    {url ? "Zakarpatska Oblast" : "Закарпатська область"}</span>
                            </li>
                            <li className="option">
                                <i className="bx bxl-twitter"></i>
                                <Image alt='photo' style={{marginRight: '10px'}} src={image1}/>
                                <span className="option-text" id={url ? "Zhytomyrska Oblast" : "Житомирська область"}>
                                    {url ? "Zhytomyrska Oblast" : "Житомирська область"}</span>
                            </li>
                            <li className="option">
                                <i className="bx bxl-linkedin-square"></i>
                                <Image alt='photo' style={{marginRight: '10px'}} src={image1}/>
                                <span className="option-text"
                                      id={url ? "Ivano-Frankivska Oblast" : "Франківська область"}>
                                    {url ? "Ivano-Frankivska Oblast" : "Франківська область"}</span>
                            </li>
                            <li className="option">
                                <i className="bx bxl-facebook-circle"></i>
                                <Image alt='photo' style={{marginRight: '10px'}} src={image1}/>
                                <span className="option-text" id={url ? "Poltavska Oblast" : "Полтавська область"}>
                                    {url ? "Poltavska Oblast" : "Полтавська область"}</span>
                            </li>
                            <li className="option">
                                <i className="bx bxl-twitter"></i>
                                <Image alt='photo' style={{marginRight: '10px'}} src={image1}/>
                                <span className="option-text" id={url ? "Volynska Oblast" : "Волинська область"}>
                                    {url ? "Volynska Oblast" : "Волинська область"}</span>
                            </li>
                            <li className="option">
                                <i className="bx bxl-linkedin-square"></i>
                                <Image alt='photo' style={{marginRight: '10px'}} src={image1}/>
                                <span className="option-text" id={url ? "Luhansk Oblast" : "Луганська область"}>
                                    {url ? "Luhanska Oblast" : "Луганська область"}</span>
                            </li>
                            <li className="option">
                                <i className="bx bxl-facebook-circle"></i>
                                <Image alt='photo' style={{marginRight: '10px'}} src={image1}/>
                                <span className="option-text" id={url ? "Vinnytska Oblast" : "Вінницька область"}>
                                    {url ? "Vinnytska Oblast" : "Вінницька область"}</span>
                            </li>
                            <li className="option">
                                <i className="bx bxl-twitter"></i>
                                <Image alt='photo' style={{marginRight: '10px'}} src={image1}/>
                                <span className="option-text" id={url ? "Lvivska Oblast" : "Львівська область"}>
                                    {url ? "Lvivska Oblast" : "Львівська область"}</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="select-menu2"
                             style={{zIndex: '2', position: 'relative', backgroundColor: 'transparent'}}>
                            <div className="select-btn2" id='2' onClick={closeSelect}
                                 style={{backgroundColor: 'rgb(41, 54, 59)', border: '1px solid gray'}}>
                                <span className="sBtn-text2">{t("NumberOfPosts")}</span>
                                <i className="bx2 bx-chevron-down2"></i>
                            </div>
                            <ul className="options2" style={{backgroundColor: 'rgb(41, 54, 59)'}}>
                                <li className="option2">
                                    <i className="bx2 bxl-github2"></i>
                                    <Image alt='photo' style={{marginRight: '10px'}} src={image3}/>
                                    <span id='0' className="option-text2"
                                          onClick={clickNumber}>{t("NumberOfPosts")}</span>
                                </li>
                                {col.some(item => item === 2) && <li className="option2" title='2' onClick={clickNumber}>
                                    <i className="bx2 bxl-instagram-alt2" title='2'></i>
                                    <Image alt='photo' style={{marginRight: '10px'}} title='2' src={image3}/>
                                    <span id='2' title='2' className="option-text2">2</span>
                                </li>}
                                {col.some(item => item === 3) && <li className="option2" title='3' onClick={clickNumber}>
                                    <i className="bx2 bxl-linkedin-square2" title='3'></i>
                                    <Image alt='photo' style={{marginRight: '10px'}} title='3' src={image3}/>
                                    <span id='3' title='3' className="option-text2">3</span>
                                </li>}
                                {col.some(item => item === 4) && <li className="option2" title='4' onClick={clickNumber}>
                                    <i className="bx2 bxl-facebook-circle2" title='4'></i>
                                    <Image alt='photo' style={{marginRight: '10px'}} title='4' src={image3}/>
                                    <span id='4' title='4' className="option-text2">4</span>
                                </li>}
                                {col.some(item => item === 5) && <li className="option2" title='5' onClick={clickNumber}>
                                    <i className="bx2 bxl-twitter2" title='5'></i>
                                    <Image alt='photo' style={{marginRight: '10px'}} title='5' src={image3}/>
                                    <span id='5' title='5' className="option-text2">5</span>
                                </li>}
                                {col.some(item => item === 6) && <li className="option2" title='6' onClick={clickNumber}>
                                    <i className="bx2 bxl-linkedin-square3" title='6'></i>
                                    <Image alt='photo' style={{marginRight: '10px'}} title='6' src={image3}/>
                                    <span id='6' title='6' className="option-text2">6</span>
                                </li>}
                                {col.some(item => item === 7) && <li className="option2" title='7' onClick={clickNumber}>
                                    <i className="bx2 bxl-facebook-circle3" title='7'></i>
                                    <Image alt='photo' style={{marginRight: '10px'}} title='7' src={image3}/>
                                    <span id='7' title='7' className="option-text2">7</span>
                                </li>}
                                {col.some(item => item === 10) && <li className="option2" title='10' onClick={clickNumber}>
                                    <i className="bx2 bxl-twitter3"></i>
                                    <Image alt='photo' style={{marginRight: '10px'}} title='10' src={image3}/>
                                    <span id='10' title='10' className="option-text2">10</span>
                                </li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.divBox12} style={{zIndex: "1", position: "relative"}}>
                {
                    listWash.map((item, i) => {
                        if (item.colPost === colPost && item.obl === obl && item.vOb !== undefined) {
                            return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect, item.st2,
                                item.st3, item.st4, item.city3, item.city4, item.obl, item.colPost);
                        } else if (item.colPost === colPost && item.obl2 === obl && item.vOb !== undefined) {
                            return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect, item.st2,
                                item.st3, item.st4, item.city3, item.city4, item.obl, item.colPost);
                        }
                    })
                }
                {
                    listWash.map((item, i) => {
                    if (item.colPost === colPost && item.obl === obl && item.vOb === undefined) {
                        return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect, item.st2,
                            item.st3, item.st4, item.city3, item.city4, item.obl, item.colPost);
                    } else if (item.colPost === colPost && item.obl2 === obl  && item.vOb === undefined) {
                        return container(item, item.city, item.vOb, item.imgNum, item.map, item.city2, item.st, i, item.proect, item.st2,
                            item.st3, item.st4, item.city3, item.city4, item.obl, item.colPost);
                    }
                })
                }
            </div>

        </main>
    )
}
