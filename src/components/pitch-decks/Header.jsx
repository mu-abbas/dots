'use client';

import Nav from '../navigation/Nav';
import Hero from './Hero';

function Header() {
  return (
    <header className="bg-[left_1rem_center] bg-no-repeat md:bg-50% bg-75% bg-lightPurple bg-pitchDecks">
      <Nav color="offWhite" />
      <Hero />
    </header>
  );
}

export default Header;
