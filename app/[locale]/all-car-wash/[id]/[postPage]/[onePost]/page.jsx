'use client'

import {useLocale, useTranslations} from "next-intl";
import {useParams, useRouter} from "next/navigation";
import emailjs from "@emailjs/browser";
import React, {useState} from "react";
import {listWash} from "../../../../../../users";
import {useDispatch, useSelector} from "react-redux";
import {addChecked, addMeneger} from "../../../../../../store/thanks-reduser";
import {fetchUserZam} from "../../../../../../API/mail";
import s from '../../../ListWash.module.css'
import '../../../ListWash.css'
import {oblFalse, postColIn} from "../../../additionalFunctions";
import image from "../../../../../../image/svg/Group 59.svg";
import Link from "next-intl/link";
import Image from "next/image";

let numPhone = 0
let numEmail = 0
let fan = 0

export default function OnePost() {

    const t = useTranslations();
    const locale = useLocale();
    const {onePost, id, postPage} = useParams();
    const router = useRouter()
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        name: "", phone: "", email: "" });
    const [formPass, setFormPass] = useState({
        phone: false, email: false });
    const [onClick, setOnClick] = useState(true)
    let postOne = useSelector(state => state.onePost.onePost)



    if(postOne.length === 0){
        listWash.filter(item => {
            if(item.st2 === onePost){
                postOne = item
            }
        })
    }

    let one = postOne?.obl
    let two = postOne?.obl2

    const road = () => {
        let link = 'https://samwash.ua' + location.pathname
        if(formPass.email || formPass.phone){
            dispatch(addMeneger(false))
            dispatch(addChecked(false))
            let templateParams = {
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                link: link,
                namePage: 'МИЙКА'
            };
            dispatch(fetchUserZam(templateParams));
            emailjs.send('service_qcggpom', 'template_d4qqap8', templateParams, 'e8GXwhbbyk4tXovwB');
            emailjs.send('service_qcggpom', 'template_dxf8e6l', templateParams, 'e8GXwhbbyk4tXovwB');
            router.push("/thanks")
        }
    };

    const oblTrue = (one, two) => {
        if (locale === "ua" || locale === "ru") {
            return one === "all" ? "/wsi" : one === "Закарпатська область" ? "/zakarpatska-oblast"
                : one === "Львівська область" ? "/lvivska-oblast" : one === "Франківська область" ? "/frankivska-oblast"
                    : one === "Тернопільська область" ? "/ternopilska-oblast" : one === "Дніпропетровська область" ? "/dniprotrovska-oblast"
                        : one === "Житомирська область" ? "/zhitomirska-oblast" : one === "Волинська область" ? "/volynska-oblast"
                            : one === "Луганська область" ? "/luganska-oblast" : one === "Вінницька область" ? "/vinnytska-oblast"
                                : one === "Полтавська область" ? "/poltavska-oblast" : "";
        }
        else {
            return two === "all" ? "/wsi" : two === "Zakarpatska Oblast" ? "/zakarpatska-oblast"
                : two === "Lvivska Oblast" ? "/lvivska-oblast" : two === "Ivano-Frankivska Oblast" ? "/frankivska-oblast"
                    : two === "Ternopilska Oblast" ? "/ternopilska-oblast" : two === "Dnipropetrovska Oblast" ? "/dniprotrovska-oblast"
                        : two === "Zhytomyrska Oblast" ? "/zhitomirska-oblast" : two === "Volynska Oblast" ? "/volynska-oblast"
                            : two === "Luhanska Oblast" ? "/luganska-oblast" : two === "Vinnytska Oblast" ? "/vinnytska-oblast"
                                : two === "Poltavska Oblast" ? "/poltavska-oblast" : "";
        }
    };

    let fg = oblTrue(one, two)

    const style = { margin: '0 auto 60px 100px' }

    const blurClose = (e) => {
        if(e.target.id === "lightblue"){
            let con = document.getElementById("lightblue");
            con.style.visibility = "hidden";
        }
    };

    const hiddeItem = () => {
        let con = document.getElementById("lightblue");
        con.style.visibility = "hidden";
    };

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

    const phoneClick = (e) => {
        if(locale === 'ua'){
            if(userData.phone === ''){
                setUserData((actual) => {return { ...actual, phone: '+380' }})
            }
        }
        if(locale === 'en'){
            if(userData.phone === ''){
                setUserData((actual) => {return { ...actual, phone: '+1' }})
            }
        }
        if(locale === 'ru'){
            if(userData.phone === ''){
                setUserData((actual) => {return { ...actual, phone: '+380' }})
            }
        }
    }

    const noScroll = () => {
        let con = document.getElementById("lightblue");
        con.style.visibility = "visible";
    };

    return(
        <main>

            <div className={postOne?.city === "Хуст" ? "divIm1" : postOne?.city === "Тернопіль" ? "divIm3" : ""}></div>
            <div className={postOne?.city === "Хуст" ? "divIm2" : postOne?.city === "Тернопіль" ? "divIm2" : ""}></div>

            <div className={s.divBlock}>

                <div className={s.breadcrumbs}>
                    <Link className={s.breads} href="/">{t(`home`)}</Link>
                    <Link className={s.breads} href="/all-car-wash"> / {t(`OurCarWashes`)}</Link>
                    <Link className={s.breads} href={`/all-car-wash/${id}`}> / {oblFalse(id, locale)}</Link>
                    <Link href={`/all-car-wash/${postPage}`} className={s.breads}> / {postColIn(postPage, "breads2", t)} </Link>
                    <span className={s.breads2}> / {locale === 'en' ? postOne.city3 : postOne.city}</span>
                </div>

                <h1 className={s.titlePost}>{t("titleH1OnePost")}{locale === 'en' ? postOne?.titleH1EN : locale === 'ru' ? postOne?.titleH1RU : postOne?.titleH1}</h1>
                <p className={s.dataTitle}>{t("metaDesc2")}</p>

                <figure className={s.containerStyle}>
                    {postOne?.src.map((item, index) => {
                        if (item.default.src.slice(0, 4) === "http" || item.default.src.slice(item.default.src.length - 3) === "mp4"
                            || item.default.src.slice(item.default.src.length - 3) === "MP4") {
                            return <iframe key={index} id={index} className={s.imageBox} src={item.default.src} sandbox="" title="video" />
                        }
                        return <picture key={index}>
                                <source srcSet={item.default.src} type="image/jpeg" />
                                <source srcSet={item.default.src} />
                                <Image className={s.imageBox} id={index} key={index} src={item.default.src} alt="image"
                                     loading="lazy" width={100} height={100} />
                            </picture>
                    })}
                </figure>

                {/*<picture>*/}
                {/*    <source srcSet="large.png" media="(min-width: 75em)">*/}
                {/*        <source srcSet="medium.png" media="(min-width: 40em)">*/}
                {/*            <img src="small.png" alt="A description of the image."*/}
                {/*                 width="300" height="200" loading="lazy" decoding="async">*/}
                {/*</picture>*/}

                <div className={s.divButP}>
                    <p className={s.pSt}>{postOne?.st3 === '' ? '' : t("street")} {locale === 'en' ? postOne?.st3 : locale === 'ru' ? postOne?.st4 : postOne?.st}
                        {postOne?.st3 === "" ? "" : ","} {t("city")} {locale === 'en' ? postOne?.city3 : locale === 'ru' ? postOne?.city4 : postOne?.city},
                        {locale === 'en' ? ` ${postOne?.obl2.split(" ")[0]} ob.` : locale === 'ru' ? ` ${postOne?.obl3}` : ` ${postOne?.obl.split(" ")[0]} обл.`}</p>

                    <a href={postOne?.map} style={{ color: "white" }} target="_blank">
                        <div className={s.marshBut}>
                            <Image style={{ position: "relative", left: "10px", width: "14%", height: "100%" }} src={image}
                                 alt="road" />
                            <span style={{ position: "relative", right: "10px" }}>{t("MakeARoute")}</span>
                        </div>
                    </a>
                </div>

                <p className={s.serv}>{t("CarWashServices")}</p>

                <div className={s.servDiv}>
                    {locale === 'en' ? postOne?.desc3.map((item, index) => <div className={s.servDiv2} key={index}>
                            <span className={s.spanGrad}></span>
                            <span className={s.spanNameG}>{item}</span>
                        </div>)
                        : locale === 'ru' ? postOne?.desc4.map((item, index) => <div className={s.servDiv2} key={index}>
                            <span className={s.spanGrad}></span>
                            <span className={s.spanNameG}>{item}</span>
                        </div>) : postOne?.desc.map((item, index) => <div className={s.servDiv2} key={index}>
                                <span className={s.spanGrad}></span>
                                <span className={s.spanNameG}>{item}</span>
                            </div>
                        )}
                </div>

                <p className={s.desc2}>{locale === 'en' ? postOne?.descTitleEN : locale === 'ru' ? postOne?.descTitleRU : postOne?.descTitle}</p>
                <p className={s.desc2}>{t("descTitle1_1")}</p>
                <p className={s.desc2}>{t("descTitle1_2")}</p>

                <p className={s.invest}>{t("youCan")}</p>

                <div onClick={noScroll} className={s.hosh}>{t("IWant")}</div>

            </div>


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
                    <input className={s.inputUser} type="name" title="name" placeholder={`${t("enterName")}`}
                           value={userData.name} onChange={(e) => {setUserData((actual) => {
                        return { ...actual, [e.target.title]: e.target.value };});}} />
                    <input className={s.inputUser} style={{ width: "90%" }} type="text" title="phone" id="phone"
                           placeholder={`${t("enterYourPhoneNumber")}`} value={userData.phone} onChange={ onBlur2} onClick={phoneClick} />
                    <input className={s.inputUser} type="email" title="email" id="email"
                           placeholder={`${t("enterEmail")}`} value={userData.email} onChange={onBlur} />
                    <br />
                    <button className={s.footerBut} style={{ width: "50%", margin: "30px auto", backgroundColor: '#42DF4C' }}
                            onClick={road} disabled={!formPass.email && !formPass.phone}>{t("send")}</button>
                </div>
            </div>

        </main>
    )
}