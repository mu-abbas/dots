'use client';
import Link from 'next/link';

function Logo({ color }) {
  return (
    <Link href="/">
      <img src={`logo-${color}.svg`} alt="dots logomark" className="w-36 xl:w-48" />
    </Link>
  );
}

export default Logo;
