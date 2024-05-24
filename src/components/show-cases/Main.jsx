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

function Main({ details, next, previous }) {
  console.log(next);
  return (
    <main className="bg-beige">
      <SpaceY>
        {details ? (
          <>
            <Description descriptionImage={details.descriptionImage} description={details.description} />
            <OpeningSlide src={details.openingImage} />
            {details.slides && <Slides slides={details.slides} />}
            {details.topSlides && <Slides slides={details.topSlides} />}
            {(details.compareSlides || details.afterSlides) && <CompareText />}
            {details.compareSlides && <CompareSlider compareSlides={details.compareSlides} />}
            {details.downSlides && <Slides slides={details.downSlides} />}
            {details.afterSlides && (
              <>
                <ImageSlider afterSlides={details.afterSlides} beforeSlides={details.beforeSlides} />
              </>
            )}
            {details.footerImage && <ClosingSlide src={details.footerImage} />}
          </>
        ) : (
          <div className="p-12 text-2xl text-center">Under Processing</div>
        )}
      </SpaceY>
      <Pagination next={next} previous={previous} />
    </main>
  );
}

export default Main;
