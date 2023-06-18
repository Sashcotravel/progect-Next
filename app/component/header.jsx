'use client'

import Link from 'next-intl/link';
import {useLocale, useTranslations} from 'next-intl';
import './header.css'
import {useEffect, useState} from "react";
import Image from 'next/image';
import image5 from "../../image/svg/samwash_logo_vector-01.svg";
import image1 from "../../image/svg/BurgerMenuIcon.svg";
import image2 from "../../image/svg/phone.svg";
import { usePathname } from 'next/navigation'

const TheHeader = () => {

    const t = useTranslations();
    const locale = useLocale();
    const router = usePathname()
    const [color, setColor] = useState(false)
    const [screen, setScreen] = useState(false)
    const [windows2, setWindows2] = useState({
        listWash: false, main: false, obl: false, cover: false,
        calc: false, poroh: false, blog: false, cont: false
    })

    const changeColor = () => {
        if(window.scrollY >= 30) {setColor(true)}
        else {setColor(false)}
    }

    useEffect(() => {
        window.addEventListener('click', function () {
            if(window.location.pathname === '/' ||
                window.location.pathname === `/${locale}`){
                setWindows2((actual) => { return { ...actual, main: true,
                    listWash: false, obl: false, cover: false,
                    calc: false, poroh: false, blog: false, cont: false} })
            }
            if(window.location.pathname === '/all-car-wash' ||
                window.location.pathname === `/${locale}/all-car-wash`){
                setWindows2((actual) => { return { ...actual, listWash: true,
                    main: false, obl: false, cover: false,
                    calc: false, poroh: false, blog: false, cont: false} })
            }
            if(window.location.pathname === '/equipment' ||
                window.location.pathname === `/${locale}/equipment`){
                setWindows2((actual) => { return { ...actual, obl: true,
                    listWash: false, main: false, cover: false,
                    calc: false, poroh: false, blog: false, cont: false } })
            }
            if(window.location.pathname === '/cover' ||
                window.location.pathname === `/${locale}/cover`){
                setWindows2((actual) => { return { ...actual, cover: true,
                    listWash: false, main: false, obl: false, calc: false,
                    poroh: false, blog: false, cont: false } })
            }
            if(window.location.pathname === '/obladnannya' ||
                window.location.pathname === `/${locale}/obladnannya`){
                setWindows2((actual) => { return { ...actual, calc: true,
                    listWash: false, main: false, obl: false, cover: false,
                    poroh: false, blog: false, cont: false } })
            }
            if(window.location.pathname === '/porohotyag' ||
                window.location.pathname === `/${locale}/porohotyag`){
                setWindows2((actual) => { return { ...actual, poroh: true,
                    listWash: false, main: false, obl: false, cover: false,
                    calc: false, blog: false, cont: false } })
            }
            if(window.location.pathname === '/blog' ||
                window.location.pathname === `/${locale}/blog`){
                setWindows2((actual) => { return { ...actual, blog: true,
                    listWash: false, main: false, obl: false, cover: false,
                    calc: false, poroh: false, cont: false } })
            }
            if(window.location.pathname === '/contacts' ||
                window.location.pathname === `/${locale}/contacts`){
                setWindows2((actual) => { return { ...actual, cont: true,
                    listWash: false, main: false, obl: false, cover: false,
                    calc: false, poroh: false, blog: false } })
            }
        });
        window.addEventListener('scroll', changeColor)
        if(window.screen.width < 900){
            setScreen(true)
        } else { setScreen(false) }
    }, [])

    const scroll = () => {window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}

    const oneClick = (e) => {
        if (e.target.id === 'img') {
            if (window.screen.width > 600) {
                document.getElementById("menu__box").style.width = '50%'
                document.getElementById("divHidden").style.width = '50%'
            } else {
                document.getElementById("divHidden").style.width = '80%'
                document.getElementById("menu__box").style.width = '80%'
                document.getElementById("hidden").style.backdropFilter = 'blur(3px)'
            }
            document.getElementById("close").style.visibility = 'visible'
            document.getElementById("hidden").style.width = '98vw'
        }
    }

    const twoClick = (e) => {
        if (e.target.id === 'close') {
            document.getElementById("divHidden").style.width = '0'
            document.getElementById("hidden").style.width = '0'
            document.getElementById("menu__box").style.width = '0'
            document.getElementById("close").style.visibility = 'hidden'
        }
    }

    const threeClick = (e) => {
        document.getElementById("divHidden").style.width = '0%'
        document.getElementById("hidden").style.width = '0%'
        document.getElementById("menu__box").style.width = '0'
        document.getElementById("close").style.visibility = 'hidden'
    }

    const fourClick = (e) => {
        document.getElementById("divHidden").style.width = '0%'
        document.getElementById("hidden").style.width = '0%'
        document.getElementById("menu__box").style.width = '0'
        document.getElementById("close").style.visibility = 'hidden'
    }

    const bot = { borderBottom: 'none' }

    let activeStyle = {
        backgroundColor: "#DF4242",
        color: "#FFFFFF",
        border: "none"
    };

    let activeStyle2 = {
        backgroundColor: "#DF4242",
        color: "#FFFFFF",
        border: "none",
        borderBottom: "1px solid whitesmoke"
    };


    return <>
        <header className='displayNoneComp'>
            <div className={color ? "root header-bg" : "root"} style={screen ? bot : undefined}>
                <div className='logoDiv' onClick={() => scroll()}>
                    <Link href="/" style={{position: 'relative', left: '60px'}}>
                        <Image priority className="logo" src={image5} alt='logo' />
                    </Link>
                    <p className='napis'>SELF SERVICE CAR WASH</p>
                </div>
                <div className='divLineManu'>
                    <div>
                        <div className="manu">
                            <Link className="menu__item2" href="/all-car-wash">{t("autowash")}</Link>
                            <Link className="menu__item2" href="/equipment">{t("obladnanya")}</Link>
                            <Link className="menu__item2" href="/cover">{t("cover2")}</Link>
                            <Link className="menu__item2" href="/obladnannya">{t("calculator")}</Link>
                            <Link className="menu__item2" href="/porohotyag">{t("porohotyag")}</Link>
                            <Link className="menu__item2" href="/blog">{t("blog")}</Link>
                            <Link className="menu__item2" href="/contacts">{t("contacts")}</Link>
                        </div>
                    </div>
                    <div className='divManuLang displayNoneComp'>
                        <div className='translateDiv'>
                            <button className='trBut displayNoneComp'>
                            <span className='pLang pLangSpan'>{locale.toUpperCase()}</span>
                                {locale === 'ua' ? '' :
                                    <Link href={`/${router.slice(1, 3) === 'en' || router.slice(1, 3) === 'ru' ? router.slice(3) : ''}`}
                                          locale="ua" className='pLang hovP pHov'>UA</Link> }
                                {locale === 'en' ? '' :
                                    <Link href={`/${router.slice(1, 3) === 'ru' ? router.slice(3) : router}`} locale="en"
                                          className={`pLang hovP ${locale === 'ru' ? '' : 'pHov'}`}>EN</Link> }
                                {locale === 'ru' ? '' : <Link href={`/${router.slice(1, 3) === 'en' ? router.slice(3) : router}`}
                                                              locale="ru" className='pLang hovP'>RU</Link> }
                            </button>
                        </div>
                    </div>
                    <div className="mobTelDiv">
                        <span className="textNom"><a className="textNom" href="tel:+380505923772">+38 (050) 59 23 772</a></span>
                    </div>
                </div>
            </div>
            <div className="divContainer" id="hidden" onClick={fourClick}></div>
        </header>
        <header className='displayNoneMob'>
            <div className={"root header-bg"} style={screen ? bot : undefined}>
                <div style={{ width: "20%" }} onClick={() => scroll()}>
                    <Link href="/">
                        <Image priority className="logo" src={image5} alt='logo' />
                    </Link>
                </div>
                <div className="manDiv">
                    <div className="man2Div">
                        <div className="telDiv">
                            <span><a className="nomer" href="tel:+380505923772">
                            <Image priority id='telephone' className='imgClass' src={image2} alt='telephone'/></a></span>
                        </div>
                        <div>
                            <div className='ranslateDiv'>
                                <button className='trBut2'>
                                    <span className='pLang pLangSpan' id='land'>{locale.toUpperCase()}</span>
                                    {locale === 'ua' ? '' : <Link
                                        href={`/${router.slice(1, 3) === 'en' || router.slice(1, 3) === 'ru' ? router.slice(3) : ''}`}
                                                                  locale="ua" className='pLang hovP pHov'>UA</Link>}
                                    {locale === 'en' ? '' :
                                        <Link
                                            href={`/${router.slice(1, 3) === 'ru' ? router.slice(3) : router}`} locale="en"
                                              className={`pLang hovP ${locale === 'ru' ? '' : 'pHov'}`}>EN</Link>}
                                    {locale === 'ru' ? '' : <Link
                                        href={`/${router.slice(1, 3) === 'en' ? router.slice(3) : router}`}
                                                                  locale="ru" className='pLang hovP'>RU</Link>}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="humManu" id="menu__toggle">
                        <Image priority onClick={oneClick} id='img' src={image1} className='imgClass' alt='manu'/>
                        <div className='divManu' id="divHidden">
                            <ul className="menu__box" id="menu__box">
                                <p className='close' id='close' onClick={twoClick}></p>
                                <li><Link onClick={threeClick}
                                          style={windows2.main ? activeStyle : undefined} className="menu__item"
                                          href={"/"}>{t("mainPage")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={windows2.listWash ? activeStyle : undefined} className="menu__item"
                                          href={"/all-car-wash"}>{t("autoWash")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={windows2.obl ? activeStyle : undefined} className="menu__item"
                                          href={"/equipment"}>{t("equipment")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={windows2.cover ? activeStyle : undefined} className="menu__item"
                                          href={"/cover"}>{t("cover")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={windows2.calc ? activeStyle : undefined} className="menu__item"
                                          href={"/obladnannya"}>{t("equipment2")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={windows2.poroh === '/porohotyag' ? activeStyle : undefined} className="menu__item"
                                          href={"/porohotyag"}>{t("porohotyag")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={windows2.blog ? activeStyle : undefined} className="menu__item"
                                          href="/blog">{t("blog")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={windows2.cont ? activeStyle2 : undefined}
                                          className="menu__item border" href={"/contacts"}>{t("contacts")}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divContainer" id="hidden" onClick={fourClick}></div>
        </header>
        <div style={{marginBottom: '100px'}}></div>
    </>
}

export {TheHeader}