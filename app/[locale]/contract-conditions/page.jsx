'use client'

import s from '../privacy-policy/Privacy.module.css'
import Link from "next-intl/link";
import React from "react";
import {useTranslations} from "next-intl";

export default function Privacy({ params }) {

    const t = useTranslations("contract-conditions");
    const locale = params.locale

    return(
        <div className={s.divBlock}>
            <div className={s.breadcrumbs}>
                <Link className={s.breads} href="/">{t(`home`)}</Link>
                <span className={s.breads2}> / {t(`contract-conditions`)}</span>
            </div>

            <h1 className={s.titleH2} id='divBox'>{t("contract-conditions")}</h1>

            <p className={s.punkt}>{t("a")}</p>

            <div className={s.divP}>
                <p className={s.p}>{t("a1")}</p>
                <p className={s.p}>{t("a2")}</p>
            </div>

            <p className={s.punkt}>{t("b")}</p>

            <div className={s.divP}>
                <p className={s.p}>{t("b1")}</p>
                <p className={s.p}>{t("b2")} <Link className={s.link} href={'/'}>https://samwash.ua/</Link> </p>
            </div>

            <p className={s.punkt}>{t("c")}</p>

            <div className={s.divP}>
                <p className={s.p}>{t("c1")}</p>
                <p className={s.p}>{t("c2")}</p>
            </div>

            <p className={s.punkt}>{t("d")}</p>

            <div className={s.divP}>
                <div className={s.p}>
                    <p className={s.p2}>{t("d1")}</p>
                    <p className={s.p2}>{t("d2")}</p>
                </div>
                <div className={s.p}>
                    <p className={s.p2}>{t("d3")}</p>
                    <p className={s.p2}>{t("d4")}</p>
                </div>
            </div>

            <p className={s.punkt}>{t("f")}</p>

            <div className={s.divP}>
                <div className={s.p}>
                    <p className={s.p2}>{t("f1")}</p>
                    <p className={s.p2}>{t("f2")}</p>
                </div>
                <div className={s.p}>
                    <p className={s.p2}>{t("f3")}</p>
                </div>
            </div>

            <p className={s.punkt}>{t("e")}</p>

            <div className={s.divP}>
                <div className={s.p}>
                    <p className={s.p2}>{t("e1")}</p>
                    <p className={s.p2}>{t("e2")}</p>
                </div>
                <div className={s.p}>
                    <p className={s.p2}>{t("e3")}</p>
                </div>
            </div>

            <p className={s.punkt}>{t("g")}</p>

            <div className={s.divP}>
                <div className={s.p}>
                    <p className={s.p2}>{t("g1")}</p>
                    <p className={s.p2}>{t("g2")}</p>
                    <p className={s.p2}>{t("g3")}</p>
                </div>
                <div className={s.p}>
                    <p className={s.p2}>{t("g4")}</p>
                    <p className={s.p2}>{t("g5")}</p>
                    <p className={s.p2}>{t("g6")}</p>
                </div>
            </div>

            <p className={s.punkt}>{t("l")}</p>

            <div className={s.divP}>
                <div className={s.p}>
                    <p className={s.p2}>{t("l1")}</p>
                    <p className={s.p2}>{t("l2")}</p>
                </div>
                <div className={s.p}>
                    <p className={s.p2}>{t("l3")}</p>
                </div>
            </div>

            <p className={s.punkt}>{t("m")}</p>

            <div className={s.divP}>
                <p className={s.p}>{t("m1")}</p>
                <p className={s.p}>{t("m2")}</p>
            </div>

            <p className={s.punkt}>{t("n")}</p>

            <div className={s.divP}>
                <div className={s.p}>
                    <p className={s.p2}>{t("n1")}</p>
                </div>
                <div className={s.p}>
                    <p className={s.p2}>{t("n2")}</p>
                    <p className={s.p2}>{t("n3")}</p>
                </div>
            </div>

            <p className={s.punkt}>{t("p")}</p>

            <div className={s.divP}>
                <div className={s.p}>
                    <p className={s.p2}>{t("p1")}</p>
                </div>
                <div className={s.p}>
                    <p className={s.p2}>{t("p2")}</p>
                </div>
            </div>

            <p className={s.punkt}>{t("r")}</p>

            <div className={s.divP}>
                <p className={s.p}>{t("r1")}</p>
                <p className={s.p}>{t("r2")}</p>
            </div>

            <p className={s.punkt}>{t("s")}</p>

            <div className={s.divP}>
                <div className={s.p}>
                    <p className={s.p2}>{t("s1")}</p>
                    <p className={s.p2}>{t("s2")}</p>
                    <p className={s.p2}>{t("s3")}</p>
                </div>
                <div className={s.p}>
                    <p className={s.p2}>{t("s4")}</p>
                    <p className={s.p2}>{t("s5")}</p>
                </div>
            </div>

            <p className={s.punkt}>{t("q")}</p>

            <div className={s.divP}>
                <div className={s.p}>
                    <p className={s.p2}>{t("q1")}</p>
                    <p className={s.p2}>{t("q2")}</p>
                    <p className={s.p2}>{t("q3")}</p>
                </div>
                <div className={s.p}>
                    <p className={s.p2}>{t("q4")}</p>
                    <p className={s.p2}>{t("q5")}</p>
                    <p className={s.p2}>{t("q6")}</p>
                </div>
            </div>

        </div>
    )
}