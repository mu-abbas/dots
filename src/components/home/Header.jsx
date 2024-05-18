'use client';
import Nav from '../navigation/Nav';
import Hero from './Hero';

function Header() {
  return (
    <header className="h-screen bg-center bg-cover min-h-[568px] bg-beige bg-home bg-repeat-none">
      <Nav />
      <Hero />
    </header>
  );
}

export default Header;
