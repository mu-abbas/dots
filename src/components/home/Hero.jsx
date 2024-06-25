'use client';
import Container from '../micro/Container';
import CTALinkV2 from '../navigation/CTALinkV2';

function Hero() {
  return (
    <section className="flex items-center h-screen bg-cover min-h-[568px] bg-beige bg-home bg-repeat-none bg-center sticky top-0">
      <Container>
        <div className="flex flex-col items-center">
          <h1 className="flex flex-col items-center leading-12">
            <span className="text-2xl font-light sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
              Your Story. Your Goals.
            </span>
            <span className="-mt-1 font-medium text-5xlplus sm:-mt-2 md:-mt-3 sm:text-8xl md:text-9xl font-clash lg:text-10xl xl:text-11xl 2xl:text-12xl">
              Connected.
            </span>
          </h1>
          <p className="max-w-sm p-2 mb-8 font-light text-center sm:max-w-lg md:max-w-xl font-poppins 3xl:max-w-[50%]">
            Make your next presentation stand out with our Professional, Time-Saving, and price competitive services.
          </p>
          <CTALinkV2 color="none" label="Connect with Dots" href="/contact-us" />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
