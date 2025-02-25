import React, { FC } from 'react';

interface IProps {
  title?: string;
  description?: string;
}

const SectionTitle: FC<IProps> = ({ title, description }) => {
  return (
    <>
      <div className="flex gap-4 justify-between">
        <div className="head space-y-1">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-base">{description}</p>
        </div>
        <div className="action"></div>
      </div>
    </>
  );
};

export default SectionTitle;
