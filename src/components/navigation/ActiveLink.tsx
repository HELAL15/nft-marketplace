'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect } from 'react';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  closeMenu?: () => void;
  footer?: boolean;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  children,
  closeMenu,
  footer = false
}) => {
  const pathname = usePathname();

  useEffect(() => {
    if (closeMenu) {
      closeMenu();
    }
  }, [closeMenu, pathname]);

  return (
    <>
      {footer ? (
        <Link
          href={href}
          className={clsx(
            'text-base  font-normal w-fit duration-300 hover:text-primary',
            pathname === href ? 'text-primary' : 'text-darkWhite'
          )}
        >
          {children}
        </Link>
      ) : (
        <Link
          href={href}
          className={clsx(
            'text-base max-lg:text-3xl font-medium w-fit duration-300 hover:text-primary',
            pathname === href ? 'text-primary' : 'text-white'
          )}
        >
          {children}
        </Link>
      )}
    </>
  );
};

export default ActiveLink;
