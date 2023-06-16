'use client'

import './globals.css'
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {TheFooter} from "../component/footer";
import {TheHeader} from "../component/header";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ua'}, {locale: 'ru'}];
}

export default async function RootLayout({children, params: { locale }}) {

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }


  return (
    <html lang={locale}>
    <NextIntlClientProvider locale={locale} messages={messages}>
      <body>
      <TheHeader />
      <main>
        {children}
      </main>
      <TheFooter />
      </body>
    </NextIntlClientProvider>
    </html>
  )
}
