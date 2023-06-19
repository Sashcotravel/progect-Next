'use client'

import React, {useLayoutEffect} from "react";
import {useLocale, useTranslations} from "next-intl";
import { useRouter } from 'next/navigation';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addChecked, addMeneger} from "../../../store/thanks-reduser";
import {fetchUserZam} from "../../../API/mail";
import emailjs from "@emailjs/browser";
import s from './porohotag.module.css'
import background from "../../../image/svg/swlogo.svg";
import image5 from "../../../image/svg/Group 103.svg";
import video1 from "../../../image/nacr/videoporoh.mp4";
import Image from "next/image";
import Link from "next/link";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


export default function Porohotag() {

    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter()
    const [userData, setUserData] = useState({
        name: "", phone: "" });
    const [screen, setScreen] = useState(false)
    const [formPass, setFormPass] = useState({ phone: false });
    const [load1, setLoad1] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0)
        if(window.innerWidth > 900){
            setScreen(false)
        } else {
            setScreen(true)
        }
    }, [])

    const blurClose = (e) => {
        if(e.target.id === "lightblue"){
            let con = document.getElementById("lightblue");
            con.style.visibility = "hidden";
        } else if(e.target.id === "lightblue2"){
            let con = document.getElementById("lightblue2");
            con.style.visibility = "hidden";
        }
    };

    const hiddeItem = (e) => {
        if(e.target.id === '2'){
            let con = document.getElementById("lightblue2");
            con.style.visibility = "hidden";
        } else {
            let con = document.getElementById("lightblue");
            con.style.visibility = "hidden";
        }
    };

    const noScroll = (num) => {
        if(num === '2'){
            let con = document.getElementById("lightblue2");
            con.style.visibility = "visible";
        } else {
            let con = document.getElementById("lightblue");
            con.style.visibility = "visible";
        }
    };

    const greenBut = (e) => { noScroll(e.target.id) }

    const useSubmit = async (e) => {
        if (formPass.phone) {
            dispatch(addMeneger(false))
            dispatch(addChecked(false))
            if(e.target.id){
                let templateParams = {
                    name: userData.name,
                    phone: userData.phone,
                    stir: 'ПОРОХОТЯГ',
                    namePage: 'ПОРОХОТЯГ'
                };
                dispatch(fetchUserZam(templateParams));
                emailjs.send('service_qcggpom', 'template_7v2kxqi', templateParams, 'e8GXwhbbyk4tXovwB');
                emailjs.send('service_qcggpom', 'template_dxf8e6l', templateParams, 'e8GXwhbbyk4tXovwB');
                router.push("/thanks")
            } else {
                let templateParams = {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone,
                    namePage: 'ПОРОХОТЯГ'
                };
                dispatch(fetchUserZam(templateParams));
                emailjs.send('service_qcggpom', 'template_s2scogl', templateParams, 'e8GXwhbbyk4tXovwB');
                emailjs.send('service_qcggpom', 'template_dxf8e6l', templateParams, 'e8GXwhbbyk4tXovwB');
                router.push("/thanks")
            }
        }
    };

    const phoneClick = (e) => {
        if(locale === 'ua'){
            if(userData.phone === ''){setUserData((actual) => {return { ...actual, phone: '+380' }})}
        }
        if(locale === 'en'){
            if(userData.phone === ''){setUserData((actual) => {return { ...actual, phone: '+1' }})}
        }
        if(locale === 'ru'){
            if(userData.phone === ''){setUserData((actual) => {return { ...actual, phone: '+380' }})}
        }
    }

    const onBlur2 = (e) => {
        if (locale === 'ua'){
            if (e.target.value.length > 14) {}
            else if (Number(e.target.value)) {
                setUserData((actual) => {
                    return { ...actual, [e.target.title]: e.target.value }})
            }
            else if(e.target.value.length === 1){
                setUserData((actual) => {
                    return { ...actual, [e.target.title]: '+' }})
            }
        }
        else if (locale === 'en'){
            if (e.target.value.length > 16) {}
            else if (Number(e.target.value)) {
                setUserData((actual) => {
                    return { ...actual, [e.target.title]: e.target.value }})
            }
            else if(e.target.value.length === 1){
                setUserData((actual) => {
                    return { ...actual, [e.target.title]: '+' }})
            }
        }
        else if (locale === 'ru'){
            if (e.target.value.length > 14) {}
            else if (Number(e.target.value)) {
                setUserData((actual) => {
                    return { ...actual, [e.target.title]: e.target.value }})
            }
            else if(e.target.value.length === 1){
                setUserData((actual) => {
                    return { ...actual, [e.target.title]: '+' }})
            }
        }

        let phone = document.getElementById("phone");
        let regex = locale === 'en' ? new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{10,14}$/)
            : new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{10,12}$/)
        if (regex.test(e.target.value.toString()) === true) {
            phone.style.border = "none";
            phone.style.borderBottom = "2px solid grey";
            phone.style.backgroundColor = "transparent";
            setFormPass((actual) => {return { ...actual, phone: true }});
        }
        else {
            phone.style.border = "2px solid red";
            phone.style.backgroundCo1or = "transparent";
            setFormPass((actual) => {return { ...actual, phone: false };});
            setFormPass((actual) => { return { ...actual, email: false } })
        }
    };

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: { Carousel: { fill: false, center: true, }, },
    });


    return (<React.Fragment>
        <main className={s.main}>

            <Image src={background} loading='lazy' className={s.imageThanks} alt="lable" />

            <div id="lightblue" onClick={blurClose} className={s.orderBlock} style={{ left: "0" }}>
                <div className={s.userdata2}>
                    <div className={s.ix}>
                <span style={{ margin: "5px 15px 0 0", color: "#BBB9B9", cursor: "pointer" }}
                      onClick={hiddeItem}>&#10006;</span>
                    </div>
                    <p className={s.titleUser}>{t("getAnOffer")}</p>
                    <br />
                    <p className={s.descSpan}>{t("descCon")}</p>
                    <br />
                    <input className={s.inputUser} type="name" title="name"
                           placeholder={`${t("enterName")}`} value={userData.name} onChange={(e) => {
                        setUserData((actual) => {return { ...actual, [e.target.title]: e.target.value }})}} />
                    <input className={s.inputUser} style={{ width: "90%" }} type="text" title="phone" id="phone" onClick={phoneClick}
                           placeholder={`${t("enterYourPhoneNumber")}`} value={userData.phone} onChange={onBlur2} />
                    <br />
                    <button className={s.footerBut} style={{ width: "50%", margin: "30px auto", backgroundColor: '#42df4c' }}
                            onClick={useSubmit} disabled={!formPass.phone}>{t("send")}</button>
                </div>
            </div>

            <div id="lightblue2" onClick={blurClose} className={s.orderBlock} style={{ left: "0" }}>
                <div className={s.userdata2}>
                    <div className={s.ix}>
                <span style={{ margin: "5px 15px 0 0", color: "#BBB9B9", cursor: "pointer" }}
                      onClick={hiddeItem} id='2'>&#10006;</span>
                    </div>
                    <p className={s.titleUser}>{t("porohotyagZam2")}</p>
                    <br />
                    <p className={s.descSpan}>{t("descCon")}</p>
                    <br />
                    <input className={s.inputUser} type="name" title="name"
                           placeholder={`${t("enterName")}`} value={userData.name} onChange={(e) => {
                        setUserData((actual) => {return { ...actual, [e.target.title]: e.target.value }})}} />
                    <input className={s.inputUser} style={{ width: "90%" }} type="text" title="phone" id="phone" onClick={phoneClick}
                           placeholder={`${t("enterYourPhoneNumber")}`} value={userData.phone} onChange={onBlur2} />
                    <br />
                    <button className={s.footerBut} style={{ width: "50%", margin: "30px auto", backgroundColor: '#42df4c' }}
                            onClick={useSubmit} disabled={!formPass.phone} id='2'>{t("send")}</button>
                </div>
            </div>


            <div className={s.mainDiv}>

                <div className={s.breadcrumbs}>
                    <Link className={s.breads} href="/">{t(`home`)}</Link>
                    <span className={s.breads2}> / {t(`porohotyag`)}</span>
                </div>

                <h1 className={s.h1}>{t(`porohotyagH1`)}</h1>

                <p className={s.p2_1}>{t(`porohPage.tit2`)}</p>

                <h2  className={s.p2_1+' '+s.font}>{t(`porohPage.tit3`)}</h2>
                <ul className={s.p2_1}>
                    <li style={{listStyleType: 'none'}}>+ Paypass Ingenico 850 €</li>
                    <li style={{listStyleType: 'none'}}>+ {t(`porohPage.moneyPr`)} 350 €</li>
                    <li style={{listStyleType: 'none'}}>+ {t(`porohPage.monPr`)} 350 €</li>
                    <li style={{listStyleType: 'none'}}>+ {t(`porohPage.scanPr`)} 300 €</li>
                </ul>

                <p className={s.p2_1}>{t(`porohPage.opis`)}</p>
                <ul className={s.p3_1}>
                    <li>{t(`porohPage.li1`)}</li>
                    <li>{t(`porohPage.li2`)}</li>
                    <li>{t(`porohPage.li3`)}</li>
                    <li>{t(`porohPage.li4`)}</li>
                    <li>{t(`porohPage.li5`)}</li>
                </ul>

                <div className={s.button2} style={{gridRowEnd: '5'}} onClick={greenBut} id='2'>{t(`porohotyagZam`)}</div>

                <div className={s.divImage2+' '+s.divImage2Plus+' '+s.leftPrise3} >
                    {
                        load1 ? <Image src={screen ? require('../../../image/svg/Screenshot_Poroh.webp')
                                : require('../../../image/svg/Screenshot_PorohMin.webp')}
                                     onClick={() => setLoad1(false)} alt="youtube" loading='lazy' className={s.imageInBox2}  />
                            : <iframe src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=1"
                                    title="Програма піна високий тиск" className={s.imageInBox2} loading="lazy"  />
                    }
                    {/*<iframe src="https://www.youtube.com/embed/OJv67JG7QRo"*/}
                </div>

                <p className={s.p3} style={{paddingRight: '15px'}}>{t(`porohPage.opis2`)}</p>

                <p className={s.p4}>{t(`porohPage.opis3`)}</p>

                <div style={{margin: '50px 0 50px 0', gridColumnStart: '2'}} className={s.divImage2}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fporoh4.e7f04f22.webp&w=1920&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/poroh4Min.jpg')} type="image/jpg" />}
                            {screen && <source srcSet={require('../../../image/nacr/poroh4.webp')} type="image/webp" />}
                            <source srcSet={require('../../../image/nacr/poroh4.webp')} />
                            <Image style={{objectFit: 'none'}} className={s.imageInBox2} loading='lazy'
                                 src={require('../../../image/nacr/poroh4.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <p className={s.p3} style={{paddingRight: '15px'}}>{t(`porohPage.opis4`)}</p>

                <div className={s.divImage2+' '+ s.divImage21}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fporoh5.51bbb1ca.webp&w=1920&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require("../../../image/nacr/poroh5Min.jpg")} type="image/jpg" />}
                            {screen && <source srcSet={require("../../../image/nacr/poroh5.jpg")} type="image/jpg" />}
                            <source srcSet={require('../../../image/nacr/poroh5.webp')} />
                            <Image loading='lazy' className={s.imageInBox2} alt="photo" src={require('../../../image/nacr/poroh5.webp')} />
                        </picture>
                    </a>
                </div>

                <div className={s.divPoroh}>
                    <h2 className={s.p5Poroh}>{t(`porohPage.recommend`)}</h2>
                    <ul className={s.liPoroh}>
                        <li>{t(`porohPage.recLi1`)}</li>
                        <li>{t(`porohPage.recLi2`)}</li>
                        <li>{t(`porohPage.recLi3`)}</li>
                        <li>{t(`porohPage.recLi4`)}</li>
                        <li>{t(`porohPage.recLi5`)}</li>
                        <li>{t(`porohPage.recLi6`)}</li>
                    </ul>
                </div>

                <div className={s.divImage}>
                    <a data-fancybox="gallery" href={'https://samwash.ua/static/media/videoporoh.815049ca16e79d7b624d.mp4'}>
                    <picture style={{marginRight: '20px'}}>
                        <video className={s.imgAndVideo} src={'https://samwash.ua/static/media/videoporoh.815049ca16e79d7b624d.mp4'}
                        title="photo" preload="auto" autoPlay playsInline muted loop controls={true} />
                    </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fporoh7.ed973a99.webp&w=1920&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/poroh7Min.jpg')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/poroh7.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/poroh7.webp')} />
                            <Image className={s.imgAndVideo+ " " +s.photo2} loading='lazy' src={require('../../../image/nacr/poroh7.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <p className={s.p5}>{t("footerCont")}</p>

                <div className={s.greenButDiv + ' ' + s.buttonGreen} onClick={greenBut} onTouchEnd={greenBut}>
                    <button className={s.greenBut} style={{cursor: "pointer"}}>
                        <span>{t("main.zam")}</span>
                        <span className={s.spanArrow}>
                    <Image src={image5} loading='lazy' className={s.imgClass} alt='Замовити консультацію'/></span>
                    </button>
                </div>

            </div>

        </main>
    </React.Fragment> )
}