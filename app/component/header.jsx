'use client'

import Link from 'next-intl/link';
import {useLocale, useTranslations} from 'next-intl';
import './header.css'
import {useEffect, useState} from "react";
import Image from 'next/image';
import image5 from "../../svg/samwash_logo_vector-01.svg";
import image1 from "../../svg/BurgerMenuIcon.svg";
import image2 from "../../svg/icons8-phone-50.png";
import {useRouter} from "next/navigation";

const TheHeader = () => {

    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter();
    const [color, setColor] = useState(false)
    let screen

    const changeColor = () => {
        if(window.scrollY >= 30) {setColor(true)}
        else {setColor(false)}
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor)
        screen = window.screen.width < 900
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

    const LanguageSwitcher2 = () => {

        const onCl = () => {
            document.getElementById('off').style.height = '90px'
            if (locale !== 'ua') document.getElementById('ua1').style.display = 'block'
            if (locale !== 'ru')  document.getElementById('ru1').style.display = 'block'
            if (locale !== 'en') document.getElementById('en1').style.display = 'block'
        }

        const close = () => {
            document.getElementById('off').style.height = '35px'
            if (locale !== 'ua') document.getElementById('ua1').style.display = 'none'
            if (locale !== 'ru') document.getElementById('ru1').style.display = 'none'
            if (locale !== 'en')  document.getElementById('en1').style.display = 'none'
        }

        return (
            <div className='ranslateDiv'>
                <button className='trBut2 displayNoneMob' onClick={onCl} id='off' onBlur={close}>
                 <span className='s.pLang s.pLangSpan' onClick={onCl} id='land'>{locale.toUpperCase()}</span>
                    {locale === 'ua' ? '' : <Link href='/' locale="ua" className='pLang hovP pHov' id='ua1' title="ua">UA</Link>}
                    {locale === 'en' ? '' :
                        <Link href='/' locale="ua" className={`pLang hovP ${locale === 'ru' ? '' : 'pHov'}`} id='en1' title="en">EN</Link>}
                    {locale === 'ru' ? '' : <Link href='/' locale="ua" className='pLang hovP' id='ru1' title="ru">RU</Link>}
                </button>
            </div>
        )
    }


    return <>
        <header className='displayNoneComp'>
            <div className={color ? "root header-bg" : "root"} style={screen < 900 ? bot : undefined}>
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
                                    <Link href='/' locale="ua" className='pLang hovP pHov'>UA</Link> }
                                {locale === 'en' ? '' :
                                    <Link href='/' locale="en" className={`pLang hovP ${locale === 'ru' ? '' : 'pHov'}`}>EN</Link> }
                                {locale === 'ru' ? '' : <Link href='/' locale="ru" className='pLang hovP'>RU</Link> }
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
                        <div className='displayNoneMob'>
                            <LanguageSwitcher2 />
                        </div>
                    </div>
                    <div className="humManu" id="menu__toggle">
                        <Image priority onClick={oneClick} id='img' src={image1} className='imgClass' alt='manu'/>
                        <div className='divManu' id="divHidden">
                            <ul className="menu__box" id="menu__box">
                                <p className='close' id='close' onClick={twoClick}></p>
                                <li><Link onClick={threeClick}
                                          className={window.location.pathname === '/' ? activeStyle : undefined}
                                          href={"/"}>{t("mainPage")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={window.location.pathname === '/all-car-wash' ? activeStyle : undefined} className="menu__item"
                                          href={"/all-car-wash"}>{t("autoWash")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={window.location.pathname === '/equipment' ? activeStyle : undefined} className="menu__item"
                                          href={"/equipment"}>{t("equipment")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={window.location.pathname === '/cover' ? activeStyle : undefined} className="menu__item"
                                          href={"/cover"}>{t("cover")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={window.location.pathname === '/obladnannya' ? activeStyle : undefined} className="menu__item"
                                          href={"/obladnannya"}>{t("equipment2")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={window.location.pathname === '/porohotyag' ? activeStyle : undefined} className="menu__item"
                                          href={"/porohotyag"}>{t("porohotyag")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={window.location.pathname === '/blog' ? activeStyle : undefined} className="menu__item"
                                          href="/blog">{t("blog")}</Link></li>
                                <li><Link onClick={threeClick}
                                          style={window.location.pathname === '/contacts' ? activeStyle2 : undefined}
                                          className="menu__item border" href={"/contacts"}>{t("contacts")}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divContainer" id="hidden" onClick={fourClick}></div>
        </header>
    </>
}

export {TheHeader}