import { FC, ReactNode } from 'react';
import SignUpLink from '../common/SignUpLink';
import LangChange from '../common/LangChange';

interface IProps {
  navItemsLinks: ReactNode;
}

const Nav: FC<IProps> = ({ navItemsLinks }) => {
  return (
    <>
      <nav className="flex items-center gap-8 xl:gap-10 max-lg:hidden">
        <ul className="flex items-center gap-8 xl:gap-10">{navItemsLinks}</ul>
        <li className="flex items-center gap-4">
          <SignUpLink />
          <LangChange />
        </li>
      </nav>
    </>
  );
};

export default Nav;
