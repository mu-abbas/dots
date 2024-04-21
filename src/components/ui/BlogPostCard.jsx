'use client';
import Link from 'next/link';

function BlogPostCard({ image, description, href, date, color }) {
  return (
    <Link
      href={href}
      aria-label={description}
      className="max-w-sm mx-auto overflow-hidden border border-grey rounded-xl 2xl:max-w-md 3xl:max-w-lg"
    >
      <figure className="font-poppins">
        <img src={image} alt={description} />
        <figcaption className="px-8 py-16 space-y-16">
          <span className="text-xl text-offWhite">{description}</span>
          <span className="flex items-center justify-between">
            <time datetime={date} className="text-sm font-light text-grey">
              {date}
            </time>
            <span
              className={`${
                color === 'purple' ? 'text-purple' : color === 'blue' ? 'text-blue' : 'text-green'
              } text-3xl mr-12 hover:scale-150 transition duration-300`}
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
