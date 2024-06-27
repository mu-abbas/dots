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
import Hero from './Hero';
import { useEffect, useRef } from 'react';

function Main() {
  const ref = useRef();

  useEffect(() => {
    ref.current.style.top = 'unset';
  }, []);

  return (
    <main className="sticky" ref={ref}>
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
