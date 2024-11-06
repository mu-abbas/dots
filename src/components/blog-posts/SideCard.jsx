import Link from 'next/link';

function SideCard({ src, href, title }) {
  return (
    <Link href={`/blog/${href}`}>
      <figure className="max-w-md mx-auto">
        <img src={src} alt={title} className="rounded-xl" />
      </figure>
    </Link>
  );
}

export default SideCard;
