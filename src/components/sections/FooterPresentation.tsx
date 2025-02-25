import React, { FC } from 'react';
import ActiveLink from '../navigation/ActiveLink';
import Logo from '../common/Logo';
import SubscribeMail from '../common/SubscribeMail';
import Link from 'next/link';

interface IProps {
  exploreLinks: { href: string; label: string }[];
  communityLinks: { href: string; icon: FC; name: string }[];
  footerText: string;
}

const FooterPresentation: FC<IProps> = ({
  exploreLinks,
  communityLinks,
  footerText
}) => {
  const explore = communityLinks.map(({ href, icon: Icon, name }, idx) => (
    <Link key={idx} target="_blank" href={href} aria-label={name}>
      <i className="text-3xl text-darkWhite duration-300 hover:text-primary">
        <Icon />
      </i>
    </Link>
  ));

  const community = exploreLinks.map(({ href, label }, idx) => (
    <ActiveLink key={idx} footer={true} href={href}>
      {label}
    </ActiveLink>
  ));

  return (
    <footer className="bg-body-secondary py-10">
      <div className="container">
        <div className="flex max-lg:flex-col justify-between gap-8 ">
          <div className="space-y-5">
            <Logo />
            <p className="text-darkWhite max-w-[300px]">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <div className="space-y-3">
              <p className="text-darkWhite text-sm max-w-[300px]">
                Join our community
              </p>
              <div className="flex items-center gap-4">{explore}</div>
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-xl font-bold font-mono">Explore</h3>
            <div className="flex flex-col gap-4">{community}</div>
          </div>
          <div className="space-y-5">
            <h3 className="text-xl font-bold font-mono">
              Join our weekly digest
            </h3>
            <div className="space-y-6">
              <p className="text-darkWhite max-w-[300px]">
                Get exclusive promotions & updates straight to your inbox.
              </p>
              <SubscribeMail />
            </div>
          </div>
        </div>
        <p className="rights max-md:text-center mt-6 pt-6 border-t border-darkWhite/50 text-darkWhite text-sm">
          {footerText}
        </p>
      </div>
    </footer>
  );
};

export default FooterPresentation;
