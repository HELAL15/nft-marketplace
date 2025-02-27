import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import Button from './Button';
import clsx from 'clsx';

interface IProps {
  icon?: ReactNode;
  title?: string;
  href?: string;
  mobile?: boolean;
}

const ViewMore: FC<IProps> = ({ icon, title, href = '/', mobile = false }) => {
  return (
    <>
      <Link
        href={href}
        className={clsx(
          `${mobile ? 'w-full mt-5 hidden max-md:block' : 'w-fit'}`
        )}
      >
        <Button variant="outline" cx="w-full">
          <i className="text-base">{icon}</i>
          <span className="text-sm text-white">{title}</span>
        </Button>
      </Link>
    </>
  );
};

export default ViewMore;
