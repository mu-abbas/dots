'use client';
import FeaturedImage from './FeaturedImage';
function FeaturedTabContent({ items }) {
  return (
    <figure className="grid grid-cols-1 gap-10 mx-auto md:grid-cols-2 lg:gap-12 xl:gap-14 2xl:gap-16 3xl:gap-18 2xl:w-10/12">
      {items.map(({ src, alt, href, description = '', name }, i) => (
        <FeaturedImage src={src} alt={alt} href={href} description={description} key={i} name={name} />
      ))}
    </figure>
  );
}

export default FeaturedTabContent;
