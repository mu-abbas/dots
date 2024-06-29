'use client';

function Hero() {
  return (
    <section className="pt-24">
      <div className="container px-8 py-12 pb-0 mx-auto sm:px-10 sm:py-14 md:px-12 md:py-16 lg:px-14 lg:py-20 xl:px-16 xl:py-24 2xl:py-28 2xl:px-20 sm:pb-0 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0 3xl:pb-0">
        <h1 className="flex flex-col justify-center gap-2 pt-12 md:gap-4 xl:items-start">
          <span className="text-3xl font-light sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl max-w-min lg:max-w-max">
            Creating presentations
          </span>
          <span className="max-w-sm font-medium leading-11 text-4xlplus sm:text-6xl md:text-7xl font-clash xl:text-8xl sm:leading-12 md:leading-13 2xl:leading-15 3xl:text-9xl 3xl:leading-19 sm:max-w-lg lg:max-w-max">
            that gets you noticed!
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
