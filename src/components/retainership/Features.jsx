'use client';
import Slider from 'react-slick';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import Feature from './Feature';
import features from '@/data/features';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 5000,
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

function Features() {
  return (
    <section className="pb-8 bg-blue features md:pb-0">
      <Container>
        <SpaceY>
          <h2 className="max-w-xs mx-auto text-2xl font-light text-center md:max-w-md xl:max-w-2xl md:text-3xl lg:text-4xl xl:leading-12 xl:text-5xl 3xl:text-5xlplus text-offWhite 3xl:max-w-3xl 3xl:leading-13">
            Reliable, Efficient Delivery Every Time!
          </h2>
          <div className="hidden grid-cols-2 gap-6 xl:grid-cols-3 md:grid 3xl:gap-8">
            {features.map(({ src, title, content }, index) => (
              <Feature src={src} title={title} content={content} key={index} />
            ))}
          </div>
          <div className="md:hidden">
            <Slider {...settings}>
              {features.map(({ src, title, content }, index) => (
                <Feature src={src} title={title} content={content} key={index} />
              ))}
            </Slider>
          </div>
        </SpaceY>
      </Container>
    </section>
  );
}

export default Features;
