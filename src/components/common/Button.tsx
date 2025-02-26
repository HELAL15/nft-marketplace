'use client';

import clsx from 'clsx';
import { FC } from 'react';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  cx?: string;
  variant?: string;
}

const Button: FC<IProps> = ({
  children,
  variant = 'primary',
  onClick,
  cx = ''
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(
          `${variant === 'primary' && 'bg-primary'}
          ${
            variant === 'outline' &&
            'bg-transparent border border-primary text-primary hover:text-white'
          } px-8 py-3 bg-primary rounded-rounded hover:bg-hover flex items-center justify-center gap-2 ${cx}`
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
