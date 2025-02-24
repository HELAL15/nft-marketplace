'use client';

import Link from 'next/link';
import Nav from '../navigation/Nav';
import Image from 'next/image';
import { navItems } from '@/data/navItems';
import MobileNav from '../navigation/MobileNav';
import { FaBarsStaggered } from '@/components/common/Icons';
import ActiveLink from '../navigation/ActiveLink';
import { useToggle } from '@/hooks/useToggle';

const Header = () => {
  // toggle menu
  const { isOpen, toggle, close } = useToggle();
  // nav items links
  const navItemsLinks = navItems.map((item) => (
    <li key={item.href}>
      <ActiveLink href={item.href} closeMenu={close}>
        {item.label}
      </ActiveLink>
    </li>
  ));

  return (
    <>
      <header className=" py-5 lg:py-4 sticky top-0 left-0 z-50 bg-body ">
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
          <Nav navItemsLinks={navItemsLinks} />
          {/* menu mobile  */}
          <button onClick={toggle} className="block lg:hidden">
            <i className="text-2xl">
              <FaBarsStaggered />
            </i>
          </button>
        </div>
      </header>

      {/* mobile menu nav links  */}
      <MobileNav
        isMenuOpen={isOpen}
        setIsMenuOpen={toggle}
        navItemsLinks={navItemsLinks}
      />
    </>
  );
};

export default Header;
