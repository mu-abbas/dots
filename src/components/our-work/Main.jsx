'use client';
import { Suspense } from 'react';
import Gallery from './Gallery';

function Main() {
  return (
    <main className="bg-beige">
      <Suspense>
        <Gallery />
      </Suspense>
    </main>
  );
}

export default Main;
