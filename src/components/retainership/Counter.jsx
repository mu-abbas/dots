'use client';
import { useEffect, useRef } from 'react';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import CounterItem from './CounterItem';
import stickyFn from '@/helpers/sticky';

function Counter() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref);
  }

  return (
    <section ref={ref} className="sticky text-center bg-black -z-10 sticky-padding sticky-margin text-offWhite">
      <Container>
        <SpaceY>
          <h2 className="text-2xl text-center md:text-3xl lg:text-4xl 3xl:text-5xl">So far we have accomplished</h2>
          <div className="grid justify-center grid-cols-[15rem] md:grid-cols-[15rem_15rem] xl:grid-cols-[15rem_15rem_15rem_15rem] gap-6 3xl:grid-cols-[18rem_18rem_18rem_18rem] 3xl:gap-8">
            <CounterItem number={300} sign="+" label="Clients" />
            <CounterItem number={12} sign="+" label="Countries" />
            <CounterItem number={95} sign="%" label="Long-term" />
            <CounterItem number={100} sign="%" label="Satisfied" />
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Counter;
