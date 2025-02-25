import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import HowItWorkCard from '../nft/HowItWorkCard';
import { DataShow } from '@/data/HowItWorkData';

const HowItWorkSection = () => {
  const howWorkItems = DataShow.map(({ id, img, title, desc }) => (
    <HowItWorkCard key={id} img={img} title={title} desc={desc} />
  ));

  return (
    <>
      <Section>
        <Container>
          <SectionTitle
            title="how it works"
            description="Find out how to get started"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8">
            {howWorkItems}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default HowItWorkSection;
