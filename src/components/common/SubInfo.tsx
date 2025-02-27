import React, { FC } from 'react';

interface IProps {
  title?: string;
  desc?: string;
}

const SubInfo: FC<IProps> = ({ title, desc }) => {
  return (
    <>
      <p className="space-y-1">
        <span className="text-xs block text-body-third">{title}</span>
        <span className="block text-xs">{desc}</span>
      </p>
    </>
  );
};

export default SubInfo;
