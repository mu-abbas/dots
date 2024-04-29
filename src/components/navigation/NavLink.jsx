'use client';
import Link from 'next/link';

function NavLink({ label, href, isActive, color = 'blue' }) {
  return (
    <li
      className={`${
        isActive ? (color === 'blue' ? 'text-blue' : 'text-green') : color === 'blue' ? '' : 'text-offWhite'
      } ${color === 'blue' ? 'hover:text-blue' : 'hover:text-green'} transition duration-300`}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
}

export default NavLink;
