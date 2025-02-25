import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  cx?: string;
}

const Container: FC<IProps> = ({ children, cx = '' }) => {
  return <div className={clsx(` container ${cx}`)}>{children}</div>;
};

export default Container;
