'use client';

import levels from '@/data/levels';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import Level from './Level';
import { useEffect, useRef } from 'react';
import stickyFn from '@/helpers/sticky';

function Offers() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref);
  }

  return (
    <section ref={ref} className="sticky bg-purple text-offWhite sticky-top-rounded sticky-padding sticky-margin">
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
