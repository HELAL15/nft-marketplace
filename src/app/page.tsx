import HowItWorkSection from '@/components/sections/HowItWorkSection';
import JoinWeeklyDigest from '@/components/sections/JoinWeeklyDigest';
import NftsSection from '@/components/sections/NftsSection';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Loading from './loading';

const AuctionSection = dynamic(
  () => import('@/components/sections/AuctionSection'),
  {
    ssr: true,
    loading: () => Loading()
  }
);

export const metadata: Metadata = {
  title: 'Home | NFT Marketplace',
  description:
    'Welcome to NFT Marketplace – your hub for discovering, buying, and selling the finest digital art. Explore featured collections, trending NFTs, and exclusive drops that inspire creativity and innovation in the world of blockchain art.'
};

export default function Home() {
  return (
    <>
      <main>
        <h1>d</h1>
        <h2>dd</h2>
        <h3>ddd</h3>

        <NftsSection />

        <AuctionSection />

        <HowItWorkSection />

        <JoinWeeklyDigest />
      </main>
    </>
  );
}
