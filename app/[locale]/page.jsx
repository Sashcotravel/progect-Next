import {useTranslations} from 'next-intl';
import Link from 'next-intl/link';
import AlertMessage from "./AlertMessage";

export default function Home() {

    const t = useTranslations();

  return (
    <div>
      <h1>{t('home')}</h1>
      <br/>
      <Link href='/' locale="ua">In UA</Link>
        <br/>
      <Link href='/' locale="en">In English</Link>
        <br/>
      <Link href='/' locale="ru">In RU</Link>
    <br/>
        <div>
            <AlertMessage message={t('home')} />
        </div>
    </div>
  )
}
