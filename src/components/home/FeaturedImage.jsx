'use client';
import Link from 'next/link';
function FeaturedImage({ src, alt, href, description }) {
  return (
    <Link className="relative overflow-hidden rounded-xl group" href={href}>
      <img src={src} alt={alt} className="group-hover:brightness-50 group-hover:blur-[2px]" />
      <span className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white transition duration-300 opacity-0 group-hover:opacity-100">
        <span className="text-4xl lg:text-5xl">{alt}</span>
        {description && <span className="font-light">{description}</span>}
      </span>
    </Link>
  );
}

export default FeaturedImage;
