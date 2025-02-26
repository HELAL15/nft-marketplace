import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

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
      <Link
        href={`/${id}`}
        className="card rounded-rounded overflow-hidden bg-body-secondary group"
      >
        <div className="img w-full h-56 overflow-hidden">
          <Image
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
            <div className="flex items-center gap-2 text-xs font-light">
              <Image
                src={avatar}
                width={0}
                height={0}
                sizes="100"
                alt="nft item"
                className=" size-5 rounded-full duration-300  "
              />
              <span>{name}</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 font-mono">
            <p className="space-y-1">
              <span className="text-xs block text-body-third">Price</span>
              <span className="block text-xs">{price} ETH</span>
            </p>
            <p className="space-y-1">
              <span className="text-xs block text-body-third">Highest Bid</span>
              <span className="block text-xs">{bid} wETH</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NftCard;
