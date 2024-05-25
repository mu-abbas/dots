'use client';

import Container from '../micro/Container';
import Form from './Form';

function Hero() {
  return (
    <section className="text-white">
      <Container>
        <h1 className="flex flex-col gap-1 pb-8 md:gap-4 md:text-center lg:pb-12">
          <span className="text-3xl font-light md:text-4xl lg:text-5xl">
            Get a <span className="text-green">free</span>,
          </span>
          <span className="text-4xl font-medium md:leading-12 md:text-6xl lg:text-7xl lg:leading-13 font-clash">
            expert slide evaluation
          </span>
        </h1>
        <p className="font-light max-w-64 sm:text-lg md:text-center md:mx-auto sm:max-w-md md:max-w-xs font-poppins lg:max-w-sm md:text-lg lg:text-2xl 2xl:text-3xl 2xl:max-w-lg">
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
