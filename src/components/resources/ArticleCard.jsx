'use client';
import Link from 'next/link';

function ArticleCard({ src, href, description }) {
  return (
    <Link href={href}>
      <figure className="max-w-md mx-auto 3xl:max-w-xl">
        <img src={src} alt={description} className="rounded-xl" />
        <figcaption className="px-2 mt-4 text-lg text-center 2xl:text-2xl sm:text-left sm:text-xl 3xl:text-3xl 3xl:mt-6">
          {description}
        </figcaption>
      </figure>
    </Link>
  );
}

export default ArticleCard;