'use client';
import Link from 'next/link';

function GalleryItem({ href, title, src }) {
  return (
    <figure className="h-full space-y-4 2xl:space-y-5 3xl:space-y-6">
      <Link href={href} className="relative group">
        <img
          src={src}
          alt={`${title} project`}
          className="object-cover rounded-xl h-[90%] w-full group-hover:blur-[1px] group-hover:brightness-50 duration-300 transition"
        />
        <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] scale-0 group-hover:scale-100 duration-300 transition size-24 bg-green rounded-full flex justify-center items-center">
          <svg width="28.5" height="30" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.72573 18.8564L15.9666 1.26852M15.9666 1.26852L0.884648 3.15988M15.9666 1.26852L17.858 16.3505"
              stroke="#161B23"
              strokeWidth="1.25"
            />
          </svg>
        </span>
      </Link>
      <figcaption>
        <h2 className="text-2xl text-center md:text-4xl lg:text-2xl sm:text-left sm:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl sm:px-4">
          {title}
        </h2>
      </figcaption>
    </figure>
  );
}

export default GalleryItem;
