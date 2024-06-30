'use client';
import Faqs from '../ui/Faqs';
import ReadyToStart from '../ui/ReadyToStart';
import Counter from './Counter';
import Features from './Features';
import Packages from './Packages';
import Hero from './Hero';

function Main() {
  return (
    <main className="sticky">
      <Hero />
      <Features />
      <Counter />
      <Packages />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
