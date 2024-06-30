'use client';

import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import powers from '@/data/powerOfDots';
import PowerItem from './PowerItem';
import projects from '@/data/projects';
import GalleryItem from '../ui/GalleryItem';
import CTALinkV2 from '../navigation/CTALinkV2';
import { useEffect, useRef } from 'react';
import stickyFn from '@/helpers/sticky';

function PowerOfDots() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref);
  }

  return (
    <section ref={ref} className="sticky sticky-padding bg-beige sticky-margin -z-10">
      <Container>
        <SpaceY>
          <div>
            <SpaceY>
              <h2 className="flex flex-col mt-12 md:mt-18 lg:mt-24">
                <span className="text-2xl font-light lg:text-3xl xl:text-4xl 2xl:text-5xl">The power of</span>
                <span className="font-semibold font-clash text-blue text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl">
                  DOTS
                </span>
              </h2>
              <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 lg:gap-16">
                {powers.map(({ src, label, content }, index) => (
                  <PowerItem src={src} label={label} content={content} key={index} />
                ))}
              </div>
            </SpaceY>
          </div>
          <div>
            <SpaceY>
              <div className="border-t">&nbsp;</div>
              <h2 className="text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-5xlplus">
                The Art of Presentation Design
              </h2>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 3xl:gap-16">
                {projects
                  .filter(project => project.type === 'presentation-design')
                  .slice(0, 3)
                  .map(({ title, src, href }) => (
                    <GalleryItem src={src} title={title} href={href} key={Math.random()} />
                  ))}
              </div>
              <div className="flex justify-center">
                <CTALinkV2 href="/our-work/?filter=presentation-design" label="View All Presentations" color="green" />
              </div>
            </SpaceY>
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default PowerOfDots;
