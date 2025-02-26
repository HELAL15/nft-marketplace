import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Link from 'next/link';
import Button from '../common/Button';
import NftCard from '../nft/NftCard';
import { IoEyeOutline } from '@/components/common/Icons';

const NftsSection = () => {
  const nftsData = [
    {
      id: 1,
      title: 'Distant Galaxy',
      img: '/assets/nft1.png',
      publisher: { name: 'Animakid', avatar: '/assets/nft1.png' },
      price: '1.63',
      bid: '0.33'
    },
    {
      id: 2,
      title: 'Life On Edena',
      img: '/assets/nft2.png',
      publisher: { name: 'NebulaKid', avatar: '/assets/nft1.png' },
      price: '1.63',
      bid: '0.33'
    },
    {
      id: 3,
      title: 'AstroFiction',
      img: '/assets/nft3.png',
      publisher: { name: 'Spaceone', avatar: '/assets/nft1.png' },
      price: '1.63',
      bid: '0.33'
    }
  ];

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
          <div className="flex items-center justify-between gap-4">
            <SectionTitle
              title="Discover More NFTs"
              description="Explore new trending NFTs"
              action={
                <Link href={'/ranking'} className="w-fit">
                  <Button variant="outline">
                    <i className="text-base">
                      <IoEyeOutline />
                    </i>
                    <span className="text-sm text-white">see all</span>
                  </Button>
                </Link>
              }
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 my-8 md:mb-0 md:mt-8">
            {nftsShow}
          </div>
          <Link href={'/ranking'} className="w-full mt-5 hidden max-md:block">
            <Button variant="outline" cx="w-full">
              <i className="text-base">
                <IoEyeOutline />
              </i>
              <span className="text-sm text-white">see all</span>
            </Button>
          </Link>
        </Container>
      </Section>
    </>
  );
};

export default NftsSection;
