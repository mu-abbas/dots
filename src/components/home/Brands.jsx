'use client';
import Slider from 'react-infinite-logo-slider';

function Brands() {
  return (
    <section className="py-12 bg-green sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <h2 className="flex flex-col items-center justify-center px-8 pb-10 text-3xl font-medium text-center md:pb-14 sm:gap-2 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20 sm:flex-row md:text-4xl 3xl:text-5xl 3xl:pb-20">
        <span>We help big brands</span>
        <span className="font-bold">Connect the dots</span>
      </h2>
      <Slider width="240px" duration={25} pauseOnHover={true} blurBorders={false}>
        <Slider.Slide>
          <img src="brand/abbvie.png" alt="abbvie" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="brand/cocacola.png" alt="cocacola" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="brand/j&j.png" alt="j&J" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="brand/Google.png" alt="Google" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="brand/gsk.png" alt="gsk" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="brand/indeed.png" alt="indeed" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="brand/marriott.png" alt="marriott" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="brand/novonordisk.png" alt="novonordisk" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="brand/schneider.png" alt="schneider" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="brand/uber.png" alt="uber" />
          <Slider.Slide>
            <img src="brand/unilever.png" alt="unilever" />
          </Slider.Slide>
        </Slider.Slide>
      </Slider>
    </section>
  );
}

export default Brands;
