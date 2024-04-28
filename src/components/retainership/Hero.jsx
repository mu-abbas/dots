'use client';
import Container from '../micro/Container';

function Hero() {
  return (
    <section className="flex items-center text-offWhite">
      <Container>
        <div className="flex flex-col items-center justify-center gap-12">
          <h1 className="flex flex-col items-center leading-12">
            <span className="text-2xl font-light sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">Dots</span>
            <span className="-mt-1 font-medium text-5xlplus sm:-mt-2 md:-mt-3 sm:text-8xl md:text-9xl font-clash lg:text-10xl xl:text-11xl 2xl:text-12xl">
              Retainership
            </span>
          </h1>
          <img src="/image/retainership/Dots_RetinerImage.png" alt="stats and acitvity with collection of projects" />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
