'use client';

import stickyFn from '@/helpers/sticky';
import { useEffect, useRef } from 'react';

function CoverImage() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref);
  }

  return (
    <section ref={ref} className="sticky -z-10 sticky-margin">
      <img
        src="/image/about-us/About-us-1.jpeg"
        alt="info image about us"
        className="w-full min-h-[50svh] object-cover "
      />
    </section>
  );
}

export default CoverImage;
