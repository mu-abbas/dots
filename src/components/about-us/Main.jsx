'use client';
import ReadyToStart from '../ui/ReadyToStart';
import Driven from './Driven';
import Motto from './Motto';
import WeDots from './WeDots';

function Main() {
  return (
    <main className="bg-beige">
      <WeDots />
      <Driven />
      <Motto />
      <ReadyToStart />
    </main>
  );
}

export default Main;
