import React, { FC, ReactNode } from 'react';
import { IoClose } from '@/components/common/Icons';
import clsx from 'clsx';
import SignUpLink from '../common/SignUpLink';
import LangChange from '../common/LangChange';
import Logo from '../common/Logo';

interface IProps {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
  navItemsLinks: ReactNode;
  close?: () => void;
}

const MobileNav: FC<IProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  navItemsLinks = [],
  close
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
          <Logo />
          <button
            aria-label="Close"
            onClick={setIsMenuOpen}
            className="block lg:hidden"
          >
            <i className="text-2xl">
              <IoClose />
            </i>
          </button>
        </div>
        <ul className="flex flex-col max-lg:gap-12 gap-6 relative z-50 pt-6">
          {navItemsLinks}
          <li className="flex items-center gap-4">
            <SignUpLink />
            <LangChange setIsMenuOpen={close} />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
