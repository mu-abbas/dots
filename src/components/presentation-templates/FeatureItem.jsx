'use client';
function FeatureItem({ src, label, content }) {
  return (
    <figure className="flex flex-col items-start gap-4 lg:gap-8 lg:items-center lg:flex-row">
      <div className="p-4 rounded-full bg-green 3xl:p-8 shrink-0 xl:p-6">
        <img src={src} alt={label} className="size-12 xl:size-14 3xl:size-16" />
      </div>
      <figcaption className="space-y-1">
        <h3 className="text-lg font-semibold xl:text-xl 3xl:text-2xl">{label}</h3>
        <p className="text-sm font-light font-poppins xl:text-base 3xl:text-lg">{content}</p>
      </figcaption>
    </figure>
  );
}

export default FeatureItem;
