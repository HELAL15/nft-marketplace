'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../common/Button';
import { PiUserLight } from 'react-icons/pi';
import { FaBarsStaggered } from 'react-icons/fa6';
import { useState } from 'react';

const Nav = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems = [
    { label: 'marketplace', href: '/marketplace' },
    { label: 'ranking', href: '/ranking' },
    { label: 'connect a wallet', href: '/connect-wallet' },
  ];

  // nav items links
  const navItemsLinks = navItems.map((item) => (
    <li key={item.href}>
      <Link
        href={item.href}
        className={clsx(
          'text-base font-medium',
          pathname === item.href ? 'text-primary' : 'text-white'
        )}
      >
        {item.label}
      </Link>
    </li>
  ));

  return (
    <>
      <nav className="flex items-center gap-8 max-lg:hidden">
        <ul className="flex items-center gap-10 xl:gap-14">{navItemsLinks}</ul>
        <Link href={'/signup'}>
          <Button>
            <i className="text-xl">
              <PiUserLight />
            </i>
            <span>sign up</span>
          </Button>
        </Link>
      </nav>
      {/* menu mobile  */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="block lg:hidden"
      >
        <i className="text-2xl">
          <FaBarsStaggered />
        </i>
      </button>
      <nav
        className={clsx(
          ' fixed inset-x-0 top-12 overflow-hidden transition-[height] bg-body duration-300 border-t border-primary px-4 py-8 lg:hidden z-10',
          isMenuOpen ? 'h-[500px]' : 'h-0'
        )}
      >
        <ul className="flex flex-col gap-6">
          {navItemsLinks}
          <Link href={'/signup'}>
            <Button>
              <i className="text-xl">
                <PiUserLight />
              </i>
              <span>sign up</span>
            </Button>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
