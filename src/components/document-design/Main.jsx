'use client';

import Faqs from '../ui/Faqs';
import ReadyToStart from '../ui/ReadyToStart';
import Features from './Features';

function Main() {
  return (
    <main className="bg-beige">
      <Features />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;