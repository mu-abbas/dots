import Link from 'next/link';
function ServicesCard({ heading, href, icon }) {
  return (
    <li>
      <figure className="p-5 transition duration-300 border-[0.5px] rounded-xl border-lightGrey hover:bg-navy hover:border-navy lg:p-8 2xl:p-10 2xl:rounded-2xl">
        <div className="flex items-center gap-4 mb-4 xl:flex-col xl:items-start">
          <img
            src={icon}
            alt={`${heading} service icon`}
            className="size-16 lg:size-18 xl:size-20 hover:animate-pulsing"
          />
          <h3 className="text-2xl font-light leading-7 capitalize w-min lg:text-3xl">{heading}</h3>
        </div>
        <Link href={href} className="space-x-1 text-sm font-semibold">
          <span>Learn More</span>
          <span className="sr-only">about ${heading}</span>
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mb-1 size-3"
          >
            <path
              d="M2.72573 18.8564L15.9666 1.26852M15.9666 1.26852L0.884648 3.15988M15.9666 1.26852L17.858 16.3505"
              stroke="white"
              strokeWidth="2.14962"
            />
          </svg>
        </Link>
      </figure>
    </li>
  );
}

export default ServicesCard;
