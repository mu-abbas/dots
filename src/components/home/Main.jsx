'use client';
import Blog from '../ui/Blog';
import Brands from './Brands';
import Faqs from '../ui/Faqs';
import Featured from './Featured';
import IntroVideo from './IntroVideo';
import OurServices from './OurServices';
import ReadyToStart from '../ui/ReadyToStart';
import Story from './Story';
import Testimonials from '../ui/Testimonials';
import ScrollUp from '@/helpers/ScrollUp';
function Main() {
  return (
    <main>
      <ScrollUp />
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
