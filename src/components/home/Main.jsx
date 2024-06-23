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
import { useInView } from 'react-intersection-observer';
import Nav from '../navigation/Nav';
import { useState } from 'react';
function Main() {
  const { ref, inView } = useInView({
    threshold: 0.01,
  });
  const [animate, setAnimate] = useState(false);

  function handleScroll() {
    if (inView && !animate) {
      setAnimate(inView);
    } else {
      setTimeout(() => {
        setAnimate(inView);
      }, 300);
    }
  }

  return (
    <main ref={ref} onScroll={handleScroll()}>
      {animate && (
        <div
          className={`fixed top-0 z-50 w-full bg-beige animate-opacity aria-hidden transition duration-300 ${
            inView ? '' : 'opacity-0'
          }`}
        >
          <Nav />
        </div>
      )}
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
