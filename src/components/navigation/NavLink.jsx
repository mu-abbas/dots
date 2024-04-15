'use client';
import Link from 'next/link';

function NavLink({ label, href, isActive }) {
  return (
    <li className={`${isActive ? 'text-blue' : ''} hover:text-blue transition duration-300`}>
      <Link href={href}>{label}</Link>
    </li>
  );
}

export default NavLink;
