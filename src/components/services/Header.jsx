'use client';
import { useEffect } from 'react';
import Nav from '../navigation/Nav';
import Hero from './Hero';
import { topFunction } from '@/helpers/helpers';

function Header() {
  useEffect(() => {
    topFunction();
  }, []);

  return (
    <header className="h-[85dvh] bg-center bg-cover bg-offWhite bg-services bg-repeat-none">
      <Nav />
      <Hero />
    </header>
  );
}

export default Header;
