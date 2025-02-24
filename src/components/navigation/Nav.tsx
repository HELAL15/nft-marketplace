import { FC, ReactNode } from 'react';
import SignUpLink from '../common/SignUpLink';

interface IProps {
  navItemsLinks: ReactNode;
}

const Nav: FC<IProps> = ({ navItemsLinks }) => {
  return (
    <>
      <nav className="flex items-center gap-8 max-lg:hidden">
        <ul className="flex items-center gap-10 xl:gap-14">{navItemsLinks}</ul>
        <SignUpLink />
      </nav>
    </>
  );
};

export default Nav;
