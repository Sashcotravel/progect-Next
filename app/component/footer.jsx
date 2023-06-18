'use client'

import facabook from "../../image/svg/facebook.png";
import instagram from "../../image/svg/instagram.png";
import youtube from "../../image/svg/youtube.png";
import tiktok from "../../image/svg/tik-tok.png";
import whatsapp from "../../image/logo/webp/whatsapp.webp";
import telegram from "../../image/logo/webp/telegram.webp";
import viber from "../../image/logo/webp/viber.webp";
import Image from 'next/image';
import './footer.css'
import { useTranslations } from "next-intl";

const TheFooter = () => {

    const t = useTranslations();

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
                    <Image src={require("../../image/logo/webp/logo23.webp")} className="imgLogo" loading="lazy" alt="photo" />
                </picture>
                <picture>
                    <Image src={require("../../image/logo/webp/maker2.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../image/logo/webp/maker1.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../image/logo/webp/maker.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../image/logo/webp/maxus-logo.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../image/logo/webp/intel600.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../image/logo/webp/pilkington-min.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../image/logo/webp/microsoft.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../image/logo/webp/xCiaOfER_400x400.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../image/logo/webp/1.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../image/logo/webp/2.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
                <picture>
                    <Image src={require("../../image/logo/webp/3.webp")} className='imgLogo' loading='lazy' alt="photo"/>
                </picture>
            </div>
        </div>
    </footer>
}

export {TheFooter}