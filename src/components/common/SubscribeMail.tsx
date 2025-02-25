import React, { FC } from 'react';
import Button from './Button';
import { GoMail } from '../common/Icons';
import clsx from 'clsx';

interface IProps {
  inSection?: boolean;
}

const SubscribeMail: FC<IProps> = ({ inSection = false }) => {
  return (
    <>
      <form
        className={clsx(
          `flex items-center max-md:w-full max-lg:max-w-[420px] ${
            inSection
              ? 'max-lg:flex-wrap max-lg:gap-4 lg:bg-[#f5f5f5]'
              : 'max-md:flex-wrap max-md:gap-4 md:bg-[#f5f5f5]'
          } w-full justify-between   rounded-rounded `
        )}
      >
        <input
          name="email"
          type="email"
          className={clsx(
            ` ${
              inSection
                ? 'max-lg:flex-grow max-lg:w-full'
                : 'max-md:flex-grow max-md:w-full'
            } py-3 rounded-rounded px-4 flex-grow outline-none border-none bg-[#f5f5f5] text-primary`
          )}
          placeholder="enter your email here"
        />

        <Button
          cx={
            inSection
              ? 'max-lg:flex-grow max-lg:w-full bg-primary'
              : 'max-md:flex-grow max-md:w-full bg-primary'
          }
        >
          <i className="text-lg">
            <GoMail />
          </i>
          <span className="text-base">subscribe</span>
        </Button>
      </form>
    </>
  );
};

export default SubscribeMail;
