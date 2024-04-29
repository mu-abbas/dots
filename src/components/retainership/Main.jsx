'use client';
import Faqs from '../ui/Faqs';
import ReadyToStart from '../ui/ReadyToStart';
import Counter from './Counter';
import Features from './Features';
import Packages from './Packages';

function Main() {
  return (
    <main className="bg-blue">
      <Features />
      <Counter />
      <Packages />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
