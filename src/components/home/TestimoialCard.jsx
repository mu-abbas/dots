'use client';
function TestimoialCard({ quote, image, name, role }) {
  return (
    <figure>
      <blockquote>{quote}</blockquote>
      <figcaption>
        <img src={image} alt={name} />
        <div>
          <cite className="capitalize">{name}</cite>
          <span>{role}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default TestimoialCard;
