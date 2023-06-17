'use client'

import {useLocale, useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchUserZam} from "../../../API/mail";
import emailjs from "@emailjs/browser";
import {addChecked, addMeneger} from "../../../store/thanks-reduser";
import Link from "next/link";
import s from "./contacts.module.css"
import Image from 'next/image';
import background from "../../../svg/swlogo.svg";
import whatsapp from "../../../logo/webp/whatsapp.webp";
import telegram from "../../../logo/webp/telegram.webp";
import viber from "../../../logo/webp/viber.webp";

let numPhone = 0
let numEmail = 0

export default function Contacts() {

    const t = useTranslations();
    const locale = useLocale();
    const [userData, setUserData] = useState({
        name: "", phone: "", email: "", post: ""});
    const [formPass, setFormPass] = useState({
        phone: false, email: false });
    const dispatch = useDispatch();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const sendPost = () => {
        dispatch(addMeneger(false))
        dispatch(addChecked(false))
        let obj = { user: userData };
        let templateParams = {
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            post: userData.post,
            namePage: 'КОНТАКТИ'
        };
        dispatch(fetchUserZam(templateParams));
        emailjs.send('service_qcggpom', 'template_ugaoz0u', templateParams, 'e8GXwhbbyk4tXovwB');
        emailjs.send('service_qcggpom', 'template_dxf8e6l', templateParams, 'e8GXwhbbyk4tXovwB');
    }

    const onBlur = (e) => {
        numEmail = 1
        let phone = document.getElementById("phone");
        let email = document.getElementById('email')

        setUserData((actual) => {
            return { ...actual, [e.target.title]: e.target.value };})

        const re = /^\S+@\S+\.\S+$/
        if(!re.test(e.target.value)){
            if(formPass.phone === false){
                email.style.border = '2px solid red'
                email.style.backgroundCo1or = 'transparent'
                if(numPhone > 0){
                    phone.style.border = '2px solid red'
                    phone.style.backgroundColor = 'transparent'
                }
                setFormPass((actual) => { return { ...actual, email: false } })
                setFormPass((actual) => {return { ...actual, phone: false };});
            }
            else {
                phone.style.border = "none";
                phone.style.borderBottom = "2px solid grey";
                phone.style.backgroundColor = "transparent";
                email.style.border = 'none'
                email.style.borderBottom = '2px solid grey'
                email.style.backgroundColor = 'transparent'
            }
        } else {
            email.style.border = 'none'
            email.style.borderBottom = '2px solid grey'
            email.style.backgroundColor = 'transparent'
            phone.style.border = "none";
            setFormPass((actual) => {return { ...actual, email: true }});
            phone.style.borderBottom = "2px solid grey";
            phone.style.backgroundColor = "transparent";
        }
    }

    const onBlur2 = (e) => {
        numPhone = 1
        if (locale === 'ua'){
            if (e.target.value.length > 14) {}
            else if (Number(e.target.value)) {
                setUserData((actual) => {
                    return { ...actual, [e.target.title]: e.target.value }})}
            else if(e.target.value.length === 1){
                setUserData((actual) => {
                    return { ...actual, [e.target.title]: '+' }})}
        }
        else if (locale === 'en'){
            if (e.target.value.length > 16) {}
            else if (Number(e.target.value)) {
                setUserData((actual) => {
                    return { ...actual, [e.target.title]: e.target.value }})}
            else if(e.target.value.length === 1){
                setUserData((actual) => {
                    return { ...actual, [e.target.title]: '+' }})}
        }
        else if (locale === 'ru'){
            if (e.target.value.length > 14) {}
            else if (Number(e.target.value)) {
                setUserData((actual) => {
                    return { ...actual, [e.target.title]: e.target.value }})}
            else if(e.target.value.length === 1){
                setUserData((actual) => {
                    return { ...actual, [e.target.title]: '+' }})}
        }

        let phone = document.getElementById("phone");
        let email = document.getElementById('email')
        let regex = new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{10,13}$/);
        regex = locale === 'en' ? new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{10,14}$/)
            : new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{10,12}$/)
        if (regex.test(e.target.value.toString()) === true) {
            phone.style.border = "none";
            phone.style.borderBottom = "2px solid grey";
            phone.style.backgroundColor = "transparent";
            setFormPass((actual) => {return { ...actual, phone: true }});
            email.style.border = 'none'
            email.style.borderBottom = '2px solid grey'
            email.style.backgroundColor = 'transparent'
        }
        else {
            if (formPass.email === false) {
                phone.style.border = "2px solid red";
                phone.style.backgroundCo1or = "transparent";
                if(numEmail > 0){
                    email.style.border = '2px solid red'
                    email.style.backgroundColor = 'transparent'
                }
                setFormPass((actual) => {return { ...actual, phone: false };});
                setFormPass((actual) => { return { ...actual, email: false } })
            }
            else {
                email.style.border = 'none'
                email.style.borderBottom = '2px solid grey'
                email.style.backgroundColor = 'transparent'
                phone.style.border = "none";
                phone.style.borderBottom = "2px solid grey";
                phone.style.backgroundColor = "transparent";
            }
        }
    };

    const phoneClick = () => {
        if(locale === 'ua'){
            if(userData.phone === ''){
                setUserData((actual) => {return { ...actual, phone: '+380' }})}}
        if(locale === 'en'){
            if(userData.phone === ''){
                setUserData((actual) => {return { ...actual, phone: '+1' }})}}
        if(locale === 'ru'){
            if(userData.phone === ''){
                setUserData((actual) => {return { ...actual, phone: '+380' }})}}
    }

    return (
        <div className={s.divBlock}>

            {/*<HelmetProvider>*/}
            {/*    <Helmet>*/}
            {/*        <meta charSet="utf-8" />*/}
            {/*        <title>{t("contactTit")}</title>*/}
            {/*        <meta name="description" content={t("contacDesc")} />*/}
            {/*        <meta property="og:title" content={t("contactTit")} />*/}
            {/*        <meta property="og:image" content="../uploads/img/svg/logo144.png" />*/}
            {/*        <link rel="apple-touch-icon" href="../uploads/img/svg/logo144.png" />*/}
            {/*        <meta property="og:description" content={t("contacDesc")} />*/}
            {/*        <meta property="og:url" content={lang === 'en' ? "https://samwash.ua/en/contacts" : lang === 'ru' ? "https://samwash.ua/ru/contacts" : "https://samwash.ua/contacts"} />*/}
            {/*        <link rel="canonical" href={lang === 'en' ? "https://samwash.ua/en/contacts" : lang === 'ru' ? "https://samwash.ua/ru/contacts" : "https://samwash.ua/contacts"} />*/}
            {/*    </Helmet>*/}
            {/*</HelmetProvider>*/}

            <Image src={background} className={s.imageThanks} alt="lable" />
            <div className={s.divMain}>
                <div className={s.breadcrumbs}>
                    <Link className={s.breads} href="/">{t(`home`)}</Link>
                    <span className={s.breads2}> / {t(`contacts`)}</span>
                </div>

                <h1 className={s.thanksTitle2}>{t(`contacts`)}</h1>

                <div className={s.div2Box}>

                    <div className={s.displayNoneCompFlex+' '+s.displayNoneComp}>
                        <div className={s.div1Cont}>
                            <h2 className={s.h2_1+' '+s.p_1_2}>{t(`department`)}</h2>
                            <div>
                                <p className={s.p_1}><a href="tel:+380505923772" style={{color: 'white'}}>+38 (050) 59 23 772</a></p>
                                <p className={s.p_1}><a style={{color: 'white'}} href="mailto:info@samwash.ua">info@samwash.ua</a></p>
                                <div>
                                    <div style={{display: 'flex'}}>
                                        <p className={`${s.circle} ${s.red}`}></p>
                                        <span className={s.fontCont} style={{ color: '#B2B1B7'}}>{t("question")}</span>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', width: '250px'}}>
                                        <a href="viber://chat?number=%2B380505923772" target='_blank'>
                                            <Image src={viber} alt="viber" width={30} height={30} style={{margin: '0 20px 20px'}} /></a>
                                        <a href="https://t.me/dstevark" target='_blank'>
                                            <Image src={telegram} alt="telegram" width={30} height={30} style={{margin: '0 20px 20px'}} /></a>
                                        <a href="https://wa.me/+380505923772" target='_blank'>
                                            <Image src={whatsapp} alt="whats up" width={30} height={30} style={{margin: '0 20px 20px'}} /></a>
                                    </div>

                                   </div>
                                <p className={s.p_1+' '+s.w200} style={{ color: '#B2B1B7'}}>{t("address")}</p>
                                <a href="https://maps.app.goo.gl/Wy7g6KUUGf4VWwme6?g_st=it" target='_blank'>
                                    <p className={s.p_1City}>{t("addressCity")}</p>
                                </a>
                            </div>
                        </div>

                        <div className={s.div1Cont}>
                            <p className={s.h2_1+' '+s.p_1_3}>{t(`feedback`)}</p>
                            <div className={s.divInput1}>
                                <input className={s.inputUser+' '+s.input1} type="text" title="name" placeholder={`${t("enterName")}`}
                                       onChange={(e) => {setUserData((actual) => {
                                           return { ...actual, [e.target.title]: e.target.value };});}} />
                                <input className={s.inputUser+' '+s.input1} type="text" title="phone" id="phone" value={userData.phone}
                                       placeholder={`${t("enterYourPhoneNumber")}`} onChange={onBlur2} onClick={phoneClick} />
                                <input className={s.inputUser+' '+s.input1} type="email" title="email" id="email" value={userData.email}
                                       placeholder={`${t("enterEmail")}`} onChange={onBlur} />
                            </div>
                        </div>

                        <div className={s.div1Cont+' '+s.div1Cont2}>
                            <p className={s.h2_2}>{t(`descCont`)}</p>
                            <textarea className={s.textArea} title="post"
                                      placeholder={`${t("mail")}`} onChange={(e) => {
                                setUserData((actual) => {
                                    return { ...actual, [e.target.title]: e.target.value };});}} />

                            <Link className={s.greenButSend+' '+s.lineThanks} onClick={sendPost} href="/thanks">{t(`send`)}</Link>

                        </div>
                    </div>
                    {/*  mob start  */}
                    <div className={s.displayNoneMob}>
                        <div className={s.div1Cont}>
                            <h2 className={s.h2_1+' '+s.p_1_2}>{t(`department`)}</h2>
                            <div>
                                <p className={s.p_1}><a href="tel:+380505923772" style={{color: 'white'}}>+38 (050) 59 23 772</a></p>
                                <p className={s.p_1}><a style={{color: 'white'}} href="mailto:info@samwash.ua">info@samwash.ua</a></p>
                                <div>
                                    <div style={{display: 'flex'}}>
                                        <p className={`${s.circle} ${s.red}`}></p>
                                        <span className={s.fontCont} style={{ color: '#B2B1B7'}}>{t("question")}</span>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', width: '330px'}}>
                                        <a href="viber://chat?number=%2B380505923772" target='_blank'>
                                            <Image src={viber} alt="viber" width={30} height={30} style={{margin: '0 20px 20px'}} /></a>
                                        <a href="https://t.me/dstevark" target='_blank'>
                                            <Image src={telegram} alt="telegram" width={30} height={30} style={{margin: '0 20px 20px'}} /></a>
                                        <a href="https://wa.me/+380505923772" target='_blank'>
                                            <Image src={whatsapp} alt="whats up" width={30} height={30} style={{margin: '0 20px 20px'}} /></a>
                                    </div>
                                   </div>
                                <p className={s.p_1+' '+s.w200}>{t("address")}</p>
                                <a href="https://maps.app.goo.gl/Wy7g6KUUGf4VWwme6?g_st=it" target='_blank'>
                                    <p className={s.p_1City}>{t("addressCity")}</p>
                                </a>
                            </div>
                        </div>

                        <div className={s.div1Cont}>
                            <p className={s.h2_1+' '+s.p_1_2}>{t(`feedback`)}</p>
                            <p className={s.h2_2}>{t(`descCont`)}</p>
                            <div className={s.divInput1}>
                                <input className={s.inputUser+' '+s.input1} type="text" title="name"
                                       placeholder={`${t("enterName")}`} onChange={(e) => {
                                    setUserData((actual) => {
                                        return { ...actual, [e.target.title]: e.target.value };
                                    });
                                }} />
                                <input className={s.inputUser+' '+s.input1} type="text" title="phone" id="phone" value={userData.phone}
                                       placeholder={`${t("enterYourPhoneNumber")}`} onChange={onBlur2} onClick={phoneClick} />
                                <input className={s.inputUser+' '+s.input1} type="email" title="email" id="email" value={userData.email}
                                       placeholder={`${t("enterEmail")}`} onChange={onBlur} />
                                <textarea className={s.textArea} title="post"
                                          placeholder={`${t("mail")}`} onChange={(e) => {
                                    setUserData((actual) => {
                                        return { ...actual, [e.target.title]: e.target.value };
                                    });
                                }} />
                            </div>
                        </div>

                        <div className={s.div1Cont+' '+s.div1Cont2}>
                            <Link className={s.greenButSend+' '+s.lineThanks} onClick={sendPost} href="/thanks">{t(`send`)}</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}