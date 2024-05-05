'use client';
import ReadyToStart from '../ui/ReadyToStart';
import Driven from './Driven';
import WeDots from './WeDots';

function Main() {
  return (
    <main className="bg-beige">
      <WeDots />
      <Driven />
      <ReadyToStart />
    </main>
  );
}

export default Main;
