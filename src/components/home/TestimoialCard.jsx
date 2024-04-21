'use client';
function TestimoialCard({ quote, image, name, role }) {
  return (
    <figure className="flex flex-col justify-between gap-8 lg:h-56 xl:h-64 2xl:h-56">
      <blockquote className="text-lg font-light leading-7 text-grey font-poppins md:max-w-xl lg:max-w-sm xl:max-w-xs 2xl:max-w-sm 3xl:max-w-lg">
        {quote}
      </blockquote>
      <figcaption className="flex items-center gap-6">
        <img src={image} alt={name} className="rounded-full size-24" />
        <div className="flex flex-col">
          <cite className="text-lg not-italic font-bold capitalize">{name}</cite>
          <span className="text-sm font-thin opacity-75 text-grey">{role}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default TestimoialCard;
