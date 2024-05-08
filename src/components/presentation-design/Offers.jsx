'use client';

import levels from '@/data/levels';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import Level from './Level';

function Offers() {
  return (
    <section className="bg-purple text-offWhite">
      <Container>
        <SpaceY>
          <h2 className="text-xl font-light lg:text-center md:text-2xl lg:text-3xl 2xl:text-4xl">
            We offer 3 level of design, to stand out from the crowd with a professional presentation design
          </h2>
          <ul className="grid grid-cols-1 gap-12 lg:gap-6 3xl:gap-12 2xl:gap-8 lg:grid-cols-3">
            {levels.map(({ heading, description, note, bg }, index) => (
              <Level heading={heading} description={description} note={note} bg={bg} key={index} />
            ))}
          </ul>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Offers;
