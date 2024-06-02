import Header from '@/components/blog-posts/Header';
import Main from '@/components/blog-posts/Main';
import Footer from '@/components/footer/Footer';
import blogPosts from '@/data/blogPosts';

function findNext(array, href) {
  const current = array.findIndex(current => current.href === href);
  if (current >= array.length - 1) return `/resources/${array[0]?.href}`;
  return `/resources/${array[current + 1]?.href}`;
}

function findPrevious(array, href) {
  const current = array.findIndex(current => current.href === href);
  if (current < 1) return `/resources/${array[array.length - 1]?.href}`;
  return `/resources/${array[current - 1]?.href}`;
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    post: post.href,
  }));
}

export async function generateMetadata({ params }) {
  const { post } = params;
  const [{ title, description }] = blogPosts.filter(item => item.href === post);
  return {
    title: title,
    description: description,
  };
}

function page({ params }) {
  const { post } = params;
  const [{ title, href, duration, date, content, image, slides }] = blogPosts.filter(item => item.href === post);

  const next = findNext(blogPosts, href);
  const previous = findPrevious(blogPosts, href);

  return (
    <>
      <Header title={title} date={date} duration={duration} />
      <Main content={content} next={next} image={image} previous={previous} slides={slides} title={title} />
      <Footer />
    </>
  );
}

export default page;
