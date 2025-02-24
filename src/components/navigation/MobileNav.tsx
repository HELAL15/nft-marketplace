import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { IoClose } from '@/components/common/Icons';
import Image from 'next/image';
import clsx from 'clsx';
import SignUpLink from '../common/SignUpLink';

interface IProps {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
  navItemsLinks: ReactNode;
}

const MobileNav: FC<IProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  navItemsLinks = []
}) => {
  return (
    <>
      <nav
        className={clsx(
          ' fixed -inset-x-0 top-0 w-full md:w-1/2 overflow-hidden h-dvh bg-body duration-200 px-4 py-8 lg:hidden z-[9999999]',
          isMenuOpen ? '-inset-x-0' : '-inset-x-full'
        )}
      >
        <div className="flex relative z-50 items-center gap-4 justify-between pb-6 border-b border-primary">
          <Link href={'/'} className="flex items-center gap-1">
            <Image
              src={'/assets/logo.svg'}
              width={0}
              height={0}
              alt="logo"
              className="object-contain w-[160px] lg:w-[243px] h-[30px] md:h-[32px]"
              sizes="100"
            />
          </Link>
          <button onClick={setIsMenuOpen} className="block lg:hidden">
            <i className="text-2xl">
              <IoClose />
            </i>
          </button>
        </div>
        <ul className="flex flex-col max-lg:gap-12 gap-6 relative z-50 pt-6">
          {navItemsLinks}
          <SignUpLink />
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
