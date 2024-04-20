'use client';
import { useEffect, useState } from 'react';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, top: '0', right: '0', width: '15%', height: '100%', opacity: '0' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, top: '0', left: '0', width: '15%', height: '100%', opacity: '0' }}
      onClick={onClick}
    />
  );
}

const testimonials = [{}];

function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [slides, setSlides] = useState(3);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 1024) setSlides(2);
    if (windowWidth < 700) setSlides(1);
    if (windowWidth > 1024) setSlides(3);
  }, [windowWidth]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setActiveSlide(next),
  };

  return (
    <section className="bg-offWhite">
      <Container>
        <SpaceY>
          <div className="flex flex-col items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 3xl:gap-18 md:flex-row">
            <h2 className="px-4 py-3 text-xl font-medium text-center border rounded-lg md:px-6 md:py-4 opacity-85 text-grey border-grey min-w-max sm:text-2xl lg:text-3xl 3xl:text-4xl">
              What our clients say
            </h2>
            <p className="max-w-sm font-light md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-poppins sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl 3xl:max-w-4xl 3xl:text-4xl">
              Proudly serving a diverse range of clients,from startups to Fortune 500 companies. They trusted us! …..
            </p>
          </div>
          <div className="relative">
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
            <div className="relative h-1 overflow-hidden" role="progressbar">
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
