'use client';

import CTALink from '../navigation/CTALink';

function Hero() {
  return (
    <section className="flex items-center justify-center h-[75%] flex-col">
      <h1 className="flex flex-col items-center">
        <span className="text-6xl font-light leading-3">Your Story. Your Goals.</span>
        <span className="font-medium leading-none tracking-wider text-max font-clash">Connected.</span>
      </h1>
      <p className="max-w-xl mb-8 -mt-2 text-lg text-center">
        Make your next presentation stand out with our Professional, Time-Saving, and price competitive services.
      </p>
      <CTALink color="none" label="Connect with Dots" href="/contact-us" />
    </section>
  );
}

export default Hero;
