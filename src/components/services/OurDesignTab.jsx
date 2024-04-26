'use client';
function OurDesignTab({ heading, icon }) {
  return (
    <figure className="p-6 xl:p-8 3xl:p-10 w-52 xl:w-64 3xl:w-80">
      <div className="flex flex-col items-start gap-6">
        <img
          src={icon}
          alt={`${heading} service icon`}
          className="size-16 lg:size-16 xl:size-20 3xl:size-24 hover:animate-pulsing"
        />
        <h3 className="text-2xl font-light leading-7 text-left capitalize 3xl:leading-10 xl:text-3xl 3xl:text-4xl w-min">
          {heading}
        </h3>
      </div>
    </figure>
  );
}

export default OurDesignTab;
