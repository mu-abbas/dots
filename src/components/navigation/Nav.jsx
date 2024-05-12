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
    <div className="container p-6 mx-auto sm:p-8 md:p-10 lg:px-12 xl:px-14 2xl:px-16">
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
        <div
          className={`absolute h-screen ${
            isOpen ? 'translate-x-0 opacity-100' : '-translate-x-[100%] opacity-0'
          } transition duration-300 origin-left p-12  left-0 top-0 w-full text-black bg-beige shadow-md lg:hidden flex flex-col ease-in-out gap-12 z-50`}
        >
          <div className="flex items-center justify-between">
            <Logo color="blue" />
            <button className="scale-150 text-blue" onClick={() => setIsOpen(!isOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col justify-start gap-4 pb-8 border-b border-blue">
            {navLinks.map(({ label, href }) => (
              <NavLink label={label} href={href} key={href} isActive={pathname.startsWith(`${href}`)} color={color} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
