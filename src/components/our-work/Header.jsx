'use client';
import Nav from '../navigation/Nav';
import Hero from './Hero';

function Header() {
  return (
    <header className="bg-beige">
      <Nav />
      <Hero />
    </header>
  );
}

export default Header;