'use client'

import {useLocale, useTranslations} from 'next-intl';
import Link from 'next/link';
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {memo, useEffect, useMemo, useState} from "react";
import imageS from "../../image/svg/Screenshot_1.webp";
import Image from "next/image";
import m from './Main.module.css'
import image5 from "../../image/svg/Group 103.svg";
import SMART from "../../image/svg/SMART.webp";
import PIXEL from "../../image/svg/PIXEL 2.webp";
import MARCO from "../../image/svg/MARCO copy.webp";
import MARCHELLO from "../../image/svg/MARCHELLO.webp";
import image3 from "../../image/svg/SWicon.svg";
import image6 from "../../image/svg/map icon.svg";
import UFO from "../../image/svg/UFO.webp";
import {Carousel} from "../../common/Carousel";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { coordinates } from '../../users'
import { defaultTheme } from '../../common/Theme'
import {fetchUserZam} from "../../API/mail";
import {addChecked, addMeneger} from "../../store/thanks-reduser";
import { send } from "@emailjs/browser";


const Video = () => {
    // const src = image4
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const onLoadedData = () => {setTimeout(() => {setIsVideoLoaded(true)}, 2000)};
    onLoadedData()
    return (
        <div>
            <Image src={imageS} className={m.video_thumb} alt="thumb"
                 // style={{opacity: isVideoLoaded ? 0 : 1}}
                />

            {/*<video preload='auto' autoPlay playsInline muted loop src={src} data-loaded='lazy'*/}
            {/*       onLoadedData={onLoadedData} style={{opacity: isVideoLoaded ? 1 : 0, height: '120vh', width: 'auto'}}*/}
            {/*       poster={src}/>*/}

            {/*<iframe title="YouTube video player" allowFullScreen onLoadedData={onLoadedData}*/}
            {/*        src="https://www.youtube.com/embed/aBA0fi0gua4?autoplay=1&mute=1&showinfo=0&iv_load_policy=3&playlist=aBA0fi0gua4"*/}
            {/*        style={{ opacity: isVideoLoaded ? 1 : 0, border: 'none', width: '100%', height: '100vh'}}></iframe>*/}
        </div>
    );
};

let numPhone = 0
let numEmail = 0

