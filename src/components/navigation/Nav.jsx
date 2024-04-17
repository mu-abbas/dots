'use client';
import { useState } from 'react';
import CTALink from './CTALink';
import Logo from './Logo';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';
import Container from '../micro/Container';

const navLinks = [
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Our Work',
    href: '/our-work',
  },
  {
    label: 'Retainership',
    href: '/retainership',
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
];

function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between gap-6">
          <Logo color="blue" />
          <ul className="items-center hidden gap-5 tracking-wide xl:gap-8 lg:flex">
            {navLinks.map(({ label, href }) => (
              <NavLink label={label} href={href} key={href} isActive={pathname.startsWith(`${href}`)} />
            ))}
            <li>
              <CTALink color="black" href="/contact-us" label=" Connect with Dots" />
            </li>
          </ul>
          <button
            className="p-3 space-y-1.5 rounded-lg lg:px-5 lg:py-3 lg:hidden hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-8 h-1 bg-blue ${
                isOpen ? 'rotate-[135deg] translate-y-2.5' : ''
              } transition duration-300`}
            ></span>
            <span className={`block w-8 h-1  ${isOpen ? 'bg-none' : 'bg-blue'} transtition duration-300`}></span>
            <span
              className={`block w-8 h-1 bg-blue ${
                isOpen ? '-rotate-[135deg] -translate-y-2.5' : ''
              } transition duration-300`}
            ></span>
          </button>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
