'use client';
import Slider from 'react-slick';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import BlogPostCard from './BlogPostCard';
import blogPosts from '@/data/blogPosts';

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
  return (
    <section className="sticky bg-black blog sticky-top-rounded sticky-padding sticky-margin">
      <Container>
        <SpaceY>
          <h2 className="text-3xl text-center lg:text-4xl text-lightBlue md:text-left">
            Take a look at our latest articles and resources
          </h2>
          <div>
            <Slider {...settings}>
              {blogPosts.map(({ image, title, date, href, color }, i) => (
                <BlogPostCard color={color} image={image} title={title} date={date} href={href} key={i} />
              ))}
            </Slider>
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Blog;
