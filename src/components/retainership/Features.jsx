'use client';
import Slider from 'react-slick';
import Container from '../micro/Container';
import SpaceY from '../micro/SpaceY';
import Feature from './Feature';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const features = [
  {
    src: '/icon/top-designers.svg',
    title: 'Top Presentation,Designers',
    content:
      'A dedicated team of highly skilled and experienced professionals with proven expertise in a wide range of industries.',
  },
  {
    src: '/icon/fast-turn.svg',
    title: 'Fast,Turnarounds',
    content:
      'We offer fast and reliable turnaround times, with 24-72 hour delivery available. No more endless email back-and-forth!',
  },
  {
    src: '/icon/fully-managed.svg',
    title: 'Fully-managed,Process',
    content:
      'Our dedicated project manager and account manager will oversee the entire process, using our PM tool to keep you updated and on track.',
  },
  {
    src: '/icon/accurate-pricing.svg',
    title: 'Accurate,Pricing',
    content:
      'Transparent and affordable pricing, with rates that are 30% lower than the cost of hiring your own in-house staff.',
  },
  {
    src: '/icon/trained-guidelines.svg',
    title: 'Trained on brand,guidelines',
    content:
      'Our team is trained on your brand guidelines to create designs that are consistent with your brand identity and messaging.',
  },
  {
    src: '/icon/agreements.svg',
    title: 'Confidential,agreements',
    content: 'a ready-to-use solution for enterprise teams that prioritizes security and confidentiality.',
  },
];

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
          <h2 className="max-w-xs mx-auto text-2xl font-light text-center md:max-w-md xl:max-w-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-5xlplus text-offWhite">
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
