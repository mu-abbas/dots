import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Handle from './Handle';
function ImageSlider({ afterSlides, beforeSlides }) {
  return (
    <section>
      <div className="container px-8 mx-auto sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20">
        <div
          role="presentation"
          aria-label="image gallery"
          className="grid grid-cols-1 gap-6 mx-auto 2xl:gap-8 3xl:gap-12 lg:grid-cols-2 sm:max-w-lg rounded-xl lg:max-w-full lg:-mb-0"
        >
          {afterSlides.map((slide, index) => (
            <ImgComparisonSlider key={index} className="slider-with-shadows">
              <img slot="first" src={beforeSlides[index]} alt="slide before our touch" className="rounded-xl" />
              <img slot="second" src={slide} alt="slide after our touch" className="rounded-xl" />
              <Handle />
            </ImgComparisonSlider>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageSlider;
