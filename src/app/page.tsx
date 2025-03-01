import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Loading from './loading';
import CategorySection from '@/components/sections/CategorySection';
import RankingSection from '@/components/sections/RankingSection';
import TrendingSection from '@/components/sections/TrendingSection';
import HeroSection from '@/components/sections/HeroSection';
import { fetchData } from '@/utils/api';

const AuctionSection = dynamic(
  () => import('@/components/sections/AuctionSection'),
  {
    ssr: true,
    loading: () => Loading()
  }
);

const NftsSection = dynamic(() => import('@/components/sections/NftsSection'), {
  ssr: true,
  loading: () => Loading()
});

const HowItWorkSection = dynamic(
  () => import('@/components/sections/HowItWorkSection'),
  {
    ssr: true,
    loading: () => Loading()
  }
);

const JoinWeeklyDigest = dynamic(
  () => import('@/components/sections/JoinWeeklyDigest'),
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

export default async function Home() {
  const res = fetchData('/profile');
  const data = await res;
  console.log(data);

  return (
    <>
      <main>
        <HeroSection />

        <TrendingSection />

        <RankingSection />

        <CategorySection />

        <NftsSection />

        <AuctionSection />

        <HowItWorkSection />

        <JoinWeeklyDigest />
      </main>
    </>
  );
}
