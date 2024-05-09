'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ServicesCarousel({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

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

  return (
    <Slider {...settings}>
      {images.map(({ src, alt }, index) => (
        <figure key={index}>
          <img
            src={src}
            alt={alt}
            className="w-full mx-auto shadow-md lg:max-h-[28rem] xl:max-h-[32rem] 3xl:max-h-[40rem] 2xl:max-h-[36rem] object-cover rounded-xl"
          />
        </figure>
      ))}
    </Slider>
  );
}

export default ServicesCarousel;
