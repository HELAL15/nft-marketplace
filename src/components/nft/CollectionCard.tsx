import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import UserInfo from '../common/UserInfo';

interface IProps {
  img?: string[];
  title?: string;
  publisher?: {
    name?: string;
    avatar?: string;
  };
  length?: number;
}

const CollectionCard: FC<IProps> = ({
  img = ['/assets/digest.png', '/assets/digest.png', '/assets/digest.png'],
  title = 'mrFox',
  publisher,
  length = 1025
}) => {
  const { name, avatar } = publisher || {
    name: 'ahmed helal',
    avatar: '/assets/digest.png'
  };
  return (
    <>
      <li>
        <Link href={'/'} className="space-y-4">
          <div className="flex flex-col gap-3">
            <Image
              draggable="false"
              src={img[0]}
              width={570}
              height={330}
              quality={100}
              sizes="(max-width: 768px) 330px, (max-width: 1024px) 330px, 330px"
              alt="nft item"
              className="w-full object-cover rounded-rounded h-full duration-300 group-hover:scale-110"
            />
            <div className="flex items-stretch gap-3 w-full">
              <Image
                draggable="false"
                src={img[1]}
                width={115}
                height={100}
                quality={100}
                sizes="(max-width: 768px) 100px, (max-width: 1024px) 100px, 100px"
                alt="nft item"
                className="rounded-rounded duration-300 group-hover:scale-110 flex-grow flex-shrink-0 basis-[80px] md:basis-[105px]"
              />
              <Image
                draggable="false"
                src={img[2]}
                width={115}
                height={100}
                quality={100}
                sizes="(max-width: 768px) 100px, (max-width: 1024px) 100px, 100px"
                alt="nft item"
                className="rounded-rounded duration-300 group-hover:scale-110 flex-grow flex-shrink-0 basis-[80px] md:basis-[105px]"
              />
              <span className="px-4 text-lg font-semibold rounded-rounded bg-primary flex items-center justify-center text-white flex-grow flex-shrink-0 basis-[80px] md:basis-[105px]">
                {length} +
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold">{title}</h3>
            <UserInfo avatar={avatar} name={name} />
          </div>
        </Link>
      </li>
    </>
  );
};

export default CollectionCard;
