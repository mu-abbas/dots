'use client';
function OurDesignTab({ heading, icon }) {
  return (
    <figure className="p-6 transition duration-300 border-[0.5px] rounded-xl border-lightGrey hover:bg-navy hover:border-navy xl:p-8 3xl:p-10 2xl:rounded-2xl w-52 xl:w-64 2xl:w-72 3xl:w-80 cursor-pointer">
      <div className="flex flex-col items-start gap-6">
        <img
          src={icon}
          alt={`${heading} service icon`}
          className="size-16 lg:size-16 xl:size-20 3xl:size-24 hover:animate-pulsing"
        />
        <h3 className="text-2xl font-light leading-7 capitalize 3xl:leading-10 xl:text-3xl 3xl:text-4xl w-min">
          {heading}
        </h3>
      </div>
    </figure>
  );
}

export default OurDesignTab;
