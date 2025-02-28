import React, { FC } from 'react';

interface IProps {
  params: { nftId: string };
}

const NFTPage: FC<IProps> = ({ params: { nftId } }) => {
  return <main>Viewing NFT with ID: {nftId}</main>;
};

export default NFTPage;
