import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
import NextTopLoader from 'nextjs-toploader';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/layout/Footer'), {
  ssr: true,
  loading: () => <p>Loading...</p>
});

export const metadata: Metadata = {
  title: 'NFT Marketplace',
  description:
    'Explore the top-ranking NFTs in our marketplace. Discover trending digital art, see real-time performance data, and get inspired by the best collections and artists in the NFT space.',
  keywords: [
    'NFT rankings',
    'top NFTs',
    'trending NFTs',
    'NFT marketplace',
    'digital art rankings',
    'NFT collection leaderboard'
  ],
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  openGraph: {
    title: 'NFT Marketplace',
    description:
      'Explore the best and most trending NFTs on our marketplace. Stay ahead with live rankings and performance insights.',
    url: 'https://yourwebsite.com/ranking',
    siteName: 'NFT Marketplace',
    images: [
      {
        url: 'https://yourwebsite.com/assets/ranking-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NFT Marketplace Ranking'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@YourTwitterHandle',
    title: 'Ranking | NFT Marketplace',
    description:
      'Explore the best and most trending NFTs on our marketplace. Stay ahead with live rankings and performance insights.',
    images: ['https://yourwebsite.com/assets/ranking-og-image.jpg']
  }
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
      <body className="antialiased selection:bg-primary selection:text-white">
        <NextTopLoader color="#A259FF" height={2} showSpinner={false} />
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
