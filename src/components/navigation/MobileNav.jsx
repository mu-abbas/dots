'use client';
import { useEffect } from 'react';
import Logo from './Logo';
import MobileNavLink from './MobileNavLink';
import navLinks from '@/data/navLinks';

function MobileNav({ isOpen = false, setIsOpen, pathname }) {
  useEffect(() => {
    const overlay = document.querySelector('.overlay');
    const mobileNav = document.querySelector('.mobileNav');
    mobileNav.classList.remove('hidden');

    if (isOpen) {
      overlay.classList.remove('hidden');
      document.querySelector('body').classList.add('overflow-y-hidden');
    } else {
      overlay.classList.add('hidden');
      document.querySelector('body').classList.remove('overflow-y-hidden');
    }
    return () => {
      overlay.classList.add('hidden');
      document.querySelector('body').classList.remove('overflow-y-hidden');
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  function handleScroll(e) {
    e.preventDefault();
  }

  return (
    <div
      className={`mobileNav hidden opacity-0 -translate-x-[100%] fixed h-[100dvh] overflow-y-scroll ${
        isOpen ? 'translate-x-0 opacity-100' : ''
      } transition duration-700 origin-left p-12  left-0 top-0 w-full text-black bg-beige shadow-md lg:hidden flex flex-col ease-out gap-12 max-w-md no-scrollbar`}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <button className="scale-150 text-blue" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
          <span className="sr-only"> nav bar closing button</span>
        </button>
      </div>
      <div className="space-y-6">
        <ul className="flex flex-col justify-start gap-3 pb-6 text-lg border-b border-blue">
          {[...navLinks, { label: 'Contact Us', href: '/contact-us' }].map(({ label, href, subLinks = [] }) => (
            <MobileNavLink
              label={label}
              href={href}
              key={href}
              subLinks={subLinks}
              isActive={pathname.startsWith(`${href}`) || (pathname.startsWith('/evaluate') && label === 'Resources')}
            />
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/company/dots-presentations/"
            target="blank"
            className="transition duration-300 active:scale-95"
          >
            <img src="/icon/linkedIn.svg" alt="linkedin page" />
          </a>
          <a
            href="https://www.instagram.com/dotspresentations/"
            target="blank"
            className="transition duration-300 active:scale-95"
          >
            <img src="/icon/instagram.svg" alt="instagram page" />
          </a>
          <a href="https://www.twitter.com/DotsPPTs" target="blank" className="transition duration-300 active:scale-95">
            <img src="/icon/twitter.svg" alt="twitter page" />
          </a>
          <a
            href="https://www.youtube.com/@DotsPresentations"
            target="blank"
            className="transition duration-300 active:scale-95"
          >
            <img src="/icon/youtube.svg" alt="youtube page" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
