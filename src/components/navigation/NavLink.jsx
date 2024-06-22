'use client';
import Link from 'next/link';
import SubLinks from './SubLinks';
import { useState } from 'react';

function NavLink({ label, href, isActive, color = 'blue', subLinks }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      className={`${
        isActive ? (color === 'blue' ? 'text-blue' : 'text-green') : color === 'blue' ? '' : 'text-offWhite'
      } ${color === 'blue' ? 'hover:text-blue' : 'hover:text-green'} transition duration-300 flex items-center gap-1`}
      onMouseMove={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link href={href} className="relative z-50">
        {label}
      </Link>
      {subLinks.length > 0 && (
        <div className="relative">
          <button className="flex items-center">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 3xl:size-6"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
            >
              <g transform="translate(0,24) scale(0.1,-0.1)" fill="currentColor" stroke="none">
                <path d="M80 110 c17 -22 35 -40 39 -40 4 0 22 18 40 40 l32 40 -71 0 -72 0 32 -40z" />
              </g>
            </svg>
            <span className="sr-only">drop down button</span>
          </button>
          <SubLinks subLinks={subLinks} isHover={isHover} setIsHover={setIsHover} />
        </div>
      )}
    </li>
  );
}

export default NavLink;