export default function Home() {

    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter()
    const dispatch = useDispatch();
    const [aparat, setAparat] = useState(false)
    const [userData, setUserData] = useState({
        name: "", phone: "", email: "" });
    const [formPass, setFormPass] = useState({
        phone: false, email: false });


    const noScroll = () => {
        let con = document.getElementById("lightblue");
        con.style.visibility = "visible";
    };

    const hiddeItem = () => {
        let con = document.getElementById("lightblue");
        con.style.visibility = "hidden";
    };

    const blurClose = (e) => {
        if(e.target.id === "lightblue"){
            let con = document.getElementById("lightblue");
            con.style.visibility = "hidden";
        }
    };

    useEffect(() => {
        let section_counter = document.querySelector("#section_counter")
        let counters = document.querySelectorAll(`.${m.counter_item}, .${m.counter_item2}, #pes1`)
        let counter2 = document.querySelectorAll(`#pes3`)
        let section_counter2 = document.querySelector("#section_counter2")
        let speed = 100

        const count = (counters) => { counters.forEach((counter, index) => {
                function UpdateCounter(){
                    const targetNumber = +counter.dataset.target
                    const initialNumber = +counter.innerText
                    const incPerCount = targetNumber / speed
                    if(initialNumber < targetNumber) {
                        counter.innerText = Math.ceil(initialNumber + incPerCount)
                        setTimeout(UpdateCounter, 40)}}
                UpdateCounter()
                if(counter.parentElement.style.animation){ counter.parentElement.style.animation = ''}
                else { counter.parentElement.style.animation = `slider-up .3s ease forward ${index / counters.length + 0.5}s`}})}
        let CounterObserver = new IntersectionObserver((entries, observer) => {
                let [entry] = entries
                if(!entry.isIntersecting) return
                count(counters)},
            { root: null, threshold: 0.4 })
        CounterObserver.observe(section_counter)
        let CounterObserver2 = new IntersectionObserver((entries, observer) => {
                let [entry] = entries
                if(!entry.isIntersecting) return
                count(counter2)}, { root: null, threshold: 0.4 })
        CounterObserver2.observe(section_counter2)
    }, [])

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: 'AIzaSyD4-Ca3XmVM77RpqrahMOrkqfwhFsvUvrg'
    });

    const defaultOption = {
        panControl: true, mapTypeControl: false, scaleControl: false, streetViewControl: false,
        rotateControl: false, fullscreenControl: false, disableDoubleClickZoom: true, styles: defaultTheme
    }

    const Map = () => {
        const center = useMemo(() => ({ lat: 48.385, lng: 29.183 }), [])
        return <GoogleMap zoom={7} center={center} mapContainerClassName={m.map_container}
                          options={defaultOption}>
            { coordinates.map((item, index) => {
                let center = item.center;
                return <MarkerF position={center} icon={image6} key={index} onClick={() => router.push(item.url) } title={item.title} />})}
        </GoogleMap>
    }

    const Home = () => {
        if(!isLoaded) return <div>Завантаження...</div>
        return <Map />
    }

    const useSubmit = async () => {
        if (formPass.email || formPass.phone) {
            dispatch(addMeneger(false))
            dispatch(addChecked(false))
            let templateParams = {
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                namePage: 'ГОЛОВНА'
            };
            dispatch(fetchUserZam(templateParams));
            send('service_qcggpom', 'template_ugaoz0u', templateParams, 'e8GXwhbbyk4tXovwB');
            send('service_qcggpom', 'template_dxf8e6l', templateParams, 'e8GXwhbbyk4tXovwB');
            router.push("/thanks");
        }
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
        }
        else {
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
            if (e.target.value.length > 17) {}
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
        let regex = new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{11,11}$/);
        regex = locale === 'en' ? new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{10,14}$/)
            : new RegExp(/^(\+|00)[1-9][0-9 \-\(\)\.]{11,11}$/)
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


  return (
    <div style={{ backgroundColor: "#283338" }}>

        <div className={m.youtubecontainer}><Video/></div>

        <div className={m.divStart}></div>

        <div className={m.mainContainer}>

            <div id='container1' className={`${m.container1}`}>
                <h1 className={m.titleH1}>{t("main.searchWhat")}</h1>
                <p className={m.titleH4}>{t("main.build100")}</p>
                <div className={m.greenButDiv+' '+m.upButton} onClick={noScroll} onTouchEnd={noScroll}>
                    <button className={m.greenBut} style={{ cursor: "pointer" }}>
                        <span>{t("main.zam")}</span>
                        <span className={m.spanArrow}>
                        <Image src={image5}  className={m.imgClass} loading='lazy' alt='photo'/>
                        </span>
                    </button>
                </div>
            </div> {/* container 1 */}

            <div className={m.div99}> {/* container 2 */}
                <div className={m.container21}>

                    <div className={m.percentDiv2}>
                        <div className={m.percentDiv}>
                            <p className={m.percentP}>{t("main.prod1")}</p>
                            <section id="section_counter" className={m.section_counter}>
                                <div className={m.counter_item}>
                                    <span id="pes1" className={m.percentPAnim} data-target={75}>0</span>
                                    <span className={m.percent}>%</span>
                                </div>
                            </section>

                            <div>
                                <section className={m.circleDiv}>
                                    <svg className={m.circleChart} viewBox="1 1 33.83098862 33.83098862" width="400" height="400"
                                         xmlns="http://www.w3.org/2000/svg"
                                         style={{ overflowClipMargin: "border-box", padding: "20px" }}>
                                        <circle className={m.circleChartBackground} stroke="black" strokeWidth="4" fill="none"
                                                cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                        <circle className={m.circleChartCircle} stroke="#42df4c" strokeWidth="4"
                                                strokeDasharray="75,100"
                                                strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                    </svg>
                                </section>
                                <p className={m.circleChartInfo}>EBITDA</p>
                            </div>
                        </div>
                    </div>

                    <div className={m.percentDiv2_2}>
                        <p className={m.percentP + " " + m.addPercentP}>{t("main.prod2")}</p>
                        <div className={m.divPerc}>
                            <section className={m.section_counter}>
                                <div className={m.counter_item2}>
                                    <span id="pes1" className={m.percentPAnim2} data-target={25}>0</span>
                                    <span className={m.percent2}>%</span>
                                </div>
                            </section>
                            <p className={m.percentP2}>{t("main.energe")}</p>
                            <p className={m.percentP2}>{t("main.salary")}</p>
                            <p className={m.percentP2}>{t("main.water")}</p>
                            <p className={m.percentP2}>{t("main.foam")}</p>
                            <p className={m.percentP2}>{t("main.wax")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={m.container2}>
                { locale === 'en' ? <p className={m.pH}>{t("main.carWashes")}</p>
                        : <p className={m.pH}>{t("main.carWashes")}</p> }
            </div> {/* container 3 */}

            { locale !== 'en' && <p className={m.pH2}>{t("main.self-service")}</p> }

            <div className={m.container2And2}>
                <p className={m.pP}>{t("main.youWillReceive")}</p>

                <div>
                    <div className={m.divSpan}>
                        <span className={m.spanB}>1</span>
                        <Link className={m.wW} style={{color: 'white'}} href={"/documentacia"}>{t("main.DESIGN")}</Link>
                    </div>
                    <div className={m.divSpan}>
                        <span className={m.spanB}>2</span>
                        <Link className={m.wW} style={{color: 'white'}} href={"/documentacia"}>{t("main.DOCUMENTATION")}</Link>
                    </div>
                    <div className={m.divSpan}>
                        <p className={m.spanB}>3</p>
                        <Link className={m.wW} style={{color: 'white'}} href={"/budivnitstvo"}>{t("main.CONSTRUCTION")}</Link>
                    </div>
                    <div className={m.divSpan}>
                        <span className={m.spanB}>4</span>
                        <Link className={m.wW} style={{color: 'white'}} href={"/cover"}>{t("main.COVERS")}</Link>
                    </div>
                    <div className={m.divSpan}>
                        <span className={m.spanB}>5</span>
                        <span className={m.wW}>{t("main.LIGHTING")}</span>
                    </div>
                    <div className={m.divSpan}>
                        <span className={m.spanB}>6</span>
                        <Link className={m.wW} style={{color: 'white'}} href={"/equipment"}>{t("main.EQUIPMENT")}</Link>
                    </div>
                    <div className={m.divSpan}>
                        <span className={m.spanB}>7</span>
                        <Link className={m.wW} style={{color: 'white'}} href={"/aksesyari"}>{t("main.ACCESSORIES")}</Link>
                    </div>
                    <div className={m.divSpan}>
                        <span className={m.spanB + " " + m.span8}>8</span>
                        <div>
                            <p style={{ marginTop: "20px" }}>{t("main.LAUNCHING")}</p>
                            <p className={m.span8Z}>{t("main.Self-sufficiency")}</p>
                        </div>
                    </div>
                </div>
            </div> {/* container 3 */}

            <div className={m.container3}>
                <div>
                    <span className={m.pDos2}>{t("main.whyUs")}</span>
                </div>
                <section id="section_counter2" className={m.section_counter2}>
                    <div className={m.imageBlock}>
                        <p className={m.pYear} id="pes3" data-target={12}>0</p>
                        <p className={m.pDos}>{t("main.yearsOfExperience")}</p>
                    </div>
                    <div className={m.divBoxNum}>
                        <p className={m.pYear} id="pes3" data-target={250}>0</p>
                        <p className={m.pDos+' '+m.pBack}>{t("main.boxes")} <br /> {t("main.turnkey")}</p>
                    </div>
                </section>
            </div> {/* container 4 */}

            <LazyLoadComponent> {/* container 5 */}
                <div className={m.container4}>
                    <p className={m.h4}>{t("main.biggestChoice")}</p>
                </div>
            </LazyLoadComponent>

            <LazyLoadComponent> {/* container 5 */}
            { locale === 'en' && <p className={m.h421}>{t("main.coveringsInUkraine")}</p> }
            { locale !== 'en' && <p className={m.h42}>{t("main.coveringsInUkraine")}</p>}
            </LazyLoadComponent>

            <LazyLoadComponent> {/* container 5 */}
                <div className={m.container4}>
                    <p className={m.p4}>{t("main.yourSinkWillStand")}</p>
                </div>
            </LazyLoadComponent>

            <LazyLoadComponent>  {/* container 6 */}
                <div className={m.container4ForCarousel}>
                    <Carousel>
                        <div className={m.sliderDiv}>
                            <div className={m.divInfo}>
                                <p className={m.pSmart}>SMART</p><p className={m.pPrise}>6 200 € {t("main.forPost")}</p>
                                <p><Link className={m.pBig2} href='/nakritya'>{t("main.MOREINFORMATION")} {`>>`}</Link></p>
                            </div>
                            <figure>
                                <div className={`${m.divImgSlider} ${m.addClass}`}>
                                    <Image src={SMART} className={m.imgClass2} alt="SMART" />
                                </div>
                            </figure>
                        </div>

                        <div className={m.sliderDiv}>
                            <div className={m.divInfo}>
                                <p className={m.pSmart}>PIXEL</p><p className={m.pPrise}>7 200 € {t("main.forPost")}</p>
                                <p><Link className={m.pBig2} href='/nakritya'>{t("main.MOREINFORMATION")} {`>>`}</Link></p>
                            </div>
                            <figure>
                                <div className={m.divImgSlider}>
                                    <Image src={PIXEL} className={m.imgClass2} alt='PIXEL' /></div>
                            </figure>
                        </div>

                        <div className={m.sliderDiv}>
                            <div className={m.divInfo}>
                                <p className={m.pSmart}>MARCO</p><p className={m.pPrise}>8 200 € {t("main.forPost")}</p>
                                <p><Link className={m.pBig2} href='/nakritya'>{t("main.MOREINFORMATION")} {`>>`}</Link></p>
                            </div>
                            <figure>
                                <div className={m.divImgSlider}><Image src={MARCO} className={m.imgClass2} alt='MARCO' /></div>
                            </figure>
                        </div>

                        <div className={m.sliderDiv}>
                            <div className={m.divInfo}>
                                <p className={m.pSmart}>MARCHELLO</p><p className={m.pPrise}>12 800 € {t("main.forPost")}</p>
                                <p><Link className={m.pBig2} href='/nakritya'>{t("main.MOREINFORMATION")} {`>>`}</Link></p>
                            </div>
                            <figure>
                                <div className={m.divImgSlider}><Image src={MARCHELLO} className={m.imgClass2} alt='MARCHELLO' /></div>
                            </figure>
                        </div>

                        <div className={m.sliderDiv}>
                            <div className={m.divInfo}>
                                <p className={m.pSmart}>UFO</p><p className={m.pPrise}>13 500 € {t("main.forPost")}</p>
                                <p><Link className={m.pBig2} href='/nakritya'>{t("main.MOREINFORMATION")} {`>>`}</Link></p>
                            </div>
                            <figure>
                                <div className={m.divImgSlider}><Image src={UFO} className={m.imgClass2} alt='UFO' /></div>
                            </figure>
                        </div>
                    </Carousel>
                </div>
            </LazyLoadComponent>

            <LazyLoadComponent>  {/* container 7 */}
                <div className={m.container4_5}>
                    <div className={m.container4_52}>
                        <div className={m.container4_53}>
                            <p className={m.p4_5+" "+m.uhHideMain}>{t("main.ordering")}</p>
                            <p className={m.p4_52+" "+m.uhHideMain}>{t("main.youWill")}</p>
                            <p className={m.p4_52+" "+m.uhHideMain}>{t("main.profitable")}</p>
                            <p className={m.p4_5+" "+m.uhHideMain}>{t("main.creation")}</p>
                            <p className={m.p4_5+" "+m.uhHideMain}>{t("main.throughout")}</p>

                            <p className={m.p4_5+" "+m.hideMain}>{t("main.ordering2")}</p>
                            <p className={m.p4_52+" "+m.hideMain}>{t("main.youWill2")}</p>
                            <p className={m.p4_52+" "+m.hideMain}>{t("main.youWill3")}</p>
                            <p className={m.p4_52+" "+m.hideMain}>{t("main.profitable2")}</p>
                            <p className={m.p4_52+" "+m.hideMain}>{t("main.profitable3")}</p>
                            <p className={m.p4_5+" "+m.hideMain}>{t("main.creation2")}</p>
                            <p className={m.p4_5+" "+m.hideMain}>{t("main.throughout2")}</p>
                            <p className={m.p4_5+" "+m.hideMain}>{t("main.throughout3")}</p>
                        </div>
                    </div>
                </div>
            </LazyLoadComponent>

            <LazyLoadComponent> {/* container 7 */}
                <div className={m.container5_2}>
                    <div className={m.slideStyleBack}></div>
                    <div className={m.container5}>
                        <div className={m.container5_3}>
                            <span className={m.p5+" "+m.hideMain}>9 800 € {t("main.forPost1")}</span>
                            <p className={m.title5P}>{t("main.allYourEquipment")}</p>
                            <ul className={m.ul}>
                                <li className={m.li}><Image className={m.imageS} src={image3} loading='lazy' alt={'arrow'}/>
                                    <span className={m.spanIm}>{t("main.pumps")}</span></li>
                                <li className={m.li}><Image className={m.imageS} src={image3} alt={'arrow'}/>
                                    <span className={m.spanIm}>{t("main.Schneider")}</span></li>
                                <li className={m.li}><Image className={m.imageS} src={image3} alt={'arrow'}/>
                                    <span className={m.spanIm}>{t("main.ISO")}</span></li>
                            </ul>
                            <Link className={m.pBig23+' '+m.pBig23_3}
                                  href={"/equipment"}>{t("main.MOREINFORMATION")} {'>>'}</Link>
                        </div>
                        <div className={m.div12+" "+m.uhHideMain}>
                            <span className={m.p5+" "+m.uhHideMain}>9 800 € {t("main.forPost1")}</span>
                        </div>
                    </div>
                </div>
            </LazyLoadComponent>

            <LazyLoadComponent> {/* container 8 */}
                <div className={m.container6}>
                    <div className={m.container6_2}>
                        <p className={m.p6}>{t("main.competitors")}</p>
                        <ul className={m.ul} style={{ color: "black" }}>
                            <li className={m.li}><Image className={m.imageS} src={image3} alt={'arrow'}/>
                                <span className={m.spanIm}>{t("main.construction")}</span></li>
                            <li className={m.li}><Image className={m.imageS} src={image3} alt={'arrow'}/>
                                <span className={m.spanIm}>{t("main.space")}</span></li>
                            <li className={m.li}><Image className={m.imageS} src={image3} alt={'arrow'}/>
                                <span className={m.spanIm}>{t("main.heating")}</span></li>
                        </ul>
                        <Link className={m.pBig23+' '+m.butGreen2} href={"/cover"}>{t("main.MOREINFORMATION")} {'>>'}</Link>
                    </div>
                </div>
            </LazyLoadComponent>

            <LazyLoadComponent>  {/* container 9 */}
                <div className={m.container7_2}>
                    <div className={m.slideStyleBack}></div>
                    <div className={m.container7}>
                        <div className={m.container7_3}>
                            <span className={m.p5+" "+m.hideMain}>6 800 € {t("main.forDevice")}</span>
                            <p className={m.p16}>{t("main.powerfulVacuum")}</p>
                            <ul className={m.ul}>
                                <li className={m.li}><Image className={m.imageS} src={image3} alt={'arrow'}/>
                                    <span className={m.spanIm}>{t("main.worksFor")}</span></li>
                                <li className={m.li}><Image className={m.imageS} src={image3} alt={'arrow'}/>
                                    <span className={m.spanIm}>{t("main.power6kW")}</span></li>
                                <li className={m.li}><Image className={m.imageS} src={image3} alt={'arrow'}/>
                                    <span className={m.spanIm}>{t("main.periodOf")}</span></li>
                            </ul>
                            <Link className={m.pBig23+' '+m.pBig23_2}
                                  href={"/porohotyag"}>{t("main.MOREINFORMATION")} {'>>'}</Link>
                        </div>

                        <div className={m.div12+" "+m.uhHideMain}>
                            <span className={m.p5+" "+m.uhHideMain}>6 800 € {t("main.forDevice")}</span>
                        </div>
                    </div>
                </div>
            </LazyLoadComponent>

            <LazyLoadComponent>  {/* container 10 */}
                <div className={m.container8}>
                    <div className={m.container8_2}>
                        <span className={m.p5+" "+m.hideMain}>6 700 €</span>
                        <p className={m.p6}>{t("main.Payment")}</p>

                        <ul className={m.ul} style={{ color: "black" }}>
                            <li className={m.li}><Image className={m.imageS} src={image3} alt={'arrow'}/>
                                <span className={m.spanIm}>{t("main.allTypes")}</span></li>
                            <li className={m.li}><Image className={m.imageS} src={image3} alt={'arrow'}/>
                                <span className={m.spanIm}>{t("main.loyalty")}</span></li>
                            <li className={m.li}><Image className={m.imageS} src={image3} alt={'arrow'}/>
                                <span className={m.spanIm}>{t("main.smartphone")}</span></li>
                        </ul>
                        <Link className={m.pBig23+' '+m.greenBut3} onClick={() => setAparat(true)}
                              href='/obladnannya'>{t("main.MOREINFORMATION")} {'>>'}</Link>
                    </div>
                    <div className={m.div12+" "+m.uhHideMain}>
                        <span className={m.p5+" "+m.uhHideMain}>6 700 €</span>
                    </div>
                </div>
            </LazyLoadComponent>

            <LazyLoadComponent>  {/* container 11 */}
                <div className={m.container10_2}>
                    <div className={m.container10}>
                        <p className={m.p10 + " " + m.uhHideMain}>{t("main.weCarry")}</p>
                        <p className={m.p10_2 + " " + m.uhHideMain}>{t("main.acknowledgment")}</p>
                        <p className={m.p10_2 + " " + m.uhHideMain}>{t("main.serviceable")}</p>
                        <p className={m.p10 + " " + m.uhHideMain}>{t("main.launch")}</p>

                        <p className={m.p10 + " " + m.hideMain}>{t("main.weCarry")}</p>
                        <p className={m.p10_2 + " " + m.hideMain}>{t("main.acknowledgment2")}</p>
                        <p className={m.p10_2 + " " + m.hideMain}>{t("main.acknowledgment3")}</p>
                        <p className={m.p10_2 + " " + m.hideMain}>{t("main.serviceable2")}</p>
                        <p className={m.p10 + " " + m.hideMain}>{t("main.serviceable3")}</p>
                        <p className={m.p10 + " " + m.hideMain}>{t("main.launch2")}</p>

                        <div className={m.div10}>
                            <span className={m.span10 + " " + m.uhHideMain}>{t("main.warranty")}</span>
                            <span className={m.p102}>{t("main.youCanSee")}</span>
                            <Link className={m.greenButDiv + " " + m.divGreen10} href={"/all-car-wash"}>
                                <button className={m.greenBut} style={{ cursor: "pointer" }}>
                                    <span>{t("main.LISTOFCARWASHS")}</span>
                                    <span className={m.spanArrow}>
                                        <Image src={image5} className={m.imgClass} alt={'arrow'}/></span>
                                </button>
                            </Link>
                            <span className={m.span10 + " " +m.hideMain2}>{t("main.warranty")}</span>
                        </div>
                    </div>
                </div>
            </LazyLoadComponent>

            <LazyLoadComponent>  {/* container map */}
                <div className={m.mapCart}> { Home() } </div>
            </LazyLoadComponent>

            <LazyLoadComponent>   {/* container 12 */}
                <div className={m.container11_2+" "+m.uhHideMain}>
                    <div className={m.container11 + " " + m.uhHideMain}>
                        <p className={m.p11 + " " + m.uhHideMain}>{t("main.already")}</p>
                    </div>
                    <div className={m.container11_4 + " " + m.uhHideMain}>
                        <p className={m.p11 + " " + m.uhHideMain}>{t("main.enough")}</p>
                    </div>
                    <div className={m.container11_4 + " " + m.c12 + " " + m.uhHideMain}>
                        <p className={m.p11 + " " + m.uhHideMain}>{t("main.only")}</p>
                    </div>
                    <div className={m.container11 + " " + m.c11 + " " + m.uhHideMain}>
                        <p className={m.p11 + " " + m.uhHideMain}>{t("main.become")}</p>
                        <p className={m.p11 + " " + m.uhHideMain}>{t("main.business")}</p>
                        <p className={m.p11 + " " + m.uhHideMain}>{t("main.immediately")}</p>
                        <p className={m.p11 + " " + m.uhHideMain}>{t("main.profit")}</p>
                    </div>

                    <p className={m.p11 + " " + m.hideMain}>{t("main.businessOwner")}</p>

                    <div className={m.container11_6}>
                        <p className={m.p11_2}>{t("main.leasing")}</p>
                        <div className={m.greenButDiv} onClick={noScroll} onTouchEnd={noScroll}>
                            <button className={m.greenBut} style={{ cursor: "pointer" }}>
                                <span>{t("main.zam")}</span><span className={m.spanArrow}>
                                <Image src={image5} className={m.imgClass} alt={'arrow'} loading="lazy" /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </LazyLoadComponent>

        </div>

        <div id="lightblue" onClick={blurClose} className={m.orderBlock} style={{ left: "0" }}>
            <div className={m.userdata2}>
                <div className={m.ix}>
                <span style={{ margin: "5px 15px 0 0", color: "#BBB9B9", cursor: "pointer" }}
                      onClick={hiddeItem}>&#10006;</span>
                </div>
                <p className={m.titleUser}>{t("getAnOffer")}</p>
                <br />
                <p className={m.descSpan}>{t("descCon")}</p>
                <br />
                <input className={m.inputUser} type="name" title="name" placeholder={`${t("enterName")}`}
                       value={userData.name} onChange={(e) => {setUserData((actual) => {
                    return { ...actual, [e.target.title]: e.target.value };});}} />
                <input className={m.inputUser} style={{ width: "90%" }} type="text" title="phone" id="phone" onClick={phoneClick}
                       placeholder={`${t("enterYourPhoneNumber")}`} value={userData.phone} onChange={onBlur2} />
                <input className={m.inputUser} type="email" title="email" id="email"
                       placeholder={`${t("enterEmail")}`} value={userData.email} onChange={onBlur} />
                <br />
                <button className={m.footerBut} style={{ width: "50%", margin: "30px auto", backgroundColor: '#42df4c' }}
                        onClick={useSubmit} disabled={!formPass.email && !formPass.phone}>{t("send")}</button>
            </div>
        </div>

    </div>
  )
}
