'use client';

import Nav from '../navigation/Nav';
import Hero from './Hero';

function Header() {
  return (
    <header className="bg-black">
      <Nav color="offWhite" />
      <Hero />
    </header>
  );
}

export default Header;
