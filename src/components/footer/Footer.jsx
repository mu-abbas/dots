'use client';

import { useRouter } from 'next/navigation';

function Footer() {
  const router = useRouter();
  return <>{router.pathname === '/_error' && <footer>Footer: TODO</footer>}</>;
}

export default Footer;
