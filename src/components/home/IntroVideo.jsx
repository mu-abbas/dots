'use client';

import stickyFn from '@/helpers/sticky';
import { useEffect, useRef } from 'react';

function IntroVideo() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref);
  }

  return (
    <section
      className="sticky top-0 bg-gradient-to-t from-blue from-50% via-blue via-50% to-transparent sticky-padding sticky-margin mb-px"
      ref={ref}
    >
      <video autoPlay loop muted playsInline className="w-full">
        <source src="/video/dots-intro-423.mp4" type="video/mp4" media="(max-width:423px)" />
        <source src="/video/dots-intro-640.mp4" type="video/mp4" media="(max-width:640px)" />
        <source src="/video/dots-intro-853.mp4" type="video/mp4" media="(max-width:853px)" />
        <source src="/video/dots-intro-1280.mp4" type="video/mp4" media="(max-width:1536px)" />
        <source src="/video/dots-intro-1920.mp4" type="video/mp4" />
        <p className="text-center">Your browser does not support the video tag. 😞</p>
      </video>
    </section>
  );
}

export default IntroVideo;
