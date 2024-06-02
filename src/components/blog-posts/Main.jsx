'use client';
import Pagination from './Pagination';
import PostContent from './PostContent';

function Main({ content, next, previous, image, slides, title, href }) {
  return (
    <main className="bg-beige">
      <img src={image} alt={title} className="w-full" />
      <PostContent content={content} slides={slides} title={title} href={href} />
      <Pagination next={next} previous={previous} />
    </main>
  );
}

export default Main;
