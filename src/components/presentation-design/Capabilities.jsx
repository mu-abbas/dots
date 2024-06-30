'use client';
import { useEffect, useRef } from 'react';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import CapabilityItem from './CapabilityItem';
import CapabilityList from './CapabilityList';
import stickyFn from '@/helpers/sticky';

function Capabilities() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref);
  }

  return (
    <section className="sticky bg-green sticky-padding sticky-top-rounded sticky-margin" ref={ref}>
      <Container>
        <SpaceY>
          <h2 className="text-3xl text-center opacity-75 md:text-left md:text-4xl lg:text-5xl xl:text-5xlplus 3xl:text-6xl text-grey">
            Our Capabilities
          </h2>
          <ul className="flex flex-col gap-6 md:gap-3 lg:gap-4 xl:gap-6">
            <li>
              <CapabilityList>
                <CapabilityItem>Create Effective Storytelling</CapabilityItem>
              </CapabilityList>
            </li>
            <li>
              <CapabilityList>
                <CapabilityItem>Strategically Sound</CapabilityItem>
                <CapabilityItem>Simplify the Complex Concepts</CapabilityItem>
              </CapabilityList>
            </li>
            <li>
              <CapabilityList>
                <CapabilityItem>Create Tailored Solutions</CapabilityItem>
                <CapabilityItem>Fast and Efficient</CapabilityItem>
              </CapabilityList>
            </li>
            <li>
              <CapabilityList>
                <CapabilityItem>Visually Appealing Presentations</CapabilityItem>
              </CapabilityList>
            </li>
          </ul>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Capabilities;
