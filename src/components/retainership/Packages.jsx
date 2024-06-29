'use client';
import Container from '../micro/Container';
import packages from '@/data/packages';
import Accordion from './PackagesAccordion';
import { useEffect, useRef } from 'react';
import stickyFn from '@/helpers/sticky';

function Packages() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref);
  }

  return (
    <section ref={ref} className="sticky bg-beige sticky-padding sticky-top-rounded sticky-margin">
      <div className="grid grid-col-1 lg:grid-cols-[1.1fr_0.8fr]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="pb-8 space-y-3 sm:pb-12 3xl:space-y-4">
              <h2 className="text-4xl font-light md:text-4xlplus lg:text-5xl xl:text-5xlplus 3xl:text-6xl">Packages</h2>
              <p className="font-light font-poppins sm:text-lg 3xl:text-2xl">
                Choose the bundle that best meets your needs and budget.
              </p>
            </div>
            <Accordion items={packages} />
          </div>
        </Container>
        <figure className="items-center hidden h-full lg:flex bg-purple">
          <img
            src="/image/retainership/Slide2-12.jpg"
            alt="random slide"
            className="w-full translate-x-[10%] max-h-[90%] object-contain"
          />
        </figure>
      </div>
    </section>
  );
}

export default Packages;
