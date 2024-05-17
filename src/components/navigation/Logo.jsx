'use client';
import Link from 'next/link';

function Logo({ color = 'blue' }) {
  return (
    <Link href="/">
      <img src={`/icon/logo-${color}.svg`} alt="dots logomark" className="w-28 sm:w-32 xl:w-36 2xl:w-40 3xl:w-44" />
    </Link>
  );
}

export default Logo;
