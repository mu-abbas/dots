import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SpaceY from '../micro/SpaceY';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { getMediaDescription, getMediaURL } from '@/helpers/contentful';

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

function PostContent({ content, slides, title, href, assets }) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => {
        return text;
      },
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, _) => {
        const image = node.data.target;
        const url = getMediaURL(assets, image);
        const description = getMediaDescription(assets, image);
        return (
          <div key={url} className="flex flex-col gap-6 py-6">
            <img src={url} alt={title} className="w-3/4 mx-auto" />
            {description ? (
              <p className="w-3/4 !p-2 mx-auto !text-sm bg-opacity-10 border border-opacity-50 rounded-lg text-grey max-h-max border-babyBlue bg-babyBlue">
                {description}
              </p>
            ) : (
              ''
            )}
          </div>
        );
      },
    },
  };

  return (
    <section className="bg-beige sticky-top-rounded sticky-margin">
      <div className="container px-8 pt-12 mx-auto sm:px-10 sm:pt-14 md:px-12 md:pt-16 lg:px-14 lg:pt-20 xl:px-16 xl:pt-24 2xl:pt-28 2xl:px-20">
        <SpaceY>
          <div className="dynamicBlogPost">{documentToReactComponents(content, options)}</div>
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
