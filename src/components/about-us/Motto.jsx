'use client';

import SpaceY from '../micro/SpaceY';
import EveryPresentation from './EveryPresentation';
import MottoSlider from './MottoSlider';
import PowerOfDots from './PowerOfDots';

function Motto() {
  return (
    <section className="bg-black text-offWhite">
      <div className="py-12 mx-auto sm:py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
        <SpaceY>
          <MottoSlider />
          <EveryPresentation />
          <PowerOfDots />
        </SpaceY>
      </div>
    </section>
  );
}

export default Motto;
