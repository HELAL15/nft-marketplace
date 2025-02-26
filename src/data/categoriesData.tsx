import {
  PiPaintBrush,
  PiSwatches,
  VscMusic,
  FiCamera,
  LuVideo,
  PiMagicWandLight,
  PiBasketball,
  IoPlanetOutline
} from '@/components/common/Icons';

export const categories = [
  { id: 1, title: 'art', img: '/assets/nft1.png', icon: <PiPaintBrush /> },
  {
    id: 2,
    title: 'Collectibles',
    img: '/assets/nft2.png',
    icon: <PiSwatches />
  },
  { id: 3, title: 'Music', img: '/assets/nft3.png', icon: <VscMusic /> },
  {
    id: 4,
    title: 'Photography',
    img: '/assets/nft1.png',
    icon: <FiCamera />
  },
  { id: 5, title: 'Video', img: '/assets/nft2.png', icon: <LuVideo /> },
  {
    id: 6,
    title: 'Utility',
    img: '/assets/nft3.png',
    icon: <PiMagicWandLight />
  },
  { id: 7, title: 'Sport', img: '/assets/nft1.png', icon: <PiBasketball /> },
  {
    id: 8,
    title: 'Virtual Worlds',
    img: '/assets/nft2.png',
    icon: <IoPlanetOutline />
  }
];
