'use client';
import Blog from '../ui/Blog';
import Brands from './Brands';
import Faqs from '../ui/Faqs';
import Featured from './Featured';
import IntroVideo from './IntroVideo';
import OurServices from './OurServices';
import ReadyToStart from '../ui/ReadyToStart';
import Story from './Story';
import Testimonials from '../ui/Testimonials';
import Nav from '../navigation/Nav';
import Hero from './Hero';
import { useEffect, useRef, useState } from 'react';

function Main() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    const readyToStart = document.querySelector('.readyToStart');
    const currentElementTop = ref.current.getBoundingClientRect().top;
    if (readyToStart.getBoundingClientRect().top <= 64) {
      ref.current.style.top = `${currentElementTop}px`;
    }
    if (readyToStart.getBoundingClientRect().top > 64) {
      ref.current.style.top = 'unset';
    }
  }

  return (
    <main ref={ref} className="sticky">
      <Hero />
      <Story />
      <IntroVideo />
      <OurServices />
      <Featured />
      <Brands />
      <Testimonials />
      <Blog />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
