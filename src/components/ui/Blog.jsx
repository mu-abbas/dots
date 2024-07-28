'use client';
import Slider from 'react-slick';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import BlogPostCard from './BlogPostCard';
import blogPosts from '@/data/blogPosts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import getPosts from '@/helpers/contentful';

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'none',
      }}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'none',
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true,
      },
    },
  ],
};

function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function getFeaturedPosts() {
      const posts = await getPosts();
      setPosts(posts.filter(post => post.isFeatured));
    }
    getFeaturedPosts();
  }, []);

  return (
    <section className="sticky bg-black blog sticky-top-rounded sticky-padding sticky-margin">
      <Container>
        <SpaceY>
          <h2 className="text-3xl text-center lg:text-4xl text-lightBlue md:text-left">
            Take a look at our latest articles and resources
          </h2>
          <div>
            {posts?.length ? (
              <Slider {...settings}>
                {posts.map(({ imageURL, title, date, href, themeColor }, i) => (
                  <BlogPostCard color={themeColor} image={imageURL} title={title} date={date} href={href} key={i} />
                ))}
              </Slider>
            ) : (
              <p className="text-center text-beige font-poppins">
                No posts available right now, we will publish new posts soon.
              </p>
            )}
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Blog;
