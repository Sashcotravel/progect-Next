'use client'

import {useLocale, useTranslations} from "next-intl";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addChecked, addMeneger} from "../../../store/thanks-reduser";
import {fetchUserZam} from "../../../API/mail";
import emailjs from "@emailjs/browser";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import image5 from "../../../image/svg/Group 103.svg";
import background from "../../../image/svg/swlogo.svg";
import s from '../porohotyag/porohotag.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Nacritya() {

    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter()
    const [userData, setUserData] = useState({name: "", phone: ""});
    const [screen, setScreen] = useState(false)
    const [formPass, setFormPass] = useState({phone: false});
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0)
        if (window.innerWidth > 900) { setScreen(false) }
        else { setScreen(true) }
    }, [])

    const blurClose = (e) => {
        if(e.target.id === "lightblue"){
            let con = document.getElementById("lightblue");
            con.style.visibility = "hidden";}
    };

    const hiddeItem = () => {
        let con = document.getElementById("lightblue");
        con.style.visibility = "hidden";
    };

    const noScroll = () => {
        let con = document.getElementById("lightblue");
        con.style.visibility = "visible";
    };

    const greenBut = (e) => { noScroll(e.target.id) }

    const useSubmit = async (e) => {
        if (formPass.phone) {
            dispatch(addMeneger(false))
            dispatch(addChecked(false))
            let templateParams = {
                name: userData.name,
                phone: userData.phone,
                namePage: 'ОБЛАДНАННЯ'
            };
            dispatch(fetchUserZam(templateParams));
            emailjs.send('service_qcggpom', 'template_7v2kxqi', templateParams, 'e8GXwhbbyk4tXovwB');
            emailjs.send('service_qcggpom', 'template_dxf8e6l', templateParams, 'e8GXwhbbyk4tXovwB');
            router.push("/thanks")
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
            : new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{11,11}$/)
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
            setFormPass((actual) => { return { ...actual, email: false } })}
    };

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: { Carousel: { fill: false, center: true, } },
    });


    return(
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

            <div className={s.mainDiv}>

                <div className={s.breadcrumbs}>
                    <Link className={s.breads} href="/">{t(`home`)}</Link>
                    <span className={s.breads2}> / {t(`equipment`)}</span>
                </div>

                <h1 className={s.h1}>{t(`equipmentH1`)}</h1>

                <p className={s.text1}>{t(`equipPage.tit2`)}</p>

                <Link href={"/obladnannya"} className={s.button}>{t(`calcObl`)}</Link>

                <Image className={s.imgObl} alt="обладняння" loading='lazy' src={
                    !screen ? require('../../../image/svg/obrizati.jpg') : require('../../../image/svg/obrizatiMin.jpg')} />

                <div className={s.divBoll}>
                    <p className={s.spanBoll}>1</p>
                    <span className={s.pBoll}>{t('nameObl')}</span>
                </div>

                <Link href={"/obladnannya"} className={s.bollButton + " " + s.hide}>{t(`butObl`)}</Link>

                <p className={s.p2}>{t(`equipPage.ramaTit`)}</p>

                <p className={s.p3} style={{paddingRight: '15px'}}>{t(`equipPage.ramaOp2`)}</p>

                <p className={s.p4}>{t(`equipPage.ramaOp3`)}</p>

                <div className={s.divImage+' '+s.pRight}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FoblWEBP1.6376c47f.webp&w=1920&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/svg/oblWEBP1Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/svg/oblWEBP1.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/svg/oblWEBP1.webp')} />
                            <Image className={s.imageInBoxObl+' '+s.imageMax} loading='lazy'
                                 src={require('../../../image/svg/oblWEBP1.webp')} alt="photo" />
                        </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FoblWEBP2.f3916742.webp&w=1920&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/svg/oblWEBP2Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/svg/oblWEBP2.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/svg/oblWEBP2.webp')} />
                            <Image className={s.imageInBoxObl+' '+s.imageMax} loading='lazy'
                                 src={require('../../../image/svg/oblWEBP2.webp')} alt="photo" />
                        </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fobrizati2.c0a23364.webp&w=1920&q=75'}>
                        <picture>
                            <source srcSet={require('../../../image/svg/obrizati2.webp')} type="image/jpeg" />
                            <source srcSet={require('../../../image/svg/obrizati2.webp')} />
                            <Image className={s.imageInBoxObl+' '+s.imageInBox3+' '+s.imageMax} loading='lazy'
                                 src={require('../../../image/svg/obrizati2.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <div style={{ marginBottom: "50px" }} className={s.divImage2 + " " + s.pRight}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FoblStend.122e33c0.webp&w=1920&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require("../../../image/svg/oblStendMin.webp")} type="image/jpeg" />}
                            {screen && <source srcSet={require("../../../image/svg/oblStend.webp")} type="image/jpeg" />}
                            <source srcSet={require("../../../image/svg/oblStend.webp")} />
                            <Image className={s.imageInBox2} loading='lazy' src={require("../../../image/svg/oblStend.webp")} alt="photo" />
                        </picture>
                    </a>
                </div>

                <div className={s.divBoll}>
                    <p className={s.spanBoll}>2</p>
                    <span className={s.pBoll}>{t('namePina')}</span>
                </div>

                <Link href={"/obladnannya"} className={s.bollButton + " " + s.hide}>{t(`butObl`)}</Link>

                <p className={s.p2}>{t(`equipPage.foam`)}</p>

                <div className={s.divImage + " " + s.hide} style={{ margin: "10px 0 -80px 0" }}>
                    <p className={s.p2 + " " + s.hide}>{t(`equipPage.foamVis`)}</p>
                    <p className={s.p2 + " " + s.hide}>{t(`equipPage.foamNis`)}</p>
                </div>

                <div style={{ marginBottom: "50px" }} className={s.divImage + " " + s.videoBox + " " + s.pRight}>
                    <p className={s.p2 + " " + s.block}>Піна кольорова на технології високого тиску</p>
                    <video className={s.imageInBox + " " + s.videoWidth}
                           src={'https://samwash.ua/static/media/pinaVis.efe76439b501e06960bb.mov'}
                           title="photo" preload="auto" autoPlay playsInline muted loop controls={true} />
                    <p className={s.p2 + " " + s.block}>Піна на технології низького тиску</p>
                    <video className={s.imageInBox + " " + s.videoWidth}
                           src={'https://samwash.ua/static/media/pinaNis.3dfefda1afacfc03f3b3.mp4'}
                           title="photo" preload="auto" autoPlay playsInline muted loop controls={true} />
                </div>

                <div className={s.divBoll}>
                    <p className={s.spanBoll}>3</p>
                    <span className={s.pBoll}>{t('nameElecronica')}</span>
                </div>

                <Link href={"/obladnannya"} className={s.bollButton + " " + s.hide}>{t(`butObl`)}</Link>

                <p className={s.p2}>{t(`equipPage.elecroTit`)}</p>

                <p className={s.p3} style={{paddingRight: '15px'}}>{t(`equipPage.elecroOpis2`)}</p>

                <p className={s.p4}>{t(`equipPage.elecroOpis3`)}</p>

                <div className={s.divImage + " " + s.hide} style={{ margin: "10px 0 -80px 0" }}>
                    <p className={s.p2 + " " + s.hide} style={{width: '33%'}}>{t(`equipPage.opisImg1`)}</p>
                    <p className={s.p2 + " " + s.hide} style={{width: '33%'}}>{t(`equipPage.opisImg2`)}</p>
                    <p className={s.p2 + " " + s.hide} style={{width: '33%'}}>{t(`equipPage.opisImg3`)}</p>
                </div>

                <div className={s.divImage+' '+s.pRight}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felectro2.8908e299.webp&w=3840&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/svg/electro2Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/svg/electro2.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/svg/electro2.webp')} />
                            <Image className={s.imageInBox+' '+s.height720+' '+s.shafa} loading='lazy'
                                 src={require('../../../image/svg/electro2.webp')} alt="photo" />
                        </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felectro3.a22332bf.webp&w=640&q=75'}>
                        <picture>
                            <source srcSet={require('../../../image/svg/electro3.webp')} type="image/jpeg" />
                            <source srcSet={require('../../../image/svg/electro3.webp')} />
                            <Image className={s.imageInBox+' '+s.height720} loading='lazy'
                                 src={require('../../../image/svg/electro3.webp')} alt="photo" />
                        </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpult.28261bb3.webp&w=1920&q=75'}>
                        <picture>
                            <source srcSet={require('../../../image/svg/pult.webp')} type="image/jpeg" />
                            <source srcSet={require('../../../image/svg/pult.webp')} />
                            <Image className={s.imageInBox+' '+s.imageInBox3+' '+s.height720+' '+s.pult} loading='lazy'
                                 src={require('../../../image/svg/pult.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <div className={s.divImage2+' '+s.pRight} style={{marginBottom: '50px'}}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felectro1.45d5d163.webp&w=3840&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/svg/electro1Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/svg/electro1.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/svg/electro1.webp')} />
                            <Image className={s.imageInBox2} loading='lazy'
                                 src={require('../../../image/svg/electro1.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <div className={s.divBoll} >
                    <p className={s.spanBoll}>4</p>
                    <span className={s.pBoll}>{t('namePult')}</span>
                </div>

                <Link href={"/obladnannya"} className={s.bollButton + " " + s.hide}>{t(`butObl`)}</Link>

                <p className={s.p2}>{t(`equipPage.panelTit`)}</p>

                <div className={s.divImage + " " + s.videoBox + ' ' + s.pRight}>
                    <a data-fancybox="gallery"
                       href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fterminal2.abb27b25.webp&w=1920&q=75'}>
                        <picture>
                            {!screen &&
                                <source srcSet={require("../../../image/svg/terminal2Min.webp")} type="image/jpeg"/>}
                            {screen &&
                                <source srcSet={require("../../../image/svg/terminal2.webp")} type="image/jpeg"/>}
                            <source srcSet={require("../../../image/svg/terminal2.webp")}/>
                            <Image
                                className={s.imageInBox + " " + s.imageTerminal + " " + s.procOne + " " + s.width525 + " " + s.height370}
                                src={require("../../../image/svg/terminal2.webp")} alt="photo" loading='lazy'/>
                        </picture>
                    </a>
                    <video className={s.imageInBox + " " + s.imageTerminal + " " + s.procOne + " " + s.width525 + " " + s.height370}
                           src={'https://samwash.ua/static/media/pinaNis.3dfefda1afacfc03f3b3.mp4'}
                           title="photo" preload="auto" autoPlay playsInline muted loop controls={true}/>
                    <a data-fancybox="gallery"
                       href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fterminal4.75c69d17.webp&w=828&q=75'}>
                        <picture>
                            <source srcSet={require("../../../image/svg/terminal4.webp")} type="image/jpeg"/>
                            <source srcSet={require("../../../image/svg/terminal4.webp")}/>
                            <Image
                                className={s.imageInBox + " " + s.imageTerminal + " " + s.procOne + " " + s.width525 + " " + s.height370}
                                src={require("../../../image/svg/terminal4.webp")} alt="photo" loading='lazy'/>
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
    )
}