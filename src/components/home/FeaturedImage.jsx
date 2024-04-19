'use client';
import Link from 'next/link';
function FeaturedImage({ src, alt, href, description }) {
  return (
    <Link className="relative overflow-hidden rounded-xl group" href={href}>
      <img src={src} alt={alt} />
      <span className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-300 backdrop-brightness-50 text-white flex-col gap-4">
        <span className="text-4xl lg:text-5xl">{alt}</span>
        {description && <span className="font-light">{description}</span>}
      </span>
    </Link>
  );
}

export default FeaturedImage;
