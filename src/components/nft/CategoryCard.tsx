import Image from 'next/image';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
// import { PiPaintBrush } from '@/components/common/Icons';

interface IProps {
  title?: string;
  img?: string;
  icon?: ReactNode;
}

const CategoryCard: FC<IProps> = ({ title, img = '', icon }) => {
  return (
    <>
      <li className="card rounded-rounded overflow-hidden group">
        <Link href={'/'}>
          <div className="img w-full h-40 md:h-52 lg:h-60 overflow-hidden relative">
            <Image
              draggable="false"
              src={img}
              width={570}
              height={240}
              quality={100}
              sizes="(max-width: 768px) 380px, (max-width: 1024px) 420px, 570px"
              alt="nft item"
              className="w-full h-full object-cover duration-300 group-hover:scale-110"
            />
            <div className="overlay absolute duration-300 group-hover:opacity-0 inset-0 w-full h-full bg-white/10 backdrop-blur-sm grid place-items-center">
              <i className=" text-5xl md:text-6xl lg:text-7xl">{icon}</i>
            </div>
          </div>
          <div className="bg-body-secondary py-4 lg:py-5  px-4 lg:px-8">
            <h3 className=" text-base lg:text-xl font-semibold">{title}</h3>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CategoryCard;
