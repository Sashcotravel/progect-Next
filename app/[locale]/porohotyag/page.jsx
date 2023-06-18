'use client'

import {useLocale, useTranslations} from "next-intl";
import { useRouter } from 'next/navigation';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addChecked, addMeneger} from "../../../store/thanks-reduser";
import {fetchUserZam} from "../../../API/mail";
import emailjs from "@emailjs/browser";
import s from './porohotag.module.css'


let numPhone = 0
let numEmail = 0

export default function Porohotag() {

    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter()
    const [userData, setUserData] = useState({
        name: "", phone: "" });
    const [formPass, setFormPass] = useState({ phone: false });
    const [load1, setLoad1] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => { window.scrollTo(0, 0) }, [])

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

    // useEffect(() => {
    //     let head = document.getElementsByTagName("head")[0];
    //     let script = document.createElement("script");
    //     script.type = "application/ld+json";
    //     script.text = ` {
    //   "@context": "https://schema.org",
    //   "@type": ["VideoObject", "LearningResource"],
    //   "name": "${t("porohTitSerch")}",
    //   "description": "${t("porohDescSerch")}",
    //   "learningResourceType": "Concept Overview",
    //   "educationalLevel": "SamWash",
    //   "contentUrl": "${language === 'ru' ? "https://samwash.ua/ru/porohotyag" : language === 'en' ? "https://samwash.ua/en/porohotyag" : "https://samwash.ua/porohotyag"}",
    //   "thumbnailUrl": [
    //     "https://www.youtube.com/watch?v=OJv67JG7QRo"
    //   ],
    //   "uploadDate": "2023-03-31T08:00:00+08:00"
    // }`
    //     head.appendChild(script);
    //     // const d = document.querySelector("head");
    //     // console.log(d.outerHTML);
    // }, [])


    // useLayoutEffect(() => {
    //     fan += 1
    //     setTimeout(() => {
    //         if(fan === 1){
    //             function reCaptchaOnFocus() {
    //                 let head = document.getElementsByTagName("head")[0];
    //                 let script = document.createElement("link");
    //                 script.rel = "stylesheet";
    //                 script.href = "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css";
    //                 head.appendChild(script);
    //             }
    //             reCaptchaOnFocus()
    //         }
    //     }, 6000)
    // }, [])

    // Fancybox.bind('[data-fancybox="gallery"]', {
    //     Thumbs: { Carousel: { fill: false, center: true, }, },
    // });


    return (<>
        <head>
            <title>Автомийка самообслуговування SamWash</title>
            <meta name="description" content='Шукаєте мийку самообслуговування під ключ? Звертайтесь до нас! Ми займатимемося повним циклом будівництва автомийок та забезпечимо їх ефективність та якість.'/>
            <meta property="og:title" content='Автомийка самообслуговування SamWash'/>
            <meta property="og:description" content='Шукаєте мийку самообслуговування під ключ? Звертайтесь до нас! Ми займатимемося повним циклом будівництва автомийок та забезпечимо їх ефективність та якість.'/>
        </head>
        <main className={s.main}>

            {/*<HelmetProvider>*/}
            {/*    <Helmet>*/}
            {/*        <meta charSet="utf-8" />*/}
            {/*        <title>{t(`porohPage.metaTitle`)}</title>*/}
            {/*        <meta name="description" content={t(`porohPage.metaDesc`)} />*/}
            {/*        <meta property="og:image" content="../../uploads/img/nacr/poroh5.jpg" />*/}
            {/*        <link rel="apple-touch-icon" href="../../uploads/img/nacr/poroh5.jpg" />*/}
            {/*        <meta property="og:title" content={t(`porohPage.metaTitle`)} />*/}
            {/*        <meta property="og:description" content={t(`porohPage.metaDesc`)} />*/}
            {/*        <meta property="og:url" content={language === 'en' ? "https://samwash.ua/en/porohotyag" : language === 'ru' ? "https://samwash.ua/ru/porohotyag" : "https://samwash.ua/porohotyag"} />*/}
            {/*        <link rel="canonical" href={language === 'en' ? "https://samwash.ua/en/porohotyag" : language === 'ru' ? "https://samwash.ua/ru/porohotyag" : "https://samwash.ua/porohotyag"} />*/}
            {/*    </Helmet>*/}
            {/*</HelmetProvider>*/}

            {/*<div data-loading='lazy' className={s.slideStyleBack}></div>*/}

            {/*<div id="lightblue" onClick={blurClose} className={s.orderBlock} style={{ left: "0" }}>*/}
            {/*    <div className={s.userdata2}>*/}
            {/*        <div className={s.ix}>*/}
            {/*    <span style={{ margin: "5px 15px 0 0", color: "#BBB9B9", cursor: "pointer" }}*/}
            {/*          onClick={hiddeItem}>&#10006;</span>*/}
            {/*        </div>*/}
            {/*        <p className={s.titleUser}>{t("getAnOffer")}</p>*/}
            {/*        <br />*/}
            {/*        <p className={s.descSpan}>{t("descCon")}</p>*/}
            {/*        <br />*/}
            {/*        <input className={s.inputUser} type="name" title="name"*/}
            {/*               placeholder={`${t("enterName")}`} value={userData.name} onChange={(e) => {*/}
            {/*            setUserData((actual) => {return { ...actual, [e.target.title]: e.target.value }})}} />*/}
            {/*        <input className={s.inputUser} style={{ width: "90%" }} type="text" title="phone" id="phone" onClick={phoneClick}*/}
            {/*               placeholder={`${t("enterYourPhoneNumber")}`} value={userData.phone} onChange={onBlur2} />*/}
            {/*        <br />*/}
            {/*        <button className={s.footerBut} style={{ width: "50%", margin: "30px auto", backgroundColor: '#42df4c' }}*/}
            {/*                onClick={useSubmit} disabled={!formPass.phone}>{t("send")}</button>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div id="lightblue2" onClick={blurClose} className={s.orderBlock} style={{ left: "0" }}>*/}
            {/*    <div className={s.userdata2}>*/}
            {/*        <div className={s.ix}>*/}
            {/*    <span style={{ margin: "5px 15px 0 0", color: "#BBB9B9", cursor: "pointer" }}*/}
            {/*          onClick={hiddeItem} id='2'>&#10006;</span>*/}
            {/*        </div>*/}
            {/*        <p className={s.titleUser}>{t("porohotyagZam2")}</p>*/}
            {/*        <br />*/}
            {/*        <p className={s.descSpan}>{t("descCon")}</p>*/}
            {/*        <br />*/}
            {/*        <input className={s.inputUser} type="name" title="name"*/}
            {/*               placeholder={`${t("enterName")}`} value={userData.name} onChange={(e) => {*/}
            {/*            setUserData((actual) => {return { ...actual, [e.target.title]: e.target.value }})}} />*/}
            {/*        <input className={s.inputUser} style={{ width: "90%" }} type="text" title="phone" id="phone" onClick={phoneClick}*/}
            {/*               placeholder={`${t("enterYourPhoneNumber")}`} value={userData.phone} onChange={onBlur2} />*/}
            {/*        <br />*/}
            {/*        <button className={s.footerBut} style={{ width: "50%", margin: "30px auto", backgroundColor: '#42df4c' }}*/}
            {/*                onClick={useSubmit} disabled={!formPass.phone} id='2'>{t("send")}</button>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<div className={s.mainDiv}>*/}

            {/*    <div className={s.breadcrumbs}>*/}
            {/*        <a className={s.breads} href="/" style={{ color: "#7d7d80" }}>{t("home")}</a>*/}
            {/*        <span className={s.breads}> / {t(`porohotyag`)}</span>*/}
            {/*    </div>*/}

            {/*    <h1 className={s.h1}>{t(`porohotyagH1`)}</h1>*/}

            {/*    <p className={s.p2_1}>{t(`porohPage.tit2`)}</p>*/}

            {/*    <h2  className={s.p2_1+' '+s.font}>{t(`porohPage.tit3`)}</h2>*/}
            {/*    <ul className={s.p2_1}>*/}
            {/*        <li style={{listStyleType: 'none'}}>+ Paypass Ingenico 850 €</li>*/}
            {/*        <li style={{listStyleType: 'none'}}>+ {t(`porohPage.moneyPr`)} 350 €</li>*/}
            {/*        <li style={{listStyleType: 'none'}}>+ {t(`porohPage.monPr`)} 350 €</li>*/}
            {/*        <li style={{listStyleType: 'none'}}>+ {t(`porohPage.scanPr`)} 300 €</li>*/}
            {/*    </ul>*/}

            {/*    <p className={s.p2_1}>{t(`porohPage.opis`)}</p>*/}
            {/*    <ul className={s.p3_1}>*/}
            {/*        <li>{t(`porohPage.li1`)}</li>*/}
            {/*        <li>{t(`porohPage.li2`)}</li>*/}
            {/*        <li>{t(`porohPage.li3`)}</li>*/}
            {/*        <li>{t(`porohPage.li4`)}</li>*/}
            {/*        <li>{t(`porohPage.li5`)}</li>*/}
            {/*    </ul>*/}

            {/*    <div className={s.button2} style={{gridRowEnd: '5'}} onClick={greenBut} id='2'>{t(`porohotyagZam`)}</div>*/}

            {/*    <div className={s.divImage2+' '+s.divImage2Plus+' '+s.leftPrise3} >*/}
            {/*        {*/}
            {/*            load1 ? <img src={screen ? require('../../uploads/img/svg/Screenshot_Poroh.webp')*/}
            {/*                    : require('../../uploads/img/svg/Screenshot_PorohMin.webp')}*/}
            {/*                         onClick={() => setLoad1(false)} alt="youtube" loading='lazy' className={s.imageInBox2}  />*/}
            {/*                :*/}
            {/*                <iframe src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=1"*/}
            {/*                        title="Програма піна високий тиск" className={s.imageInBox2} loading="lazy"  />*/}
            {/*        }*/}
            {/*        /!*<iframe src="https://www.youtube.com/embed/OJv67JG7QRo"*!/*/}
            {/*    </div>*/}

            {/*    <p className={s.p3} style={{paddingRight: '15px'}}>{t(`porohPage.opis2`)}</p>*/}

            {/*    <p className={s.p4}>{t(`porohPage.opis3`)}</p>*/}

            {/*    <div style={{margin: '50px 0 50px 0', gridColumnStart: '2'}} className={s.divImage2}>*/}
            {/*        <a data-fancybox="gallery" href={require('../../uploads/img/nacr/poroh4.jpg')}>*/}
            {/*            <picture>*/}
            {/*                {!screen && <source srcSet={require('../../uploads/img/nacr/poroh4Min.jpg')} type="image/jpeg" />}*/}
            {/*                {screen && <source srcSet={require('../../uploads/img/nacr/poroh4.webp')} type="image/jpeg" />}*/}
            {/*                <source srcSet={require('../../uploads/img/nacr/poroh4.webp')} />*/}
            {/*                <img style={{objectFit: 'none'}} className={s.imageInBox2} loading='lazy'*/}
            {/*                     src={require('../../uploads/img/nacr/poroh4.webp')} alt="photo" />*/}
            {/*            </picture>*/}
            {/*        </a>*/}
            {/*    </div>*/}

            {/*    <p className={s.p3} style={{paddingRight: '15px'}}>{t(`porohPage.opis4`)}</p>*/}

            {/*    <div className={s.divImage2+' '+ s.divImage21}>*/}
            {/*        <a data-fancybox="gallery" href={require('../../uploads/img/nacr/poroh5.jpg')}>*/}
            {/*            <picture>*/}
            {/*                {!screen && <source srcSet={require("../../uploads/img/nacr/poroh5Min.jpg")} type="image/jpeg" />}*/}
            {/*                {screen && <source srcSet={require("../../uploads/img/nacr/poroh5.jpg")} type="image/jpeg" />}*/}
            {/*                <source srcSet={require('../../uploads/img/nacr/poroh5.webp')} />*/}
            {/*                <img loading='lazy' className={s.imageInBox2} alt="photo" src={require('../../uploads/img/nacr/poroh5.webp')} />*/}
            {/*            </picture>*/}
            {/*        </a>*/}
            {/*    </div>*/}

            {/*    <div className={s.divPoroh}>*/}
            {/*        <h2 className={s.p5Poroh}>{t(`porohPage.recommend`)}</h2>*/}
            {/*        <ul className={s.liPoroh}>*/}
            {/*            <li>{t(`porohPage.recLi1`)}</li>*/}
            {/*            <li>{t(`porohPage.recLi2`)}</li>*/}
            {/*            <li>{t(`porohPage.recLi3`)}</li>*/}
            {/*            <li>{t(`porohPage.recLi4`)}</li>*/}
            {/*            <li>{t(`porohPage.recLi5`)}</li>*/}
            {/*            <li>{t(`porohPage.recLi6`)}</li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}

            {/*    <div className={s.divImage}>*/}
            {/*        /!*<a data-fancybox="gallery" href={require('../../uploads/img/nacr/videoporoh.mp4')}>*!/*/}
            {/*        <picture>*/}
            {/*            <video className={s.imgAndVideo} src={require('../../uploads/img/nacr/videoporoh.mp4')}*/}
            {/*                   title="photo" preload="auto" autoPlay playsInline muted loop controls={true} />*/}
            {/*        </picture>*/}
            {/*        /!*</a>*!/*/}
            {/*        <a data-fancybox="gallery" href={require('../../uploads/img/nacr/poroh7.jpg')}>*/}
            {/*            <picture>*/}
            {/*                {!screen && <source srcSet={require('../../uploads/img/nacr/poroh7Min.jpg')} type="image/jpeg" />}*/}
            {/*                {screen && <source srcSet={require('../../uploads/img/nacr/poroh7.webp')} type="image/jpeg" />}*/}
            {/*                <source srcSet={require('../../uploads/img/nacr/poroh7.webp')} />*/}
            {/*                <img className={s.imgAndVideo+ " " +s.photo2} loading='lazy' src={require('../../uploads/img/nacr/poroh7.webp')} alt="photo" />*/}
            {/*            </picture>*/}
            {/*        </a>*/}
            {/*    </div>*/}

            {/*    <p className={s.p5}>{t("footerCont")}</p>*/}

            {/*    <div className={m.greenButDiv+' '+s.buttonGreen} onClick={greenBut} onTouchEnd={greenBut}>*/}
            {/*        <button className={m.greenBut} style={{ cursor: "pointer" }}>*/}
            {/*            <span>{t("main.zam")}</span>*/}
            {/*            <span className={m.spanArrow}>*/}
            {/*  <img src={image5} loading='lazy' className={m.imgClass} alt='Замовити консультацію'/>*/}
            {/*</span>*/}
            {/*        </button>*/}
            {/*    </div>*/}

            {/*</div>*/}

        </main>
    </> )
}