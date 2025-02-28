export const nftsData = [
  {
    id: 1,
    title: 'Distant Galaxy',
    img: '/assets/nft1.png',
    publisher: { name: 'Animakid', avatar: '/assets/nft1.png' },
    price: '1.63',
    bid: '0.33'
  },
  {
    id: 2,
    title: 'Life On Edena',
    img: '/assets/nft2.png',
    publisher: { name: 'NebulaKid', avatar: '/assets/nft1.png' },
    price: '1.63',
    bid: '0.33'
  },
  {
    id: 3,
    title: 'AstroFiction',
    img: '/assets/nft3.png',
    publisher: { name: 'Spaceone', avatar: '/assets/nft1.png' },
    price: '1.63',
    bid: '0.33'
  }
];

// Function to duplicate data N times
const duplicateNFTs = (data: typeof nftsData, times: number) => {
  return Array.from({ length: times }, (_, i) =>
    data.map((nft) => ({
      ...nft,
      id: nft.id + i * data.length // Ensure unique IDs
    }))
  ).flat();
};

// Generate duplicated data (e.g., 5 times)
export const duplicatedNFTs = duplicateNFTs(nftsData, 6);
