'use client';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import FilterButton from './FilterButton';

function Gallery() {
  return (
    <section>
      <Container>
        <SpaceY>
          <header className="flex gap-4 border-t-[0.5px] border-grey pt-8">
            <FilterButton>All</FilterButton>
            <FilterButton>Presentation Design</FilterButton>
            <FilterButton>Pitch Decks</FilterButton>
            <FilterButton>Presentation Templates</FilterButton>
            <FilterButton>Document Design</FilterButton>
          </header>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Gallery;
