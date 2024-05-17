'use client';
import CTALinkV2 from './CTALinkV2';
import Logo from './Logo';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';
import navLinks from '@/data/navLinks';
import MobileNav from './MobileNav';
import { useState } from 'react';

function Nav({ color }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative z-50">
      <div className="container p-6 mx-auto sm:p-8 md:p-10 lg:px-12 xl:px-14 2xl:px-16">
        <div className="flex items-center justify-between gap-6">
          <Logo color={color} />
          <ul className="items-center hidden gap-4 text-sm tracking-wide xl:gap-5 xl:text-base lg:flex 3xl:text-lg 3xl:gap-8">
            {navLinks.map(({ label, href, subLinks = [] }) => (
              <NavLink
                label={label}
                subLinks={subLinks}
                href={href}
                key={href}
                isActive={pathname.startsWith(`${href}`)}
                color={color}
              />
            ))}
            <li className="ml-4 xl:ml-8 2xl:ml-16 3xl:ml-32">
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
                false ? 'rotate-[135deg] translate-y-2.5' : ''
              } transition duration-300`}
            ></span>
            <span
              className={`block w-8 h-1 ${color === 'offWhite' ? 'bg-offWhite' : 'bg-blue'} ${
                false ? 'opacity-0' : 'opacity-100'
              } transtition duration-300`}
            ></span>
            <span
              className={`block w-8 h-1 ${color === 'offWhite' ? 'bg-offWhite' : 'bg-blue'} ${
                false ? '-rotate-[135deg] -translate-y-2.5' : ''
              } transition duration-300`}
            ></span>
          </button>
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} pathname={pathname} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
