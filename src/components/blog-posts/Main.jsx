'use client';
import Pagination from './Pagination';
import PostContent from './PostContent';
import Hero from './Hero';
import { useEffect, useRef } from 'react';
import stickyFn from '@/helpers/sticky';

function Main({ content, next, previous, image, slides, title, href, date, duration }) {
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
      <Hero title={title} date={date} duration={duration} />
      <img src={image} alt={title} className="sticky w-full sticky-margin -z-10" />
      <div className="sticky" ref={ref}>
        <PostContent content={content} slides={slides} title={title} href={href} />
        <Pagination next={next} previous={previous} />
      </div>
    </main>
  );
}

export default Main;
