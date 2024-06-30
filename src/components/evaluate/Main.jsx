'use client';

import CTA from './CTA';
import Process from './Process';
import Steps from './Steps';
import Hero from './Hero';
import { useEffect, useRef } from 'react';
import stickyFn from '@/helpers/sticky';

function Main() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref, true);
  }

  return (
    <main className="sticky">
      <Hero />
      <Steps />
      <div ref={ref} className="sticky pb-[1.5rem] lg:pb-[2rem] 2xl:pb-[2.5rem]">
        <Process />
        <CTA />
      </div>
    </main>
  );
}

export default Main;
