'use client';
import CTALinkV2 from './CTALinkV2';
import Logo from './Logo';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';
import navLinks from '@/data/navLinks';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';

function Nav({ color }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const navControlled = document.querySelector('.navControlled');
    if (!navControlled) return;
    const nav = document.querySelector('nav');
    const navHeight = nav.getBoundingClientRect().height;
    const elementTop = navControlled.getBoundingClientRect().top;
    const bgColor = Array.from(navControlled.classList)
      ?.filter(item => item.startsWith('nav-'))
      ?.at(0)
      ?.split('-')
      ?.at(1);
    const bgClassName = Array.from(nav.classList)
      ?.filter(item => item.startsWith('bg-'))
      ?.at(0);
    if (elementTop <= navHeight * 3.5 && !bgClassName) {
      nav.classList.add(`${bgColor ? `bg-${bgColor}` : 'bg-beige'}`, 'sticky-border');
    }
  }, []);

  return (
    <nav className={`relative transition duration-300 border-b border-[transparent]`}>
      <div className="container px-6 py-6 mx-auto sm:px-8 sm:py-6 md:px-10 lg:px-12 xl:px-14 2xl:px-16">
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
            <span className="sr-only">nav bar opening button</span>
          </button>
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} pathname={pathname} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
