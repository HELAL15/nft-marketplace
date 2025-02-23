import Link from 'next/link';
import React from 'react';
import Nav from './Nav';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <header className="py-4 sticky top-0 left-0 z-50 bg-body ">
        <div className="container flex items-center gap-4 justify-between relative">
          {/* logo */}
          <Link href={'/'} className="flex items-center gap-1">
            <Image
              src={'/assets/logo.svg'}
              width={0}
              height={0}
              alt="logo"
              className="object-contain w-[160px] md:w-[243px] h-[30px] md:h-[32px]"
              sizes="100"
            />
          </Link>
          {/* navbar */}
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
