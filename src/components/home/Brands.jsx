'use client';
import stickyFn from '@/helpers/sticky';
import { useEffect, useRef } from 'react';
import Slider from 'react-infinite-logo-slider';

function Brands() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref);
  }

  return (
    <section ref={ref} className="sticky bg-green sticky-margin sticky-padding">
      <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <h2 className="flex flex-col items-center justify-center px-8 text-3xl font-medium text-center sm:gap-2 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20 sm:flex-row md:text-4xl 3xl:text-5xl md:pb-4 lg:pb-6">
          <span>We help big brands</span>
          <span className="font-bold">Connect the dots</span>
        </h2>
        <Slider width="240px" duration={25} pauseOnHover={true} blurBorders={false}>
          <Slider.Slide>
            <img src="/brand/abbvie.png" alt="abbvie" className="mx-auto w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src="/brand/cocacola.png" alt="cocacola" className="mx-auto w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src="/brand/j&j.png" alt="j&J" className="mx-auto w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src="/brand/Google.png" alt="Google" className="mx-auto w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src="/brand/gsk.png" alt="gsk" className="mx-auto w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src="/brand/indeed.png" alt="indeed" className="mx-auto w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src="/brand/marriott.png" alt="marriott" className="mx-auto w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src="/brand/novo.png" alt="novonordisk" className="mx-auto w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src="/brand/schneider.png" alt="schneider" className="mx-auto w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src="/brand/uber.png" alt="uber" className="mx-auto w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src="/brand/unilever.png" alt="unilever" className="mx-auto w-36" />
          </Slider.Slide>
        </Slider>
      </div>
    </section>
  );
}

export default Brands;
