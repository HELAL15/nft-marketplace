import Image from 'next/image';
import React, { FC } from 'react';

interface IProps {
  img: string;
  title: string;
  desc: string;
}

const HowItWorkCard: FC<IProps> = ({ img, title, desc }) => {
  return (
    <>
      <div className="card flex items-center md:flex-col gap-2 md:gap-4 bg-body-secondary rounded-rounded px-2 lg:px-6 py-8">
        <Image
          className="object-contain mx-auto size-24 md:size-52 lg:size-60"
          src={img}
          width={0}
          height={0}
          quality={100}
          sizes="100"
          alt="how it work"
        />
        <div className="content space-y-2 text-center max-md:flex-grow">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className=" text-sm md:text-base font-normal">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default HowItWorkCard;
