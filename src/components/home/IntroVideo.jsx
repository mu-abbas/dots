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
    <section className="sticky top-0 sticky-padding sticky-margin" ref={ref}>
      <span className="absolute inline-block bottom-0 h-[3rem] bg-blue w-full"></span>
      <video autoPlay loop muted playsInline className="relative z-10 w-full">
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
