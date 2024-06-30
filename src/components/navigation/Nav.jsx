'use client';
import CTALinkV2 from './CTALinkV2';
import Logo from './Logo';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';
import navLinks from '@/data/navLinks';
import MobileNav from './MobileNav';
import { useEffect, useRef, useState } from 'react';
import scrollToTop from '@/helpers/scrollToTop';

function Nav({ color }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const ref = useRef();
  const bg = useRef();
  const currentColor = isScrolled ? 'blue' : color;

  useEffect(() => {
    if (window.scrollY >= ref.current.getBoundingClientRect().height) setIsScrolled(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    scrollToTop();
  }, []);

  function handleScroll() {
    if (window.scrollY >= ref.current.getBoundingClientRect().height && isScrolled === false) setIsScrolled(true);
    if (window.scrollY < ref.current.getBoundingClientRect().height && isScrolled === true) setIsScrolled(false);
  }

  return (
    <nav ref={ref} className={`fixed top-0 z-50 w-full transition duration-150`}>
      <span
        ref={bg}
        className={`fixed top-0 left-0 h-24 inline-block w-full bg-beige transition duration-150 ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      ></span>
      <div className="container px-6 py-6 mx-auto sm:px-8 sm:py-6 md:px-10 lg:px-12 xl:px-14 2xl:px-16">
        <div className="flex items-center justify-between gap-6">
          <Logo color={currentColor} />
          <ul className="items-center hidden gap-4 text-sm tracking-wide xl:gap-5 xl:text-base lg:flex 3xl:text-lg 3xl:gap-8">
            {navLinks.map(({ label, href, subLinks = [] }) => (
              <NavLink
                label={label}
                subLinks={subLinks}
                href={href}
                key={href}
                isActive={pathname.startsWith(`${href}`)}
                color={currentColor}
              />
            ))}
            <li className="ml-4 xl:ml-8 2xl:ml-16 3xl:ml-32">
              <CTALinkV2
                color={`${currentColor === 'offWhite' ? 'green' : 'black'}`}
                href="/contact-us"
                label=" Connect with Dots"
                whiteBorder={currentColor === 'offWhite'}
              />
            </li>
          </ul>
          <button
            className="p-3 space-y-1.5 rounded-lg lg:px-5 lg:py-3 lg:hidden hover:cursor-pointer relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-8 h-1 ${currentColor === 'offWhite' ? 'bg-offWhite' : 'bg-blue'} ${
                false ? 'rotate-[135deg] translate-y-2.5' : ''
              } transition duration-300`}
            ></span>
            <span
              className={`block w-8 h-1 ${currentColor === 'offWhite' ? 'bg-offWhite' : 'bg-blue'} ${
                false ? 'opacity-0' : 'opacity-100'
              } transtition duration-300`}
            ></span>
            <span
              className={`block w-8 h-1 ${currentColor === 'offWhite' ? 'bg-offWhite' : 'bg-blue'} ${
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
