'use client';

import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';

function OurProcess() {
  return (
    <section className="bg-offWhite">
      <Container>
        <SpaceY>
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 3xl:gap-18 lg:flex-row">
            <h2 className="px-4 py-3 text-xl font-medium text-center border rounded-lg opacity-75 md:px-6 md:py-4 text-grey border-grey min-w-max sm:text-2xl lg:text-3xl 3xl:text-4xl">
              Our Process
            </h2>
            <p className="max-w-sm font-light leading-7 lg:leading-8 xl:leading-9 2xl:leading-10 lg:text-lg xl:text-xl 2xl:text-2xl font-poppins sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl 3xl:max-w-4xl 3xl:text-3xl">
              Professional, Organized, and Fast-Paced
            </p>
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default OurProcess;
