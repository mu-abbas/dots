'use client';

import Faqs from '../ui/Faqs';
import ReadyToStart from '../ui/ReadyToStart';
import Counter from './Counter';
import Hero from './Hero';

function Main() {
  return (
    <main className="sticky">
      <Hero />
      <Counter />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
