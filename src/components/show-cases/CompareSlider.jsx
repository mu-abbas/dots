import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Handle from './Handle';
function CompareSlider({ compareSlides }) {
  const { after, before } = compareSlides;

  return (
    <section>
      <div className="container px-8 mx-auto sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20">
        <div
          role="presentation"
          aria-label="image gallery"
          className="mx-auto -mb-8 overflow-hidden sm:-mb-10 sm:max-w-lg lg:max-w-full md:-mb-12 lg:-mb-0"
        >
          <ImgComparisonSlider className="slider-with-shadows" value={50}>
            <img slot="first" src={before} alt="slide before our touch" className="rounded-xl" />
            <img slot="second" src={after} alt="slide after our touch" className="rounded-xl" />
            <Handle large={true} />
          </ImgComparisonSlider>
        </div>
      </div>
    </section>
  );
}

export default CompareSlider;
