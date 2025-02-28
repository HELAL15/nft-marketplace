import clsx from 'clsx';
import React, { FC, InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  cx?: string;
}

const FormInput: FC<IProps> = ({ cx = '', ...props }) => {
  return (
    <input
      {...props}
      className={clsx(`w-full flex-grow rounded-rounded px-6 py-3 
        text-primary lowercase
        border border-transparent outline-none duration-300
        hover:border-primary focus:border-primary ${cx}`)}
    />
  );
};

export default FormInput;
