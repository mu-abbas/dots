'use client';
import SpaceY from '../micro/SpaceY';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
function ImageSlider({ afterSlides, beforeSlides }) {
  return (
    <section>
      <div className="container px-8 mx-auto sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20">
        <SpaceY>
          <p className="font-light text-center font-poppins md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 2xl:leading-10 3xl:leading-11">
            You can check the presentation slides before and after our touches.
          </p>
          <div
            role="presentation"
            aria-label="image gallery"
            className="grid grid-cols-1 gap-6 2xl:gap-8 3xl:gap-12 lg:grid-cols-2"
          >
            {afterSlides.map((slide, index) => (
              <>
                <ReactCompareSlider
                  key={index}
                  onlyHandleDraggable
                  position={25}
                  itemOne={<ReactCompareSliderImage src={beforeSlides[index]} alt="slide before our touch" />}
                  itemTwo={<ReactCompareSliderImage src={slide} alt="slide after our touch" />}
                />
                <ImgComparisonSlider>
                  <img slot="first" src={beforeSlides[index]} alt="slide before our touch" />
                  <img slot="second" src={slide} alt="slide after our touch" />
                </ImgComparisonSlider>
              </>
            ))}
          </div>
        </SpaceY>
      </div>
    </section>
  );
}

export default ImageSlider;
