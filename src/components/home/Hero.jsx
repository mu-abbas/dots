'use client';
import Container from '../micro/Container';
import CTALinkV2 from '../navigation/CTALinkV2';

function Hero() {
  return (
    <section className="sticky top-0 flex items-center h-screen bg-center bg-cover bg-beige bg-home bg-repeat-none">
      <Container>
        <div className="flex flex-col items-center mt-10 sm:mt-12">
          <h1 className="flex flex-col items-center">
            <span className="text-xl font-light sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Your Story. Your Goals.
            </span>
            <span className="text-5xl font-medium lg:-mt-1 xl:-mt-2 sm:text-6xl md:text-7xl font-clash lg:text-8xl xl:text-9xl 2xl:text-10xl">
              Connected.
            </span>
          </h1>
          <p className="max-w-xs p-2 mb-8 font-light text-center sm:max-w-lg md:max-w-xl font-poppins 3xl:max-w-[50%] text-sm sm:text-base 2xl:text-lg 3xl:text-2xl">
            Make your next presentation stand out with our Professional, Time-Saving, and price competitive services.
          </p>
          <CTALinkV2 color="none" label="Connect with Dots" href="/contact-us" />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
