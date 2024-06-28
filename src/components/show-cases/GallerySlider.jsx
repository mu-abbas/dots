'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
function GallerySlider({ setSliderIsOpen, slides }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [shareIsOpen, setShareIsOpen] = useState(false);
  const pathname = usePathname();

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

  function handleClose() {
    setSliderIsOpen(false);
    document.querySelector('body').classList.remove('overflow-y-hidden');
  }

  return (
    <div className="gallery flex flex-col gap-4 fixed inset-0 z-50 w-screen h-[100dvh] bg-black bg-opacity-90 animate-opacity">
      <div className="flex items-center w-full gap-6 px-12 pt-8">
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
              className={`absolute -bottom-48 z-10 -right-2 w-32 transition grid
        grid-rows-[1fr] opacity-100 duration-300`}
            >
              <ul className={`overflow-hidden bg-white rounded-md shadow-md min-w-max flex flex-col gap-1 py-2`}>
                <li className="flex gap-2 px-4 text-sm transition duration-300 cursor-pointer group text-grey">
                  <FacebookShareButton url={`https://dotspresentations.com${pathname}`}>
                    <FacebookIcon size={16} round={true} className="inline-block mr-2" />
                    <span className="transition duration-300 text-purple group-hover:text-red">Facebook</span>
                  </FacebookShareButton>
                </li>
                <li className="flex gap-2 px-4 text-sm transition duration-300 cursor-pointer group text-grey">
                  <FacebookMessengerShareButton url={`https://dotspresentations.com${pathname}`}>
                    <FacebookMessengerIcon size={16} round={true} className="inline-block mr-2" />
                    <span className="transition duration-300 text-purple group-hover:text-red">Messenger</span>
                  </FacebookMessengerShareButton>
                </li>
                <li className="flex gap-2 px-4 text-sm transition duration-300 cursor-pointer group text-grey">
                  <TwitterShareButton url={`https://dotspresentations.com${pathname}`}>
                    <TwitterIcon size={16} round={true} className="inline-block mr-2" />
                    <span className="transition duration-300 text-purple group-hover:text-red">Twitter</span>
                  </TwitterShareButton>
                </li>
                <li className="flex gap-2 px-4 text-sm transition duration-300 cursor-pointer group text-grey">
                  <LinkedinShareButton url={`https://dotspresentations.com${pathname}`}>
                    <LinkedinIcon size={16} round={true} className="inline-block mr-2" />
                    <span className="transition duration-300 text-purple group-hover:text-red">LinkedIn</span>
                  </LinkedinShareButton>
                </li>
                <li className="flex gap-2 px-4 text-sm transition duration-300 cursor-pointer group text-grey">
                  <WhatsappShareButton url={`https://dotspresentations.com${pathname}`}>
                    <WhatsappIcon size={16} round={true} className="inline-block mr-2" />
                    <span className="transition duration-300 text-purple group-hover:text-red">Whatsapp</span>
                  </WhatsappShareButton>
                </li>
                <li className="flex gap-2 px-4 text-sm transition duration-300 cursor-pointer group text-grey">
                  <TelegramShareButton url={`https://dotspresentations.com${pathname}`}>
                    <TelegramIcon size={16} round={true} className="inline-block mr-2" />
                    <span className="transition duration-300 text-purple group-hover:text-red">Telegram</span>
                  </TelegramShareButton>
                </li>
                <li className="flex gap-2 px-4 text-sm transition duration-300 cursor-pointer group text-grey">
                  <RedditShareButton url={`https://dotspresentations.com${pathname}`}>
                    <RedditIcon size={16} round={true} className="inline-block mr-2" />
                    <span className="transition duration-300 text-purple group-hover:text-red">Reddit</span>
                  </RedditShareButton>
                </li>
              </ul>
            </div>
          )}
        </div>
        <button className="text-white scale-150 " onClick={handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mx-auto max-w-[80%] px-[5%] h-full overflow-y-scroll no-scrollbar">
        <div className="w-full mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl animate-popUp">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <img src={slide} key={index} alt="slide" className="w-full" />
            ))}
          </Slider>
        </div>
        <p className="pt-4 text-center text-white">
          Slide {activeSlide + 1} / {slides.length}
        </p>
      </div>
    </div>
  );
}

export default GallerySlider;
