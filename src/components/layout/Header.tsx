'use client';

import Nav from '../navigation/Nav';
import { navItems } from '@/data/navItems';
import MobileNav from '../navigation/MobileNav';
import { FaBarsStaggered } from '@/components/common/Icons';
import ActiveLink from '../navigation/ActiveLink';
import { useToggle } from '@/hooks/useToggle';
import Logo from '../common/Logo';

const Header = () => {
  // toggle menu
  const { isOpen, toggle, close } = useToggle(false);
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
          <Logo />

          {/* navbar */}
          <Nav navItemsLinks={navItemsLinks} />
          {/* menu mobile  */}
          <button
            aria-label="bars"
            onClick={toggle}
            className="block lg:hidden"
          >
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
        close={close}
        navItemsLinks={navItemsLinks}
      />
    </>
  );
};

export default Header;
