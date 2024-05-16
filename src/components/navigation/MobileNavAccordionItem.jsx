'use client';
import { useState } from 'react';
import MobileNavLink from './MobileNavLink';
import { usePathname } from 'next/navigation';
function MobileNavAccordionItem({ mainLink, subLinks }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(subLinks.some(subLink => pathname.startsWith(`${subLink.href}`)));

  return (
    <div>
      <div className="flex gap-2">
        {mainLink}
        <button
          className={`flex items-center justify-between text-left focus:outline-none hover:text-blue cursor-pointer ${
            isOpen ? 'text-blue' : 'text-black'
          }`}
          onClick={e => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
          aria-controls={`accordion-text-01`}
        >
          <span className={`${isOpen ? 'rotate-180' : 'rotate-0'} duration-300 transition`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
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
          <ul className="flex flex-col justify-start gap-2 p-2 pb-0 pl-4 text-base">
            {subLinks.map(({ label, href }) => (
              <MobileNavLink label={label} href={href} key={href} isActive={pathname.startsWith(`${href}`)} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNavAccordionItem;
