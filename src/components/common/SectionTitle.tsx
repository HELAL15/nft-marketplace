import React, { FC, ReactNode } from 'react';

interface IProps {
  title?: string;
  description?: string;
  action?: ReactNode;
}

const SectionTitle: FC<IProps> = ({ title, description, action }) => {
  return (
    <>
      <div className="flex gap-4 justify-between w-full">
        <div className="head space-y-1">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-base">{description}</p>
        </div>
        <div className="action max-md:hidden">{action}</div>
      </div>
    </>
  );
};

export default SectionTitle;
