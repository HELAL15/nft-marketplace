import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <>
      <Link href={'/'} className="w-fit">
        <Image
          draggable="false"
          src={'/assets/logo.svg'}
          width={0}
          height={0}
          alt="logo"
          className="object-contain w-[160px] md:w-[243px] h-[30px] md:h-[32px]"
          sizes="100"
        />
      </Link>
    </>
  );
};

export default Logo;
