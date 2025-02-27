import Image from 'next/image';
import React, { FC } from 'react';

interface IProps {
  avatar?: string;
  name?: string;
}

const UserInfo: FC<IProps> = ({ avatar = '', name }) => {
  return (
    <>
      <div className="flex items-center gap-2 text-xs font-light">
        <Image
          draggable="false"
          src={avatar}
          width={0}
          height={0}
          sizes="100"
          alt="nft item"
          className=" size-5 rounded-full duration-300  "
        />
        <span>{name}</span>
      </div>
    </>
  );
};

export default UserInfo;
