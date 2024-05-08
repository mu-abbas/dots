'use client';

import Container from '../micro/Container';
import ServicesCarousel from '../ui/ServicesCarousel';
import images from '@/data/presentationDesignImages';

function Hero() {
  return (
    <section className="text-offWhite">
      <Container>
        <h1 className="flex flex-col gap-1 pb-8 md:gap-4 md:text-center lg:pb-12 lg:gap-6">
          <span className="text-3xl font-light md:text-4xl lg:text-5xl">Connect With Your Audience,</span>
          <span className="text-4xl font-medium md:leading-12 md:text-6xl lg:text-7xl lg:leading-13 font-clash">
            And Let Your Presentation Pop
          </span>
        </h1>
        <p className="max-w-4xl mx-auto -mb-12 font-light font-poppins md:text-center md:text-lg md:-mb-16 lg:text-xl lg:-mb-20 2xl:text-2xl 2xl:max-w-5xl">
          Our presentation design services are the solution that helps you create Engaging, Flawless, and Effective
          Presentations. On Budget. On-Time!
        </p>
        <div className="translate-y-[40%] md:translate-y-1/3">
          <ServicesCarousel images={images} />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
