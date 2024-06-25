'use client';
import Slider from 'react-infinite-logo-slider';

function Brands() {
  return (
    <section className="py-14 bg-green sm:py-18 md:py-24 lg:py-28 xl:py-32 sticky top-16 rounded-t-[2rem] pb-[3rem] lg:rounded-t-[2.5rem] lg:pb-[6rem] 2xl:rounded-t-[3rem] 2xl:pb-[8rem] 2xl:-mt-[4rem] -mt-[2rem] lg:-mt-[3rem]">
      <h2 className="flex flex-col items-center justify-center px-8 pb-6 text-3xl font-medium text-center md:pb-8 sm:gap-2 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20 sm:flex-row md:text-4xl 3xl:text-5xl 3xl:pb-20">
        <span>We help big brands</span>
        <span className="font-bold">Connect the dots</span>
      </h2>
      <Slider width="240px" duration={25} pauseOnHover={true} blurBorders={false}>
        <Slider.Slide>
          <img src="/brand/abbvie.png" alt="abbvie" className="w-32 mx-auto" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/brand/cocacola.png" alt="cocacola" className="mx-auto w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/brand/j&j.png" alt="j&J" className="mx-auto w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/brand/Google.png" alt="Google" className="mx-auto w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/brand/gsk.png" alt="gsk" className="mx-auto w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/brand/indeed.png" alt="indeed" className="mx-auto w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/brand/marriott.png" alt="marriott" className="mx-auto w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/brand/novo.png" alt="novonordisk" className="mx-auto w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/brand/schneider.png" alt="schneider" className="mx-auto w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/brand/uber.png" alt="uber" className="mx-auto w-36" />
        </Slider.Slide>
        <Slider.Slide>
          <img src="/brand/unilever.png" alt="unilever" className="mx-auto w-36" />
        </Slider.Slide>
      </Slider>
    </section>
  );
}

export default Brands;
