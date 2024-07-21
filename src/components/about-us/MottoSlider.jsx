'use client';
import Slider from 'react-infinite-logo-slider';

function MottoSlider() {
  return (
    <div>
      <div className="hidden font-semibold border-opacity-35 font-clash text-9xl text-blue border-y border-lightGrey lg:block">
        <Slider width="900px" duration={20} pauseOnHover={false} blurBorders={false}>
          <Slider.Slide>
            <h2>OUR MOTTO*</h2>
          </Slider.Slide>
          <Slider.Slide>
            <h2>OUR MOTTO*</h2>
          </Slider.Slide>
        </Slider>
      </div>
      <div className="font-semibold border-opacity-35 font-clash text-8xl text-blue border-y border-lightGrey lg:hidden">
        <Slider width="675px" duration={20} pauseOnHover={false} blurBorders={false}>
          <Slider.Slide>
            <h2>OUR MOTTO*</h2>
          </Slider.Slide>
          <Slider.Slide>
            <h2>OUR MOTTO*</h2>
          </Slider.Slide>
        </Slider>
      </div>
    </div>
  );
}

export default MottoSlider;
