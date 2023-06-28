'use client'

import s from './Privacy.module.css'
import Link from "next-intl/link";
import React from "react";
import {useTranslations} from "next-intl";

export default function Privacy({ params }) {

    const t = useTranslations("privacy-policy");
    const locale = params.locale

    return(
        <div className={s.divBlock}>
            <div className={s.breadcrumbs}>
                <Link className={s.breads} href="/">{t(`home`)}</Link>
                <span className={s.breads2}> / {t(`privacy-policy`)}</span>
            </div>

            <h1 className={s.titleH2} id='divBox'>{t("privacy-policy")}</h1>

            <p className={s.punkt}>{t("a")}</p>

            <div className={s.divP}>
                <p className={s.p}>{t("a1")}</p>
                <p className={s.p}>{t("a2")}</p>
            </div>

            <p className={s.punkt}>{t("b")}</p>

            <div className={s.divP}>
                <p className={s.p1}>{t("b1")} ( <Link className={s.link} href={'/'}>https://samwash.ua/</Link> )</p>
            </div>

            <p className={s.punkt}>{t("c")}</p>

            <div className={s.divP}>
                <div className={s.p}>
                    <p className={s.p2}>{t("c1")}</p>
                    <p className={s.p2}>{t("c2")}</p>
                    <p className={s.p2}>{t("c3")}</p>
                    <p className={s.p2}>{t("c4")}</p>
                    <p className={s.p2}>{t("c5")}</p>
                    <p className={s.p2}>{t("c6")}</p>
                    <p className={s.p2}>{t("c7")}</p>
                </div>
                <div className={s.p}>
                    <p className={s.p2}>{t("c8")}</p>
                    <p className={s.p2}>{t("c9")}</p>
                    <p className={s.p2}>{t("c10")}</p>
                    <p className={s.p2}>{t("c11")}</p>
                    <p className={s.p2}>{t("c12")}</p>
                </div>
            </div>

            <p className={s.punkt}>{t("d")}</p>

            <div className={s.divP}>
                <div className={s.p}>
                    <p className={s.p2}>{t("d1")}</p>
                    <p className={s.p2}>{t("d2")}</p>
                    <p className={s.p2}>{t("d3")}</p>
                    <p className={s.p2}>{t("d4")}</p>
                    <p className={s.p2}>{t("d5")}</p>
                    <p className={s.p2}>{t("d6")}</p>
                    <p className={s.p2}>{t("d7")}</p>
                    <p className={s.p2}>{t("d8")}</p>
                    <p className={s.p2}>{t("d9")}</p>
                    <p className={s.p2}>{t("d10")}</p>
                    <p className={s.p2}>{t("d11")}</p>
                    <p className={s.p2}>{t("d12")}</p>
                </div>
                <div className={s.p}>
                    <p className={s.p2}>{t("d13")}</p>
                    <p className={s.p2}>{t("d14")}</p>
                    <p className={s.p2}>{t("d15")}</p>
                    <p className={s.p2}>{t("d16")}</p>
                    <p className={s.p2}>{t("d17")}</p>
                    <p className={s.p2}>{t("d18")}</p>
                    <p className={s.p2}>{t("d19")}</p>
                    <p className={s.p2}>{t("d20")}</p>
                </div>
            </div>

            <p className={s.punkt}>{t("f")}</p>

            <div className={s.divP}>
                <div className={s.p}>
                    <p className={s.p2}>{t("f1")}</p>
                    <p className={s.p2}>{t("f2")}</p>
                    <p className={s.p2}>{t("f3")}</p>
                    <p className={s.p2}>{t("f4")}</p>
                    <p className={s.p2}>{t("f5")}</p>
                </div>
                <div className={s.p}>
                    <p className={s.p2}>{t("f6")}</p>
                    <p className={s.p2}>{t("f7")}</p>
                    <p className={s.p2}>{t("f8")}</p>
                </div>
            </div>

            <p className={s.punkt}>{t("e")}</p>

            <div className={s.divP}>
                <div className={s.p}>
                    <p className={s.p2}>{t("e1")}</p>
                    <p className={s.p2}>{t("e2")}</p>
                    <p className={s.p2}>{t("e3")}</p>
                </div>
                <div className={s.p}>
                    <p className={s.p2}>{t("e4")}</p>
                    <p className={s.p2}>{t("e5")}</p>
                </div>
            </div>

            <p className={s.punkt}>{t("g")}</p>

            <div className={s.divP}>
                <p className={s.p}>{t("g1")}</p>
                <p className={s.p}>{t("g2")}</p>
            </div>

            <p className={s.punkt}>{t("l")}</p>

            <div className={s.divP}>
                <p className={s.p}>{t("l1")}</p>
                <p className={s.p}>{t("l2")}</p>
            </div>

            <p className={s.punkt}>{t("m")}</p>

            <div className={s.divP}>
                <p className={s.p}>{t("m1")}</p>
            </div>

        </div>
    )
}