'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SpaceY from '../micro/SpaceY';

import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

function PostContent({ content, slides, title, href }) {
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
            <Slider {...settings} className="postSlider">
              {slides.map((slide, index) => (
                <img src={slide} key={index} alt={title} className="rounded-xl" />
              ))}
            </Slider>
          )}
          <div className="flex flex-wrap justify-center w-full gap-2 p-6 mx-auto bg-white rounded-xl max-w-max">
            <p className="w-full pb-2 text-center">Share our post</p>

            <div className="flex justify-center gap-2">
              <FacebookShareButton url={`https://dotspresentations.com/resources/${href}/`}>
                <FacebookIcon size={32} round={true} />
                <span className="sr-only">share on facebook</span>
              </FacebookShareButton>

              <FacebookMessengerShareButton url={`https://dotspresentations.com/resources/${href}/`}>
                <FacebookMessengerIcon size={32} round={true} />
                <span className="sr-only">share on messenger</span>
              </FacebookMessengerShareButton>

              <TwitterShareButton url={`https://dotspresentations.com/resources/${href}/`}>
                <TwitterIcon size={32} round={true} />
                <span className="sr-only">share on twitter</span>
              </TwitterShareButton>

              <LinkedinShareButton url={`https://dotspresentations.com/resources/${href}/`}>
                <LinkedinIcon size={32} round={true} />
                <span className="sr-only">share on linkedin</span>
              </LinkedinShareButton>
            </div>
            <div className="flex justify-center gap-2">
              <WhatsappShareButton url={`https://dotspresentations.com/resources/${href}/`}>
                <WhatsappIcon size={32} round={true} />
                <span className="sr-only">share on whatsapp</span>
              </WhatsappShareButton>

              <TelegramShareButton url={`https://dotspresentations.com/resources/${href}/`}>
                <TelegramIcon size={32} round={true} />
                <span className="sr-only">share on telegram</span>
              </TelegramShareButton>

              <PinterestShareButton url={`https://dotspresentations.com/resources/${href}/`}>
                <PinterestIcon size={32} round={true} />
                <span className="sr-only">share on pinterest</span>
              </PinterestShareButton>

              <RedditShareButton url={`https://dotspresentations.com/resources/${href}/`}>
                <RedditIcon size={32} round={true} />
                <span className="sr-only">share on reddit</span>
              </RedditShareButton>
            </div>
          </div>
        </SpaceY>
      </div>
    </section>
  );
}

export default PostContent;
