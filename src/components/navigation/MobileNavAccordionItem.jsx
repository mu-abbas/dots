'use client';
import { useState } from 'react';
import MobileNavLink from './MobileNavLink';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
function MobileNavAccordionItem({ href, label, subLinks, isActive }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(subLinks.some(subLink => pathname.startsWith(`${subLink.href}`)));

  return (
    <div>
      <div className="flex gap-3 group">
        <Link href={href} className={`transition duration-300 ${isActive ? 'text-blue' : ''} hover:text-blue`}>
          {label}
        </Link>
        <button
          className={`flex items-center justify-between text-left focus:outline-none  cursor-pointer`}
          onClick={e => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
          aria-controls={`accordion-text-01`}
        >
          <span
            className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition duration-300 group-hover:text-blue ${
              isOpen || isActive ? 'text-blue' : 'text-black'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="mt-0.5 size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
          <span className="sr-only">drop down list button</span>
        </button>
      </div>
      <div
        id={`accordion-text-01`}
        role="region"
        aria-labelledby={`accordion-title-01`}
        className={`grid text-xs md:text-base font-light font-poppins overflow-hidden transition-all duration-300 ease-in-out leading-5 md:leading-6 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col justify-start gap-3 pt-2 pl-4 text-base">
            {subLinks.map(({ label, href }) => (
              <MobileNavLink label={`- ${label}`} href={href} key={href} isActive={pathname.startsWith(`${href}`)} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNavAccordionItem;
