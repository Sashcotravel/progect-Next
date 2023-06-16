'use client'

import {useTranslations} from "next-intl";
import s from "./thanks.module.css"
import Link from "next/link";
import Image from 'next/image';
import background from "../../../svg/swlogo.svg";
import {useSelector} from "react-redux";

export default function Thanks() {

    const t = useTranslations();
    const meneger = useSelector((state) => state.thanks.meneger)
    const checked = useSelector((state) => state.thanks.checked)

    return (<>

        {/*<head>*/}
        {/*    <title>{t("pageThanks")}</title>*/}
        {/*    /!*<script id="facebook-pixel-script">*!/*/}
        {/*    /!*    {*!/*/}
        {/*    /!*        `fbq(’track’, ’Lead’);`*!/*/}
        {/*    /!*    }</script>*!/*/}
        {/*</head>*/}

        <div  className={s.divBlock}>
            <Image loading='lazy' src={background} className={s.imageThanks} alt='thanks'/>
            <div style={{zIndex: 2, height: '78vh'}}>
                <div className={`${s.breadcrumbs}`}>
                    <Link className={s.breads} href="/">{t(`home`)}</Link>
                    <span className={s.breads2}> / {t(`pageThanks`)}</span>
                </div>

                <div className={s.boxDiv}>

                    <div className={s.divTit}>
                        <h1 className={s.thanksTitle}>{t(`titleThanks`)}</h1>
                    </div>

                    <div className={s.divP}>
                        {!checked && <p className={s.thanksP}>{t(`thanksMenegre`)}</p>}
                        {meneger && <p className={s.thanksP}>{t(`thanksTacozh`)}</p>}
                    </div>

                </div>

                <a className={s.butThanks} href="/">{t(`mainPageTo`)}</a>

            </div>
        </div>

    </>)
}