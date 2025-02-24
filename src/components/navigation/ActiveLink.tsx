'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect } from 'react';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  closeMenu: () => void;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  children,
  closeMenu
}) => {
  const pathname = usePathname();

  useEffect(() => {
    closeMenu();
  }, [closeMenu, pathname]);

  return (
    <Link
      href={href}
      className={clsx(
        'text-base max-lg:text-3xl font-medium',
        pathname === href ? 'text-primary' : 'text-white'
      )}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
