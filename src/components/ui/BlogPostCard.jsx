import Link from 'next/link';
import { theme } from '../../../tailwind.config';

function BlogPostCard({ image, title, href, date, color }) {
  return (
    <Link href={`/blog/${href}`} aria-label={title}>
      <figure className="font-poppins">
        <img src={image} alt={title} />
        <figcaption className="flex items-center justify-center min-h-64">
          <div className="px-8 py-10 space-y-10 md:py-12 md:space-y-12 lg:py-10 lg:space-y-10 xl:py-12 xl:space-y-12 2xl:py-16 2xl:space-y-16 3xl:px-12">
            <span className="text-xl text-offWhite 3xl:text-2xl">{title}</span>
            <span className="flex items-center justify-between">
              <time dateTime={date} className="text-sm font-light text-grey 3xl:text-base">
                {date}
              </time>
              <span className="mr-4 text-3xl transition duration-300 rotate-90 md:mr-8 lg:mr-4 xl:mr-6 2xl:mr-12 hover:scale-150 3xl:text-4xl 3xl:mr-16">
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.7913 21.5449L10.5003 2.22674M10.5003 2.22674L1.22754 11.6593M10.5003 2.22674L19.773 11.6593"
                    stroke={theme.colors[color]}
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </span>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
}

export default BlogPostCard;
