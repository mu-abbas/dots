'use client';
import Link from 'next/link';

function Logo({ color }) {
  return (
    <Link href="/">
      <img src={`logo-${color}.svg`} alt="dots logomark" className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-48" />
    </Link>
  );
}

export default Logo;
