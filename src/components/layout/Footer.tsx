import React from 'react';
import {
  PiDiscordLogoLight,
  SlSocialYoutube,
  FaXTwitter,
  IoLogoInstagram
} from '../common/Icons';
import FooterPresentation from '../sections/FooterPresentation';
import { navItems } from '@/data/navItems';

const Footer = () => {
  const communityLinks = [
    { href: 'https://www.dd.com', name: 'discord', icon: PiDiscordLogoLight },
    { href: 'https://www.dd.com', name: 'youtube', icon: SlSocialYoutube },
    { href: 'https://www.dd.com', name: 'twitter', icon: FaXTwitter },
    { href: 'https://www.dd.com', name: 'instagram', icon: IoLogoInstagram }
  ];

  const footerText = 'Ⓒ NFT Market. Use this template freely.';

  return (
    <>
      <FooterPresentation
        exploreLinks={navItems}
        communityLinks={communityLinks}
        footerText={footerText}
      />
    </>
  );
};

export default Footer;
