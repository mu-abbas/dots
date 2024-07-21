'use client';
import { useEffect, useRef } from 'react';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import CTALinkV2 from '../navigation/CTALinkV2';
import GalleryItem from '../ui/GalleryItem';
import FeatureItem from './FeatureItem';
import features from '@/data/documentDesignFeatures';
import projects from '@/data/projects';
import stickyFn from '@/helpers/sticky';

function Features() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref);
  }
  return (
    <section ref={ref} className="sticky sticky-padding sticky-margin -z-10 bg-beige">
      <Container>
        <SpaceY>
          <div className="mt-18 md:mt-28 lg:mt-36">
            <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-3 lg:gap-16">
              {features.map(({ src, label, content }, index) => (
                <FeatureItem src={src} label={label} content={content} key={index} />
              ))}
            </div>
          </div>
          <div>
            <SpaceY>
              <div className="border-t">&nbsp;</div>
              <h2 className="text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-5xlplus">
                The Dots Difference
              </h2>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 3xl:gap-16">
                {projects
                  .filter(project => project.type === 'document-design')
                  .slice(0, 3)
                  .map(({ title, src, href }) => (
                    <GalleryItem src={src} title={title} href={href} key={Math.random()} />
                  ))}
              </div>
              <div className="flex justify-center">
                <CTALinkV2 href="/our-work/?filter=document-design" label="View All Document Designs" color="green" />
              </div>
            </SpaceY>
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Features;
