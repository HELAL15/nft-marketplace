import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

interface IProps {
  cx?: string;
  children: ReactNode;
}

const Section: FC<IProps> = ({ children, cx = '' }) => {
  return (
    <>
      <section className={clsx(` my-20 relative ${cx}`)}>{children}</section>
    </>
  );
};

export default Section;
