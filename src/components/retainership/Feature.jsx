'use client';
function Feature({ src, title, content }) {
  return (
    <figure className="flex flex-col p-6 space-y-2 bg-opacity-50 md:p-8 bg-navy rounded-3xl text-offWhite">
      <img src={src} alt={`${title} shape`} className="ml-auto size-10 lg:size-12 xl:size-10 2xl:size-12" />
      <figcaption className="space-y-2 lg:space-y-4 xl:space-y-2 2xl:space-y-4">
        <h3 className="flex flex-col text-xl leading-snug lg:text-2xl xl:text-xl 2xl:text-2xl 2xl:leading-7 xl:leading-snug lg:leading-7">
          <span>{title.split(',')[0]}</span>
          <span>{title.split(',')[1]}</span>
        </h3>
        <p className="text-xs font-light leading-none xl:text-xs 2xl:text-sm lg:leading-snug lg:text-sm font-poppins xl:leading-none 2xl:leading-snug">
          {content}
        </p>
      </figcaption>
    </figure>
  );
}

export default Feature;
