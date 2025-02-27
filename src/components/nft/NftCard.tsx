import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import UserInfo from '../common/UserInfo';
import SubInfo from '../common/SubInfo';

interface IProps {
  title?: string;
  img?: string;
  publisher?: {
    name?: string;
    avatar?: string;
  };
  price?: string;
  bid?: string;
  id?: number;
}

const NftCard: FC<IProps> = ({
  title,
  img = '',
  publisher,
  price,
  bid,
  id
}) => {
  const { name, avatar = '' } = publisher || {};
  return (
    <>
      <li className="card rounded-rounded overflow-hidden bg-body-secondary group">
        <Link href={`/${id}`}>
          <div className="img w-full h-56 overflow-hidden">
            <Image
              draggable="false"
              src={img}
              width={570}
              height={336}
              quality={100}
              sizes="(max-width: 768px) 380px, (max-width: 1024px) 420px, 570px"
              alt="nft item"
              className="w-full h-full duration-300 group-hover:scale-110"
            />
          </div>
          <div className="content px-6 py-5 space-y-5">
            <div className="space-y-1">
              <h3 className="text-base font-bold">{title}</h3>
              <UserInfo avatar={avatar} name={name} />
            </div>
            <div className="flex items-center justify-between gap-4 font-mono">
              <SubInfo title={'Price'} desc={`${price} ETH`} />
              <SubInfo title={'Highest Bid'} desc={`${bid} wETH`} />
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default NftCard;
