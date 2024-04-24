'use client';
import { useEffect } from 'react';

export default function ScrollUp() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.document.scrollingElement?.scrollTo(0, 0);
      console.log('scrolled up');
    }
  }, []);
  return null;
}
