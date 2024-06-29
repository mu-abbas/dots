'use client';
import Nav from '../navigation/Nav';

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-blue">
      <Nav color="offWhite" />
    </header>
  );
}

export default Header;
