import Blog from '../ui/Blog';
import Brands from './Brands';
import Faqs from '../ui/Faqs';
import Featured from './Featured';
import IntroVideo from './IntroVideo';
import OurServices from './OurServices';
import ReadyToStart from '../ui/ReadyToStart';
import Story from './Story';
import Testimonials from '../ui/Testimonials';
import Hero from './Hero';

function Main({ posts }) {
  return (
    <main className="sticky">
      <Hero />
      <Story />
      <IntroVideo />
      <OurServices />
      <Featured />
      <Brands />
      <Testimonials />
      <Blog posts={posts} />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
