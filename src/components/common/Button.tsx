'use client';

import clsx from 'clsx';
import { FC } from 'react';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  cx?: string;
}

const Button: FC<IProps> = ({ children, onClick, cx = '' }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(
          `bg-primary px-8 py-3 rounded-rounded hover:bg-hover flex items-center justify-center gap-2 ${cx}`
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
