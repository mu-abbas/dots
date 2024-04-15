'use client';
import { useState } from 'react';
import CTALink from './CTALink';
import Logo from './Logo';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';

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
    <nav className="flex items-center justify-between px-12 py-8 xl:py-12 xl:px-20">
      <Logo color="blue" />
      <ul className="items-center hidden gap-4 tracking-wide xl:gap-8 lg:flex">
        {navLinks.map(({ label, href }) => (
          <NavLink label={label} href={href} key={href} isActive={pathname.startsWith(`${href}`)} />
        ))}
        <li>
          <CTALink color="black" href="/contact-us" label=" Connect with Dots" />
        </li>
      </ul>
      <button
        className="px-5 py-3 space-y-1 border-[1.5px] rounded-lg border-blue lg:hidden hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-blue"></span>
        <span className={`block w-6 h-0.5  ${isOpen ? 'bg-none' : 'bg-blue'} transtition duration-300`}></span>
        <span className="block w-6 h-0.5 bg-blue"></span>
      </button>
    </nav>
  );
}

export default Nav;
