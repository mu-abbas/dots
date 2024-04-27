'use client';
import Link from 'next/link';

function GalleryItem({ href, title, src }) {
  return (
    <figure className="h-full space-y-4">
      <Link href={href}>
        <img src={src} alt={`${title} project`} className="object-cover rounded-xl h-[90%] w-full" />
      </Link>
      <figcaption>
        <h2 className="text-3xl">{title}</h2>
      </figcaption>
    </figure>
  );
}

export default GalleryItem;
