import Header from '@/components/blog-posts/Header';
import Main from '@/components/blog-posts/Main';
import Footer from '@/components/footer/Footer';
import getPosts from '@/helpers/contentful';

function findNext(array, href) {
  const current = array.findIndex(current => current.href === href);
  if (current >= array.length - 1) return `/blog/${array[0]?.href}`;
  return `/blog/${array[current + 1]?.href}`;
}

function findPrevious(array, href) {
  const current = array.findIndex(current => current.href === href);
  if (current < 1) return `/blog/${array[array.length - 1]?.href}`;
  return `/blog/${array[current - 1]?.href}`;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({
    post: post.href,
  }));
}

export async function generateMetadata({ params }) {
  const { post } = params;
  const posts = await getPosts();
  const [{ title, metaDescription, imageURL }] = posts.filter(item => item.href === post);
  return {
    title: title,
    description: metaDescription,
    openGraph: {
      title: `${title} - DOTS`,
      description: metaDescription,
      url: `https://dotspresentations.com/blog/${post}`,
      siteName: 'Dotspresentaions',
      images: [
        {
          url: `https://dotspresentations.com${imageURL}`,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - DOTS`,
      description: metaDescription,
      creator: '@dotsppts',
      images: [`https://dotspresentations.com${imageURL}`],
    },
    alternates: {
      canonical: `/blog/${post}`,
    },
  };
}

async function page({ params }) {
  const { post } = params;
  const posts = await getPosts();
  const [{ title, imageURL, postContent, href, slidesURLS, date, duration }] = posts.filter(item => item.href === post);

  const next = findNext(posts, href);
  const previous = findPrevious(posts, href);

  return (
    <>
      <Header />
      <Main
        content={postContent}
        next={next}
        href={href}
        image={imageURL}
        previous={previous}
        slides={slidesURLS}
        title={title}
        date={date}
        duration={duration}
      />
      <Footer />
    </>
  );
}

export default page;
