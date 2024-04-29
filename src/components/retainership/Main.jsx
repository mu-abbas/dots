'use client';
import Faqs from '../ui/Faqs';
import ReadyToStart from '../ui/ReadyToStart';
import Counter from './Counter';
import Features from './Features';

function Main() {
  return (
    <main className="bg-blue">
      <Features />
      <Counter />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
