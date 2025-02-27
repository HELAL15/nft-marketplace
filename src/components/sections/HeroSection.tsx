import React from 'react';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import Link from 'next/link';
import Image from 'next/image';
import UserInfo from '@/components/common/UserInfo';
import Button from '@/components/common/Button';
import { PiRocketLaunchLight } from '@/components/common/Icons';

const HeroSection = () => {
  return (
    <>
      <Section cx="mt-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="content space-y-4 md:space-y-6">
              <h1 className=" text-3xl md:text-5xl lg:text-7xl font-bold">
                Discover digital art & Collect NFTs
              </h1>
              <p className=" md:text-lg lg:text-xl">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
              <Button cx="max-md:hidden">
                <i>
                  <PiRocketLaunchLight />
                </i>
                <span>get started</span>
              </Button>
              <div className="flex max-md:hidden items-center gap-10 md:gap-16 lg:gap-20">
                <div className="space-y-1">
                  <p className="text-2xl font-medium">240k+ </p>
                  <h2 className="text-xl font-normal">Total Sale</h2>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-medium">100k+ </p>
                  <h2 className="text-xl font-normal">Auctions</h2>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-medium">240k+ </p>
                  <h2 className="text-xl font-normal">Artists</h2>
                </div>
              </div>
            </div>
            <Link
              href={`/`}
              className="card rounded-rounded overflow-hidden bg-body-secondary group"
            >
              <div className="img w-full h-[300px] md:h-[350px] lg:h-[401px] overflow-hidden">
                <Image
                  draggable="false"
                  src={'/assets/nft1.png'}
                  width={570}
                  height={436}
                  quality={100}
                  sizes="(max-width: 768px) 480px, (max-width: 1024px) 420px, 570px"
                  alt="nft item"
                  className="w-full h-full duration-300 group-hover:scale-110"
                />
              </div>
              <div className="content px-6 py-5 space-y-5">
                <div className="space-y-1">
                  <h3 className="text-base font-bold">{'ahmed helal'}</h3>
                  <UserInfo
                    avatar={'/assets/digest.png'}
                    name={'ahmed helal'}
                  />
                </div>
              </div>
            </Link>
            <Button cx="max-md:flex hidden w-full">
              <i>
                <PiRocketLaunchLight />
              </i>
              <span>get started</span>
            </Button>
            <div className="hidden max-md:flex items-center gap-7 md:gap-16 lg:gap-20">
              <div className="space-y-1">
                <p className="text-2xl font-medium">240k+ </p>
                <h2 className="text-xl font-normal">Total Sale</h2>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-medium">100k+ </p>
                <h2 className="text-xl font-normal">Auctions</h2>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-medium">240k+ </p>
                <h2 className="text-xl font-normal">Artists</h2>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default HeroSection;
