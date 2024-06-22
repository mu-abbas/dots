'use client';
function FeatureItem({ src, label, content }) {
  return (
    <figure className="flex flex-col items-start gap-4">
      <div className="p-4 rounded-full bg-green 3xl:p-8 shrink-0 2xl:p-6">
        <img src={src} alt={label} className="size-12 lg:size-10 xl:size-12 2xl:size-14 3xl:size-16" />
      </div>
      <figcaption className="space-y-1">
        <h2 className="text-lg font-semibold lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl">{label}</h2>
        <p className="text-sm font-light font-poppins lg:text-xs xl:text-sm 2xl:text-base 3xl:text-lg">{content}</p>
      </figcaption>
    </figure>
  );
}

export default FeatureItem;
