import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import CategoryCard from '../nft/CategoryCard';
import SectionTitle from '../common/SectionTitle';
import { categories } from '@/data/categoriesData';

const CategorySection = () => {
  const categoryShow = categories.map(({ id, title, img, icon }) => (
    <CategoryCard key={id} title={title} img={img} icon={icon} />
  ));

  return (
    <>
      <Section>
        <Container>
          <SectionTitle title="Browse Categories" />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {categoryShow}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default CategorySection;
