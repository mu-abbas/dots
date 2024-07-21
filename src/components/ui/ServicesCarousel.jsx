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
          <img src={src} alt={alt} className="w-full max-w-5xl mx-auto shadow-md rounded-xl" />
        </figure>
      ))}
    </Slider>
  );
}

export default ServicesCarousel;
