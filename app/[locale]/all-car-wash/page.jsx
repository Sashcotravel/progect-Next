'use client'

import {useLocale, useTranslations} from 'next-intl';
import Link from 'next-intl/link';
import {useState} from "react";

export default function ListWash () {

    const t = useTranslations();
    const locale = useLocale();

    return (
        <div>
            <h1>List Wash</h1>
        </div>
    )
}