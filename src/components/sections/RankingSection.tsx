import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Link from 'next/link';
import Button from '../common/Button';
import { PiRocketLaunchLight } from '@/components/common/Icons';
import RankCard from '../nft/RankCard';
import { Ranking } from '@/data/RankingData';

const RankingSection = () => {
  const rankingShow = Ranking.map(({ total, id, name, img, rank }) => (
    <RankCard
      key={id}
      rank={rank}
      img={img}
      total={total}
      id={id}
      name={name}
    />
  ));

  return (
    <>
      <Section>
        <Container>
          <SectionTitle
            title="Top creators"
            description="Checkout Top Rated Creators on the NFT Marketplace"
            action={
              <Link href={'/ranking'} className="w-fit">
                <Button variant="outline">
                  <i className="text-base">
                    <PiRocketLaunchLight />
                  </i>
                  <span className="text-sm text-white">View Rankings</span>
                </Button>
              </Link>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 my-8 md:mb-0 md:mt-8">
            {rankingShow}
          </div>
          <Link href={'/ranking'} className="w-full mt-5 hidden max-md:block">
            <Button variant="outline" cx="w-full">
              <i className="text-base">
                <PiRocketLaunchLight />
              </i>
              <span className="text-sm text-white">see all</span>
            </Button>
          </Link>
        </Container>
      </Section>
    </>
  );
};

export default RankingSection;
