import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { PiRocketLaunchLight } from '@/components/common/Icons';
import RankCard from '../nft/RankCard';
import { Ranking } from '@/data/RankingData';
import ViewMore from '../common/ViewMore';

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
              <ViewMore
                mobile={false}
                icon={<PiRocketLaunchLight />}
                title="View Rankings"
                href="/ranking"
              />
            }
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 my-8 md:mb-0 md:mt-8">
            {rankingShow}
          </ul>
          <ViewMore
            mobile={true}
            icon={<PiRocketLaunchLight />}
            title="View Rankings"
            href="/ranking"
          />
        </Container>
      </Section>
    </>
  );
};

export default RankingSection;
