'use client';

import Container from '../micro/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SpaceY from '../micro/SpaceY';

function PostContent({ content, slides, title }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container px-8 pt-12 mx-auto sm:px-10 sm:pt-14 md:px-12 md:pt-16 lg:px-14 lg:pt-20 xl:px-16 xl:pt-24 2xl:pt-28 2xl:px-20">
        <SpaceY>
          <div>{content}</div>
          {!!slides.length && (
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <img src={slide} key={index} alt={title} className="px-2" />
              ))}
            </Slider>
          )}
        </SpaceY>
      </div>
    </section>
  );
}

export default PostContent;
