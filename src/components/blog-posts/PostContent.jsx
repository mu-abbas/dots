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
import SideCard from './SideCard';

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

function PostContent({ content, slides, title, href, assets, latestBlogs }) {
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
          <div key={url} className="flex flex-col gap-6 py-6 -translate-y-6">
            <img src={url} alt={title} className="w-full" />
            {description ? (
              <p className="w-full text-center !p-3 bg-opacity-10 border border-opacity-50 rounded-lg text-grey max-h-max border-babyBlue bg-babyBlue">
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
    <section className="relative bg-beige sticky-top-rounded sticky-margin">
      <div className="container max-w-[1536px] grid xl:grid-cols-[2fr_1fr] px-8 pt-12 mx-auto sm:px-10 sm:pt-14 md:px-12 md:pt-16 lg:px-14 lg:pt-20 xl:px-16 xl:pt-24 2xl:pt-28 2xl:px-20 gap-x-12">
        <div>
          <SpaceY>
            <div className="dynamicBlogPost">{documentToReactComponents(content, options)}</div>
            {/* <div className="w-full max-w-2xl">
              {!!slides.length && (
                <Slider {...settings} className="postSlider w-xl">
                  {slides.map((slide, index) => (
                    <img src={slide} key={index} alt={title} className="rounded-xl" />
                  ))}
                </Slider>
              )}
            </div> */}
          </SpaceY>
        </div>
        <div className="sticky flex-col hidden gap-6 top-28 xl:flex place-self-start xl:pb-[17rem]">
          <h2 className="text-lg font-medium sm:text-xl lg:text-2xl xl:text-3xl ">Check our latest blogs</h2>
          {latestBlogs.map(({ src, href, title }, index) => (
            <SideCard src={src} href={href} title={title} key={index} />
          ))}
        </div>
        <div className="col-span-2 pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-28">
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
        </div>
      </div>
    </section>
  );
}

export default PostContent;
