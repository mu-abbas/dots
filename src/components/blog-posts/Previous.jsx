'use client';

import Link from 'next/link';

function Previous({ previous }) {
  return (
    <div>
      {previous && (
        <Link
          href={previous}
          className="flex items-center gap-4 transition-transform duration-300 max-w-max group active:scale-95"
        >
          <span className="relative z-50 p-1 rounded-full -mr-14 bg-beige ">
            <span className="flex items-center justify-center transition duration-500 rounded-full bg-green size-12 sm:size-14 lg:size-16 3xl:size-18 group-hover:bg-blue group-hover:text-offWhite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 sm:size-6 3xl:size-8 lg:size-7"
              >
                <path
                  fillRule="evenodd"
                  d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
          <span className="items-center justify-center hidden w-48 pl-6 transition duration-500 rounded-full lg:flex grow-0 bg-green group-hover:bg-blue group-hover:text-offWhite 3xl:w-60 3xl:pl-4 sm:h-14 3xl:h-16">
            Previous
          </span>
        </Link>
      )}
    </div>
  );
}

export default Previous;
