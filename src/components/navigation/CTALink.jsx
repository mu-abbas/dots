'use client';
import Link from 'next/link';

function CTALink({ color, label, href }) {
  return (
    <Link
      href={href}
      className={`relative flex overflow-hidden border border-black rounded-xl group bg-${color} text-[14px] xl:text-[17px]`}
    >
      {/* non hover state */}
      <span className="flex group-hover:translate-y-[100%] transition duration-300">
        <span
          className={`bg-${color} px-4 xl:px-6 py-3 ${
            color === 'black' ? 'text-white' : 'text-black'
          } tracking-wide border-r border-black`}
        >
          {label}
        </span>
        <span className={`flex items-center px-4 xl:px-6 ${color === 'black' ? 'bg-green' : 'bg-blue'}`}>
          <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.72573 18.8564L15.9666 1.26852M15.9666 1.26852L0.884648 3.15988M15.9666 1.26852L17.858 16.3505"
              stroke={`${color === 'black' ? '#161B23' : 'white'}`}
              strokeWidth="2.14962"
            />
          </svg>
        </span>
      </span>

      {/* hover state */}
      <span
        className={`absolute inset-0 z-50 flex translate-x-[100%] rounded-lg group-hover:translate-x-0 transition duration-300 bg-${
          color === 'black' ? 'green' : 'blue'
        }`}
      >
        <span
          className={`px-4 xl:px-6 py-3 tracking-wide ${
            color === 'black' ? 'text-black' : 'text-white'
          } border-r border-black`}
        >
          {label}
        </span>
        <span className={`flex items-center px-4 xl:px-6 ${color === 'black' ? 'bg-green' : 'bg-blue'}`}>
          <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.72573 18.8564L15.9666 1.26852M15.9666 1.26852L0.884648 3.15988M15.9666 1.26852L17.858 16.3505"
              stroke={`${color === 'black' ? '#161B23' : 'white'}`}
              strokeWidth="2.14962"
            />
          </svg>
        </span>
      </span>
    </Link>
  );
}

export default CTALink;