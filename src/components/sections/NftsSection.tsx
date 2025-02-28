import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import NftCard from '../nft/NftCard';
import { IoEyeOutline } from '@/components/common/Icons';
import { nftsData } from '@/data/ntfsData';
import ViewMore from '../common/ViewMore';

const NftsSection = () => {
  const nftsShow = nftsData.map(({ title, img, publisher, price, bid, id }) => (
    <NftCard
      key={id}
      title={title}
      img={img}
      publisher={publisher}
      price={price}
      bid={bid}
      id={id}
    />
  ));

  return (
    <>
      <Section>
        <Container>
          <SectionTitle
            title="Discover More NFTs"
            description="Explore new trending NFTs"
            action={
              <ViewMore
                mobile={false}
                icon={<IoEyeOutline />}
                title="see all"
                href="/marketplace"
              />
            }
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 my-8 md:mb-0 md:mt-8">
            {nftsShow}
          </ul>

          <ViewMore
            icon={<IoEyeOutline />}
            title="see all"
            href="/marketplace"
            mobile={true}
          />
        </Container>
      </Section>
    </>
  );
};

export default NftsSection;
