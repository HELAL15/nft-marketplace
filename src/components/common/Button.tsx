'use client';

import clsx from 'clsx';
import { FC } from 'react';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  cx?: string;
  variant?: string;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
}

const Button: FC<IProps> = ({
  children,
  type = 'submit',
  variant = 'primary',
  onClick,
  cx = '',
  disabled = false
}) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={clsx(
          `${variant === 'primary' && 'bg-primary'}
          ${
            variant === 'outline' &&
            'bg-transparent border border-primary text-primary hover:text-white'
          } disabled:bg-slate-500 disabled:cursor-not-allowed px-8 py-3 bg-primary rounded-rounded hover:bg-hover flex items-center justify-center gap-2 ${cx}`
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
