'use client';
import Link from 'next/link';

function BlogPostCard({ image, description, href, date, color }) {
  return (
    <Link
      href={href}
      aria-label={description}
      className="max-w-xs mx-auto overflow-hidden border md:max-w-sm border-grey rounded-xl 2xl:max-w-md 3xl:max-w-xl"
    >
      <figure className="font-poppins">
        <img src={image} alt={description} />
        <figcaption className="px-8 py-10 space-y-10 md:py-12 md:space-y-12 lg:py-10 lg:space-y-10 xl:py-12 xl:space-y-12 2xl:py-16 2xl:space-y-16 3xl:px-12">
          <span className="text-xl text-offWhite 3xl:text-2xl">{description}</span>
          <span className="flex items-center justify-between">
            <time datetime={date} className="text-sm font-light text-grey 3xl:text-base">
              {date}
            </time>
            <span
              className={`${
                color === 'purple' ? 'text-purple' : color === 'blue' ? 'text-blue' : 'text-green'
              } text-3xl mr-4 md:mr-8 lg:mr-4 xl:mr-6 2xl:mr-12 hover:scale-150 transition duration-300 3xl:text-4xl 3xl:mr-16`}
            >
              &rarr;
            </span>
          </span>
        </figcaption>
      </figure>
    </Link>
  );
}

export default BlogPostCard;
