'use client';
function TestimoialCard({ quote, image, name, role }) {
  return (
    <figure className="flex flex-col justify-between py-8 h-72">
      <blockquote className="max-w-sm px-2 text-lg font-light leading-7 text-grey font-poppins">{quote}</blockquote>
      <figcaption className="flex items-center gap-6">
        <img src={image} alt={name} className="rounded-full size-24" />
        <div className="flex flex-col">
          <cite className="font-bold capitalize">{name}</cite>
          <span className="text-sm font-thin opacity-75 text-grey">{role}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default TestimoialCard;
