'use client';
import Link from 'next/link';

const black = '#161B23';
const offWhite = '#EFF3E9';

function CTALinkV2({ color, label, href, greyBorder, whiteBorder }) {
  return (
    <Link
      href={href}
      className={`relative flex border rounded-md lg:rounded-lg group 2xl:text-lg overflow-hidden w-max ${
        greyBorder ? 'border-grey' : whiteBorder ? 'border-offWhite' : 'border-black'
      } ${color === 'black' ? 'bg-black' : color === 'green' ? (whiteBorder ? '' : 'bg-beige') : ''}`}
    >
      {/* none hover state */}
      <span className="flex">
        <span
          className={`px-3 xl:px-6 py-3 ${
            color === 'black' || whiteBorder ? 'text-offWhite' : 'text-black'
          } tracking-wide  group-hover:translate-y-[105%] transition duration-300 min-w-44 text-center`}
        >
          {label}
        </span>

        {/*hover state */}
        <span
          className={`px-3 xl:px-6 py-3 ${
            color === 'black'
              ? 'text-black bg-green'
              : color === 'green'
              ? 'text-black bg-green'
              : 'text-offWhite bg-blue'
          } tracking-wide group-hover:translate-x-0 transition duration-300 -translate-x-[105%] absolute left-0 top-0 min-w-44 text-center`}
        >
          {label}
        </span>

        <span
          className={`flex items-center px-3 xl:px-6 ${
            color === 'black' ? 'bg-green' : color === 'green' ? 'bg-green' : 'bg-blue'
          } border-l ${greyBorder ? 'border-grey' : 'border-black'}`}
        >
          <span>
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.72573 18.8564L15.9666 1.26852M15.9666 1.26852L0.884648 3.15988M15.9666 1.26852L17.858 16.3505"
                stroke={`${color === 'black' || color === 'green' ? black : offWhite}`}
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </span>
      </span>
    </Link>
  );
}

export default CTALinkV2;
