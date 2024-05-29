'use client';

import Container from '../micro/Container';
import Form from './Form';

function Hero() {
  return (
    <section className="text-white">
      <Container>
        <h1 className="flex flex-col gap-3 pb-4 text-center md:gap-6 md:pb-8 lg:pb-12 2xl:gap-9 2xl:pb-16">
          <span className="text-3xl font-light sm:text-4xl lg:text-5xl 2xl:text-6xl">
            Get a <span className="text-green">free, expert</span>
          </span>
          <span className="text-5xl font-medium sm:text-6xl lg:text-8xl lg:leading-13 2xl:text-9xl font-clash">
            slide evaluation
          </span>
        </h1>
        <p className="mx-auto font-light text-center max-w-64 sm:text-lg sm:max-w-md font-poppins md:text-lg lg:text-2xl 2xl:text-3xl 2xl:max-w-xl 2xl:leading-10">
          on your slides before you deliver your presentation.
        </p>
        <div className="mt-12 text-center">
          <Form />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
