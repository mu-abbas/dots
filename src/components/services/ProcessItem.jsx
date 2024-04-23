'use client';
function ProcessItem({ num, heading, content, color }) {
  const green = 'bg-green';
  const black = 'bg-black text-offWhite';
  const white = 'bg-white';
  const purple = 'bg-purple text-offWhite';

  return (
    <div className="flex flex-col md:justify-center md:items-center gap-2 md:gap-4 border-b-[0.5px] md:flex-row border-grey py-8 md:pb-12 lg:py-14 xl:py-16 2xl:py-18 3xl:py-20 lg:gap-6 xl:gap-8 3xl:gap-10">
      <span
        className={`flex items-center justify-center pr-[2px] text-5xl lg:text-5xlplus xl:text-6xl  3xl:text-7xl rounded-full size-18 lg:size-20 xl:size-24 3xl:size-28 ${
          color === 'black' ? black : color === 'green' ? green : color === 'white' ? white : purple
        } font-clash mb-3 md:mb-0 shrink-0`}
      >
        {num}
      </span>
      <h3 className="text-3xl text-black lg:text-4xl xl:text-5xl 2xl:text-5xlplus 3xl:text-7xl">{heading}</h3>
      <p className="max-w-md px-4 text-sm lg:text-base font-poppins md:max-w-xs md:ml-auto md:leading-tight lg:max-w-md xl:text-lg xl:leading-6 2xl:leading-7 3xl:leading-9 2xl:text-xl 2xl:max-w-xl 3xl:text-2xl 3xl:max-w-2xl text-grey">
        {content}
      </p>
    </div>
  );
}

export default ProcessItem;
