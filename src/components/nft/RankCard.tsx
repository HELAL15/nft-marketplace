import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface IProps {
  name?: string;
  img?: string;
  total?: string;
  id?: number;
  rank?: string;
}

const RankCard: FC<IProps> = ({
  name = 'ahmed helal',
  img = '',
  total = '34.53',
  id,
  rank = '1'
}) => {
  return (
    <>
      <Link
        href={`/${id}`}
        className="card relative flex max-lg:justify-start items-center lg:flex-col max-lg:gap-5 rounded-rounded overflow-hidden bg-body-secondary group px-6 py-6"
      >
        <span className="rank z-10 absolute top-4 inset-x-4 rounded-full size-7 grid place-items-center bg-body text-body-third">
          {rank}
        </span>
        <div className="img size-16 lg:size-28 lg:mx-auto rounded-full overflow-hidden">
          <Image
            src={img}
            width={570}
            height={336}
            quality={100}
            sizes="(max-width: 768px) 380px, (max-width: 1024px) 420px, 570px"
            alt="nft item"
            className="w-full h-full object-cover duration-300 group-hover:scale-110"
          />
        </div>
        <div className="space-y-1 lg:text-center lg:mt-5">
          <h3 className="text-base font-bold">{name}</h3>
          <p className="flex lg:items-center lg:justify-center gap-2">
            <span className="text-body-third">Total Sales:</span>
            <span>{total} ETH</span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default RankCard;
