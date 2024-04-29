'use client';
import Link from 'next/link';

function Logo({ color = 'blue' }) {
  return (
    <Link href="/">
      <img
        src={`/icon/logo-${color}.svg`}
        alt="dots logomark"
        className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-48 3xl:w-52"
      />
    </Link>
  );
}

export default Logo;
