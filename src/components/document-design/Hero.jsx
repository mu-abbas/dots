'use client';

import Container from '../micro/Container';
import ServicesCarousel from '../ui/ServicesCarousel';
import images from '@/data/documentDesignImages';

function Hero() {
  return (
    <section className="pt-24 text-white bg-left-bottom bg-no-repeat bg-contain bg-babyBlue bg-documentDesign sticky-bottom-rounded">
      <Container>
        <h1 className="flex flex-col gap-1 pb-8 md:gap-4 md:text-center lg:pb-12">
          <span className="text-3xl font-light md:text-4xl lg:text-5xl">All-in-One Solution for</span>
          <span className="text-4xl font-medium md:leading-12 md:text-6xl lg:text-7xl lg:leading-13 font-clash">
            Document Design
          </span>
        </h1>
        <p className="max-w-4xl mx-auto -mb-12 font-light font-poppins md:text-center md:text-lg md:-mb-16 lg:text-xl lg:-mb-20 2xl:text-2xl 2xl:max-w-5xl">
          Get your documents noticed with our professional design and layout services. We create custom reports,
          fillable forms, and other documents that match your needs, informative, visually appealing, and follow your
          brand look and feel.
        </p>
        <div className="translate-y-[6rem] md:translate-y-1/3">
          <ServicesCarousel images={images} />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
