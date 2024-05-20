'use client';

import ClosingSlide from './ClosingSlide';
import Description from './Description';
import OpeningSlide from './OpeningSlide';
import Pagination from './Pagination';
import Slides from './Slides';

function Main({ details, next, previous }) {
  console.log(next);
  return (
    <main className="bg-beige">
      {details ? (
        <>
          <Description descriptionImage={details.descriptionImage} description={details.description} />
          <OpeningSlide src={details.openingImage} />
          <Slides slides={details.slides} />
          <ClosingSlide src={details.footerImage} />
        </>
      ) : (
        <div className="p-12 text-2xl text-center">Under Processing</div>
      )}
      <Pagination next={next} previous={previous} />
    </main>
  );
}

export default Main;
