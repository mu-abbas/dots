'use client';
import { Suspense, useEffect, useRef } from 'react';
import Gallery from './Gallery';
import Hero from './Hero';
import stickyFn from '@/helpers/sticky';

function Main() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref);
  }

  return (
    <main ref={ref} className="sticky bg-beige sticky-padding">
      <Hero />
      <Suspense>
        <Gallery />
      </Suspense>
    </main>
  );
}

export default Main;
