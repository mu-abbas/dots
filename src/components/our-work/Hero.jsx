'use client';
import Container from '../micro/Container';

function Hero() {
  return (
    <section>
      <Container>
        <h1 className="flex flex-col items-center justify-center gap-2 md:gap-4 xl:items-start">
          <span className="text-3xl font-light text-center sm:text-4xl md:text-5xl xl:text-4xlplus 2xl:text-5xl 3xl:text-6xl xl:textleft">
            Creating presentations
          </span>
          <span className="font-medium leading-10 text-center text-4xlplus sm:text-6xl md:text-7xl font-clash 2xl:text-8xl xl:text-left sm:leading-12 md:leading-13 2xl:leading-15 3xl:text-9xl 3xl:leading-19">
            that gets you noticed
          </span>
        </h1>
      </Container>
    </section>
  );
}

export default Hero;
