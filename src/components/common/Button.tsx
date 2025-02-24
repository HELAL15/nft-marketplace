'use client';

import { FC } from 'react';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<IProps> = ({ children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-primary px-8 py-3 rounded-rounded hover:bg-hover flex items-center gap-2"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
