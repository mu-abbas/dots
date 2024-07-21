import Link from 'next/link';

function GalleryItem({ href, title, src }) {
  return (
    <figure className="h-full space-y-2 sm:space-y-4 lg:space-y-2 xl:space-y-3 2xl:space-y-5 3xl:space-y-6">
      <Link href={href}>
        <span className="relative inline-block h-[90%] group animate-popUp">
          <img
            src={src}
            alt={`${title} project`}
            className="object-cover rounded-xl h-full w-full group-hover:blur-[1px] group-hover:brightness-50 duration-300 transition overflow-hidden"
          />
          <span className="absolute inset-0 flex items-center justify-center w-full h-full">
            <span className="flex items-center justify-center transition duration-300 scale-0 rounded-full opacity-0 md:group-hover:scale-100 group-hover:scale-75 size-24 bg-green group-hover:opacity-100">
              <svg width="28.5" height="30" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.72573 18.8564L15.9666 1.26852M15.9666 1.26852L0.884648 3.15988M15.9666 1.26852L17.858 16.3505"
                  stroke="#161B23"
                  strokeWidth="1.25"
                />
              </svg>
            </span>
          </span>
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
