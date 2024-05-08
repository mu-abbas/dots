'use client';

import Nav from '../navigation/Nav';
import Hero from './Hero';

function Header() {
  return (
    <header className="bg-left-bottom bg-no-repeat bg-contain bg-mediumBlue bg-presentationDesign">
      <Nav color="offWhite" />
      <Hero />
    </header>
  );
}

export default Header;
