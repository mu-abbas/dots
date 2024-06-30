'use client';

import Container from '../micro/Container';
import ServicesCarousel from '../ui/ServicesCarousel';
import images from '@/data/pitchDecksImages';

function Hero() {
  return (
    <section className="pt-24 text-white sticky-bottom-rounded bg-[left_1rem_center] bg-no-repeat md:bg-50% bg-75% bg-lightPurple bg-pitchDecks">
      <Container>
        <h1 className="flex flex-col gap-1 pb-8 md:gap-4 md:text-center lg:pb-12">
          <span className="text-3xl font-light md:text-4xl lg:text-5xl">Pitch Decks</span>
          <span className="text-4xl font-medium md:leading-12 md:text-6xl lg:text-7xl lg:leading-13 font-clash">
            That Close Deals
          </span>
        </h1>
        <p className="max-w-4xl mx-auto -mb-12 font-light font-poppins md:text-center md:text-lg md:-mb-16 lg:text-xl lg:-mb-20 2xl:text-2xl 2xl:max-w-5xl">
          It&apos;s your chance to make a great first impression on investors, partners, and customers.
        </p>
        <div className="translate-y-[6rem] md:translate-y-1/3">
          <ServicesCarousel images={images} />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
