'use client';
function Feature({ src, title, content }) {
  return (
    <figure className="flex flex-col p-8 bg-opacity-50 bg-navy rounded-3xl text-offWhite">
      <img src={src} alt={`${title} shape`} className="ml-auto" />
      <figcaption className="space-y-4">
        <h3 className="flex flex-col text-2xl">
          <span>{title.split(',')[0]}</span>
          <span>{title.split(',')[1]}</span>
        </h3>
        <p className="text-sm font-light leading-snug font-poppins">{content}</p>
      </figcaption>
    </figure>
  );
}

export default Feature;
