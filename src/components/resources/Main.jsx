'use client';
import { Suspense } from 'react';
import ReadyToStart from '../ui/ReadyToStart';
import Articles from './Articles';

function Main() {
  return (
    <main className="bg-beige">
      <Suspense>
        <Articles />
      </Suspense>
      <ReadyToStart />
    </main>
  );
}

export default Main;
