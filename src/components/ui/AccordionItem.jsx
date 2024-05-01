'use client';
import { useState } from 'react';
function AccordionItem({ title, content, open = false }) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div>
      <h2>
        <button
          className={`flex items-center justify-between py-4 w-full text-left border-b border-grey focus:outline-none gap-8 ${
            isOpen ? 'text-blue' : 'text-offWhite'
          }`}
          onClick={e => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
          aria-controls={`accordion-text-01`}
        >
          <span>{title}</span>
          <span
            className={`p-3 border rounded-full border-grey ${
              isOpen ? 'rotate-180' : 'rotate-0'
            } duration-300 transition`}
          >
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.2087 0.455078L10.4997 19.7733M10.4997 19.7733L19.7725 10.3407M10.4997 19.7733L1.22701 10.3407"
                stroke="#2B65F4"
                strokeWidth="2.14962"
              />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id={`accordion-text-01`}
        role="region"
        aria-labelledby={`accordion-title-01`}
        className={`grid text-xs md:text-base font-light border-b font-poppins text-offWhite border-grey overflow-hidden transition-all duration-300 ease-in-out leading-5 md:leading-6 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 sm:p-6 md:leading-7">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
