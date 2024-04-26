'use client';
import Nav from '../navigation/Nav';
import Hero from './Hero';

function Header() {
  return (
    <header className="h-[90svh] bg-center bg-cover bg-green bg-services bg-repeat-none">
      <Nav />
      <Hero />
    </header>
  );
}

export default Header;
