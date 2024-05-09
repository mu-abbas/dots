'use client';

import Faqs from '../ui/Faqs';
import ReadyToStart from '../ui/ReadyToStart';
import Counter from './Counter';

function Main() {
  return (
    <main className="bg-beige">
      <Counter />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
