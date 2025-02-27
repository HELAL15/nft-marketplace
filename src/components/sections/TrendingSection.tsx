import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import CollectionCard from '../nft/CollectionCard';
import { TrendingData } from '@/data/TrendingData';

const TrendingSection = () => {
  const trendingShow = TrendingData.map(
    ({ id, title, img, publisher, length }) => (
      <CollectionCard
        key={id}
        title={title}
        img={img}
        publisher={publisher}
        length={length}
      />
    )
  );

  return (
    <>
      <Section>
        <Container>
          <SectionTitle
            title="Trending Collection"
            description="Checkout our weekly updated trending collection."
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 md:mb-0 md:mt-8">
            {trendingShow}
          </ul>
        </Container>
      </Section>
    </>
  );
};

export default TrendingSection;
