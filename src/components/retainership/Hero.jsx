'use client';

import navBg from '@/helpers/navBg';
import { useEffect, useRef } from 'react';

function Hero() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    navBg(ref);
  }

  return (
    <section className="sticky flex items-center text-offWhite bg-blue">
      <div className="container px-8 pt-12 mx-auto sm:px-10 sm:pt-14 md:px-12 md:pt-16 lg:px-14 lg:pt-20 xl:px-16 xl:pt-24 2xl:pt-28 2xl:px-20">
        <div className="flex flex-col items-center justify-center gap-12">
          <h1 className="flex flex-col items-center">
            <span className="text-4xl font-light sm:text-5xl md:text-5xlplus lg:text-6xl xl:text-7xl">Dots</span>
            <span className="text-5xl font-medium sm:text-6xl md:text-7xl font-clash lg:text-8xl 2xl:text-9xl">
              Retainership
            </span>
          </h1>
          <img
            src="/image/retainership/Dots_RetinerImage.png"
            alt="stats and acitvity with collection of projects"
            className="animate-popUp navControlled nav-blue"
            ref={ref}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
