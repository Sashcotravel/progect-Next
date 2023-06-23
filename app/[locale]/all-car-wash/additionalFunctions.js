import React from "react";

export const oblTrue = (obl, locale) => {
    if (locale === "ua") {
        return obl === "all" ? "/wsi" : obl === "Закарпатська область" ? "/zakarpatska-oblast"
            : obl === "Львівська область" ? "/lvivska-oblast" : obl === "Франківська область" ? "/frankivska-oblast"
                : obl === "Тернопільська область" ? "/ternopilska-oblast" : obl === "Дніпропетровська область" ? "/dniprotrovska-oblast"
                    : obl === "Житомирська область" ? "/zhitomirska-oblast" : obl === "Волинська область" ? "/volynska-oblast"
                        : obl === "Луганська область" ? "/luganska-oblast" : obl === "Вінницька область" ? "/vinnytska-oblast"
                            : obl === "Полтавська область" ? "/poltavska-oblast" : "";
    }
    else if (locale === "ru") {
        return obl === "all" ? "/wsi" : obl === "Закарпатська область" ? "/zakarpatska-oblast"
            : obl === "Львівська область" ? "/lvivska-oblast" : obl === "Франківська область" ? "/frankivska-oblast"
                : obl === "Тернопільська область" ? "/ternopilska-oblast" : obl === "Дніпропетровська область" ? "/dniprotrovska-oblast"
                    : obl === "Житомирська область" ? "/zhitomirska-oblast" : obl === "Волинська область" ? "/volynska-oblast"
                        : obl === "Луганська область" ? "/luganska-oblast" : obl === "Вінницька область" ? "/vinnytska-oblast"
                            : obl === "Полтавська область" ? "/poltavska-oblast" : "";
    } else {
        return obl === "all" ? "/wsi" : obl === "Zakarpatska Oblast" ? "/zakarpatska-oblast"
            : obl === "Lvivska Oblast" ? "/lvivska-oblast" : obl === "Ivano-Frankivska Oblast" ? "/frankivska-oblast"
                : obl === "Ternopilska Oblast" ? "/ternopilska-oblast" : obl === "Dnipropetrovska Oblast" ? "/dniprotrovska-oblast"
                    : obl === "Zhytomyrska Oblast" ? "/zhitomirska-oblast" : obl === "Volynska Oblast" ? "/volynska-oblast"
                        : obl === "Luhansk Oblast" ? "/luganska-oblast" : obl === "Vinnytska Oblast" ? "/vinnytska-oblast"
                            : obl === "Poltavska Oblast" ? "/poltavska-oblast" : "";
    }
};

export const clickObl = (obl) => {
    if(obl){
        return obl === "all" ? "/wsi" : obl === "Закарпатська область" ? "/zakarpatska-oblast"
            : obl === "Львівська область" ? "/lvivska-oblast" : obl === "Франківська область" ? "/frankivska-oblast"
                : obl === "Тернопільська область" ? "/ternopilska-oblast" : obl === "Дніпропетровська область" ? "/dniprotrovska-oblast"
                    : obl === "Житомирська область" ? "/zhitomirska-oblast" : obl === "Волинська область" ? "/volynska-oblast"
                        : obl === "Луганська область" ? "/luganska-oblast" : obl === "Вінницька область" ? "/vinnytska-oblast"
                            : obl === "Полтавська область" ? "/poltavska-oblast" : "";
    }
}

export const oblFalse = (id, locale) => {
    if (locale === "ua" || locale === "ru") {
        return id === "wsi" ? "Виберіть область" : id === "zakarpatska-oblast" ? "Закарпатська область"
            : id === "lvivska-oblast" ? "Львівська область" : id === "frankivska-oblast" ? "Франківська область"
                : id === "ternopilska-oblast" ? "Тернопільська область" : id === "dniprotrovska-oblast" ? "Дніпропетровська область"
                    : id === "zhitomirska-oblast" ? "Житомирська область" : id === "volynska-oblast" ? "Волинська область"
                        : id === "luganska-oblast" ? "Луганська область" : id === "vinnytska-oblast" ? "Вінницька область"
                            : id === "poltavska-oblast" ? "Полтавська область" : "";
    } else {
        return id === "wsi" ? "Select an Oblast" : id === "zakarpatska-oblast" ? "Zakarpatska Oblast"
            : id === "lvivska-oblast" ? "Lvivska Oblast" : id === "frankivska-oblast" ? "Ivano-Frankivska Oblast"
                : id === "ternopilska-oblast" ? "Ternopilska Oblast" : id === "dniprotrovska-oblast" ? "Dnipropetrovska Oblast"
                    : id === "zhitomirska-oblast" ? "Zhytomyrska Oblast" : id === "volynska-oblast" ? "Volynska Oblast"
                        : id === "luganska-oblast" ? "Luhansk Oblast" : id === "vinnytska-oblast" ? "Vinnytska Oblast"
                            : id === "poltavska-oblast" ? "Poltavska Oblast" : "";
    }
};

export const postColIn = (colPost, className, t) => {
    if (colPost === 0) {
        return "";
    } else if (colPost === 1) {
        return <span className={`${className}`}>{t("on")} {colPost} {t("postCol1")}</span>;
    } else if (colPost === 2 || colPost === 3 || colPost === 4) {
        return <span className={`${className}`}>{t("on")} {colPost} {t("postCol2")}</span>;
    } else {
        return <span className={`${className}`}>{t("on")} {colPost} {t("postCol")}</span>;
    }
};