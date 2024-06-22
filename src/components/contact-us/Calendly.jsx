'use client';

import Container from '../micro/Container';
import { InlineWidget } from 'react-calendly';

function Calendly() {
  return (
    <section>
      <div className="container px-8 mx-auto sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20">
        <div className="w-full border-t border-black"></div>
      </div>
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row 3xl:gap-16">
          <div className="w-full space-y-4 lg:py-12 lg:space-y-8 xl:py-16 3xl:py-24 3xl:space-y-12">
            <h2 className="max-w-xs mx-auto text-2xl font-light text-center sm:text-3xl sm:max-w-sm md:text-4xl lg:text-3xl md:max-w-2xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 2xl:leading-11 3xl:leading-14 lg:max-w-full">
              Want to schedule a phone call instead?
            </h2>
            <p className="max-w-xs mx-auto text-sm text-center sm:max-w-sm sm:text-base font-extralight font-poppins md:text-lg lg:text-base md:max-w-md lg:max-w-sm xl:text-lg 2xl:text-2xl xl:max-w-md 2xl:max-w-xl 3xl:text-3xl 3xl:max-w-2xl 3xl:leading-10">
              We got you! follow the steps in the calendar to pick the best time and you&apos;ll be all set.
            </p>
          </div>
          <div className="self-stretch hidden border-l border-black h-[1000px] lg:block"></div>
          <div className="w-full h-[1000px] overflow-hidden max-w-xl mx-auto 3xl:max-w-full">
            <InlineWidget
              url="https://calendly.com/mahmoud_elsoudy/30min"
              pageSettings={{
                hideEventTypeDetails: false,
                hideLandingPageDetails: true,
              }}
              styles={{
                height: '1000px',
                width: '100%',
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Calendly;
