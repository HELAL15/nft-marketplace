import { Controller } from 'react-hook-form';
import clsx from 'clsx';
import React, { FC, InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: any;
  errors?: any;
  cx?: string;
}

const FormInput: FC<IProps> = ({
  name,
  control,
  errors,
  cx = '',
  ...props
}) => {
  const errorMessage = errors?.[name]?.message;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="w-full">
          <input
            {...field}
            {...props}
            className={clsx(
              `w-full flex-grow rounded-rounded px-6 py-3 
               text-primary lowercase border border-gray-300 outline-none
               focus:border-primary duration-300 ${cx}`,
              { 'border-red-500': errorMessage }
            )}
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}
        </div>
      )}
    />
  );
};

export default FormInput;
