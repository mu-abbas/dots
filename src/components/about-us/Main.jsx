'use client';
import ReadyToStart from '../ui/ReadyToStart';
import Driven from './Driven';
import Motto from './Motto';
import WeDots from './WeDots';
import Hero from './Hero';
import CoverImage from './CoverImage';

function Main() {
  return (
    <main className="sticky">
      <Hero />
      <CoverImage />
      <WeDots />
      <Driven />
      <Motto />
      <ReadyToStart />
    </main>
  );
}

export default Main;
