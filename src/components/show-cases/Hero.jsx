'use client';

import Container from '../micro/Container';

function Hero({ title }) {
  return (
    <section>
      <Container>
        <div className="py-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 3xl:p-24">
          <h1 className="flex flex-col md:gap-3 lg:gap-5 xl:gap-7 3xl:gap-9">
            <span className="text-lg opacity-90 sm:text-xl md:text-2xl text-grey lg:text-3xl 3xl:text-4xl">
              Project Name
            </span>
            <span className="text-4xl font-semibold leading-9 capitalize md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl">
              {title}
            </span>
          </h1>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
