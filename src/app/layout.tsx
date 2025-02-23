import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/layout/Header';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NFT Marketplace',
  description: 'Discover digital art & Collect NFTs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${workSans.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
