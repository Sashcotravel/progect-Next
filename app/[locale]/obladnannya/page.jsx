'use client'

import {useLocale, useTranslations} from "next-intl";
import {useDispatch} from "react-redux";
import emailjs from "@emailjs/browser";
import React, {useEffect, useState} from "react";
import {addChecked, addMeneger} from "../../../store/thanks-reduser";
import Image from "next/image";
import s from './Obl.module.css'
import Link from "next-intl/link";
import ManuObl from "./ManuObl";

export default function Obl() {

    const t = useTranslations();
    const locale = useLocale();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return <main className={s.divBlock}>

        <div className={s.breadcrumbs}>
            <Link className={s.breads} href="/">{t(`home`)}</Link>
            <span className={s.breads2}> / {t(`equipment`)}</span>
        </div>

        <ManuObl locale={locale} />

    </main>
}