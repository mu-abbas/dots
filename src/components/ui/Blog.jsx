'use client';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import BlogPostCard from './BlogPostCard';

const blogPosts = [
  {
    image: '/image/blog-post-mockup.jpg',
    description: '5 Presentation Design Mistakes to Avoid',
    href: '#',
    date: 'January 14, 2024',
    color: 'purple',
  },
  {
    image: '/image/blog-post-mockup-2.jpg',
    description: '7 Proven Strategies to Create Winning Presentations',
    href: '#',
    date: 'January 14, 2024',
    color: 'green',
  },
  {
    image: '/image/blog-post-mockup.jpg',
    description: '5 Presentation Design Mistakes to Avoid',
    href: '#',
    date: 'January 14, 2024',
    color: 'purple',
  },
];

function Blog() {
  return (
    <section className="bg-black">
      <Container>
        <SpaceY>
          <h2 className="text-3xl text-center lg:text-4xl text-lightBlue lg:text-left">
            Take a look at our latest articles and resources
          </h2>
          <div className="grid grid-cols-1 gap-8 place-content-center lg:grid-cols-3">
            {blogPosts.map(({ image, description, date, href, color }, i) => (
              <BlogPostCard color={color} image={image} description={description} date={date} href={href} key={i} />
            ))}
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Blog;
