import HowItWorkSection from '@/components/sections/HowItWorkSection';
import JoinWeeklyDigest from '@/components/sections/JoinWeeklyDigest';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | NFT Marketplace',
  description:
    'Welcome to NFT Marketplace – your hub for discovering, buying, and selling the finest digital art. Explore featured collections, trending NFTs, and exclusive drops that inspire creativity and innovation in the world of blockchain art.'
};

export default function Home() {
  return (
    <>
      <main>
        <HowItWorkSection />

        <JoinWeeklyDigest />
      </main>
    </>
  );
}
