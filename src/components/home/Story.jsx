'use client';
import { useEffect, useRef } from 'react';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import CTALinkV2 from '../navigation/CTALinkV2';
import stickyFn from '@/helpers/sticky';

function Story() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref, true);
  }

  return (
    <section className="sticky bg-black text-offWhite sticky-top-rounded sticky-paading" ref={ref}>
      <Container>
        <SpaceY>
          <h2 className="text-2xl leading-8 md:leading-10 md:text-3xl lg:text-4xl xl:text-5xlplus 3xl:text-7xl xl:tracking-tighter 2xl:tracking-normal lg:leading-11 xl:leading-13 3xl:leading-15">
            Clear Story, Well-defined goals and impressive presentations, On Time and On Budget
          </h2>
          <figure className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:justify-between">
            <img
              src="/image/home/clear-story.jpeg"
              alt="cloudflyer project sample"
              className="order-1 rounded-xl lg:w-1/2"
            />
            <div className="flex flex-col items-center border-t-[0.5px] lg:items-start border-grey lg:w-2/5">
              <p className="py-12 font-light leading-7 lg:py-16 2xl:py-20 md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl font-poppins lg:leading-8 2xl:leading-10 3xl:leading-12">
                We will work with you to understand your message and create a presentation that is connected to your
                audience, visually appealing and easy to follow.
              </p>
              <CTALinkV2 href="/services" label="Dicover our process" color="black" greyBorder={true} />
            </div>
          </figure>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Story;
