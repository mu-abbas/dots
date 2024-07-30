import Blog from '../ui/Blog';
import Faqs from '../ui/Faqs';
import ReadyToStart from '../ui/ReadyToStart';
import Testimonials from '../ui/Testimonials';
import OurDesign from './OurDesign';
import OurProcess from './OurProcess';
import Hero from './Hero';
function Main({ posts }) {
  return (
    <main className="sticky">
      <Hero />
      <OurProcess />
      <OurDesign />
      <Testimonials />
      <Blog posts={posts} />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
