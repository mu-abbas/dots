'use client';

import Link from 'next/link';

function SubLinks({ subLinks, isHover }) {
  return (
    <div
      className={`absolute top-0 right-0 w-32 transition grid ${
        isHover ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 -z-50'
      } duration-300`}
    >
      <ul
        className={`translate-y-8 3xl:translate-y-10 translate-x-8 overflow-hidden text-center bg-white rounded-md shadow-md  min-w-max divide-y divide-grey divide-opacity-5`}
      >
        {subLinks.map(({ href, label }, index) => (
          <li key={index} className="relative transition duration-300 text-grey hover:bg-grey hover:text-offWhite">
            <Link href={href} className="inline-block px-6 py-3 3xl:py-4">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubLinks;
