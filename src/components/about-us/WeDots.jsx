'use client';

import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';

function WeDots() {
  return (
    <section className="bg-left bg-no-repeat bg-cover lg:bg-contain lg:bg-center bg-beige bg-weDots">
      <Container>
        <SpaceY>
          <h2 className="pb-6 text-2xl font-semibold border-b border-opacity-50 opacity-75 lg:pb-12 text-grey border-grey min-w-max sm:text-3xl lg:text-4xl 3xl:text-5xl">
            We are Dots Presentations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            <h3 className="max-w-sm pb-4 text-2xl lg:py-4 2xl:pl-12 md:max-w-lg lg:text-5xl lg:leading-11 sm:text-3xl xl:text-6xl xl:leading-13 3xl:text-7xl 3xl:leading-14 2xl:max-w-xl 3xl:max-w-2xl 3xl:pl-24">
              Five years ago, we saw a gap in the market
            </h3>
            <div className="flex flex-col justify-center max-w-md gap-4 py-2 font-light 2xl:gap-8 md:max-w-lg sm:text-lg 3xl:max-w-3xl 3xl:text-3xl 2xl:max-w-2xl xl:text-2xl xl:leading-9 font-poppins 3xl:leading-10 text-grey 2xl:pr-12 3xl:pr-24">
              <p>
                Businesses of all sizes didn&apos;t realize how a well-designed presentation could help them grow their
                business, deliver their message more effectively, engage with their audience, and leave a lasting
                impression.
              </p>
              <p>We decided to connect the dots between presentation design and business success.</p>
            </div>
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default WeDots;
