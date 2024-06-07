'use client';

import { useState } from 'react';
import GallerySlider from './GallerySlider';

function Slides({ slides, downSlides = [], topSlides = [] }) {
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  const allSlides = [...topSlides, ...slides, ...downSlides];

  return (
    <section>
      <div className="container px-8 mx-auto sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20">
        <div
          role="presentation"
          aria-label="image gallery"
          className="grid grid-cols-1 gap-6 -mt-6 2xl:gap-8 3xl:gap-12 lg:grid-cols-2 sm:-mt-8 md:-mt-10 lg:-mt-0"
        >
          {slides.map((slide, index) => (
            <img
              src={slide}
              alt="slide"
              key={index}
              className="mx-auto transition duration-300 cursor-pointer sm:max-w-lg lg:max-w-full hover:brightness-75 rounded-xl"
              onClick={() => setSliderIsOpen(true)}
            />
          ))}
        </div>
      </div>
      {sliderIsOpen && <GallerySlider slides={allSlides} setSliderIsOpen={setSliderIsOpen}/>}
    </section>
  );
}

export default Slides;
