'use client';
import { useEffect, useState } from 'react';
import CTALinkV2 from './CTALinkV2';
import Logo from './Logo';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';
import MobileNavLink from './MobileNavLink';
import navLinks from '@/data/navLinks';

function Nav({ color }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const overlay = document.querySelector('.overlay');
    if (isOpen) {
      overlay.classList.remove('hidden');
      overlay.style.opacity = '1';
    } else {
      overlay.style.opacity = '0';
    }
    const timer = setTimeout(() => {
      if (!isOpen) {
        overlay.classList.add('hidden');
      }
    }, 300);

    return clearTimeout(timer);
  }, [isOpen]);

  return (
    <nav className="relative z-50">
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
          <div
            className={`fixed h-[100dvh] overflow-y-scroll ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-[100%] opacity-0'
            } transition duration-700 origin-left p-12  left-0 top-0 w-full text-black bg-beige shadow-md lg:hidden flex flex-col ease-out gap-12 max-w-md no-scrollbar`}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button className="scale-150 text-blue" onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
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
                    isActive={pathname.startsWith(`${href}`)}
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
                <a
                  href="https://www.twitter.com/DotsPPTs"
                  target="blank"
                  className="transition duration-300 active:scale-95"
                >
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
        </div>
      </div>
    </nav>
  );
}

export default Nav;
