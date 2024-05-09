'use client';

import Nav from '../navigation/Nav';
import Hero from './Hero';

function Header() {
  return (
    <header className="bg-[left_bottom_-12rem] bg-no-repeat bg-contain lg:bg-[length:480px_1080px] bg-presentationTemplates bg-lightNavy">
      <Nav />
      <Hero />
    </header>
  );
}

export default Header;
