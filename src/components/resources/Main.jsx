import { Suspense } from 'react';
import ReadyToStart from '../ui/ReadyToStart';
import Articles from './Articles';
import Hero from './Hero';

function Main() {
  return (
    <main className="sticky">
      <Hero />
      <Suspense>
        <Articles />
      </Suspense>
      <ReadyToStart />
    </main>
  );
}

export default Main;
