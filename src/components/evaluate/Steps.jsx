'use client';

import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import steps from '@/data/steps';

function Steps() {
  return (
    <section className="text-center text-black bg-beige">
      <Container>
        <SpaceY>
          <div className="lg:mt-24">
            <SpaceY>
              <h2 className="text-2xl font-light text-left sm:text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl lg:mt-12 xl:mt-16 2xl:mt-20 sm:max-w-md md:max-w-max md:text-center md:mx-auto md:leading-10 lg:leading-11 lg:max-w-2xl xl:max-w-4xl">
                Get a free, quick and easy check of your slides in just 3 steps:
              </h2>
              <ul className="flex flex-col gap-8 sm:gap-12 md:flex-row md:justify-between">
                {steps.map((step, index) => (
                  <li
                    key={index}
                    className="relative flex items-center w-full h-full gap-6 sm:gap-8 md:flex-col 2xl:gap-12"
                  >
                    <p className="flex items-center justify-center text-3xl font-light rounded-full bg-opacity-10 size-20 sm:size-24 md:size-28 2xl:size-32 2xl:text-5xl bg-grey shrink-0 md:text-4xl 3xl:text-6xl 3xl:size-36">
                      {index + 1}
                    </p>
                    <p className="text-lg font-light text-left sm:text-2xl max-w-60 sm:max-w-xs font-poppins md:text-xl md:text-center md:max-w-48 xl:text-2xl xl:max-w-60 3xl:text-3xl 3xl:max-w-xs">
                      {step}
                    </p>
                    <img
                      src="/image/evaluate/Arrow_Evaluate1.png"
                      alt="right arrow"
                      className={`${
                        index === 2 ? 'hidden' : 'hidden lg:inline-block'
                      } absolute translate-y-20 translate-x-40 -ml-2 w-1/2 xl:translate-x-48 2xl:translate-x-60 2xl:-ml-4 3xl:translate-x-72 3xl:ml-4 rotate-2`}
                    />
                  </li>
                ))}
              </ul>
            </SpaceY>
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Steps;
