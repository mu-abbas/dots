'use client';
import Slider from 'react-slick';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import BlogPostCard from './BlogPostCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

function Blog({ posts }) {
  const featuredPosts = posts.filter(post => post.isFeatured).slice(0, 3);

  return (
    <section className="sticky bg-black blog sticky-top-rounded sticky-padding sticky-margin">
      <Container>
        <SpaceY>
          <h2 className="text-3xl text-center lg:text-4xl text-lightBlue md:text-left">
            Take a look at our latest articles and resources
          </h2>
          <div>
            {featuredPosts?.length > 1 ? (
              <Slider {...settings}>
                {featuredPosts.map(({ imageURL, title, date, href, themeColor }, i) => (
                  <BlogPostCard color={themeColor} image={imageURL} title={title} date={date} href={href} key={i} />
                ))}
              </Slider>
            ) : featuredPosts?.length === 1 ? (
              <div className="flex justify-center">
                <div className="overflow-hidden border max-w-72 border-grey rounded-xl md:max-w-96">
                  {featuredPosts.map(({ imageURL, title, date, href, themeColor }, i) => (
                    <BlogPostCard color={themeColor} image={imageURL} title={title} date={date} href={href} key={i} />
                  ))}
                </div>
              </div>
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
