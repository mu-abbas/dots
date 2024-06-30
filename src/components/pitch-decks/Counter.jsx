'use client';

import projects from '@/data/projects';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import CTALinkV2 from '../navigation/CTALinkV2';
import GalleryItem from '../ui/GalleryItem';
import CounterItem from './CounterItem';
import { useEffect, useRef } from 'react';
import stickyFn from '@/helpers/sticky';

function Counter() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref);
  }

  return (
    <section ref={ref} className="sticky text-center text-black -z-10 sticky-padding sticky-margin bg-beige">
      <Container>
        <SpaceY>
          <div className="mt-12 md:mt-18 lg:mt-24">
            <SpaceY>
              <h2 className="mt-8 text-2xl text-center md:text-3xl lg:text-4xl 3xl:text-5xl lg:mt-12 xl:mt-16 2xl:mt-20">
                So far we have accomplished
              </h2>
              <div className="grid grid-cols-1 gap-8 mx-auto justify-items-center md:gap-10 lg:gap-12 md:grid-cols-2 xl:grid-cols-4 2xl:gap-14 3xl:gap-16 w-max">
                <CounterItem number={300} sign="+" label="Clients" />
                <CounterItem number={12} sign="+" label="Countries" />
                <CounterItem number={95} sign="%" label="Long-term" />
                <CounterItem number={100} sign="%" label="Satisfied" />
              </div>
            </SpaceY>
          </div>

          <div>
            <SpaceY>
              <div className="border-t">&nbsp;</div>
              <h2 className="text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-5xlplus">
                Pitch Decks that win
              </h2>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 3xl:gap-16">
                {projects
                  .filter(project => project.type === 'pitch-deck')
                  .slice(0, 3)
                  .map(({ title, src, href }) => (
                    <GalleryItem src={src} title={title} href={href} key={Math.random()} />
                  ))}
              </div>
              <div className="flex justify-center">
                <CTALinkV2 href="/our-work/?filter=pitch-deck" label="View All Pitch Decks" color="green" />
              </div>
            </SpaceY>
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Counter;
