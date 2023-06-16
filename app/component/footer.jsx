'use client'

import facabook from "../../svg/facebook.png";
import instagram from "../../svg/instagram.png";
import youtube from "../../svg/youtube.png";
import tiktok from "../../svg/tik-tok.png";
import whatsapp from "../../logo/webp/whatsapp.webp";
import telegram from "../../logo/webp/telegram.webp";
import viber from "../../logo/webp/viber.webp";
import Image from 'next/image';
import './footer.css'
import {useLocale, useTranslations} from "next-intl";

const TheFooter = () => {

    const t = useTranslations();
    const locale = useLocale();

    return <footer className='footerDiv'>
        <div className='footerUnHiden'>
            <p className='socP'>{t("socialNetworks")}</p>
            <div>
                <a className='socA' href='https://www.facebook.com/samwashcarwash' target='_blank'>
                    <span className='spanImage'><Image className='soshM' src={facabook} alt="Facebook"/></span> Facebook</a>
                <a className='socA' href='https://www.instagram.com/samwash_carwash/' target='_blank'>
                    <span className='spanImage'><Image className='soshM' src={instagram} alt="Instagram"/></span> Instagram</a>
                <a className='socA' href={'/'} target='_blank'>● GMap</a>
                <a className='socA' href={'https://www.youtube.com/@samwash'} target='_blank'>
                    <span className='spanImage'><Image className='soshM' src={youtube} alt="YouTube"/></span> YouTube</a>
                <a className='socA' href={'https://www.tiktok.com/@samwash.official'} target='_blank'>
                    <span className='spanImage'><Image className='soshM' src={tiktok} alt="TikTok"/></span> TikTok</a>
            </div>
        </div>
        <div className='footerDiv3'>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span className='footerSpan'><a href="tel:+380505923772" style={{color: 'white'}}>+38 (050) 59 23 772</a></span>
                <span className='footerSpan'><a style={{color: 'white'}} href="mailto:info@samwash.ua">info@samwash.ua</a></span>
            </div>
            <div>
                <div style={{display: 'flex'}}>
                    <p className='circle red mobCircle'></p>
                    <span className='socP fontQ'>{t("question")}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a href="viber://chat?number=%2B380505923772" target='_blank'>
                        <Image src={viber} alt="viber" className='imgClase' width={30} height={30} /></a>
                    <a href="https://t.me/dstevark" target='_blank'>
                        <Image src={telegram} alt="telegram" className='imgClase' width={30} height={30} /></a>
                    <a href="https://wa.me/+380505923772" target='_blank'>
                        <Image src={whatsapp} alt="whats up" className='imgClase' width={30} height={30} /></a>
                </div>
            </div>
        </div>
        <div className='footerHiden'>
            <p className='socP'>{t("socialNetworks")}</p>
            <div className='div2Soc'>
                <a className='socA' href='https://www.facebook.com/samwashcarwash' target='_blank'>
                    <span className='spanImage'><Image className='soshM' src={facabook} alt="Facebook"/></span> Facebook</a>
                <a className='socA' href='https://www.instagram.com/samwash_carwash/' target='_blank'>
                    <span className='spanImage'><Image className='soshM' src={instagram} alt="Instagram"/></span> Instagram</a>
                <a className='socA' href={'/'} target='_blank'>● GMap</a>
                <a className='socA' href={'https://www.youtube.com/@samwash'} target='_blank'>
                    <span className='spanImage'><Image className='soshM' src={youtube} alt="YouTube"/></span> YouTube</a>
                <a className='socA' href={'https://www.tiktok.com/@samwash.official'} target='_blank'>
                    <span className='spanImage'><Image className='soshM' src={tiktok} alt="TikTok"/></span> TikTok</a>
            </div>
        </div>
        <div className='divBoxImage'>
            <div>
                <p className='socP' style={{margin: '-15px 0', display: 'flex',
                    justifyContent: 'center'}}>{t("OurPartners")}</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center'}}>
                <picture>
                    <Image src={require("../../logo/webp/logo23.webp")} className="imgLogo" loading="lazy" alt="photo" />
                </picture>
                <picture>
                    <Image src={require("../../logo/webp/maker2.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../logo/webp/maker1.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../logo/webp/maker.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../logo/webp/maxus-logo.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../logo/webp/intel600.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../logo/webp/pilkington-min.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../logo/webp/microsoft.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../logo/webp/xCiaOfER_400x400.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../logo/webp/1.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../logo/webp/2.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../logo/webp/3.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
            </div>
        </div>
    </footer>
}

export {TheFooter}