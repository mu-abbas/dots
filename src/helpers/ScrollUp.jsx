'use client';
import { useEffect } from 'react';

export default function ScrollUp() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        console.log('scrolled up');
      }, 1000);
    }
  }, []);
  return null;
}
