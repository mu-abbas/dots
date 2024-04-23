'use client';
import Nav from '../navigation/Nav';
import Hero from './Hero';

function Header() {
  return (
    <header className="h-[85vh] bg-center bg-cover bg-offWhite bg-services bg-repeat-none">
      <Nav />
      <Hero />
    </header>
  );
}

export default Header;
