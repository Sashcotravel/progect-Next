'use client'

import {useLocale, useTranslations} from "next-intl";
import {useState} from "react";
import {useDispatch} from "react-redux";

let numPhone = 0
let numEmail = 0
let captcha = 0

export default function Contacts() {

    const t = useTranslations();
    const locale = useLocale();
    const [userData, setUserData] = useState({
        name: "", phone: "", email: "", post: ""});
    const [formPass, setFormPass] = useState({
        phone: false, email: false });
    const dispatch = useDispatch();


    return (
        <div>

        </div>
    )
}