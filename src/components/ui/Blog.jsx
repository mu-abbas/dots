'use client';
import Slider from 'react-slick';
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
  infinite: true,
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
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function Blog() {
  return (
    <section className="bg-black blog">
      <Container>
        <SpaceY>
          <h2 className="text-3xl text-center lg:text-4xl text-lightBlue md:text-left">
            Take a look at our latest articles and resources
          </h2>
          <div>
            <Slider {...settings}>
              {blogPosts.map(({ image, description, date, href, color }, i) => (
                <BlogPostCard color={color} image={image} description={description} date={date} href={href} key={i} />
              ))}
            </Slider>
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Blog;