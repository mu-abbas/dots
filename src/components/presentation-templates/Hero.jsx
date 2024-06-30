'use client';

import Container from '../micro/Container';
import ServicesCarousel from '../ui/ServicesCarousel';
import images from '@/data/presentationTemplatesImages';

function Hero() {
  return (
    <section className="pt-24 text-white sticky-bottom-rounded bg-[left_bottom_-12rem] bg-no-repeat bg-contain lg:bg-[length:480px_1080px] bg-presentationTemplates bg-lightNavy">
      <Container>
        <h1 className="flex flex-col gap-1 pb-8 md:gap-4 md:text-center lg:pb-12">
          <span className="text-3xl font-light md:text-4xl lg:text-5xl">Save Time and</span>
          <span className="max-w-3xl mx-auto text-4xl font-medium md:leading-12 md:text-6xl lg:text-7xl lg:leading-13 font-clash">
            Get Your Message Across with Style!
          </span>
        </h1>
        <p className="max-w-4xl mx-auto -mb-12 font-light font-poppins md:text-center md:text-lg md:-mb-16 lg:text-xl lg:-mb-20 2xl:text-2xl 2xl:max-w-5xl">
          Our Presentation Templates Service is here to save your time and create visually appealing Slides /
          Presentations that follow your brand guidelines and are customized to your needs.
        </p>
        <div className="translate-y-[6rem] md:translate-y-1/3">
          <ServicesCarousel images={images} />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
