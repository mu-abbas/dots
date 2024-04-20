'use client';
import Blog from './Blog';
import Brands from './Brands';
import Faqs from './Faqs';
import Featured from './Featured';
import IntroVideo from './IntroVideo';
import OurServices from './OurServices';
import ReadyToStart from './ReadyToStart';
import Story from './Story';
import Testimonials from './Testimonials';
function Main() {
  return (
    <main>
      <Story />
      <IntroVideo />
      <OurServices />
      <Featured />
      <Brands />
      <Testimonials />
      <Blog />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
