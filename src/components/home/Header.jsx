'use client';
import Nav from '../navigation/Nav';
import Hero from './Hero';

function Header() {
  return (
    <header className="h-screen bg-center bg-cover bg-offWhite bg-home bg-repeat-none">
      <Nav />
      <Hero />
    </header>
  );
}

export default Header;
