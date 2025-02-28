import Container from '@/components/common/Container';
import FormContainer from '@/components/common/FormContainer';
import Section from '@/components/common/Section';
import NftCard from '@/components/nft/NftCard';
import FormInput from '@/components/ui/FormInput';
import { duplicatedNFTs } from '@/data/ntfsData';

const page = () => {
  const nftsShow = duplicatedNFTs.map(
    ({ title, img, publisher, price, bid, id }) => (
      <NftCard
        cx="!bg-body"
        key={id}
        title={title}
        img={img}
        publisher={publisher}
        price={price}
        bid={bid}
        id={id}
      />
    )
  );

  return (
    <main>
      <Section cx="my-0 py-4">
        <Container>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                Browse Marketplace
              </h1>
              <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            </div>
            <FormContainer cx="!w-full !max-w-full">
              <FormInput
                cx="bg-transparent text-white border-body-third w-full"
                name="search"
                placeholder="Search for NFTs"
              />
            </FormContainer>
          </div>
        </Container>
      </Section>
      <Section cx="!my-0 py-10 bg-body-secondary border-b border-body">
        <Container>
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {nftsShow}
          </ul>
        </Container>
      </Section>
    </main>
  );
};

export default page;
