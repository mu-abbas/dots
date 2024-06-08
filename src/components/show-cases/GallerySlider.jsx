'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import Container from '../micro/Container';
function GallerySlider({ setSliderIsOpen, slides }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [shareIsOpen, setShareIsOpen] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_, next) => setActiveSlide(next),
  };

  return (
    <div className="gallery fixed inset-0 z-50 w-screen h-[100dvh] bg-black bg-opacity-90 animate-popUp">
      <div className="absolute top-0 left-0 flex items-center w-full gap-6 px-12 py-8">
        <div className="relative ml-auto">
          <button onClick={() => setShareIsOpen(!shareIsOpen)} className="flex items-center text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path
                fillRule="evenodd"
                d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {shareIsOpen && (
            <div
              className={`absolute -bottom-20 2xl:-bottom-24 2xl:-translate-y-2 -right-8 w-32 transition grid
        grid-rows-[1fr] opacity-100 duration-300`}
            >
              <ul className={`overflow-hidden bg-white rounded-md shadow-md min-w-max flex flex-col gap-1 py-2`}>
                <li className="relative transition duration-300 cursor-pointer text-grey">
                  <p className="inline-block px-4 text-sm">Test</p>
                </li>
                <li className="relative transition duration-300 cursor-pointer text-grey">
                  <p className="inline-block px-4 text-sm">Test</p>
                </li>
              </ul>
            </div>
          )}
        </div>
        <button className="text-white scale-150 " onClick={() => setSliderIsOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <Container>
          <div className="mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <img src={slide} key={index} alt="slide" />
              ))}
            </Slider>
          </div>
          <p className="pt-4 text-center text-white">
            Slide {activeSlide + 1} / {slides.length}
          </p>
        </Container>
      </div>
    </div>
  );
}

export default GallerySlider;
