'use client';
import { useState } from 'react';
function PackageItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-3xl bg-opacity-10 ${
        isOpen ? 'bg-white shadow-md' : ' bg-grey'
      } transition duration-300 max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl`}
    >
      <h2>
        <button
          className="flex items-center justify-between gap-3 p-8 text-left 3xl:p-10 focus:outline-none"
          onClick={e => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
          aria-controls={`accordion-text-01`}
        >
          <span>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
          <span className="text-2xl xl:text-3xl 3xl:text-4xl">{title}</span>
        </button>
      </h2>
      <div
        id={`accordion-text-01`}
        role="region"
        aria-labelledby={`accordion-title-01`}
        className={`grid font-poppins overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-4">
            {content.heading && (
              <h3 className="pb-2 text-lg font-normal 3xl:pb-3 xl:text-xl 3xl:text-2xl">{content.heading}</h3>
            )}
            <div className="text-xs font-light leading-5 xl:leading-6 xl:text-base 3xl:text-lg 3xl:leading-7">
              <p className="pb-4">{content.description}</p>
              {content.extraInformation && <p className="pb-4">{content.extraInformation}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageItem;
