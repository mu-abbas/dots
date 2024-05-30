'use client';
function ProcessItem({ src, label, content }) {
  return (
    <figure className="flex items-center h-20 gap-4 sm:h-max sm:gap-8 3xl:gap-12">
      <div className="p-4 rounded-full bg-green 3xl:p-6 shrink-0 2xl:p-5">
        <img src={src} alt={label} className="size-10 sm:size-12 lg:size-10 xl:size-12 3xl:size-14" />
      </div>
      <figcaption className="space-y-1">
        <h3 className="text-lg font-medium sm:text-xl lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl">{label}</h3>
        <p className="max-w-xs text-xs font-light sm:max-w-md sm:text-sm font-poppins xl:text-base 3xl:text-xl 3xl:max-w-lg">
          {content}
        </p>
      </figcaption>
    </figure>
  );
}

export default ProcessItem;
