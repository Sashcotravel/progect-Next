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
import s from '../porohotyag/porohotag.module.css'
import Image from "next/image";
import image5 from "../../../image/svg/Group 103.svg";
import background from "../../../image/svg/swlogo.svg";
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
        if (window.innerWidth > 900) {
            setScreen(false)
        } else {
            setScreen(true)
        }
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
                namePage: 'НАКРИТТЯ'
            };
            dispatch(fetchUserZam(templateParams));
            emailjs.send('service_qcggpom', 'template_7v2kxqi', templateParams, 'e8GXwhbbyk4tXovwB');
            emailjs.send('service_qcggpom', 'template_dxf8e6l', templateParams, 'e8GXwhbbyk4tXovwB');
            router.push("/thanks")
        }
    };

    const phoneClick = (e) => {
        if(locale === 'ua'){
            if(userData.phone === ''){setUserData((actual) => {return { ...actual, phone: '+380' }})}}
        if(locale === 'en'){
            if(userData.phone === ''){setUserData((actual) => {return { ...actual, phone: '+1' }})}}
        if(locale === 'ru'){
            if(userData.phone === ''){setUserData((actual) => {return { ...actual, phone: '+380' }})}}
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
            setFormPass((actual) => { return { ...actual, email: false } })
        }
    };

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: { Carousel: { fill: false, center: true, }, },});


    return (
        <main className={s.main}>

            <Image src={require('../../marchello4.jpg')} alt='aa' />

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
                    <span className={s.breads2}> / {t(`cover`)}</span>
                </div>

                <h1 className={s.h1}>{t("coverH1")}</h1>

                <p className={s.text1}>{t(`coverPage.coverTit`)}</p>

                <Link href={"/obladnannya"} className={s.button}>{t(`calcObl`)}</Link>

                <div className={s.nonImage}></div>

                <div className={s.divBoll}>
                    <span className={s.spanBoll}>1</span>
                    <span className={s.pBoll} style={{fontFamily: 'Gilroy Medium'}}>Smart</span>
                    <span className={s.spanNacr}>~6 200 € {t(`main.forPost1`)}</span>
                </div>

                <Link href={"/nakritya"} className={s.bollButton + " " + s.hide}>{t(`butObl`)}</Link>

                <p className={s.p2}>{t(`coverPage.smartTit`)}</p>

                <p style={{paddingRight: '15px'}} className={s.p3}>{t(`coverPage.smartOpis1`)}</p>

                <div className={s.divImage}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhos1.8b535deb.webp&w=1920&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/hos1Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/hos1.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/hos1.webp')} />
                            <Image className={s.imageInBoxObl+' '+s.imageMax} loading='lazy' src={require('../../../image/nacr/hos1.webp')} alt="photo" />
                        </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhos3.29d24bb6.webp&w=1920&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/hos3Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/hos3.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/hos3.webp')} />
                            <Image className={s.imageInBoxObl+' '+s.imageMax} loading='lazy' src={require('../../../image/nacr/hos3.webp')} alt="photo" />
                        </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhos4.bdc32d83.webp&w=1080&q=75'}>
                        <picture>
                            <source srcSet={require('../../../image/nacr/hos4.webp')} type="image/jpeg" />
                            <source srcSet={require('../../../image/nacr/hos4.webp')} />
                            <Image className={s.imageInBoxObl+' '+s.imageInBox3+' '+s.imageMax} loading='lazy'
                                 src={require('../../../image/nacr/hos4.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <div style={{marginBottom: '50px'}} className={s.divImage2}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhos2.6420f26c.webp&w=1920&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/hos2Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/hos2.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/hos2.webp')} />
                            <Image className={s.imageInBox2} loading='lazy' src={require('../../../image/nacr/hos2.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <div className={s.nonImage}></div>

                <div className={s.divBoll}>
                    <span className={s.spanBoll}>2</span>
                    <span className={s.pBoll} style={{fontFamily: 'Gilroy Medium'}}>Pixel</span>
                    <span className={s.spanNacr}>~7 200 € {t(`main.forPost1`)}</span>
                </div>

                <Link href={"/nakritya"} className={s.bollButton + " " + s.hide}>{t(`butObl`)}</Link>

                <p className={s.p2}>{t(`coverPage.pixelTit`)}</p>

                <p style={{paddingRight: '15px'}} className={s.p3}>{t(`coverPage.pixelOpis1`)}</p>

                <p className={s.p4}>{t(`coverPage.pixelOpis2`)}</p>

                <div className={s.divImage}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarchello18.388a2d6c.webp&w=1920&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/marchello18Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/marchello18.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/marchello18.webp')} />
                            <Image className={s.imageInBoxObl+' '+s.imageMax} src={require('../../../image/nacr/marchello18.webp')} alt="photo" />
                        </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarchello8.7fadecae.webp&w=1920&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/marchello8Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/marchello8.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/marchello8.webp')} />
                            <Image className={s.imageInBoxObl+' '+s.imageMax} src={require('../../../image/nacr/marchello8.webp')} alt="photo" />
                        </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarchello14.31900e92.webp&w=1080&q=75'}>
                        <picture>
                            <source srcSet={require('../../../image/nacr/marchello14.webp')} type="image/jpeg" />
                            <source srcSet={require('../../../image/nacr/marchello14.webp')} />
                            <Image className={s.imageInBoxObl+' '+s.imageInBox3+' '+s.imageMax} src={require('../../../image/nacr/marchello14.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <div style={{marginBottom: '50px'}} className={s.divImage2}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarchello6.3bd2e673.webp&w=3840&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/marchello6Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/marchello6.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/marchello6.webp')} />
                            <Image className={s.imageInBox2} src={require('../../../image/nacr/marchello6.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <div className={s.nonImage}></div>

                <div className={s.divBoll}>
                    <span className={s.spanBoll}>3</span>
                    <span className={s.pBoll} style={{fontFamily: 'Gilroy Medium'}}>Marco Banner</span>
                    <span className={s.spanNacr+' '+s.leftPrise}>~7 700 € {t(`main.forPost1`)}</span>
                </div>

                <Link href={"/nakritya"} className={s.bollButton + " " + s.hide}>{t(`butObl`)}</Link>

                <p className={s.p2}>{t(`coverPage.marcoBTit`)}</p>

                <p style={{paddingRight: '15px'}} className={s.p3}> {t(`coverPage.marcoBOpis1`)}</p>

                <p className={s.p4}>{t(`coverPage.marcoBOpis2`)}</p>

                <div className={s.divImage+' '+s.divImg2Photo}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.7c2f4bf6.webp&w=3840&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/Vinnitsa/2Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/Vinnitsa/2.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/Vinnitsa/2.webp')} />
                            <Image className={s.imageInBoxObl+' '+s.imageMax} loading='lazy'
                                 src={require('../../../image/Vinnitsa/2.webp')} alt="photo" />
                        </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.77dc2b3c.webp&w=3840&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/Vinnitsa/1Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/Vinnitsa/1.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/Vinnitsa/1.webp')} />
                            <Image className={s.imageInBoxObl+' '+s.imageMax} loading='lazy'
                                 src={require('../../../image/Vinnitsa/1.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <div style={{marginBottom: '50px'}} className={s.divImage2}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.5c39184d.webp&w=2048&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/Vinnitsa/4Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/Vinnitsa/4.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/Vinnitsa/4.webp')} />
                            <Image className={s.imageInBox2} loading='lazy' src={require('../../../image/Vinnitsa/4.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <div className={s.nonImage}></div>

                <div className={s.divBoll}>
                    <span className={s.spanBoll}>4</span>
                    <span className={s.pBoll} style={{fontFamily: 'Gilroy Medium'}}>Marco Glass</span>
                    <span className={s.spanNacr+' '+s.leftPrise}>~8 200 € {t(`main.forPost1`)}</span>
                </div>

                <Link href={"/nakritya"} className={s.bollButton + " " + s.hide}>{t(`butObl`)}</Link>

                <p className={s.p2}>{t(`coverPage.marcoGTit`)}</p>

                <p style={{paddingRight: '15px'}} className={s.p3}>{t(`coverPage.marcoGOpis1`)}</p>

                <p className={s.p4}>{t(`coverPage.marcoGOpis2`)}</p>

                <div style={{marginBottom: '50px', gridColumnStart: '2', marginTop: '40px'}} className={s.divImage2}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhosi2.c2190c8e.webp&w=3840&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/hosi2Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/hosi2.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/hosi2.webp')} />
                            <Image loading='lazy' className={s.imageInBox2} src={require('../../../image/nacr/hosi2.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <div className={s.nonImage}></div>

                <div className={s.divBoll}>
                    <span className={s.spanBoll}>5</span>
                    <span className={s.pBoll} style={{fontFamily: 'Gilroy Medium'}}>Marchello</span>
                    <span className={s.spanNacr+' '+s.leftPrise2}>~12 800 € {t(`main.forPost1`)}</span>
                </div>

                <Link href={"/nakritya"} className={s.bollButton + " " + s.hide}>{t(`butObl`)}</Link>

                <p className={s.p2}>{t(`coverPage.marchelloTit`)}</p>

                <p style={{paddingRight: '15px'}} className={s.p3}>{t(`coverPage.marchelloOpis1`)}</p>

                <p className={s.p4}>{t(`coverPage.marchelloOpis2`)}</p>

                <div className={s.divImage}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarchello3.f2c8b6b8.webp&w=3840&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/marchello3Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/marchello3.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/marchello3.webp')} />
                            <Image loading='lazy' className={s.imageInBoxObl+' '+s.imageMax} src={require('../../../image/nacr/marchello3.webp')} alt="photo" />
                        </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarchello4.5286466e.webp&w=3840&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/marchello4Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/marchello4.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/marchello4.webp')} />
                            <Image loading='lazy' className={s.imageInBoxObl+' '+s.imageMax} src={require('../../../image/nacr/marchello4.webp')} alt="photo" />
                        </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarchello13.eee58328.webp&w=1920&q=75'}>
                        <picture>
                            <source srcSet={require('../../../image/nacr/marchello13.webp')} type="image/jpeg" />
                            <source srcSet={require('../../../image/nacr/marchello13.webp')} />
                            <Image loading='lazy' className={s.imageInBoxObl+' '+s.imageInBox3+' '+s.imageMax}
                                 src={require('../../../image/nacr/marchello13.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <div style={{marginBottom: '50px'}} className={s.divImage2}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarchello2.2322b947.webp&w=3840&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/marchello2Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/marchello2.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/marchello2.webp')} />
                            <Image loading='lazy' className={s.imageInBox2} src={require('../../../image/nacr/marchello2.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

                <div className={s.nonImage}></div>

                <div className={s.divBoll}>
                    <span className={s.spanBoll}>6</span>
                    <span className={s.pBoll} style={{fontFamily: 'Gilroy Medium'}}>Ufo</span>
                    <span className={s.spanNacr}>~13 500 € {t(`main.forPost1`)}</span>
                </div>

                <Link href={"/nakritya"} className={s.bollButton + " " + s.hide}>{t(`butObl`)}</Link>

                <p className={s.p2}>{t(`coverPage.ufoTit`)}</p>

                <p style={{paddingRight: '15px'}} className={s.p3}> {t(`coverPage.ufoOpis1`)}</p>

                <p className={s.p4}>{t(`coverPage.ufoOpis2`)}</p>

                <div className={s.divImage}>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufo1.a320ac1c.webp&w=1920&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/ufo1Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/ufo1.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/ufo1.webp')} />
                            <Image loading='lazy' className={s.imageInBoxObl+' '+s.imageMax} src={require('../../../image/nacr/ufo1.webp')} alt="photo" />
                        </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufo2.03a73d51.webp&w=3840&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/ufo2Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/ufo2.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/ufo2.webp')} />
                            <Image loading='lazy' className={s.imageInBoxObl+' '+s.imageMax} src={require('../../../image/nacr/ufo2.webp')} alt="photo" />
                        </picture>
                    </a>
                    <a data-fancybox="gallery" href={'https://progect-next-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufo3.81f4036f.webp&w=3840&q=75'}>
                        <picture>
                            {!screen && <source srcSet={require('../../../image/nacr/ufo3Min.webp')} type="image/jpeg" />}
                            {screen && <source srcSet={require('../../../image/nacr/ufo3.webp')} type="image/jpeg" />}
                            <source srcSet={require('../../../image/nacr/ufo3.webp')} />
                            <Image loading='lazy' className={s.imageInBoxObl+' '+s.imageMax} src={require('../../../image/nacr/ufo3.webp')} alt="photo" />
                        </picture>
                    </a>
                </div>

            {/*    /!* END *!/*/}

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