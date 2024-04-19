'use client';
import Brands from './Brands';
import Featured from './Featured';
import IntroVideo from './IntroVideo';
import OurServices from './OurServices';
import Story from './Story';
function Main() {
  return (
    <main>
      <Story />
      <IntroVideo />
      <OurServices />
      <Featured />
      <Brands />
    </main>
  );
}

export default Main;
