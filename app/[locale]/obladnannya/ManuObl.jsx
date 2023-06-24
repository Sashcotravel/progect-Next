import {useTranslations} from "next-intl";
import s from "./Obl.module.css";
import React, {useEffect} from "react";
import Link from "next/link";

export default function ManuObl({ locale }) {
    const t = useTranslations();

    let setWindows2 = {
        obladnannya: true, nakritya: false, vidkritiBox: false,
        aksesyari: false, budivnitstvo: false, documentacia: false
    }

    let activeStyle = {
        backgroundColor: "#DF4242",
        color: "#FFFFFF",
        border: "none"
    };

    useEffect(() => {
        window.addEventListener('click', function () {
            if(window.location.pathname === '/obladnannya' ||
                window.location.pathname === `/${locale}/obladnannya`){
                setWindows2.obladnannya = true, setWindows2.nakritya = false, setWindows2.vidkritiBox = false,
                    setWindows2.aksesyari = false, setWindows2.budivnitstvo = false, setWindows2.documentacia = false
            }
            if(window.location.pathname === '/nakritya' ||
                window.location.pathname === `/${locale}/nakritya`){
                setWindows2.obladnannya = false, setWindows2.nakritya = true, setWindows2.vidkritiBox = false,
                    setWindows2.aksesyari = false, setWindows2.budivnitstvo = false, setWindows2.documentacia = false
            }
            if(window.location.pathname === '/vidkriti-box' ||
                window.location.pathname === `/${locale}/vidkriti-box`){
                setWindows2.obladnannya = false, setWindows2.nakritya = false, setWindows2.vidkritiBox = true,
                    setWindows2.aksesyari = false, setWindows2.budivnitstvo = false, setWindows2.documentacia = false
            }
            if(window.location.pathname === '/aksesyari' ||
                window.location.pathname === `/${locale}/aksesyari`){
                setWindows2.obladnannya = false, setWindows2.nakritya = false, setWindows2.vidkritiBox = false,
                    setWindows2.aksesyari = true, setWindows2.budivnitstvo = false, setWindows2.documentacia = false
            }
            if(window.location.pathname === '/budivnitstvo' ||
                window.location.pathname === `/${locale}/budivnitstvo`){
                setWindows2.obladnannya = false, setWindows2.nakritya = false, setWindows2.vidkritiBox = false,
                    setWindows2.aksesyari = false, setWindows2.budivnitstvo = true, setWindows2.documentacia = false
            }
            if(window.location.pathname === '/documentacia' ||
                window.location.pathname === `/${locale}/documentacia`){
                setWindows2.obladnannya = false, setWindows2.nakritya = false, setWindows2.vidkritiBox = false,
                    setWindows2.aksesyari = false, setWindows2.budivnitstvo = false, setWindows2.documentacia = true
            }
        });
    }, [locale])

    return (<>
        <div className={s.divName}>
            <h1 className={s.h3Title}>{t("title")}</h1>
            <span className={s.pTitle}>{t("textTitle")}</span>
        </div>

        <div
            // className={`${s.divTitle} ${color === "mob" ? s.styleUpManu : color === "comp" ? s.styleUpManu2 : s.startPosition}`}>
            className={`${s.divTitle}`}>
            <div><Link style={setWindows2.obladnannya ? activeStyle : undefined} className={s.spanTitle}
                          href={"/obladnannya"}>{t("equipment")}</Link>
            </div>
            <div><Link style={setWindows2.nakritya ? activeStyle : undefined} className={s.spanTitle}
                          href={"/nakritya"}>{t("cover")}</Link>
            </div>
            <div><Link style={setWindows2.vidkritiBox ? activeStyle : undefined} className={s.spanTitle + " " + s.spanTit2}
                          href={"/vidkriti-box"}>{t("openBox")}</Link>
            </div>
            <div><Link style={setWindows2.aksesyari ? activeStyle : undefined} className={s.spanTitle}
                          href={"/aksesyari"}>{t("accessories")}</Link>
            </div>
            <div><Link style={setWindows2.budivnitstvo ? activeStyle : undefined} className={s.spanTitle}
                          href={"/budivnitstvo"}>{t("construction")}</Link>
            </div>
            <div><Link style={setWindows2.documentacia ? activeStyle : undefined} className={s.spanTitle}
                          href={"/documentacia"}>{t("documentation")}</Link>
            </div>
        </div>
    </>)
}