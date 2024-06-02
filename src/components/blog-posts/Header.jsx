'use client';

import Nav from '../navigation/Nav';
import Hero from './Hero';

function Header({ title, date, duration }) {
  return (
    <header className="bg-beige">
      <Nav />
      <Hero title={title} date={date} duration={duration} />
    </header>
  );
}

export default Header;
