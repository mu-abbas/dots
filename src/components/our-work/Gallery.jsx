'use client';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import FilterButton from './FilterButton';

function Gallery() {
  return (
    <section>
      <Container>
        <SpaceY>
          <header>
            <div className="border-t-[0.5px] border-grey pt-8 opacity-25"></div>
            <div className="flex gap-4">
              <FilterButton>All</FilterButton>
              <FilterButton>Presentation Design</FilterButton>
              <FilterButton>Pitch Decks</FilterButton>
              <FilterButton>Presentation Templates</FilterButton>
              <FilterButton>Document Design</FilterButton>
            </div>
          </header>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Gallery;
