'use client';
import Slider from 'react-slick';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import OurDesignTabs from './OurDesignTabs';
import OurDesignCarouselItem from './OurDesignCarouselItem';
import designServices from '@/data/designServices';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef } from 'react';
import stickyFn from '@/helpers/sticky';

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
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

function OurDesign() {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    stickyFn(ref);
  }

  return (
    <section
      ref={ref}
      className="sticky pb-8 overflow-x-hidden bg-blue text-offWhite ourDesign sticky-padding sticky-margin sticky-top-rounded"
    >
      <div className="absolute inset-0 z-10 origin-bottom-left scale-105 bg-left-bottom bg-no-repeat bg-contain bg-ourDesign opacity-10"></div>
      <div className="relative z-50 pb-8 lg:pb-0">
        <Container>
          <SpaceY>
            <h2 className="text-2xl font-light text-center md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-5xlplus">
              Our Design Services
            </h2>
            <div className="hidden lg:block">
              <OurDesignTabs items={designServices} />
            </div>
            <div className="lg:hidden">
              <Slider {...settings}>
                {designServices.map(({ firstHeading, secondHeading, icon, linkLabel, href, description }, index) => (
                  <OurDesignCarouselItem
                    firstHeading={firstHeading}
                    secondHeading={secondHeading}
                    icon={icon}
                    linkLabel={linkLabel}
                    href={href}
                    description={description}
                    key={index}
                  />
                ))}
              </Slider>
            </div>
          </SpaceY>
        </Container>
      </div>
    </section>
  );
}

export default OurDesign;
