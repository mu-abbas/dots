'use client';

import Container from '../micro/Container';

function Hero() {
  return (
    <section className="text-offWhite">
      <div className="pt-12 sm:pt-16 md:pt-20 xl:pt-24 2xl:pt-28">
        <Container>
          <h1 className="flex flex-col justify-center gap-2 lg:gap-4 xl:items-start">
            <span className="text-2xl font-light sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
              Meet the experts
            </span>
            <span className="max-w-sm text-4xl font-medium leading-9 sm:text-5xl lg:text-7xl lg:leading-14 font-clash xl:text-8xl sm:leading-11 2xl:leading-15 3xl:text-9xl 3xl:leading-19 sm:max-w-lg lg:max-w-3xl xl:max-w-5xl xl:leading-15 3xl:max-w-7xl">
              Connecting the dots to your success
            </span>
          </h1>
        </Container>
      </div>
      <img
        src="/image/about-us/About-us-1.jpeg"
        alt="info image about us"
        className="w-full min-h-[50svh] object-cover"
      />
    </section>
  );
}

export default Hero;
