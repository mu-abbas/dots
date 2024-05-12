'use client';

import Nav from '../navigation/Nav';
import Hero from './Hero';

function Header({ title }) {
  return (
    <header className="bg-beige">
      <Nav />
      <Hero title={title} />
    </header>
  );
}

export default Header;
