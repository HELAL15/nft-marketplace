import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/layout/Header';
import { Work_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const workSans = Work_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'NFT Marketplace',
  description: 'Discover digital art & Collect NFTs'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body className={` ${workSans.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <NextTopLoader color="#A259FF" height={2} showSpinner={true} />
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
