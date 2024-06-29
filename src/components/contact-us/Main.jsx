'use client';

import { useEffect, useRef } from 'react';
import Calendly from './Calendly';
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
    <main ref={ref} className="sticky pt-24 bg-beige">
      <Hero />
      <Calendly />
    </main>
  );
}

export default Main;
