'use client';
import Nav from '../navigation/Nav';
import Hero from './Hero';

function Header() {
  return (
    <header className="bg-black bg-center bg-no-repeat bg-cover bg-aboutUs">
      <Nav color="offWhite" />
      <Hero />
    </header>
  );
}

export default Header;
