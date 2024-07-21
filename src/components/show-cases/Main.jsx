'use client';
import SpaceY from '../micro/SpaceY';
import ClosingSlide from './ClosingSlide';
import CompareSlider from './CompareSlider';
import CompareText from './CompareText';
import Description from './Description';
import ImageSlider from './ImageSlider';
import OpeningSlide from './OpeningSlide';
import Pagination from './Pagination';
import Slides from './Slides';
import Hero from './Hero';
import { useEffect, useRef } from 'react';
import stickyFn from '@/helpers/sticky';

function Main({ details, next, previous, title }) {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref, true);
  }

  return (
    <main className="sticky bg-beige">
      <Hero title={title} />
      <div ref={ref} className="sticky pb-[1.5rem] lg:pb-[2rem] 2xl:pb-[2.5rem]">
        <SpaceY>
          <Description descriptionImage={details.descriptionImage} description={details.description} />
          {details.openingImage && <OpeningSlide src={details.openingImage} />}
          {details.slides && <Slides slides={details.slides} />}
          {details.topSlides && <Slides slides={details.topSlides} downSlides={details.downSlides} />}
          {(details.compareSlides || details.afterSlides) && <CompareText />}
          {details.compareSlides && <CompareSlider compareSlides={details.compareSlides} />}
          {details.downSlides && <Slides slides={details.downSlides} topSlides={details.topSlides} />}
          {details.afterSlides && (
            <>
              <ImageSlider afterSlides={details.afterSlides} beforeSlides={details.beforeSlides} />
            </>
          )}
          {details.footerImage && <ClosingSlide src={details.footerImage} />}
        </SpaceY>
        <Pagination next={next} previous={previous} />
      </div>
    </main>
  );
}

export default Main;
