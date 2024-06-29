'use client';
import Container from '../micro/Container';
import CTALinkV2 from '../navigation/CTALinkV2';

function Hero() {
  return (
    <section className="sticky top-0 flex items-center pt-24 bg-center bg-cover xl:items-end bg-green bg-services bg-repeat-none sticky-padding">
      <Container>
        <div className="py-12 lg:p-0 xl:pt-24 2xl:pt-28">
          <div className="flex flex-col justify-between gap-2 md:gap-4 xl:items-end xl:flex-row">
            <h1 className="flex flex-col items-center justify-center gap-2 md:gap-4 xl:items-start">
              <span className="text-3xl font-light sm:text-4xl md:text-5xl xl:text-4xlplus 2xl:text-5xl 3xl:text-6xl">
                The Visual Way to
              </span>
              <span className="max-w-xs font-medium leading-10 text-center text-4xlplus sm:max-w-lg sm:text-6xl md:max-w-lg md:text-7xl font-clash 2xl:text-8xl xl:text-left lg:max-w-2xl sm:leading-12 md:leading-13 2xl:leading-15 3xl:text-9xl 3xl:max-w-4xl 3xl:leading-19">
                Communicate Your Message
              </span>
            </h1>
            <div className="flex flex-col items-center gap-12 p-2 py-2 xl:gap-4 md:py-4 xl:py-0 xl:items-start 2xl:gap-6 3xl:gap-8 3xl:mb-4">
              <span className="order-1">
                <CTALinkV2 color="none" label="Presentation Design Services" href="/services/presentation-design/" />
              </span>
              <p className="max-w-xs font-light text-center sm:max-w-sm md:text-lg md:max-w-lg xl:text-left font-poppins xl:order-2 xl:max-w-md 2xl:max-w-lg 3xl:text-2xl 3xl:max-w-xl 2xl:text-xl">
                We use our creativity, expertise, and passion to connect the dots and bring your stories to life.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
