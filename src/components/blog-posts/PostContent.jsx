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
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <img src={slide} key={index} alt={title} className="px-2" />
              ))}
            </Slider>
          )}
          <div className="flex flex-wrap justify-center w-full gap-2 p-6 mx-auto bg-white rounded-xl max-w-max">
            <p className="w-full pb-2 text-center">Share our post</p>

            <div className="flex justify-center gap-2">
              <FacebookShareButton url={`https://dev-dots.netlify.app/resources/${href}/`}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>

              <FacebookMessengerShareButton url={`https://dev-dots.netlify.app/resources/${href}/`}>
                <FacebookMessengerIcon size={32} round={true} />
              </FacebookMessengerShareButton>

              <TwitterShareButton url={`https://dev-dots.netlify.app/resources/${href}/`}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>

              <LinkedinShareButton url={`https://dev-dots.netlify.app/resources/${href}/`}>
                <LinkedinIcon size={32} round={true} />
              </LinkedinShareButton>
            </div>
            <div className="flex justify-center gap-2">
              <WhatsappShareButton url={`https://dev-dots.netlify.app/resources/${href}/`}>
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>

              <TelegramShareButton url={`https://dev-dots.netlify.app/resources/${href}/`}>
                <TelegramIcon size={32} round={true} />
              </TelegramShareButton>

              <PinterestShareButton url={`https://dev-dots.netlify.app/resources/${href}/`}>
                <PinterestIcon size={32} round={true} />
              </PinterestShareButton>

              <RedditShareButton url={`https://dev-dots.netlify.app/resources/${href}/`}>
                <RedditIcon size={32} round={true} />
              </RedditShareButton>
            </div>
          </div>
        </SpaceY>
      </div>
    </section>
  );
}

export default PostContent;
