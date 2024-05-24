'use client';
function Handle({ large = false }) {
  return (
    <span
      slot="handle"
      className={`flex scale-75 sm:scale-90 sm:gap-1 md:scale-100 md:gap-2 ${
        large ? 'xl:scale-125 3xl:scale-150' : ''
      }`}
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-90 size-6"
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        slot="handle"
      >
        <g transform="translate(0,24) scale(0.1,-0.1)" fill="currentColor" stroke="none">
          <path d="M80 110 c17 -22 35 -40 39 -40 4 0 22 18 40 40 l32 40 -71 0 -72 0 32 -40z" />
        </g>
      </svg>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        className="-rotate-90 size-6"
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        slot="handle"
      >
        <g transform="translate(0,24) scale(0.1,-0.1)" fill="currentColor" stroke="none">
          <path d="M80 110 c17 -22 35 -40 39 -40 4 0 22 18 40 40 l32 40 -71 0 -72 0 32 -40z" />
        </g>
      </svg>
    </span>
  );
}

export default Handle;
