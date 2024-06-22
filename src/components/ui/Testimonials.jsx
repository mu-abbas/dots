'use client';
import { useState } from 'react';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import Slider from 'react-slick';
import TestimoialCard from './TestimoialCard';
import testimonials from '@/data/testimonials';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

let nextOnClick;

function NextArrow(props) {
  const { className, style, onClick } = props;
  nextOnClick = e => {
    if (e.target.classList.contains('slick-arrow')) return;
    onClick();
  };

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

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        bottom: '0',
        left: '0',
        width: '15%',
        height: '100%',
        opacity: '0',
        zIndex: '50',
      }}
      onClick={onClick}
    />
  );
}

function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-beige testimonials">
      <Container>
        <SpaceY>
          <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 3xl:gap-18 lg:flex-row">
            <h2 className="px-4 py-3 text-xl font-medium text-center border rounded-lg opacity-75 md:px-6 md:py-4 text-grey border-grey min-w-max sm:text-2xl lg:text-3xl 3xl:text-4xl">
              What our clients say
            </h2>
            <p className="max-w-sm font-light leading-7 lg:leading-8 xl:leading-9 2xl:leading-10 lg:text-lg xl:text-xl 2xl:text-2xl font-poppins sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl 3xl:max-w-4xl 3xl:text-3xl">
              Proudly serving a diverse range of clients,from startups to Fortune 500 companies. They trusted us! …..
            </p>
          </div>
          <div className="relative cursor-grab" onClick={nextOnClick}>
            <Slider {...settings}>
              {testimonials.map(({ quote, image, name, role }) => (
                <TestimoialCard role={role} image={image} quote={quote} name={name} key={name} />
              ))}
            </Slider>

            {/* progress bar */}
            <div className="relative h-1 overflow-hidden" aria-hidden>
              <span className="absolute left-0 w-full h-1 opacity-25 bg-grey"></span>
              <span
                className={`absolute left-0 h-1 transition duration-300 origin-left bg-black w-1/6`}
                style={{ transform: `scaleX(${activeSlide + 1})` }}
              ></span>
            </div>
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Testimonials;
