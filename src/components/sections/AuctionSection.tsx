'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { IoEyeOutline } from '../common/Icons';
import Container from '../common/Container';
import Section from '../common/Section';
import useTimer from '@/hooks/useTimer';

const AuctionSection = () => {
  const timeLeft = useTimer(59);

  return (
    <Section cx="h-[90vh] relative">
      <span className="absolute inset-0 z-10 bg-gradient-to-t from-purple-700 to-transparent" />
      <Image
        src={'/assets/auction.jpeg'}
        className="absolute inset-0 w-full h-full object-cover z-0"
        width={0}
        height={0}
        sizes="100"
        alt="auction"
      />
      <Container cx="relative z-20 h-full w-full flex items-end">
        <div className="py-20 w-full flex max-md:flex-col gap-6 justify-between md:items-end">
          <div className="space-y-6 md:space-y-8">
            <span className="bg-body rounded-rounded px-6 py-2 flex items-center gap-3 w-fit">
              <Image
                src={'/assets/digest.png'}
                width={0}
                height={0}
                sizes="100"
                alt="user"
                className="rounded-full size-7 object-cover"
              />
              <span>Shroomie</span>
            </span>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
              Magic Mashrooms
            </p>
            <Link
              href={'/marketplace'}
              className="max-md:hidden font-semibold flex items-center gap-2 rounded-[15px] bg-white w-fit text-primary px-10 py-3"
            >
              <IoEyeOutline />
              <span className="text-body">See NFT</span>
            </Link>
          </div>

          <div className="bg-body/40 backdrop-blur-sm rounded-rounded px-10 py-8 shadow-lg">
            <span className="block w-fit text-xs">Auction ends in:</span>
            <div className="flex gap-4 mt-3">
              {Object.entries(timeLeft).map(([key, value], index, array) => (
                <Fragment key={key}>
                  <div className="flex flex-col gap-1 justify-center items-center">
                    <span className="text-2xl md:text-3xl lg:text-4xl">
                      {value}
                    </span>
                    <span className="text-xs">{key}</span>
                  </div>
                  {index < array.length - 1 && (
                    <span className="text-2xl md:text-3xl lg:text-4xl">:</span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          <Link
            href={'/marketplace'}
            className="md:hidden font-semibold w-full flex justify-center items-center gap-2 rounded-[15px] bg-white text-primary px-10 py-3"
          >
            <IoEyeOutline />
            <span className="text-body">See NFT</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default AuctionSection;
