'use client';
import { useState } from 'react';
import CTALinkV2 from './CTALinkV2';
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

function Nav({ color }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container relative z-50 p-6 mx-auto sm:p-8 md:p-10 lg:px-12 xl:px-14 2xl:px-16">
      <div className="flex items-center justify-between gap-6">
        <Logo color={color} />
        <ul className="items-center hidden gap-5 tracking-wide xl:gap-8 lg:flex">
          {navLinks.map(({ label, href }) => (
            <NavLink label={label} href={href} key={href} isActive={pathname.startsWith(`${href}`)} color={color} />
          ))}
          <li>
            <CTALinkV2
              color={`${color === 'offWhite' ? 'green' : 'black'}`}
              href="/contact-us"
              label=" Connect with Dots"
              whiteBorder={color === 'offWhite'}
            />
          </li>
        </ul>
        <button
          className="p-3 space-y-1.5 rounded-lg lg:px-5 lg:py-3 lg:hidden hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-8 h-1 ${color === 'offWhite' ? 'bg-offWhite' : 'bg-blue'} ${
              isOpen ? 'rotate-[135deg] translate-y-2.5' : ''
            } transition duration-300`}
          ></span>
          <span
            className={`block w-8 h-1 ${color === 'offWhite' ? 'bg-offWhite' : 'bg-blue'} ${
              isOpen ? 'opacity-0' : 'opacity-100'
            } transtition duration-300`}
          ></span>
          <span
            className={`block w-8 h-1 ${color === 'offWhite' ? 'bg-offWhite' : 'bg-blue'} ${
              isOpen ? '-rotate-[135deg] -translate-y-2.5' : ''
            } transition duration-300`}
          ></span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
