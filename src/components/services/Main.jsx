'use client';
import Blog from '../ui/Blog';
import Faqs from '../ui/Faqs';
import ReadyToStart from '../ui/ReadyToStart';
import Testimonials from '../ui/Testimonials';
import OurDesign from './OurDesign';
import OurProcess from './OurProcess';
function Main() {
  return (
    <main>
      <OurProcess />
      <OurDesign />
      <Testimonials />
      <Blog />
      <Faqs />
      <ReadyToStart />
    </main>
  );
}

export default Main;
